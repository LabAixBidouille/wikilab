module.exports = {
  rules: [
    {
      filter: '\\.(js|jsx|ts|tsx|md|mdx|yml|yaml|json)$',
      nonBlocking: 'true',
      message: 'Vous avez laissé un FIXME dans votre code',
      regex: /FIXME/,
    },
    {
      filter: '\\.(js|jsx|ts|tsx|md|mdx|yml|yaml|json)$',
      nonBlocking: 'true',
      message: 'Vous avez laissé un TODO dans votre code',
      regex: /TODO/,
    },
    {
      message: 'Marqueurs de conflit Git détectés',
      regex: /^[<>|=]{4,}/m,
    },
    {
      filter: '\\.(js|jsx|ts|tsx)$',
      message: 'console.log oublié',
      regex: /console\.log/,
    },
  ],
};
