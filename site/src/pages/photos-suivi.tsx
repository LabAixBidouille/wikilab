import React, {useEffect, useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import {resources, projectLabels, type Project} from '../data/resources';
import status from '../data/photos-status.json';

const STORAGE_KEY = 'wikilab-photos-suivi-v2';

type TaskKind = 'icone' | 'photos' | 'schema';

interface PhotoStatus {
  project: string;
  hasIcon: boolean;
  hasPhotos: boolean;
  hasSchema: boolean;
  exists: boolean;
}

const photosStatus = status as Record<string, PhotoStatus>;

// Projets dont les photos ne sont PAS attendues dans le sous-dossier per-fiche
// (projets-du-lab a un dump à la racine)
const NO_PHOTOS_EXPECTED: Set<Project> = new Set(['projets-du-lab']);

// Projets qui demandent un schéma supplémentaire
const SCHEMA_EXPECTED: Set<Project> = new Set(['steamcity']);

const TASK_LABELS: Record<TaskKind, string> = {
  icone: 'Icône',
  schema: 'Schéma',
  photos: 'Photos',
};

interface Need {
  fiche: (typeof resources)[number];
  tasks: TaskKind[];
}

function buildNeeds(): Need[] {
  const result: Need[] = [];
  for (const r of resources) {
    if (r.thumbnail) continue; // déjà OK (anciens projets avec thumbnail explicite)
    const s = photosStatus[r.id];
    if (!s) continue;
    const tasks: TaskKind[] = [];
    if (!s.hasIcon) tasks.push('icone');
    if (SCHEMA_EXPECTED.has(r.project) && !s.hasSchema) tasks.push('schema');
    if (!NO_PHOTOS_EXPECTED.has(r.project) && !s.hasPhotos) tasks.push('photos');
    if (tasks.length > 0) {
      result.push({fiche: r, tasks});
    }
  }
  return result;
}

export default function PhotosSuivi(): React.ReactElement {
  const needs = useMemo(buildNeeds, []);

  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {}
  }, [checked]);

  const key = (id: string, kind: TaskKind) => `${id}:${kind}`;

  const toggle = (id: string, kind: TaskKind) => {
    setChecked((prev) => ({...prev, [key(id, kind)]: !prev[key(id, kind)]}));
  };

  const resetAll = () => {
    if (
      confirm(
        'Effacer toute la progression ? Cette action est irréversible.',
      )
    ) {
      setChecked({});
    }
  };

  const byProject = useMemo(() => {
    const groups = new Map<Project, Need[]>();
    for (const n of needs) {
      const list = groups.get(n.fiche.project) ?? [];
      list.push(n);
      groups.set(n.fiche.project, list);
    }
    return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [needs]);

  const totalTasks = needs.reduce((n, x) => n + x.tasks.length, 0);
  const doneTasks = needs.reduce(
    (n, x) =>
      n + x.tasks.filter((t) => checked[key(x.fiche.id, t)]).length,
    0,
  );
  const pct = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;

  const projectStats = (list: Need[]) => {
    const total = list.reduce((n, x) => n + x.tasks.length, 0);
    const done = list.reduce(
      (n, x) =>
        n + x.tasks.filter((t) => checked[key(x.fiche.id, t)]).length,
      0,
    );
    return {total, done};
  };

  return (
    <Layout
      title="Suivi photos"
      description="Checklist interactive pour le suivi des photos manquantes"
    >
      <main className="container margin-vert--lg">
        <h1>Suivi photos</h1>
        <p>
          Liste auto-générée à partir du contenu réel des dossiers. Une fiche
          n'apparaît que si elle a au moins une chose manquante (icône,
          photos, schéma). Tâches sauvegardées dans le navigateur.
        </p>

        <div
          style={{
            position: 'sticky',
            top: 'var(--ifm-navbar-height)',
            background: 'var(--ifm-background-color)',
            padding: '1rem 0',
            borderBottom: '1px solid var(--ifm-color-emphasis-200)',
            marginBottom: '1.5rem',
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{flex: 1, minWidth: '240px'}}>
              <div
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: '0.3rem',
                }}
              >
                {doneTasks} / {totalTasks} tâches · {pct}%
              </div>
              <div
                style={{
                  height: '10px',
                  background: 'var(--ifm-color-emphasis-200)',
                  borderRadius: '5px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${pct}%`,
                    height: '100%',
                    background: 'var(--ifm-color-primary)',
                    transition: 'width 0.3s',
                  }}
                />
              </div>
            </div>
            <button
              type="button"
              className="button button--secondary button--sm"
              onClick={resetAll}
            >
              Réinitialiser
            </button>
          </div>
        </div>

        {byProject.map(([project, list]) => {
          const {total, done} = projectStats(list);
          const projectPct = total ? Math.round((done / total) * 100) : 0;
          return (
            <section key={project} style={{marginBottom: '2.5rem'}}>
              <h2
                style={{
                  borderBottom: '2px solid var(--ifm-color-emphasis-300)',
                  paddingBottom: '0.4rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                <span>{projectLabels[project]}</span>
                <span
                  style={{
                    fontSize: '0.9rem',
                    opacity: 0.7,
                    fontWeight: 'normal',
                  }}
                >
                  {done} / {total} ({projectPct}%)
                </span>
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                  gap: '0.75rem',
                }}
              >
                {list.map(({fiche, tasks}) => {
                  const folder = `site/static/img/ressources/${fiche.project}/${fiche.id}/`;
                  const allDone = tasks.every((t) =>
                    checked[key(fiche.id, t)],
                  );
                  return (
                    <div
                      key={fiche.id}
                      className="card"
                      style={{
                        padding: '0.75rem 1rem',
                        opacity: allDone ? 0.55 : 1,
                        borderLeft: allDone
                          ? '3px solid var(--ifm-color-success)'
                          : '3px solid var(--ifm-color-emphasis-300)',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--ifm-font-family-monospace)',
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          marginBottom: '0.15rem',
                          textDecoration: allDone ? 'line-through' : 'none',
                          wordBreak: 'break-all',
                        }}
                      >
                        {fiche.id}
                      </div>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          opacity: 0.7,
                          marginBottom: '0.5rem',
                        }}
                      >
                        {fiche.title}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '0.85rem',
                          flexWrap: 'wrap',
                        }}
                      >
                        {tasks.map((t) => {
                          const done = checked[key(fiche.id, t)];
                          return (
                            <label
                              key={t}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                cursor: 'pointer',
                              }}
                            >
                              <input
                                type="checkbox"
                                checked={!!done}
                                onChange={() => toggle(fiche.id, t)}
                              />
                              <span
                                style={{
                                  textDecoration: done
                                    ? 'line-through'
                                    : 'none',
                                }}
                              >
                                {TASK_LABELS[t]}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                      <div
                        style={{
                          fontSize: '0.7rem',
                          fontFamily: 'var(--ifm-font-family-monospace)',
                          opacity: 0.55,
                          marginTop: '0.5rem',
                          wordBreak: 'break-all',
                        }}
                      >
                        {folder}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {needs.length === 0 && (
          <p style={{fontStyle: 'italic', opacity: 0.7}}>
            Toutes les fiches ont icône, photos et schéma ! 🎉
          </p>
        )}
      </main>
    </Layout>
  );
}
