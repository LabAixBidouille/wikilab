module.exports = {
  extends: ['@commitlint/config-conventional'],
  // Exempte les messages générés par des GitHub Actions tierces qui poussent
  // sur les PRs (et ne suivent pas Conventional Commits). On ne discipline
  // que les commits humains.
  // - calibreapp/image-actions (workflow optimize-images.yml) : message
  //   non négociable côté action sur la 1.4.1 ; voir issue #154 pour le
  //   passage à un message conforme une fois la PR #151 mergée.
  ignores: [(msg) => msg.startsWith('Optimised images with calibre/image-actions')],
  rules: {
    'subject-case': [0],
    'scope-enum': [
      1,
      'always',
      [
        'wip',
        'configs',
        'formatting',
        'code',
        'ci',
        'docs',
        'catalogue',
        'lets-steam',
        'mimesis',
        'unplugged',
        'jeditrack',
        'robots-meet-arts',
        'steamcity',
        'thedexterlab',
        'youth-ai-lab',
        'magnetics',
        'inovmicro-exao',
        'projets-du-lab',
        'machines',
      ],
    ],
    'body-max-line-length': [1, 'always', 100],
  },
};
