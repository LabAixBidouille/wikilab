import MDXComponents from '@theme-original/MDXComponents';
import PdfLink from '@site/src/components/PdfLink';

// Rend <PdfLink> disponible dans toutes les fiches MDX sans import explicite.
export default {
  ...MDXComponents,
  PdfLink,
};
