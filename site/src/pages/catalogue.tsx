import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Fuse from 'fuse.js';
import {
  resources,
  disciplineLabels,
  formatLabels,
  toolLabels,
  softwareLabels,
  projectLabels,
  difficultyLabels,
  type Discipline,
  type Format,
  type Tool,
  type Software,
  type Project,
  type Resource,
} from '../data/resources';

type Difficulty = keyof typeof difficultyLabels;

interface Filters {
  query: string;
  projects: Set<Project>;
  disciplines: Set<Discipline>;
  tools: Set<Tool>;
  software: Set<Software>;
  formats: Set<Format>;
  difficulties: Set<Difficulty>;
  ageMin: number;
  ageMax: number;
  maxDuration: number;
}

const INITIAL_FILTERS: Filters = {
  query: '',
  projects: new Set(),
  disciplines: new Set(),
  tools: new Set(),
  software: new Set(),
  formats: new Set(),
  difficulties: new Set(),
  ageMin: 4,
  ageMax: 18,
  maxDuration: 240,
};

function toggle<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

function FilterGroup<T extends string>({
  legend,
  labels,
  selected,
  onToggle,
}: {
  legend: string;
  labels: Record<T, string>;
  selected: Set<T>;
  onToggle: (value: T) => void;
}) {
  return (
    <fieldset style={{border: 'none', padding: 0, marginBottom: '1rem'}}>
      <legend><strong>{legend}</strong></legend>
      {(Object.keys(labels) as T[]).map((key) => (
        <label key={key} style={{display: 'block'}}>
          <input
            type="checkbox"
            checked={selected.has(key)}
            onChange={() => onToggle(key)}
          />{' '}
          {labels[key]}
        </label>
      ))}
    </fieldset>
  );
}

