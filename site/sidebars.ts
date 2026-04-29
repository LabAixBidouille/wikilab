import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import { resources, categoryLabels, type Category } from './src/data/resources';

// Ordre d'affichage des approches pédagogiques dans la sidebar
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

// Construit les catégories sidebar à partir des données resources.ts.
// Chaque fiche apparaît dans chaque catégorie dont elle fait partie.
const categorySections = CATEGORY_ORDER.map((cat) => {
  const items = resources
    .filter((r) => r.categories.includes(cat))
    .map((r) => r.slug.replace(/^\/ressources\//, ''))
    .sort();
  return {
    type: 'category' as const,
    label: categoryLabels[cat],
    collapsed: true,
    items,
  };
}).filter((section) => section.items.length > 0);

const sidebars: SidebarsConfig = {
  ressourcesSidebar: ['intro', ...categorySections],
};

export default sidebars;
