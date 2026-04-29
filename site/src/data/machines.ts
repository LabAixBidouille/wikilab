export type MachineCategory =
  | 'impression-3d'
  | 'decoupe'
  | 'gravure'
  | 'usinage'
  | 'electronique'
  | 'marquage'
  | 'couture'
  | 'autre';

export interface Machine {
  id: string;
  name: string;
  categories: MachineCategory[];
  description: string;
  specs?: string[];
  photo?: string;
  available: boolean;
  docPath?: string;
}

export const categoryLabels: Record<MachineCategory, string> = {
  'impression-3d': 'Impression 3D',
  decoupe: 'Découpe',
  gravure: 'Gravure',
  usinage: 'Usinage',
  electronique: 'Électronique',
  marquage: 'Marquage',
  couture: 'Couture',
  autre: 'Autre',
};

const MP = '/img/photos/machines';

export const machines: Machine[] = [
  {
    id: 'bambu-x1-carbon',
    name: 'Bambu Lab X1-Carbon',
    categories: ['impression-3d'],
    description: 'Imprimante 3D FDM rapide avec AMS (changement automatique de filament multi-couleur).',
    specs: ['Volume : 256x256x256 mm', 'Multi-couleur avec AMS', 'FDM Core XY'],
    photo: `${MP}/PXL_20260420_084443907.jpg`,
    available: true,
    docPath: '/machines/impression-3d/bambu-x1-carbon',
  },
  {
    id: 'volumic-stream-sh65',
    name: 'Volumic Stream SH65',
    categories: ['impression-3d'],
    description: 'Imprimante 3D FDM grand format, fabrication française.',
    specs: ['Grand volume', 'FDM', 'Fabrication française'],
    photo: `${MP}/PXL_20260420_084438795.MP.jpg`,
    available: true,
    docPath: '/machines/impression-3d/volumic-stream-sh65',
  },
  {
    id: 'raise3d-n2',
    name: 'Raise3D N2',
    categories: ['impression-3d'],
    description: 'Imprimante 3D FDM double extrusion, grand volume.',
    specs: ['Volume : 305x305x305 mm', 'Double extrusion', 'FDM'],
    photo: `${MP}/PXL_20260420_084453333.MP.jpg`,
    available: true,
    docPath: '/machines/impression-3d/raise3d-n2',
  },
  {
    id: 'ultimaker-2plus',
    name: 'Ultimaker 2+ (x3)',
    categories: ['impression-3d'],
    description: 'Trois imprimantes 3D FDM fiables et précises.',
    specs: ['Volume : 223x223x205 mm', 'Simple extrusion', 'FDM'],
    photo: `${MP}/PXL_20260420_084446693.jpg`,
    available: true,
    docPath: '/machines/impression-3d/ultimaker-2plus',
  },
  {
    id: 'elegoo-jupiter',
    name: 'Elegoo Jupiter',
    categories: ['impression-3d'],
    description: 'Imprimante 3D résine grand format (MSLA, 6K) pour impressions volumineuses haute résolution.',
    specs: ['Résine UV', 'Grand format', 'MSLA 6K'],
    photo: `${MP}/PXL_20260420_084402907.MP.jpg`,
    available: true,
    docPath: '/machines/impression-3d/elegoo-jupiter',
  },
  {
    id: 'elegoo-mars-2',
    name: 'Elegoo Mars 2 + Mercury Plus',
    categories: ['impression-3d'],
    description: 'Imprimante 3D résine compacte avec station de lavage et polymérisation.',
    specs: ['Résine UV', 'MSLA', 'Station Mercury Plus incluse'],
    photo: `${MP}/PXL_20260420_084427280.jpg`,
    available: true,
    docPath: '/machines/impression-3d/elegoo-mars-2',
  },
  {
    id: 'omtech-laser',
    name: 'OMTech Laser CO2',
    categories: ['decoupe', 'gravure'],
    description: 'Découpe et gravure laser CO2 pour bois, acrylique, carton, cuir et autres matériaux.',
    specs: ['Laser CO2', 'Grand plateau', 'Découpe et gravure'],
    photo: `${MP}/PXL_20260420_084512472.MP.jpg`,
    available: true,
    docPath: '/machines/decoupe-gravure/omtech-laser-co2',
  },
  {
    id: 'monport-laser',
    name: 'Monport Laser fibre',
    categories: ['gravure'],
    description: 'Gravure laser fibre pour métal, plastique et matériaux durs.',
    specs: ['Laser fibre', 'Gravure métal', 'Haute précision'],
    photo: `${MP}/PXL_20260413_083137985.jpg`,
    available: true,
    docPath: '/machines/decoupe-gravure/monport-laser-fibre',
  },
  {
    id: 'carvera-air',
    name: 'Carvera Air',
    categories: ['usinage'],
    description: 'Fraiseuse CNC de bureau compacte et fermée pour bois, PCB et matériaux tendres.',
    specs: ['CNC de bureau', 'Enceinte fermée', 'Bois, PCB, aluminium'],
    photo: `${MP}/PXL_20260420_084343422.jpg`,
    available: true,
    docPath: '/machines/fabrication/carvera-air',
  },
  {
    id: 'silhouette-cameo-2',
    name: 'Silhouette Cameo 2',
    categories: ['decoupe'],
    description: 'Découpe vinyle et papier pour autocollants, stickers et créations sur mesure.',
    specs: ['Largeur de coupe : 305 mm', 'Découpe vinyle, papier, carton fin'],
    photo: `${MP}/Cameo2_Main-small-1.jpg`,
    available: true,
    docPath: '/machines/decoupe-gravure/silhouette-cameo-2',
  },
  {
    id: 'silhouette-cameo-4',
    name: 'Silhouette Cameo 4',
    categories: ['decoupe'],
    description: 'Découpe vinyle et matériaux souples, version améliorée avec plus de force de coupe.',
    specs: ['Largeur de coupe : 305 mm', 'Force de coupe : 5 kg', 'Découpe vinyle, carton, tissu'],
    photo: `${MP}/2329059278.jpg`,
    available: true,
    docPath: '/machines/decoupe-gravure/silhouette-cameo-4',
  },
  {
    id: 'presse-chaleur',
    name: 'Presse à chaleur',
    categories: ['marquage'],
    description: 'Transfert de motifs sur textiles, mugs, casquettes et autres supports.',
    specs: ['Multi-supports', 'Accessoires interchangeables'],
    photo: `${MP}/71UTRV+OyvL.jpg`,
    available: true,
    docPath: '/machines/fabrication/presse-a-chaleur',
  },
  {
    id: 'singer',
    name: 'Singer Tradition 2250',
    categories: ['couture'],
    description: 'Machine à coudre pour projets textiles, wearables et prototypage tissu.',
    specs: ['10 points de couture', 'Enfile-aiguille automatique'],
    photo: `${MP}/PXL_20260420_085530658.jpg`,
    available: true,
    docPath: '/machines/fabrication/singer-tradition-2250',
  },
  {
    id: 'station-soudure',
    name: 'Stations de soudure Yihua + Weller',
    categories: ['electronique'],
    description: 'Station de soudure et pistolet à air chaud pour le prototypage de circuits électroniques.',
    specs: ['Yihua 959D II (soudure + air chaud)', 'Weller (soudure de précision)'],
    photo: `${MP}/PXL_20260420_085047621.jpg`,
    available: true,
    docPath: '/machines/electronique/station-soudure',
  },
  {
    id: 'oscilloscope',
    name: 'Oscilloscope Rigol DS1104Z',
    categories: ['electronique'],
    description: 'Oscilloscope numérique 4 voies pour la mesure et la visualisation de signaux.',
    specs: ['4 voies', '100 MHz', '1 GSa/s'],
    photo: `${MP}/PXL_20260420_085023396.jpg`,
    available: true,
    docPath: '/machines/electronique/oscilloscope-rigol',
  },
  {
    id: 'microscope',
    name: 'Microscope numérique',
    categories: ['electronique'],
    description: 'Microscope numérique avec écran pour inspection de circuits et soudures.',
    specs: ['Écran intégré', 'Zoom numérique'],
    photo: `${MP}/PXL_20260420_085055152.jpg`,
    available: true,
    docPath: '/machines/electronique/microscope-numerique',
  },
];
