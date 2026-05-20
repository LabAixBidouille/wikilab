/**
 * Swizzle de DocBreadcrumbs (eject) — copie du composant officiel
 * Docusaurus avec un seul changement : les catégories sans page
 * d'index reçoivent automatiquement un href vers
 * /catalogue?cat=KEY si leur label correspond à une catégorie
 * pédagogique connue (cf. categoryLabels). Cela rend la
 * catégorie cliquable et amène l'utilisateur vers la liste
 * préfiltrée des fiches.
 *
 * Source d'origine :
 *   node_modules/@docusaurus/theme-classic/src/theme/DocBreadcrumbs/index.tsx
 */
import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client';
import { useHomePageRoute } from '@docusaurus/theme-common/internal';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import HomeBreadcrumbItem from '@theme/DocBreadcrumbs/Items/Home';
import DocBreadcrumbsStructuredData from '@theme/DocBreadcrumbs/StructuredData';

// Import depuis le module léger `categories.ts` plutôt que `resources.ts`
// pour ne pas embarquer le tableau `resources` (~4500 lignes) dans le
// bundle des pages docs où DocBreadcrumbs est rendu.
import { categoryLabels, type Category } from '../../data/categories';
import styles from './styles.module.css';

// Map inverse : label affiché → clé Category. Permet de retrouver
// la clé à partir du label rencontré dans le breadcrumb.
const LABEL_TO_CATEGORY: Record<string, Category> = Object.fromEntries(
  (Object.entries(categoryLabels) as [Category, string][]).map(([k, v]) => [v, k]),
);

function BreadcrumbsItemLink({
  children,
  href,
  isLast,
}: {
  children: ReactNode;
  href: string | undefined;
  isLast: boolean;
}): ReactNode {
  const className = 'breadcrumbs__link';
  if (isLast) {
    return <span className={className}>{children}</span>;
  }
  return href ? (
    <Link className={className} href={href}>
      <span>{children}</span>
    </Link>
  ) : (
    <span className={className}>{children}</span>
  );
}

function BreadcrumbsItem({
  children,
  active,
}: {
  children: ReactNode;
  active?: boolean;
}): ReactNode {
  return (
    <li
      className={clsx('breadcrumbs__item', {
        'breadcrumbs__item--active': active,
      })}
    >
      {children}
    </li>
  );
}

export default function DocBreadcrumbs(): ReactNode {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();
  // useBaseUrl prend en compte le sous-chemin éventuel (baseUrl
  // de docusaurus.config.ts) — important pour le déploiement GH Pages.
  const catalogueBase = useBaseUrl('/catalogue');

  if (!breadcrumbs) {
    return null;
  }

  return (
    <>
      <DocBreadcrumbsStructuredData breadcrumbs={breadcrumbs} />
      <nav
        className={clsx(ThemeClassNames.docs.docBreadcrumbs, styles.breadcrumbsContainer)}
        aria-label={translate({
          id: 'theme.docs.breadcrumbs.navAriaLabel',
          message: 'Breadcrumbs',
          description: 'The ARIA label for the breadcrumbs',
        })}
      >
        <ul className="breadcrumbs">
          {homePageRoute && <HomeBreadcrumbItem />}
          {breadcrumbs.map((item, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            const isUnlisted = item.type === 'category' && item.linkUnlisted;
            let href: string | undefined = isUnlisted ? undefined : item.href;

            // Pour les catégories sans href (= pas de page d'index)
            // dont le label correspond à une catégorie pédagogique
            // connue, on génère un lien vers le catalogue préfiltré.
            // On exclut les `linkUnlisted` : Docusaurus a volontairement
            // retiré leur lien, on respecte cette intention.
            if (!href && !isUnlisted && item.type === 'category') {
              const catKey = LABEL_TO_CATEGORY[item.label];
              if (catKey) {
                href = `${catalogueBase}?cat=${catKey}`;
              }
            }

            return (
              <BreadcrumbsItem key={idx} active={isLast}>
                <BreadcrumbsItemLink href={href} isLast={isLast}>
                  {item.label}
                </BreadcrumbsItemLink>
              </BreadcrumbsItem>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
