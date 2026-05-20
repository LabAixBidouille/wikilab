module.exports = {
  extends: ['@commitlint/config-conventional'],
  // Exempte les messages générés par des GitHub Actions tierces qui poussent
  // sur les PRs (et ne suivent pas Conventional Commits). On ne discipline
  // que les commits humains.
  // - calibreapp/image-actions (workflow optimize-images.yml) : message
  //   `Optimised images with calibre/image-actions` hardcodé côté action
  //   (pas d'input pour le personnaliser, vérifié sur 1.4.1 et 1.5.0).
  //   Cette exception est notre solution durable, cf. décision sur #154.
  // Match strict sur la 1ʳᵉ ligne du commit (pas `startsWith`) pour qu'un
  // humain ne puisse pas bypasser commitlint en préfixant son message par
  // cette chaîne. Le body éventuel ajouté un jour par l'action n'est pas
  // contraint.
  ignores: [(msg) => msg.split('\n', 1)[0] === 'Optimised images with calibre/image-actions'],
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
