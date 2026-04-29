import { type Project } from './resources';

export interface Partner {
  name: string;
  country: string;
  logo?: string;
  url?: string;
}

export interface ProjectInfo {
  id: Project;
  name: string;
  logo: string;
  color: string;
  colorSecondary: string;
  colorAccent: string;
  colorLogoBorder?: string;
  summary: string;
  description: string;
  objectives: string[];
  results: string[];
  partners: Partner[];
  photos?: string[];
  header?: string;
  headerLight?: boolean;
  externalUrl?: string;
  funding: string;
  duration?: string;
  projectNumber?: string;
}

const P = '/img/logos/partenaires';

export const projectsInfo: Record<Project, ProjectInfo> = {
  'lets-steam': {
    id: 'lets-steam',
    name: "Let's STEAM",
    logo: '/img/logos/lets-steam.svg',
    color: '#140e4e',
    colorSecondary: '#62549F',
    colorAccent: '#3BBDD6',
    summary: 'Programmation embarquée avec MakeCode et la carte STM32 IoT Node.',
    description:
      "Let's STEAM est un projet Erasmus+ labellisé « Bonnes pratiques » par la Commission européenne. Il vise à promouvoir l'apprentissage techno-créatif de l'informatique en formant les enseignants du secondaire à l'utilisation de pédagogies actives basées sur le numérique, la programmation et l'Internet des Objets (IoT) dans une approche STEAM. Les élèves découvrent la programmation par blocs avec MakeCode et explorent les capteurs et actionneurs de la carte STM32 IoT Node à travers une série de fiches progressives.",
    objectives: [
      'Développer la pensée computationnelle chez les enseignants, quel que soit leur niveau technique',
      'Utiliser la programmation comme outil au service de la créativité et de la curiosité scientifique',
      "Permettre aux élèves de participer à des démarches d'investigation scientifique via des capteurs et la collecte de données",
      'Promouvoir une pédagogie active et interdisciplinaire intégrant éthique, inclusion et équité',
    ],
    results: [
      "Livret d'activités disponible en 6 langues (anglais, français, espagnol, néerlandais, grec, italien)",
      "Plateforme Moodle d'e-learning en accès ouvert",
      'Éditeur MakeCode personnalisé supportant blocs, JavaScript et Python',
      "Rapport d'impact mapping et analyse des besoins des enseignants",
    ],
    partners: [
      { name: "Université d'Aix-Marseille", country: 'France', logo: `${P}/amu.png` },
      {
        name: "Laboratoire d'Aix-périmentation et de Bidouille",
        country: 'France',
        logo: `${P}/lab.svg`,
      },
      { name: "Université Côte d'Azur", country: 'France', logo: `${P}/uca.png` },
      { name: 'Digitale Wolven vzw', country: 'Belgique', logo: `${P}/digitale-wolven.svg` },
      { name: 'Ellinogermaniki Agogi', country: 'Grèce', logo: `${P}/ellinogermaniki.png` },
      { name: 'Evroproject OOD', country: 'Bulgarie', logo: `${P}/evroproject.png` },
      {
        name: 'Università degli Studi di Napoli Federico II',
        country: 'Italie',
        logo: `${P}/unina.png`,
      },
      { name: 'Universitat Rovira i Virgili', country: 'Espagne', logo: `${P}/urv.png` },
    ],
    photos: [
      '/img/photos/projets/lets-steam/broche digital write.png',
      '/img/photos/projets/lets-steam/IMG_20210308_105624.jpg',
      '/img/photos/projets/lets-steam/lets steamdatalogger.png.png',
    ],
    header: '/img/headersprojects/lets-steam.png',
    externalUrl: 'https://labaixbidouille.wixsite.com/erasmus-lets-steam',
    funding: 'Erasmus+ KA201 — Partenariat stratégique',
    duration: '2019–2022',
    projectNumber: '2019-1-FR01-KA201-062946',
  },
  mimesis: {
    id: 'mimesis',
    name: 'Mimesis',
    logo: '/img/logos/mimesis.svg',
    color: '#09246C',
    colorSecondary: '#FFB1C5',
    colorAccent: '#00AFB9',
    colorLogoBorder: '#FFDE59',
    summary: 'Théâtre et arts vivants pour explorer des concepts scientifiques.',
    description:
      "Mimesis intègre les arts vivants, le théâtre, le conte et les outils numériques pour repenser l'enseignement scientifique à l'école. Les élèves explorent des concepts scientifiques (astronomie, physique, biologie…) par le corps, l'improvisation et la mise en scène. Les activités reposent sur des techniques de mime, d'improvisation et de jeux de rôles scénarisés pour développer l'intuition scientifique tout en construisant des compétences de communication.",
    objectives: [
      "Développer l'intuition scientifique des élèves de 8 à 12 ans",
      "Utiliser les arts vivants pour créer un environnement d'apprentissage ludique et inclusif",
      'Renforcer les compétences de communication, de présentation et de confiance des élèves',
      'Fournir aux enseignants des ressources facilement implémentables avec un minimum de matériel',
    ],
    results: [
      "8 fiches d'activités conçues pour la mise en œuvre en classe",
      "Guide pédagogique complet avec 5 boîtes à outils d'implémentation",
      '8 tutoriels vidéo démontrant la réalisation des activités',
      'Plus de 30 éducateurs et 300 élèves impliqués entre la France et la Bulgarie',
    ],
    partners: [
      {
        name: "Laboratoire d'Aix-périmentation et de Bidouille",
        country: 'France',
        logo: `${P}/lab.svg`,
      },
      { name: 'La Fabulerie', country: 'France', logo: `${P}/la-fabulerie.png` },
      {
        name: 'SPACES Foundation for Art and Culture',
        country: 'Bulgarie',
        logo: `${P}/spaces.png`,
      },
    ],
    photos: [
      '/img/photos/projets/mimesis/20231122_135656.webp',
      '/img/photos/projets/mimesis/IMG_1467.JPG',
      '/img/photos/projets/mimesis/IMG_20231102_102710612.jpg',
    ],
    header: '/img/headersprojects/mimesis.png',
    headerLight: true,
    externalUrl: 'https://labaixbidouille.wixsite.com/mimesis',
    funding: 'Erasmus+ KA210 — Partenariat simplifié',
    duration: '2022–2024',
    projectNumber: '2022-1-FR01-KA210-SCH-000081881',
  },
  'robots-meet-arts': {
    id: 'robots-meet-arts',
    name: 'Robots Meet Arts',
    logo: '/img/logos/robots-meet-arts.svg',
    color: '#169da7',
    colorSecondary: '#eb407e',
    colorAccent: '#1c4959',
    summary: 'Robotique créative et médiation artistique.',
    description:
      "Robots Meet Arts vise à révolutionner l'enseignement primaire en intégrant la robotique éducative et le codage dans les programmes d'Arts et Sciences humaines, dans des environnements d'apprentissage inclusifs. Les élèves programment des robots de sol (Blue-Bot, Bee-Bot, Cubetto…) et des kits LEGO dans des contextes créatifs : art binaire, ballet robotique, chasse au trésor, courses de voitures…",
    objectives: [
      "Développer des supports de formation complets pour les enseignants, en mettant l'accent sur l'inclusivité",
      "Créer des ressources éducatives innovantes pour l'intégration de la robotique en classe",
      'Renforcer les compétences numériques et la confiance des enseignants',
      "Cultiver l'engagement des élèves dans la littératie numérique et les Arts/Sciences humaines",
    ],
    results: [
      'Programme de formation des enseignants en apprentissage mixte (blended learning)',
      'Curriculum pour les élèves avec livret de leçons',
      'Lignes directrices pour une implémentation inclusive',
      "Rapport de bonnes pratiques et résultats d'évaluation",
    ],
    partners: [
      {
        name: "Laboratoire d'Aix-périmentation et de Bidouille",
        country: 'France',
        logo: `${P}/lab.svg`,
      },
      {
        name: 'Dimotiko Scholeio Plateos Imathias',
        country: 'Grèce',
        logo: `${P}/dimotiko-plateos.png`,
      },
      { name: 'Escola Maria Fortuny', country: 'Espagne', logo: `${P}/escola-maria-fortuny.png` },
      { name: 'Scholengemeenschap KSO Leuven', country: 'Belgique', logo: `${P}/kso-leuven.png` },
      { name: 'Stimmuli for Social Change', country: 'Grèce', logo: `${P}/stimmuli.png` },
      { name: 'UC Leuven', country: 'Belgique', logo: `${P}/uc-leuven.png` },
      { name: 'Universitat Rovira i Virgili', country: 'Espagne', logo: `${P}/urv.png` },
    ],
    photos: [
      '/img/photos/projets/robots-meet-arts/20250903_092550.jpg',
      '/img/photos/projets/robots-meet-arts/IMG_20251107_093906.jpg',
      '/img/photos/projets/robots-meet-arts/WhatsApp Image 2026-02-18 at 15.20.54.jpeg',
    ],
    header: '/img/headersprojects/robotsmeetarts.png',
    headerLight: true,
    externalUrl: 'https://robots-meet-arts.eu/',
    funding: 'Erasmus+ KA220 — Partenariat de coopération',
    duration: '2023–2026',
    projectNumber: '2023-1-FR01-KA220-SCH-000151881',
  },
  steamcity: {
    id: 'steamcity',
    name: 'SteamCity',
    logo: '/img/logos/steamcity.svg',
    color: '#DD5350',
    colorSecondary: '#99D69F',
    colorAccent: '#9FDAF4',
    summary: "Protocoles d'investigation scientifique en contexte urbain.",
    description:
      "SteamCity fonctionne comme un kit d'expérimentation pour les enseignants du secondaire, leur permettant de mener des investigations scientifiques basées sur l'enquête (inquiry-based) en lien avec les défis territoriaux. L'école y est vue comme un incubateur d'innovation sociétale. Les élèves explorent leur environnement urbain à travers 7 champs thématiques : gouvernance et citoyenneté, environnement et bien-être, mobilité, climat, biodiversité, économie d'énergie, IA et technologies.",
    objectives: [
      "Aider écoles, enseignants et élèves à adopter des approches d'éducation scientifique basées sur l'investigation",
      'Permettre aux élèves de devenir des citoyens éclairés face aux enjeux sociétaux et environnementaux',
      'Promouvoir des expériences STEAM inclusives et combattre les stéréotypes de genre dans les sciences',
      'Soutenir des projets de science citoyenne avec une véritable rigueur scientifique',
    ],
    results: [
      'SteamCity Inquiry Set : cadre pédagogique couvrant 7 domaines interdisciplinaires',
      "Service d'expérimentation : collecte de données, déploiement de capteurs, activités de programmation",
      'Plateforme de centralisation des résultats expérimentaux des écoles européennes participantes',
    ],
    partners: [
      {
        name: "Laboratoire d'Aix-périmentation et de Bidouille",
        country: 'France',
        logo: `${P}/lab.svg`,
      },
      { name: 'Associazione Perlatecnica', country: 'Italie', logo: `${P}/perlatecnica.jpg` },
      { name: 'La Scientothèque', country: 'Belgique', logo: `${P}/la-scientotheque.png` },
      { name: 'Les 7 Vents', country: 'France', logo: `${P}/les-7-vents.png` },
      {
        name: 'Private Secondary School "Educational Technologies"',
        country: 'Bulgarie',
        logo: `${P}/edu-technologies.jpg`,
      },
      { name: 'Ultralab S.L.', country: 'Espagne', logo: `${P}/ultralab.png` },
      { name: 'Vittascience', country: 'France', logo: `${P}/vittascience.png` },
      { name: 'ZeUGMA OOD', country: 'Bulgarie', logo: `${P}/zeugma.png` },
    ],
    photos: [
      '/img/photos/projets/steamcity/IMG-affc4e7d226f602a9a099723ce634203-V.webp',
      '/img/photos/projets/steamcity/SteamCity_PilotingActivities_LaScientotheque_Picture.webp',
      '/img/photos/projets/steamcity/selec1.webp',
    ],
    header: '/img/headersprojects/steamcity.png',
    headerLight: true,
    externalUrl: 'https://www.steamcity.eu/',
    funding: 'Erasmus+ KA220 — Partenariat de coopération',
    duration: '2022–2025',
    projectNumber: '2022-1-FR01-KA220-SCH-000087922',
  },
  unplugged: {
    id: 'unplugged',
    name: 'Unplugged',
    logo: '/img/logos/unplugged.png',
    color: '#0081A7',
    colorSecondary: '#A06A83',
    colorAccent: '#00afb9',
    summary: "Activités débranchées pour découvrir l'informatique sans ordinateur.",
    description:
      "Unplugged Quest développe un écosystème d'apprentissage par le jeu dédié aux défis sociétaux, né dans le contexte de la crise COVID-19. Il combine contenus créatifs et éducatifs issus de musées, bibliothèques et espaces communautaires dans un environnement de métavers interactif (via Gather.town). Les fiches proposent des activités ludiques pour découvrir les fondamentaux de l'informatique (binaire, algorithmes, logique…) sans aucun matériel numérique.",
    objectives: [
      "Soutenir le développement de l'éducation à la citoyenneté",
      'Renforcer la pensée logique et critique des enfants par des défis de programmation débranchée',
      'Transmettre les valeurs et principes des sociétés démocratiques',
      "Accroître la motivation éducative et l'interactivité par la gamification",
    ],
    results: [
      '4 territoires thématiques avec environ 28 jeux débranchés (Peaceful Island, Strong Community, Crazy Bayou, Fantastic Factory)',
      'Tous les jeux disponibles en PDF téléchargeables et accessibles en ligne',
      'Environnement métavers interactif sur Gather.town',
      'Ressources éducatives ouvertes sous licence Creative Commons BY-SA 4.0',
    ],
    partners: [
      { name: "Université d'Aix-Marseille", country: 'France', logo: `${P}/amu.png` },
      { name: "Université Côte d'Azur", country: 'France', logo: `${P}/uca.png` },
      { name: 'La Fabulerie', country: 'France', logo: `${P}/la-fabulerie.png` },
      { name: 'Digitale Wolven vzw', country: 'Belgique', logo: `${P}/digitale-wolven.svg` },
      { name: 'Hands On! International', country: 'Autriche', logo: `${P}/hands-on.jpg` },
      { name: 'Museo dei Bambini', country: 'Italie', logo: `${P}/museo-dei-bambini.webp` },
      { name: 'Muzeiko Foundation', country: 'Bulgarie', logo: `${P}/muzeiko.jpg` },
      { name: 'ZeUGMA OOD', country: 'Bulgarie', logo: `${P}/zeugma.png` },
    ],
    photos: [
      '/img/photos/projets/unplugged/Untitled.webp',
      '/img/photos/projets/unplugged/Untitled (1).webp',
      '/img/photos/projets/unplugged/Untitled (3).webp',
    ],
    header: '/img/headersprojects/Unplugged.png',
    externalUrl: 'https://labaixbidouille.wixsite.com/unplugged-metaverse',
    funding: 'Erasmus+ KA227 — Partenariat de coopération',
    duration: '2021–2023',
    projectNumber: '2020-1-FR01-KA227-SCH-095528',
  },
  jeditrack: {
    id: 'jeditrack',
    name: 'JediTrack',
    logo: '/img/logos/jeditrack.png',
    color: '#1198f0',
    colorSecondary: '#ef476c',
    colorAccent: '#92d003',
    summary: 'Jeunes en quête de science pour les territoires.',
    description:
      'JediTrack accompagne des jeunes de quartiers prioritaires en France et en Belgique dans une démarche de science citoyenne. Le projet leur propose de concevoir, développer et valoriser des actions scientifiques liées à la qualité de vie dans leur quartier, en développant au passage des compétences clés (programmation, fabrication numérique, gestion de projet).',
    objectives: [
      'Encourager les jeunes à concevoir et promouvoir des actions de science citoyenne liées à leur quartier',
      'Développer des compétences clés : programmation, fabrication numérique, design, gestion de projet',
      'Renforcer le tissu social en impliquant activement les jeunes dans leur communauté',
    ],
    results: [
      'Ressources pratiques pour animer des activités de science citoyenne avec un public jeune',
      'Expériences de terrain transformées en démarche complète et réplicable pour les animateurs',
      'Contenus à vocation éducative, civique et ludique pour stimuler les actions socio-environnementales',
    ],
    partners: [
      { name: 'Les Émulsionneurs', country: 'France', logo: `${P}/les-emulsionneurs.png` },
      {
        name: 'Centre social et culturel Vent des Îles',
        country: 'France',
        logo: `${P}/vent-des-iles.png`,
      },
      { name: 'La Scientothèque', country: 'Belgique', logo: `${P}/la-scientotheque.png` },
    ],
    photos: [
      '/img/photos/projets/jeditrack/Image collée.png',
      '/img/photos/projets/jeditrack/Image collée (2).png',
      '/img/photos/projets/jeditrack/Image collée (3).png',
    ],
    header: '/img/headersprojects/JediTrack.png',
    headerLight: true,
    externalUrl: 'https://jedi-track.notion.site/bienvenue-sur-le-portail-jedi-track',
    funding: 'Erasmus+ KA210 — Partenariat simplifié',
    duration: '2024–2025',
    projectNumber: '2023-3-FR02-KA210-YOU-000170800',
  },
  thedexterlab: {
    id: 'thedexterlab',
    name: 'The Dexter Lab',
    logo: '/img/logos/the-dexter-lab.png',
    color: '#1a4a48',
    colorSecondary: '#1a4a48',
    colorAccent: '#1a4a48',
    summary: "Expériences DIY pour l'enseignement des sciences à distance.",
    description:
      "The Dexter Lab (DIY EXperiments for sustaining science Education in distant learning enviRonment) est né pendant la crise COVID-19. Le projet crée des protocoles et outils pour maintenir les activités d'expérimentation scientifique à l'intérieur et à l'extérieur de la classe, en développant des solutions simples, frugales et financièrement accessibles. Il promeut l'éducation scientifique comme composante essentielle d'un continuum d'apprentissage pour tous.",
    objectives: [
      "Créer des expériences d'apprentissage stimulantes cultivant la pensée critique dans les disciplines STEAM",
      'Promouvoir une éducation scientifique inclusive en combattant les stéréotypes de genre',
      'Développer des technologies abordables avec une approche frugale (DIY)',
      'Soutenir les enseignants dans les modes éducatifs hybrides',
    ],
    results: [
      "Compendium de protocoles scientifiques : fiches d'activités et protocoles expérimentaux STEAM",
      'Dispositifs DIY : outils low-cost, modulaires et réutilisables pour la collecte de données',
      "Ressources de simulation sur plateforme MakeCode pour l'éducation au codage",
      'Supports documentaires pour enseignants et familles',
    ],
    partners: [
      { name: "Université d'Aix-Marseille", country: 'France', logo: `${P}/amu.png` },
      { name: 'Ellinogermaniki Agogi', country: 'Grèce', logo: `${P}/ellinogermaniki.png` },
      { name: 'La Scientothèque', country: 'Belgique', logo: `${P}/la-scientotheque.png` },
      { name: 'Ultralab S.L.', country: 'Espagne', logo: `${P}/ultralab.png` },
      { name: 'ZeUGMA OOD', country: 'Bulgarie', logo: `${P}/zeugma.png` },
    ],
    photos: [
      '/img/photos/projets/the-dexter-lab/Untitled.webp',
      '/img/photos/projets/the-dexter-lab/Untitled (1).webp',
      '/img/photos/projets/the-dexter-lab/Untitled (2).webp',
    ],
    header: '/img/headersprojects/TheDexterLab.png',
    headerLight: true,
    externalUrl: 'https://www.thedexterlab.eu/',
    funding: 'Erasmus+ KA226 — Partenariat de coopération',
    duration: '2021–2023',
    projectNumber: '2020-1-FR01-KA226-SCH-095521',
  },
  'youth-ai-lab': {
    id: 'youth-ai-lab',
    name: 'Youth AI Lab',
    logo: '/img/logos/youth-ai-lab.png',
    color: '#b34520',
    colorSecondary: '#b34520',
    colorAccent: '#b34520',
    summary: "Ligue de jeunes chercheurs autour de l'intelligence artificielle.",
    description:
      "Youth AI Lab (Young Open Understanding of Technology & Human AI Learning) rassemble des organisations de jeunesse européennes pour créer des laboratoires locaux explorant l'intelligence artificielle. Le programme met l'accent sur l'expérimentation pratique, la pensée critique et une approche scientifique pour comprendre les systèmes d'IA générative, permettant aux jeunes de passer du statut de consommateurs passifs à celui de créateurs actifs.",
    objectives: [
      "Autonomiser les jeunes en tant que créateurs, et non seulement consommateurs, de technologies d'IA",
      "Développer la pensée critique et la littératie technologique concernant les systèmes d'IA",
      "Construire des ressources transférables pour les éducateurs de jeunesse à travers l'Europe",
    ],
    results: [
      '10 ateliers par pays participant',
      "12 jeunes mentors engagés à travers l'Europe",
      "18 activités prêt-à-l'emploi pour les éducateurs",
      '5 histoires de succès documentées avec témoignages et vidéos',
    ],
    partners: [
      {
        name: "Laboratoire d'Aix-périmentation et de Bidouille",
        country: 'France',
        logo: `${P}/lab.svg`,
      },
      {
        name: 'Centre social et culturel Vent des Îles',
        country: 'France',
        logo: `${P}/vent-des-iles.png`,
      },
      { name: 'Associazione Perlatecnica', country: 'Italie', logo: `${P}/perlatecnica.jpg` },
      { name: 'Digitale Wolven vzw', country: 'Belgique', logo: `${P}/digitale-wolven.svg` },
      { name: 'Universitat Autònoma de Barcelona', country: 'Espagne', logo: `${P}/uab.png` },
    ],
    photos: [
      '/img/photos/projets/youth-ai-lab/1000016575.webp',
      '/img/photos/projets/youth-ai-lab/ChatGPT_Image_19_mars_2026_10_30_28.webp',
      '/img/photos/projets/youth-ai-lab/WhatsApp_Image_2026-03-12_at_7.54.26_AM.webp',
    ],
    header: '/img/headersprojects/YouthAiLab.png',
    headerLight: true,
    externalUrl: 'https://www.youth-ai-lab.eu/',
    funding: 'Erasmus+ KA220 — Partenariat de coopération',
    duration: '2025–2028',
    projectNumber: '2025-1-FR02-KA220-YOU-000357192',
  },
  'inovmicro-exao': {
    id: 'inovmicro-exao',
    name: 'I-Novmicro #2 — Action EXAO',
    logo: '/img/logos/exao.png',
    color: '#8a6e18',
    colorSecondary: '#8a6e18',
    colorAccent: '#8a6e18',
    summary:
      'Expérimentation assistée par ordinateur avec la carte STeaM32 et des outils open source.',
    description:
      "En se basant sur la carte STeaM32 développée dans le cadre du PIA3, cette action fournit aux enseignants un ensemble de ressources pédagogiques intégrant de l'IoT pour mettre en œuvre une démarche d'ExAO (expérimentation assistée par ordinateur) en utilisant uniquement des outils open source. Les ressources s'adressent aussi bien aux élèves de spécialité en électronique qu'aux collégiens et lycéens en filière générale et technologique.",
    objectives: [
      "Fournir des ressources pédagogiques pour l'ExAO basées sur la carte STeaM32",
      'Utiliser exclusivement des outils open source pour la démarche expérimentale',
      'Adresser un public large : du collège au lycée, filières générales, technologiques et spécialité électronique',
    ],
    results: [],
    partners: [
      {
        name: "Laboratoire d'Aix-périmentation et de Bidouille",
        country: 'France',
        logo: `${P}/lab.svg`,
      },
      { name: 'ST', country: 'France', logo: `${P}/st.svg` },
      {
        name: 'Campus des Métiers et des Qualifications Industrie du Futur',
        country: 'France',
        logo: `${P}/campus-industrie-futur.png`,
      },
    ],
    photos: [
      '/img/photos/projets/inovmicro-exao/Image collée.png',
      '/img/photos/projets/inovmicro-exao/Image collée (2).png',
      '/img/photos/projets/inovmicro-exao/Image collée (3).png',
    ],
    header: '/img/headersprojects/Steami.png',
    headerLight: true,
    externalUrl: 'https://campus-industriefutur-sud.com/i-novmicro/',
    funding: 'France 2030 — Campus des Métiers et des Qualifications',
    duration: '2021–2026',
    projectNumber: '',
  },
  'projets-du-lab': {
    id: 'projets-du-lab',
    name: 'Projets du LAB',
    logo: '/img/logos/wikilab.svg',
    color: '#356bac',
    colorSecondary: '#e83e8c',
    colorAccent: '#fd7e14',
    summary: 'Projets makers documentés et partagés par le fablab.',
    description:
      "Cet espace constitue la mémoire des projets réalisés au sein du fablab. Chaque projet bénéficie d'une page dédiée. En plus de constituer un corpus de documentation, c'est aussi un espace de partage de ressources et de bonnes idées, à la libre disposition de la communauté.",
    objectives: [
      'Documenter et partager les projets réalisés au fablab',
      "Rendre accessible la fabrication numérique et l'expérimentation",
      'Proposer des ressources reproductibles et adaptables par tous',
    ],
    results: [
      'Bobine Tesla Musicale',
      'Harpe Laser Midi',
      'XyloRobot',
      'AquaponAix (système aquaponique connecté)',
      'RobotDuLAB',
      'Random Shield (générateur de bits aléatoires)',
      'Découverte du Bus CAN',
      'Terrarium connecté pour dendrobate',
      'Kit pédagogique pour STM32 IoT Node',
      'Station Météo',
      'Audio HiFi Full numérique',
      'Ampli audio 2x170W TAS3251',
    ],
    partners: [
      {
        name: "Laboratoire d'Aix-périmentation et de Bidouille",
        country: 'France',
        logo: `${P}/lab.svg`,
      },
    ],
    photos: [
      '/img/photos/projets/lab/22638228_4500_2_05.jpg',
      '/img/photos/projets/lab/37076532_7400_7_2_011.jpg',
      '/img/photos/projets/lab/37076542_7400_7_2_021.jpg',
      '/img/photos/projets/lab/37672614_7500_9_03.jpg',
      '/img/photos/projets/lab/38364411_7700_2_01.jpg',
      '/img/photos/projets/lab/54069736_9100_1_2_02.jpg',
    ],
    externalUrl: 'https://www.labaixbidouille.com/',
    funding: 'Projet associatif',
    duration: '',
    projectNumber: '',
  },
};
