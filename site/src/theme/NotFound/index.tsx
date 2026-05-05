import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const LEGACY_MEDIAWIKI_PATTERN = /^\/index\.php(\/|$)/i;
const LEGACY_REDIRECT_DELAY_MS = 4000;

export default function NotFound(): React.ReactElement {
  const [isLegacyMediaWiki, setIsLegacyMediaWiki] = useState(false);
  const [originalPath, setOriginalPath] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const path = window.location.pathname;
    setOriginalPath(path);
    if (LEGACY_MEDIAWIKI_PATTERN.test(path)) {
      setIsLegacyMediaWiki(true);
      const timer = setTimeout(() => {
        window.location.replace('/');
      }, LEGACY_REDIRECT_DELAY_MS);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Layout title="Page introuvable" description="Cette page n'existe pas (ou plus).">
      <main className="container margin-vert--xl" style={{ maxWidth: '720px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>

          {isLegacyMediaWiki ? (
            <>
              <h2 style={{ marginTop: 0 }}>Cette page a déménagé</h2>
              <p>
                L'URL <code style={{ wordBreak: 'break-all' }}>{originalPath}</code> correspond à
                l'ancienne version du wiki (sous MediaWiki). Le site a été refondu et cette page n'a
                pas d'équivalent direct.
              </p>
              <p>Vous allez être redirigé·e vers la page d'accueil dans quelques secondes…</p>
              <div
                style={{
                  marginTop: '2rem',
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Link className="button button--primary button--lg" to="/">
                  Aller à l'accueil
                </Link>
                <Link className="button button--secondary button--lg" to="/catalogue">
                  Explorer le catalogue
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2 style={{ marginTop: 0 }}>Page introuvable</h2>
              <p>La page que vous cherchez n'existe pas (ou plus).</p>
              <div
                style={{
                  marginTop: '2rem',
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Link className="button button--primary button--lg" to="/">
                  Aller à l'accueil
                </Link>
                <Link className="button button--secondary button--lg" to="/catalogue">
                  Explorer le catalogue
                </Link>
                <Link className="button button--secondary button--lg" to="/projets">
                  Voir nos actions
                </Link>
              </div>
            </>
          )}
        </div>
      </main>
    </Layout>
  );
}
