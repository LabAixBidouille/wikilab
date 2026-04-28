import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Wiki@LAB',
  tagline: 'Ressources issues des projets éducatifs, créatifs et makers du L.A.B',
  favicon: 'img/favicon.ico',
  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/favicon-192.png'},
    },
  ],

  future: {
    v4: true,
  },

  url: 'https://wiki.labaixbidouille.com',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'LabAixBidouille',
  projectName: 'wikilab',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'machines-guides',
        path: 'machines',
        routeBasePath: 'machines',
        sidebarPath: './sidebars-machines.ts',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'ressources',
          admonitions: {
            keywords: ['question', 'hypothese'],
            extendDefaults: true,
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['fr', 'en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: ['/ressources', '/machines'],
      },
    ],
  ],

  themeConfig: {
    image: 'img/wikilab-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Wiki@LAB',
      logo: {
        alt: 'Wikilab',
        src: 'img/logos/wikilab.svg',
      },
      items: [
        {
          to: '/catalogue',
          label: 'Catalogue des ressources',
          position: 'left',
        },
        {
          to: '/machines',
          label: 'Nos machines',
          position: 'left',
        },
        {
          to: '/about',
          label: 'À propos',
          position: 'right',
        },
        {
          to: '/projets',
          label: 'Nos actions',
          position: 'right',
        },
        {
          href: 'https://www.labaixbidouille.com/',
          label: 'Site du LAB',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigation',
          items: [
            {label: 'À propos', to: '/about'},
            {label: 'Nos actions', to: '/projets'},
            {label: 'Catalogue des ressources', to: '/catalogue'},
            {label: 'Nos machines', to: '/machines'},
          ],
        },
        {
          title: 'Licence & contact',
          items: [
            {
              label: 'Creative Commons BY-SA 4.0',
              href: 'https://creativecommons.org/licenses/by-sa/4.0/deed.fr',
            },
            {
              label: 'Contact',
              href: 'mailto:contact@labaixbidouille.com',
            },
          ],
        },
        {
          title: 'Nos actions',
          items: [
            {label: 'Projets du LAB', to: '/projets/projets-du-lab'},
            {label: "Let's STEAM", to: '/projets/lets-steam'},
            {label: 'Mimesis', to: '/projets/mimesis'},
            {label: 'Robots Meet Arts', to: '/projets/robots-meet-arts'},
            {label: 'SteamCity', to: '/projets/steamcity'},
            {label: 'Unplugged', to: '/projets/unplugged'},
            {label: 'The Dexter Lab', to: '/projets/the-dexter-lab'},
            {label: 'JediTrack', to: '/projets/jeditrack'},
            {label: 'Youth AI Lab', to: '/projets/youth-ai-lab'},
            {label: 'I-Novmicro #2', to: '/projets/inovmicro-exao'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Wiki@LAB — Laboratoire d'Aix-périmentation et de Bidouille. Contenu sous licence Creative Commons BY-SA 4.0.`,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 2,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
