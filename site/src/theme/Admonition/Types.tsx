import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import AdmonitionTypeQuestion from './Type/Question';
import AdmonitionTypeHypothese from './Type/Hypothese';

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  question: AdmonitionTypeQuestion,
  hypothese: AdmonitionTypeHypothese,
};

export default AdmonitionTypes;
