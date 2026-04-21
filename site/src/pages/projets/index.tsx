import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {projectsInfo, type ProjectInfo} from '../../data/projects';

const projectOrder = [
  'projets-du-lab',
  'lets-steam',
  'unplugged',
  'thedexterlab',
  'mimesis',
  'steamcity',
  'robots-meet-arts',
  'jeditrack',
  'inovmicro-exao',
  'youth-ai-lab',
] as const;

function getRoute(id: string): string {
  if (id === 'thedexterlab') return '/projets/the-dexter-lab';
  return `/projets/${id}`;
}

export default function Projets(): React.ReactElement {
  const projects = projectOrder.map((id) => projectsInfo[id]);

  return (
    <Layout title="Nos actions" description="Les actions éducatives, créatives et makers à l'origine des ressources Wiki@LAB">
      <main className="container margin-vert--lg">
        <h1>Nos actions</h1>
        <p>
          Au L.A.B, nous coordonnons et contribuons à des actions éducatives,
          créatives et makers autour de la pensée computationnelle et des STEAM.
          Robotique, programmation créative, théâtre et sciences, enquêtes
          urbaines, activités débranchées, intelligence artificielle, fabrication
          numérique : chaque action explore une manière différente de mobiliser
          ces approches. Toutes les ressources qui en résultent sont libres
          d'accès et disponibles dans le <Link to="/catalogue">catalogue</Link>.
        </p>

        <div className="wikilab-projets-list">
          {projects.map((p) => (
            <Link
              key={p.id}
              to={getRoute(p.id)}
              className="wikilab-projets-list__item"
              style={{'--project-color': p.color} as React.CSSProperties}
            >
              {p.logo && (
                <img src={p.logo} alt={p.name} className="wikilab-projets-list__logo" />
              )}
              <div className="wikilab-projets-list__info">
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <span className="wikilab-projets-list__meta">
                  {p.id === 'projets-du-lab'
                    ? "Ressources partagées grâce à l'implication de nos membres"
                    : `${p.duration ? p.duration + ' · ' : ''}${p.partners.length} partenaire${p.partners.length > 1 ? 's' : ''}`
                  }
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
