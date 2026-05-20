// Module léger isolé pour éviter de tirer tout le tableau `resources`
// (volumineux) dans les bundles qui n'ont besoin que des libellés
// pédagogiques — typiquement le swizzle DocBreadcrumbs qui est rendu
// sur toutes les pages docs.
//
// `resources.ts` réexporte ces deux symboles pour la rétro-compatibilité
// des autres imports (catalogue.tsx, sidebars.ts…).

export type Category =
  | 'programmation'
  | 'exploration-scientifique'
  | 'theatre-sciences'
  | 'sequences-debranchees'
  | 'robotique-ludique'
  | 'citoyennete-territoire'
  | 'ia-esprit-critique'
  | 'makers-fabrication'
  | 'arts-creativite'
  | 'environnement-nature'
  | 'animation-jeunesse';

export const categoryLabels: Record<Category, string> = {
  programmation: '🔌 Programmation',
  'exploration-scientifique': '🔬 Exploration scientifique',
  'theatre-sciences': '🎭 Théâtre et sciences',
  'sequences-debranchees': '📝 Séquences débranchées',
  'robotique-ludique': '🤖 Robotique ludique',
  'citoyennete-territoire': '🏙️ Citoyenneté et territoire',
  'ia-esprit-critique': '🧠 IA et esprit critique',
  'makers-fabrication': '🛠️ Makers et fabrication',
  'arts-creativite': '🎨 Arts et créativité',
  'environnement-nature': '🌱 Environnement et nature',
  'animation-jeunesse': "🎯 Actions d'animation jeunesse",
};
