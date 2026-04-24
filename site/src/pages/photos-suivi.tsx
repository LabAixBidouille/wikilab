import React, {useEffect, useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import {resources, projectLabels, type Project} from '../data/resources';

const STORAGE_KEY = 'wikilab-photos-suivi-v1';

type TaskKind = 'icone' | 'photos';

// Projets pour lesquels les photos sont déjà disponibles (seule l'icône manque)
const PHOTOS_DONE: Set<Project> = new Set(['projets-du-lab']);

// On ne liste que les fiches sans thumbnail
function getMissing() {
  return resources.filter((r) => !r.thumbnail);
}

function needsPhotos(project: Project): boolean {
  return !PHOTOS_DONE.has(project);
}

export default function PhotosSuivi(): React.ReactElement {
  const missing = useMemo(getMissing, []);

  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // Charge l'état depuis localStorage au montage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch {}
  }, []);

  // Persiste à chaque changement
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {}
  }, [checked]);

  const key = (id: string, kind: TaskKind) => `${id}:${kind}`;

  const toggle = (id: string, kind: TaskKind) => {
    const k = key(id, kind);
    setChecked((prev) => ({...prev, [k]: !prev[k]}));
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

  // Groupement par projet
  const byProject = useMemo(() => {
    const groups = new Map<Project, typeof missing>();
    for (const r of missing) {
      const list = groups.get(r.project) ?? [];
      list.push(r);
      groups.set(r.project, list);
    }
    return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [missing]);

  const totalTasks = missing.reduce(
    (n, r) => n + (needsPhotos(r.project) ? 2 : 1),
    0,
  );
  const doneTasks = missing.reduce(
    (n, r) =>
      n +
      (checked[key(r.id, 'icone')] ? 1 : 0) +
      (needsPhotos(r.project) && checked[key(r.id, 'photos')] ? 1 : 0),
    0,
  );
  const pct = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;

  const projectStats = (list: typeof missing) => {
    const total = list.reduce(
      (n, r) => n + (needsPhotos(r.project) ? 2 : 1),
      0,
    );
    const done = list.reduce(
      (n, r) =>
        n +
        (checked[key(r.id, 'icone')] ? 1 : 0) +
        (needsPhotos(r.project) && checked[key(r.id, 'photos')] ? 1 : 0),
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
          Coche <strong>Icône</strong> quand le logo/pictogramme est déposé,
          et <strong>Photos</strong> quand les illustrations sont dans le
          dossier. Tout est sauvegardé automatiquement dans ton navigateur.
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
                {list.map((r) => {
                  const folder = `site/static/img/ressources/${r.project}/${r.id}/`;
                  const iconeDone = checked[key(r.id, 'icone')];
                  const photosRequired = needsPhotos(r.project);
                  const photosDone = checked[key(r.id, 'photos')];
                  const allDone =
                    iconeDone && (!photosRequired || photosDone);
                  return (
                    <div
                      key={r.id}
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
                          fontWeight: 600,
                          marginBottom: '0.35rem',
                          textDecoration: allDone ? 'line-through' : 'none',
                        }}
                      >
                        {r.title}
                      </div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--ifm-font-family-monospace)',
                          opacity: 0.7,
                          marginBottom: '0.5rem',
                          wordBreak: 'break-all',
                        }}
                      >
                        {folder}
                      </div>
                      <div style={{display: 'flex', gap: '1rem'}}>
                        <label
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            cursor: 'pointer',
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={!!iconeDone}
                            onChange={() => toggle(r.id, 'icone')}
                          />
                          <span
                            style={{
                              textDecoration: iconeDone
                                ? 'line-through'
                                : 'none',
                            }}
                          >
                            Icône
                          </span>
                        </label>
                        {photosRequired ? (
                          <label
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.4rem',
                              cursor: 'pointer',
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={!!photosDone}
                              onChange={() => toggle(r.id, 'photos')}
                            />
                            <span
                              style={{
                                textDecoration: photosDone
                                  ? 'line-through'
                                  : 'none',
                              }}
                            >
                              Photos
                            </span>
                          </label>
                        ) : (
                          <span
                            style={{
                              fontSize: '0.85rem',
                              opacity: 0.65,
                              fontStyle: 'italic',
                            }}
                          >
                            Photos déjà fournies
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {missing.length === 0 && (
          <p style={{fontStyle: 'italic', opacity: 0.7}}>
            Toutes les fiches ont une photo ! 🎉
          </p>
        )}
      </main>
    </Layout>
  );
}
