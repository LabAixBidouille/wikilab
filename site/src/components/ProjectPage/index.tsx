import React, {useMemo} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {type ProjectInfo} from '../../data/projects';
import {
  resources,
  disciplineLabels,
  toolLabels,
  softwareLabels,
  difficultyLabels,
  type Resource,
} from '../../data/resources';

export default function ProjectPage({project}: {project: ProjectInfo}): React.ReactElement {
  const projectResources = useMemo<Resource[]>(
    () => resources.filter((r) => r.project === project.id),
    [project.id],
  );

  const countries = useMemo(() => {
    const set = new Set(project.partners.map((p) => p.country));
    return set.size;
  }, [project.partners]);

  return (
    <Layout title={project.name} description={project.summary}>
      <header
        className={`wikilab-project-hero${project.headerLight ? ' wikilab-project-hero--light' : ''}`}
        style={{
          ...(project.header
            ? {backgroundImage: `url(${project.header})`, backgroundSize: 'cover', backgroundPosition: 'center'}
            : {backgroundColor: project.color}),
          '--project-color-accent': project.colorAccent,
          '--project-color-logo-border': project.colorLogoBorder || project.colorAccent,
        } as React.CSSProperties}
      >
        <div className="container">
          <div className="wikilab-project-hero__inner">
            {project.logo && (
              <img
                src={project.logo}
                alt={project.name}
                className="wikilab-project-hero__logo"
              />
            )}
            <div>
              <h1 className="wikilab-project-hero__title">{project.name}</h1>
              <p className="wikilab-project-hero__summary">{project.summary}</p>
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--outline button--sm wikilab-project-hero__link"
                >
                  {project.id === 'projets-du-lab' ? 'Site du L.A.B' : 'Site du projet'}
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container margin-vert--lg" style={{
        '--project-color': project.color,
        '--project-color-secondary': project.colorSecondary,
        '--project-color-accent': project.colorAccent,
      } as React.CSSProperties}>
        {/* ── En bref ── */}
        {project.id !== 'projets-du-lab' && <section className="wikilab-project-stats">
          <div className="wikilab-project-stat">
            <span className="wikilab-project-stat__value">
              {project.partners.length}
            </span>
            <span className="wikilab-project-stat__label">
              partenaire{project.partners.length > 1 ? 's' : ''}
            </span>
          </div>
          <div className="wikilab-project-stat">
            <span className="wikilab-project-stat__value">
              {countries}
            </span>
            <span className="wikilab-project-stat__label">
              pay{countries > 1 ? 's' : 's'}
            </span>
          </div>
          {project.duration && (
            <div className="wikilab-project-stat">
              <span className="wikilab-project-stat__value">
                {project.duration}
              </span>
              <span className="wikilab-project-stat__label">période</span>
            </div>
          )}
          <div className="wikilab-project-stat">
            <span className="wikilab-project-stat__value">
              {projectResources.length}
            </span>
            <span className="wikilab-project-stat__label">
              ressource{projectResources.length > 1 ? 's' : ''} dispo
            </span>
          </div>
        </section>}

        {/* ── Présentation ── */}
        <section className="wikilab-project-section">
          <h2>Présentation</h2>
          <p className="wikilab-project-description">{project.description}</p>

          {project.objectives.length > 0 && (
            <>
              <h3>Objectifs</h3>
              <ul className="wikilab-project-objectives">
                {project.objectives.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </>
          )}

          {project.results.length > 0 && project.id !== 'projets-du-lab' && (
            <>
              <h3>Résultats</h3>
              <ul className="wikilab-project-objectives">
                {project.results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </>
          )}

          {project.id !== 'projets-du-lab' && (
            <div className="wikilab-project-info-grid">
              <div className="wikilab-project-info-card">
                <strong>Financement</strong>
                <span>{project.funding}</span>
              </div>
              {project.projectNumber && (
                <div className="wikilab-project-info-card">
                  <strong>N° de projet</strong>
                  <span>{project.projectNumber}</span>
                </div>
              )}
            </div>
          )}
        </section>

        {/* ── Photos ── */}
        {project.photos && project.photos.length > 0 && (
          <div className={`wikilab-gallery${project.photos.length === 1 ? ' wikilab-gallery--1' : project.photos.length === 2 ? ' wikilab-gallery--2' : ' wikilab-gallery--3'}`} style={project.photos.length > 4 ? {gridTemplateColumns: 'repeat(3, 1fr)'} : undefined}>
            {project.photos.map((photo, i) => (
              <img key={i} src={photo} alt={`${project.name}`} />
            ))}
          </div>
        )}

        {/* ── Partenaires ── */}
        {project.partners.length > 0 && project.id !== 'projets-du-lab' && (
          <section className="wikilab-project-section">
            <h2>Partenaires</h2>
            <div className="wikilab-project-partners">
              {project.partners.map((p) => (
                <div key={p.name} className="wikilab-partner-card">
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="wikilab-partner-card__logo"
                    />
                  ) : (
                    <div className="wikilab-partner-card__placeholder">
                      {p.name.charAt(0)}
                    </div>
                  )}
                  <div className="wikilab-partner-card__info">
                    <strong>
                      {p.url ? (
                        <a href={p.url} target="_blank" rel="noopener noreferrer">
                          {p.name}
                        </a>
                      ) : (
                        p.name
                      )}
                    </strong>
                    <span className="wikilab-partner-card__country">
                      {p.country}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Ressources ── */}
        <section className="wikilab-project-section">
          <h2>
            Ressources
            <span className="wikilab-project-count">{projectResources.length}</span>
          </h2>

          {projectResources.length === 0 ? (
            <div className="wikilab-project-empty">
              Les ressources de ce projet seront bientôt disponibles.
            </div>
          ) : (
            <div className="wikilab-project-resources">
              {projectResources.map((r) => (
                <Link
                  key={r.id}
                  to={r.slug}
                  className="card wikilab-project-resource-card"
                >
                  <h3>{r.title}</h3>
                  <p>{r.summary}</p>
                  <div className="wikilab-project-resource-card__meta">
                    {r.ageMin}–{r.ageMax} ans · {r.durationMinutes} min ·{' '}
                    {difficultyLabels[r.difficulty]}
                  </div>
                  <div className="wikilab-project-resource-card__badges">
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
                </Link>
              ))}
            </div>
          )}

          <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link
              to={`/catalogue?projet=${project.id}`}
              className="button wikilab-project-btn-catalogue"
              style={{backgroundColor: project.color, borderColor: project.color}}
            >
              Voir dans le catalogue
            </Link>
            <Link
              to="/"
              className="button wikilab-project-btn-home"
            >
              Retour à la page d'accueil
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
