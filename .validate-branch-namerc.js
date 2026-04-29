module.exports = {
  pattern:
    '^(main)$|^(chore|feat|fix|docs|ci|refactor|content)\\/([a-z0-9]+-)*[a-z0-9]+$|^release\\/v([0-9]+)\\.([0-9]+)\\.([0-9]+)$',
  errorMsg:
    'Le nom de la branche ne respecte pas nos conventions.\n' +
    'Formats acceptés :\n' +
    '  - main\n' +
    '  - chore|feat|fix|docs|ci|refactor|content/<description-en-kebab-case>\n' +
    '  - release/vX.Y.Z\n' +
    'Tu peux la renommer avec : git branch -m <nom-actuel> <nouveau-nom>',
};
