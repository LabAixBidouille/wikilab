import React, { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import { machines, categoryLabels, type MachineCategory, type Machine } from '../data/machines';

function toggle(set: Set<MachineCategory>, value: MachineCategory): Set<MachineCategory> {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

export default function Machines(): React.ReactElement {
  const [query, setQuery] = useState('');
  const [categories, setCategories] = useState<Set<MachineCategory>>(new Set());

  const results = useMemo<Machine[]>(() => {
    let list = machines;
    if (categories.size > 0) {
      list = list.filter((m) => m.categories.some((c) => categories.has(c)));
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (m) => m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q),
      );
    }
    return list;
  }, [query, categories]);

  const reset = () => {
    setQuery('');
    setCategories(new Set());
  };

  return (
    <Layout title="Nos machines" description="Les machines et outils du fablab du L.A.B">
      <main className="container margin-vert--lg">
        <h1>Nos machines</h1>
        <p>
          Le fablab du L.A.B met à disposition de ses membres un ensemble de machines et outils pour
          expérimenter, prototyper et fabriquer.
        </p>

        <div className="wikilab-machines-layout">
          <aside>
            <div className="card" style={{ padding: '1rem' }}>
              <input
                type="search"
                placeholder="Rechercher une machine…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
              />

              <fieldset style={{ border: 'none', padding: 0, marginBottom: '1rem' }}>
                <legend>
                  <strong>Catégorie</strong>
                </legend>
                {(Object.keys(categoryLabels) as MachineCategory[]).map((cat) => (
                  <label key={cat} style={{ display: 'block' }}>
                    <input
                      type="checkbox"
                      checked={categories.has(cat)}
                      onChange={() => setCategories(toggle(categories, cat))}
                    />{' '}
                    {categoryLabels[cat]}
                  </label>
                ))}
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
              <strong>{results.length}</strong> machine
              {results.length > 1 ? 's' : ''}
            </p>

            <div className="wikilab-machines-grid">
              {results.map((m) => {
                const CardWrapper = m.docPath
                  ? ({ children }: { children: React.ReactNode }) => (
                      <a
                        href={m.docPath}
                        className="card wikilab-machine-card wikilab-machine-card--link"
                        key={m.id}
                      >
                        {children}
                      </a>
                    )
                  : ({ children }: { children: React.ReactNode }) => (
                      <div className="card wikilab-machine-card" key={m.id}>
                        {children}
                      </div>
                    );
                return (
                  <CardWrapper key={m.id}>
                    {m.photo && (
                      <img src={m.photo} alt={m.name} className="wikilab-machine-card__photo" />
                    )}
                    <div className="wikilab-machine-card__content">
                      {m.categories.map((c) => (
                        <span
                          key={c}
                          className="badge badge--success"
                          style={{ marginRight: '0.25rem' }}
                        >
                          {categoryLabels[c]}
                        </span>
                      ))}
                      <h3>{m.name}</h3>
                      <p>{m.description}</p>
                      {m.specs && m.specs.length > 0 && (
                        <ul className="wikilab-machine-card__specs">
                          {m.specs.map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                      )}
                      <div className="wikilab-machine-card__footer">
                        <span
                          className={`wikilab-machine-card__status ${m.available ? 'wikilab-machine-card__status--ok' : 'wikilab-machine-card__status--off'}`}
                        >
                          {m.available ? 'Disponible' : 'Indisponible'}
                        </span>
                        {m.docPath && (
                          <span className="wikilab-machine-card__guide">Voir le guide</span>
                        )}
                      </div>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
