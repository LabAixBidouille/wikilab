import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Fuse from 'fuse.js';
import {
  resources,
  disciplineLabels,
  toolLabels,
  softwareLabels,
  projectLabels,
  categoryLabels,
  difficultyLabels,
  type Discipline,
  type Tool,
  type Software,
  type Project,
  type Category,
  type Resource,
} from '../data/resources';

type Difficulty = keyof typeof difficultyLabels;

// Vrai matériel (hors débranchée / démarche scientifique qui sont "Autre")
const REAL_TOOLS: Tool[] = [
  'stm32',
  'steami',
  'microbit',
  'robotique',
  'capteurs',
  'arduino',
  'raspberry-pi',
  'decoupe-laser',
  'impression-3d',
  'decoupe-vinyle',
  'camera-thermique',
  'openstreetmap',
  'ia-generative',
  'design-graphique',
];

const NON_REAL_TOOLS: Tool[] = ['debranchee', 'demarche-scientifique'];

interface Filters {
  query: string;
  categories: Set<Category>;
  projects: Set<Project>;
  disciplines: Set<Discipline>;
  tools: Set<Tool>;
  software: Set<Software>;
  autreOnly: boolean;
  difficulties: Set<Difficulty>;
  ageMin: number;
  ageMax: number;
  maxDuration: number;
}

const INITIAL_FILTERS: Filters = {
  query: '',
  categories: new Set(),
  projects: new Set(),
  disciplines: new Set(),
  tools: new Set(),
  software: new Set(),
  autreOnly: false,
  difficulties: new Set(),
  ageMin: 4,
  ageMax: 18,
  maxDuration: 240,
};

// Labels catégories sans emoji (pour le filtre)
const categoryFilterLabels = Object.fromEntries(
  Object.entries(categoryLabels).map(([k, v]) => [
    k,
    v.replace(/^\S+\s+/, ''),
  ]),
) as Record<Category, string>;

