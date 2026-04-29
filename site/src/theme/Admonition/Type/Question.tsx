import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import AdmonitionLayout from '@theme/Admonition/Layout';
import type { Props } from '@theme/Admonition/Type/Info';

const infimaClassName = 'alert alert--info';
const defaultProps = {
  // l'icône est rendue par le CSS (pseudo-element) — voir custom.css
  icon: <span aria-hidden="true" />,
  title: <>Question de recherche</>,
};

export default function AdmonitionTypeQuestion(props: Props): ReactNode {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      type="question"
      className={clsx(infimaClassName, props.className)}
    >
      {props.children}
    </AdmonitionLayout>
  );
}
