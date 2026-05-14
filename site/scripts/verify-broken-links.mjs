#!/usr/bin/env node
// Stage 2 du pipeline de vérification de liens : lychee détecte les erreurs
// brutes (HTTP 4xx/5xx, timeouts), ce script les rejoue via Playwright +
// plugin stealth (vrai Chromium en mode discret) pour distinguer les vraies
// cassures des protections anti-bot que lychee ne sait pas franchir.
//
// Cloudflare, Akamai et autres WAF retournent 403 aux clients HTTP simples
// alors qu'un navigateur réel passe (cf. issue #71). Le rapport hebdomadaire
// se retrouvait pollué de domaines exclus à la main, ce qui érodait la
// valeur de la vérification. Avec ce filtre, on garde dans le rapport final
// uniquement les URLs où lychee ET Playwright échouent — donc des
// cassures de bonne foi à corriger dans les fiches.
//
// Usage :
//   npm run verify-broken-links -- <lychee-output.json> [--report=<path.md>] [--curl-fallback]
//   ou : node site/scripts/verify-broken-links.mjs <lychee-output.json> [--report=<path.md>] [--curl-fallback]
//
// Sans `--report`, écrit le markdown sur stdout. Exit 0 si le rapport est
// vide (aucune cassure confirmée), sinon exit 1.
//
// `--curl-fallback` : quand Playwright stealth retourne lui aussi un statut
// d'échec, retente l'URL via un simple `fetch` Node avec des en-têtes
// navigateur complets (UA + Accept + Sec-Fetch-*). Si ce GET HTTP voit 2xx
// ou 3xx, on considère que le navigateur stealth s'est fait griller par
// l'anti-bot (Cloudflare détecte parfois headless Chromium même avec
// stealth) et on déclasse l'URL en faux positif. Avec ce flag, on perd
// très peu de signal (vrais cassures = personne ne peut accéder) tout
// en éliminant la majorité du bruit anti-bot résiduel.

import { readFile, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

chromium.use(stealth());

// Concurrence à 1 : le plugin stealth attache une session CDP au browser,
// et fermer un contexte en parallèle pendant qu'un autre worker écrit sur
// la même session fait planter avec "Target page, context or browser has
// been closed". Le coût en runtime est limité (~90 URLs × 5-10 s ≈ 10-15 min).
const CONCURRENCY = 1;
const TIMEOUT_MS = 30_000;
const USER_AGENT =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

function parseArgs(argv) {
  const args = { input: null, report: null, curlFallback: false };
  for (const a of argv.slice(2)) {
    if (a.startsWith('--report=')) args.report = a.slice('--report='.length);
    else if (a === '--curl-fallback') args.curlFallback = true;
    else if (!args.input) args.input = a;
  }
  if (!args.input) {
    console.error(
      'Usage : npm run verify-broken-links -- <lychee.json> [--report=<path.md>] [--curl-fallback]',
    );
    console.error(
      '   ou : node site/scripts/verify-broken-links.mjs <lychee.json> [--report=<path.md>] [--curl-fallback]',
    );
    process.exit(2);
  }
  return args;
}

// Fallback `fetch` avec en-têtes navigateur complets, exécuté quand
// Playwright stealth retourne aussi un statut d'échec. Sert à attraper
// les URLs où le navigateur headless se fait griller par Cloudflare /
// WAF alors qu'une simple requête HTTP avec UA navigateur passe. Ce
// scénario est plus fréquent qu'on ne le pense parce que la détection
// anti-bot moderne se base aussi sur le TLS fingerprint et l'absence
// d'interaction utilisateur — un GET HTTP brut est paradoxalement moins
// suspect qu'un headless Chromium qui exécute du JS.
async function curlFallback(url) {
  try {
    const resp = await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Upgrade-Insecure-Requests': '1',
      },
      signal: AbortSignal.timeout(TIMEOUT_MS),
      redirect: 'follow',
    });
    return { ok: resp.status > 0 && resp.status < 400, status: resp.status };
  } catch (e) {
    return { ok: false, status: 0, error: e.message.split('\n')[0].slice(0, 120) };
  }
}

// Extrait les (file, url, status, line) de error_map + timeout_map.
function collectFailures(lycheeJson) {
  const out = [];
  for (const map of [lycheeJson.error_map, lycheeJson.timeout_map]) {
    if (!map) continue;
    for (const [file, entries] of Object.entries(map)) {
      for (const e of entries) {
        out.push({
          file,
          url: e.url,
          lycheeStatus: e.status?.code ?? 0,
          lycheeText: e.status?.text ?? 'timeout',
          // `span.line` est rempli par lychee ≥ 0.24 ; certaines anciennes
          // versions le laissent absent. On garde `null` pour signaler
          // l'absence côté rendu (« ligne ? »).
          line: e.span?.line ?? null,
        });
      }
    }
  }
  return out;
}