// Ordre pédagogique d'affichage des catégories
const CATEGORY_ORDER: Category[] = [
  'animation-jeunesse',
  'programmation',
  'robotique-ludique',
  'exploration-scientifique',
  'ia-esprit-critique',
  'citoyennete-territoire',
  'environnement-nature',
  'sequences-debranchees',
  'theatre-sciences',
  'arts-creativite',
  'makers-fabrication',
];

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
  order,
}: {
  legend: string;
  labels: Record<T, string>;
  selected: Set<T>;
  onToggle: (value: T) => void;
  order?: T[];
}) {
  const keys = order ?? (Object.keys(labels) as T[]);
  return (
    <fieldset style={{border: 'none', padding: 0, marginBottom: '1rem'}}>
      <legend><strong>{legend}</strong></legend>
      {keys.map((key) => (
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

function ResourceCard({r}: {r: Resource}) {
  return (
    <Link
      to={r.slug}
      className="card"
      style={{
        padding: '1rem',
        textDecoration: 'none',
        color: 'inherit',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
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
      <p style={{fontSize: '0.9rem', marginTop: '0.75rem'}}>{r.summary}</p>
      <div style={{fontSize: '0.8rem', opacity: 0.8, marginTop: 'auto'}}>
        {r.ageMin}–{r.ageMax} ans · {r.durationMinutes} min ·{' '}
        {difficultyLabels[r.difficulty]}
      </div>
      <div style={{marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.25rem'}}>
        {r.categories.map((c) => (
          <span
            key={c}
            title={categoryLabels[c]}
            style={{
              fontSize: '1rem',
              lineHeight: 1,
            }}
          >
            {categoryLabels[c].split(' ')[0]}
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
    </Link>
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
      if (
        filters.categories.size > 0 &&
        !r.categories.some((c) => filters.categories.has(c))
      )
        return false;
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
        filters.autreOnly &&
        r.tools.some((t) => REAL_TOOLS.includes(t))
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

  // Groupement par catégorie uniquement quand un filtre catégorie est actif
  const grouped = useMemo(() => {
    if (filters.categories.size === 0) return null;
    const visibleCategories = CATEGORY_ORDER.filter((c) =>
      filters.categories.has(c),
    );
    return visibleCategories
      .map((cat) => ({
        category: cat,
        items: results.filter((r) => r.categories.includes(cat)),
      }))
      .filter((g) => g.items.length > 0);
  }, [results, filters.categories]);

  const totalDisplayed = grouped
    ? grouped.reduce((n, g) => n + g.items.length, 0)
    : results.length;
  const uniqueCount = results.length;

  const reset = () => setFilters(INITIAL_FILTERS);

  return (
    <Layout
      title="Catalogue des ressources"
      description="Parcours filtrable de toutes les ressources pédagogiques Wikilab"
    >
      <main className="container margin-vert--lg">
        <h1>Catalogue des ressources</h1>
        <p>
          Parcourez les fiches d'activité par approche pédagogique. Utilisez
          les filtres pour affiner par projet, discipline, outil, âge, durée
          ou mot-clé. Chaque fiche apparaît dans toutes les catégories qui la
          concernent.
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
                legend="Catégorie d'activité"
                labels={categoryFilterLabels}
                order={CATEGORY_ORDER}
                selected={filters.categories}
                onToggle={(v) =>
                  setFilters({
                    ...filters,
                    categories: toggle(filters.categories, v),
                  })
                }
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
                order={REAL_TOOLS}
                selected={filters.tools}
                onToggle={(v) =>
                  setFilters({...filters, tools: toggle(filters.tools, v)})
                }
              />

              <fieldset style={{border: 'none', padding: 0, marginBottom: '1rem'}}>
                <legend><strong>Autre</strong></legend>
                <label style={{display: 'block'}}>
                  <input
                    type="checkbox"
                    checked={filters.autreOnly}
                    onChange={() =>
                      setFilters({...filters, autreOnly: !filters.autreOnly})
                    }
                  />{' '}
                  Sans matériel (débranchée / démarche scientifique)
                </label>
              </fieldset>

              <FilterGroup
                legend="Outils informatiques"
                labels={softwareLabels}
                selected={filters.software}
                onToggle={(v) =>
                  setFilters({...filters, software: toggle(filters.software, v)})
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
              <strong>{uniqueCount}</strong> fiche{uniqueCount > 1 ? 's' : ''}
              {' '}trouvée{uniqueCount > 1 ? 's' : ''}
              {totalDisplayed !== uniqueCount && (
                <span style={{opacity: 0.7}}>
                  {' '}
                  · {totalDisplayed} affichages au total (certaines fiches
                  apparaissent dans plusieurs catégories)
                </span>
              )}
            </p>

            {results.length === 0 && (
              <p style={{opacity: 0.7, fontStyle: 'italic'}}>
                Aucune ressource ne correspond à ces filtres.
              </p>
            )}

            {grouped ? (
              grouped.map(({category, items}) => (
                <section key={category} style={{marginBottom: '2.5rem'}}>
                  <h2
                    style={{
                      borderBottom: '2px solid var(--ifm-color-emphasis-300)',
                      paddingBottom: '0.4rem',
                      marginBottom: '1rem',
                    }}
                  >
                    {categoryLabels[category]}
                    <span
                      style={{
                        fontSize: '0.9rem',
                        opacity: 0.6,
                        marginLeft: '0.5rem',
                        fontWeight: 'normal',
                      }}
                    >
                      ({items.length})
                    </span>
                  </h2>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                      gap: '1rem',
                    }}
                  >
                    {items.map((r) => (
                      <ResourceCard key={`${category}-${r.id}`} r={r} />
                    ))}
                  </div>
                </section>
              ))
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1rem',
                }}
              >
                {results.map((r) => (
                  <ResourceCard key={r.id} r={r} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </Layout>
  );
}
