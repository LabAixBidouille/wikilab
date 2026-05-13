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
// Tri : (sidebarOrder ?? 0, slug). Une fiche avec sidebarOrder élevé
// (ex. dépannage transverse) reste en bas malgré son slug.
const categorySections = CATEGORY_ORDER.map((cat) => {
  const items = resources
    .filter((r) => r.categories.includes(cat))
    .map((r) => ({
      id: r.slug.replace(/^\/ressources\//, ''),
      order: r.sidebarOrder ?? 0,
    }))
    .sort((a, b) => a.order - b.order || a.id.localeCompare(b.id))
    .map((x) => x.id);
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
