/**
 * Étend React.CSSProperties pour accepter les CSS custom properties
 * (variables CSS commençant par --), ce qui évite les casts dans le code.
 *
 * Sans cette augmentation, TypeScript refuse `style={{ '--ma-var': 'red' }}`
 * car CSSProperties n'a pas de signature d'index pour les clés `--*`.
 */
import 'react';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
