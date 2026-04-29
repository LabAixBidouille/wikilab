/* eslint-disable no-useless-escape */
module.exports = {
  display: {
    notifications: true,
    offendingContent: true,
    rulesSummary: false,
    shortStats: true,
    verbose: false,
  },
  rules: [
    {
      // \x4d = 'M', \x44 = 'D' : empêche le hook de matcher son propre message d'erreur
      message: 'Aurais-tu oublié de terminer certaines tâches ?',
      nonBlocking: true,
      regex: /FIX\x4dE|TO\x44O/,
    },
    {
      message: 'Marqueurs de conflit Git détectés',
      regex: /^[<>|=]{4,}/m,
    },
    {
      filter: /\.(js|jsx|ts|tsx)$/,
      message: 'console.log oublié',
      nonBlocking: true,
      regex: /^\s*console\.log/,
    },
  ],
};
