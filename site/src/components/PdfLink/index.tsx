import { type ReactNode, type CSSProperties } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type PdfLinkProps = {
  // Chemin local de l'asset, p. ex. "/pdf/lets-steam/LS_R1AS01_LED_FR.pdf".
  href: string;
  // Couleur du bouton. Défaut : rose des projets. SteamCity passe "#DD5350".
  color?: string;
  children: ReactNode;
};

// Centralise le bouton de téléchargement PDF et la résolution d'URL.
// Quand `assetsBaseUrl` (customField, piloté par ASSETS_BASE_URL) est vide,
// le lien reste local (`/pdf/...`) ; sinon il est préfixé par le domaine du
// repo d'assets (cf. #203). Bascule local ↔ prod sans réécrire les fiches.
export default function PdfLink({ href, color = '#e83e8c', children }: PdfLinkProps) {
  const { siteConfig } = useDocusaurusContext();
  const base = (siteConfig.customFields?.assetsBaseUrl as string) ?? '';
  const resolved = href.startsWith('/pdf/') ? `${base}${href}` : href;

  const style: CSSProperties = {
    display: 'inline-block',
    backgroundColor: color,
    color: '#fff',
    borderRadius: '20px',
    padding: '0.5rem 1.5rem',
    fontWeight: 700,
    textDecoration: 'none',
    fontSize: '0.95rem',
  };

  return (
    <a href={resolved} target="_blank" rel="noopener noreferrer" style={style}>
      {children}
    </a>
  );
}