export default function Catalogue(): React.ReactElement {
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);

  const fuse = useMemo(
    () =>
      new Fuse(resources, {
        keys: ['title', 'summary', 'keywords', 'project'],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [],
  );

  const results = useMemo<Resource[]>(() => {
    let list: Resource[] = filters.query.trim()
      ? fuse.search(filters.query).map((r) => r.item)
      : resources;

    return list.filter((r) => {
      if (filters.projects.size > 0 && !filters.projects.has(r.project))
        return false;
      if (
        filters.disciplines.size > 0 &&
        !r.disciplines.some((d) => filters.disciplines.has(d))
      )
        return false;
      if (
        filters.tools.size > 0 &&
        !r.tools.some((t) => filters.tools.has(t))
      )
        return false;
      if (
        filters.software.size > 0 &&
        !r.software.some((s) => filters.software.has(s))
      )
        return false;
      if (
        filters.formats.size > 0 &&
        !r.formats.some((f) => filters.formats.has(f))
      )
        return false;
      if (
        filters.difficulties.size > 0 &&
        !filters.difficulties.has(r.difficulty)
      )
        return false;
      if (r.ageMax < filters.ageMin || r.ageMin > filters.ageMax) return false;
      if (r.durationMinutes > filters.maxDuration) return false;
      return true;
    });
  }, [filters, fuse]);

  const reset = () => setFilters(INITIAL_FILTERS);

  return (
    <Layout
      title="Catalogue des ressources"
      description="Parcours filtrable de toutes les ressources pédagogiques Wikilab"
    >
      <main className="container margin-vert--lg">
        <h1>Catalogue des ressources</h1>
        <p>
          Filtrez les fiches d'activité par projet, discipline, outil,
          environnement de programmation, âge, durée, difficulté ou mot-clé.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(260px, 320px) 1fr',
            gap: '2rem',
            marginTop: '2rem',
          }}
        >
          <aside>
            <div className="card" style={{padding: '1rem'}}>
              <input
                type="search"
                placeholder="Rechercher un mot-clé…"
                value={filters.query}
                onChange={(e) =>
                  setFilters({...filters, query: e.target.value})
                }
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  marginBottom: '1rem',
                }}
              />

              <FilterGroup
                legend="Projet"
                labels={projectLabels}
                selected={filters.projects}
                onToggle={(v) =>
                  setFilters({...filters, projects: toggle(filters.projects, v)})
                }
              />

              <FilterGroup
                legend="Disciplines"
                labels={disciplineLabels}
                selected={filters.disciplines}
                onToggle={(v) =>
                  setFilters({
                    ...filters,
                    disciplines: toggle(filters.disciplines, v),
                  })
                }
              />

              <FilterGroup
                legend="Matériel"
                labels={toolLabels}
                selected={filters.tools}
                onToggle={(v) =>
                  setFilters({...filters, tools: toggle(filters.tools, v)})
                }
              />

              <FilterGroup
                legend="Programmation"
                labels={softwareLabels}
                selected={filters.software}
                onToggle={(v) =>
                  setFilters({...filters, software: toggle(filters.software, v)})
                }
              />

              <FilterGroup
                legend="Format"
                labels={formatLabels}
                selected={filters.formats}
                onToggle={(v) =>
                  setFilters({
                    ...filters,
                    formats: toggle(filters.formats, v),
                  })
                }
              />

              <FilterGroup
                legend="Difficulté"
                labels={difficultyLabels}
                selected={filters.difficulties}
                onToggle={(v) =>
                  setFilters({
                    ...filters,
                    difficulties: toggle(filters.difficulties, v),
                  })
                }
              />

              <fieldset style={{border: 'none', padding: 0, marginBottom: '1rem'}}>
                <legend>
                  <strong>Âge</strong> : {filters.ageMin}–{filters.ageMax} ans
                </legend>
                <label>
                  Min
                  <input
                    type="range"
                    min={4}
                    max={18}
                    value={filters.ageMin}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        ageMin: Math.min(
                          Number(e.target.value),
                          filters.ageMax,
                        ),
                      })
                    }
                  />
                </label>
                <label>
                  Max
                  <input
                    type="range"
                    min={4}
                    max={18}
                    value={filters.ageMax}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        ageMax: Math.max(
                          Number(e.target.value),
                          filters.ageMin,
                        ),
                      })
                    }
                  />
                </label>
              </fieldset>

              <fieldset style={{border: 'none', padding: 0, marginBottom: '1rem'}}>
                <legend>
                  <strong>Durée max</strong> : {filters.maxDuration} min
                </legend>
                <input
                  type="range"
                  min={15}
                  max={240}
                  step={15}
                  value={filters.maxDuration}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      maxDuration: Number(e.target.value),
                    })
                  }
                  style={{width: '100%'}}
                />
              </fieldset>

              <button
                type="button"
                className="button button--secondary button--block"
                onClick={reset}
              >
                Réinitialiser
              </button>
            </div>
          </aside>

          <section>
            <p>
              <strong>{results.length}</strong> ressource
              {results.length > 1 ? 's' : ''} trouvée
              {results.length > 1 ? 's' : ''}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1rem',
              }}
            >
              {results.map((r) => (
                <Link
                  key={r.id}
                  to={r.slug}
                  className="card"
                  style={{
                    padding: '1rem',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                    {r.thumbnail && (
                      <img
                        src={r.thumbnail}
                        alt=""
                        style={{
                          width: '45px',
                          height: '45px',
                          objectFit: 'contain',
                          flexShrink: 0,
                        }}
                      />
                    )}
                    <div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          opacity: 0.7,
                        }}
                      >
                        {projectLabels[r.project]}
                      </div>
                      <h3 style={{marginTop: '0.15rem', marginBottom: 0}}>{r.title}</h3>
                    </div>
                  </div>
                  <div>
                  <p style={{fontSize: '0.9rem'}}>{r.summary}</p>
                  <div style={{fontSize: '0.8rem', opacity: 0.8}}>
                    {r.ageMin}–{r.ageMax} ans · {r.durationMinutes} min ·{' '}
                    {difficultyLabels[r.difficulty]}
                  </div>
                  <div style={{marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.25rem'}}>
                    {r.disciplines.map((d) => (
                      <span key={d} className="badge badge--primary">
                        {disciplineLabels[d]}
                      </span>
                    ))}
                    {r.tools.map((t) => (
                      <span key={t} className="badge badge--info">
                        {toolLabels[t]}
                      </span>
                    ))}
                    {r.software.map((s) => (
                      <span key={s} className="badge badge--warning">
                        {softwareLabels[s]}
                      </span>
                    ))}
                  </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