async function verifyOne(browser, url, withCurlFallback) {
  const ctx = await browser.newContext({
    userAgent: USER_AGENT,
    locale: 'fr-FR',
    timezoneId: 'Europe/Paris',
    viewport: { width: 1280, height: 800 },
  });
  const page = await ctx.newPage();
  let browserResult;
  try {
    const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: TIMEOUT_MS });
    const status = resp ? resp.status() : 0;
    browserResult = {
      url,
      browserStatus: status,
      ok: status > 0 && status < 400,
      error: null,
      rescuedBy: null,
    };
  } catch (e) {
    browserResult = {
      url,
      browserStatus: 0,
      ok: false,
      error: e.message.split('\n')[0].slice(0, 200),
      rescuedBy: null,
    };
  } finally {
    await ctx.close();
  }
  if (browserResult.ok || !withCurlFallback) return browserResult;
  // Browser a échoué : on tente le fallback HTTP brut.
  const fallback = await curlFallback(url);
  if (fallback.ok) {
    return { ...browserResult, ok: true, rescuedBy: `curl ${fallback.status}` };
  }
  return browserResult;
}

// Pool simple à N workers concurrents.
async function verifyAll(browser, failures, withCurlFallback) {
  // Dédupliquer par URL (une même URL peut apparaître dans plusieurs fichiers).
  const byUrl = new Map();
  for (const f of failures) {
    if (!byUrl.has(f.url)) byUrl.set(f.url, []);
    byUrl.get(f.url).push(f);
  }
  const uniqueUrls = [...byUrl.keys()];
  const results = new Map();
  let next = 0;
  async function worker() {
    while (next < uniqueUrls.length) {
      const i = next++;
      const url = uniqueUrls[i];
      const r = await verifyOne(browser, url, withCurlFallback);
      results.set(url, r);
      const tag = r.rescuedBy
        ? `\x1b[33mOK (${r.rescuedBy})\x1b[0m`
        : r.ok
          ? '\x1b[32mOK\x1b[0m'
          : `\x1b[31m${r.browserStatus || 'ERR'}\x1b[0m`;
      console.error(`  ${tag}  ${url}`);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  // Re-fusionner avec les fichiers d'origine.
  return failures.map((f) => ({ ...f, ...results.get(f.url) }));
}

function buildReport(verified, withCurlFallback) {
  const confirmed = verified.filter((r) => !r.ok);
  // Group par fichier
  const byFile = new Map();
  for (const r of confirmed) {
    if (!byFile.has(r.file)) byFile.set(r.file, []);
    byFile.get(r.file).push(r);
  }
  const lines = [];
  lines.push('# Liens externes cassés (confirmés par navigateur)');
  lines.push('');
  if (withCurlFallback) {
    lines.push('Liens détectés en erreur par lychee, par un navigateur Chromium avec plugin');
    lines.push('stealth, **et** par un `fetch` HTTP avec en-têtes navigateur complets. Les');
    lines.push('protections anti-bot et faux positifs Playwright sont donc écartés : ces URLs');
    lines.push('sont des cassures réelles à corriger dans les fiches.');
  } else {
    lines.push('Liens détectés en erreur par lychee **et** par un navigateur Chromium');
    lines.push('avec plugin stealth. Les protections anti-bot sont donc écartées : ces');
    lines.push('URLs sont des cassures réelles à corriger dans les fiches.');
  }
  lines.push('');
  lines.push(`Total : **${confirmed.length}** cassure(s) confirmée(s) sur **${verified.length}**`);
  lines.push(`signalée(s) initialement par lychee.`);
  lines.push('');
  if (confirmed.length === 0) {
    lines.push('Aucune cassure confirmée. Toutes les erreurs lychee étaient des faux positifs');
    lines.push('(anti-bot, rate-limit, timeout transient).');
    return lines.join('\n');
  }
  for (const [file, entries] of [...byFile.entries()].sort()) {
    lines.push(`## ${file}`);
    lines.push('');
    for (const e of entries) {
      const browserNote =
        e.browserStatus > 0 ? `navigateur ${e.browserStatus}` : e.error || 'navigateur erreur';
      const linePrefix = e.line ? `ligne ${e.line}` : 'ligne ?';
      lines.push(`- ${linePrefix} : ${e.url} — lychee ${e.lycheeStatus}, ${browserNote}`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

async function main() {
  const args = parseArgs(process.argv);
  const lycheeJson = JSON.parse(await readFile(args.input, 'utf8'));
  const failures = collectFailures(lycheeJson);
  console.error(`Lychee a signalé ${failures.length} erreur(s) à vérifier au navigateur.`);
  if (failures.length === 0) {
    const report = buildReport([], args.curlFallback);
    if (args.report) await writeFile(args.report, report);
    else console.log(report);
    process.exit(0);
  }
  const browser = await chromium.launch({ headless: true });
  try {
    console.error(
      `Vérification (concurrence = ${CONCURRENCY}${args.curlFallback ? ', curl-fallback actif' : ''}) :`,
    );
    const verified = await verifyAll(browser, failures, args.curlFallback);
    const confirmed = verified.filter((r) => !r.ok).length;
    const rescued = verified.filter((r) => r.rescuedBy).length;
    console.error(
      `Après vérification : ${confirmed} cassure(s) confirmée(s) / ${failures.length} signalée(s)${rescued ? ` (${rescued} sauvée(s) par curl-fallback)` : ''}.`,
    );
    const report = buildReport(verified, args.curlFallback);
    if (args.report) {
      await writeFile(args.report, report);
      console.error(`Rapport écrit dans ${args.report}.`);
    } else {
      console.log(report);
    }
    process.exit(confirmed > 0 ? 1 : 0);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('Erreur inattendue :', err);
  process.exit(2);
});
