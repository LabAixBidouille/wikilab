import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { projectLabels, type Project } from '../data/resources';

const highlights = [
  {
    color: 'var(--wikilab-blue)',
    title: 'Du code au théâtre',
    text: 'Programmation, robotique, arts vivants, enquêtes urbaines, IA : des ressources pédagogiques pour tous les âges.',
  },
  {
    color: 'var(--wikilab-orange)',
    title: 'Culture maker',
    text: 'Impression 3D, électronique, fabrication numérique : des projets documentés pas à pas, à reproduire.',
  },
  {
    color: 'var(--wikilab-purple)',
    title: 'Un fablab à votre service',
    text: 'Imprimantes 3D, découpe laser, CNC, atelier électronique : des outils accessibles pour expérimenter.',
  },
  {
    color: 'var(--wikilab-green)',
    title: 'Ouvert et libre',
    text: 'Tous les contenus sont sous licence Creative Commons, librement réutilisables et adaptables.',
  },
];

const projectLogos: Record<Project, string> = {
  'lets-steam': '/img/logos/lets-steam.svg',
  mimesis: '/img/logos/mimesis.svg',
  'robots-meet-arts': '/img/logos/robots-meet-arts.svg',
  steamcity: '/img/logos/steamcity.svg',
  unplugged: '/img/logos/unplugged.png',
  jeditrack: '/img/logos/jeditrack.png',
  thedexterlab: '/img/logos/the-dexter-lab.png',
  'youth-ai-lab': '/img/logos/youth-ai-lab.png',
  magnetics: '/img/logos/magnetics.png',
  'inovmicro-exao': '/img/logos/exao.png',
  'projets-du-lab': '/img/logos/wikilab.svg',
};

const projectRoutes: Record<Project, string> = {
  'lets-steam': '/projets/lets-steam',
  mimesis: '/projets/mimesis',
  'robots-meet-arts': '/projets/robots-meet-arts',
  steamcity: '/projets/steamcity',
  unplugged: '/projets/unplugged',
  jeditrack: '/projets/jeditrack',
  thedexterlab: '/projets/the-dexter-lab',
  'youth-ai-lab': '/projets/youth-ai-lab',
  magnetics: '/projets/magnetics',
  'inovmicro-exao': '/projets/inovmicro-exao',
  'projets-du-lab': '/projets/projets-du-lab',
};

export default function Home(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="wikilab-hero">
        <img src="/img/logos/banner.png" alt="Wiki@LAB" className="wikilab-hero__banner" />
        <div className="wikilab-hero__overlay">
          <div className="container">
            <div className="wikilab-hero__text">
              <h1 className="wikilab-hero__title">{siteConfig.title}</h1>
              <p className="wikilab-hero__subtitle">{siteConfig.tagline}</p>
              <div className="wikilab-hero__actions">
                <Link className="button button--lg wikilab-hero__btn-catalogue" to="/catalogue">
                  Explorer le catalogue
                </Link>
                <Link className="button button--lg wikilab-hero__btn-machines" to="/machines">
                  Nos machines
                </Link>
                <Link className="button button--lg wikilab-hero__btn-about" to="/about">
                  À propos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="wikilab-highlights">
        <div className="container">
          <div className="row">
            {highlights.map((h) => (
              <div className="col col--3" key={h.title}>
                <div className="wikilab-highlight-card" style={{ '--accent': h.color }}>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wikilab-projects">
        <div className="container">
          <h2 className="wikilab-section-title">Nos actions</h2>
          <div className="wikilab-projects-grid">
            {(Object.keys(projectLabels) as Project[]).map((key) => (
              <Link key={key} to={projectRoutes[key]} className="wikilab-project-card">
                <img
                  src={projectLogos[key]}
                  alt={projectLabels[key]}
                  className="wikilab-project-card__logo"
                />
                <span className="wikilab-project-card__name">{projectLabels[key]}</span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link className="button button--primary" to="/projets">
              Toutes nos actions
            </Link>
          </div>
        </div>
      </section>

      <section className="wikilab-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Découvrez nos machines</h2>
          <p>Imprimantes 3D, découpe laser, CNC, électronique : tout un fablab à explorer.</p>
          <Link className="button button--lg wikilab-cta-button" to="/machines">
            Voir nos machines
          </Link>
        </div>
      </section>

      <section className="wikilab-eu">
        <div className="container">
          <div className="wikilab-eu__inner">
            <img
              src="/img/logos/eu-cofinance.png"
              alt="Cofinancé par l'Union européenne"
              className="wikilab-eu__logo"
            />
            <p>
              La création de ce catalogue de ressources a été rendue possible grâce au cofinancement
              de l'Union européenne. Les points de vue et avis exprimés n'engagent toutefois que
              leur(s) auteur(s) et ne reflètent pas nécessairement ceux de l'Union européenne ou de
              l'Agence exécutive européenne pour l'éducation et la culture (EACEA). Ni l'Union
              européenne ni l'EACEA ne sauraient en être tenues pour responsables.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
