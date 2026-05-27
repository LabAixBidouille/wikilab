import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import { resources, type Project } from './src/data/resources';
import { projectsInfo } from './src/data/projects';

// Ordre d'affichage des projets dans la sidebar — même ordre que la
// page /projets : projets-du-lab d'abord, puis chronologique selon
// l'ancienneté / la maturité des contenus dans le wiki.
const PROJECT_ORDER: Project[] = [
  'projets-du-lab',
  'lets-steam',
  'magnetics',
  'unplugged',
  'thedexterlab',
  'mimesis',
  'steamcity',
  'robots-meet-arts',
  'jeditrack',
  'inovmicro-exao',
  'youth-ai-lab',
];

// Construit les sections de la sidebar à partir des fiches groupées
// par projet. Le label de chaque section est de la forme :
//   "Nom du projet — Sous-titre verbe-début"
// (cf. champ `subtitle` dans projects.ts). Cela donne du contexte
// d'entrée au lecteur quand il navigue d'un projet à l'autre.
//
// Tri intra-projet : (sidebarOrder ?? 0, slug). Une fiche avec
// sidebarOrder élevé (ex. dépannage transverse) reste en bas
// malgré son slug.
const projectSections = PROJECT_ORDER.map((proj) => {
  const items = resources
    .filter((r) => r.project === proj)
    .map((r) => ({
      id: r.slug.replace(/^\/ressources\//, ''),
      order: r.sidebarOrder ?? 0,
    }))
    .sort((a, b) => a.order - b.order || a.id.localeCompare(b.id))
    .map((x) => x.id);
  const info = projectsInfo[proj];
  return {
    type: 'category' as const,
    label: `${info.name} — ${info.subtitle}`,
    collapsed: true,
    items,
  };
}).filter((section) => section.items.length > 0);

const sidebars: SidebarsConfig = {
  ressourcesSidebar: ['intro', ...projectSections],
};

export default sidebars;
