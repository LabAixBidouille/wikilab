import { useEffect, useRef, type ReactNode } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

type ABCNotationProps = {
  children: string;
  caption?: ReactNode;
  responsive?: boolean;
  staffwidth?: number;
  inline?: boolean;
};

function ABCNotationClient({
  children,
  caption,
  responsive,
  staffwidth,
  inline = false,
}: ABCNotationProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const effectiveResponsive = responsive ?? !inline;
  const effectiveStaffWidth = staffwidth ?? (inline ? 60 : 740);

  useEffect(() => {
    let cancelled = false;
    import('abcjs').then((mod) => {
      if (cancelled || !containerRef.current) return;
      const abcjs = mod.default ?? mod;
      abcjs.renderAbc(containerRef.current, children, {
        responsive: effectiveResponsive ? 'resize' : undefined,
        staffwidth: effectiveStaffWidth,
        paddingleft: 0,
        paddingright: 0,
        paddingtop: 0,
        paddingbottom: 0,
        scale: inline ? 0.7 : 1,
      });
      if (inline && containerRef.current) {
        const svg = containerRef.current.querySelector('svg');
        if (svg) {
          const bbox = (svg as SVGSVGElement).getBBox();
          const pad = 2;
          svg.setAttribute(
            'viewBox',
            `${bbox.x - pad} ${bbox.y - pad} ${bbox.width + pad * 2} ${bbox.height + pad * 2}`,
          );
          svg.setAttribute('width', String(bbox.width + pad * 2));
          svg.setAttribute('height', String(bbox.height + pad * 2));
        }
      }
    });
    return () => {
      cancelled = true;
    };
  }, [children, effectiveResponsive, effectiveStaffWidth, inline]);

  const setRef = (el: HTMLElement | null) => {
    containerRef.current = el;
  };

  if (inline) {
    return (
      <span ref={setRef} className={styles.inline} aria-label="Position de la note sur la portée" />
    );
  }

  return (
    <figure className={styles.figure}>
      <div ref={setRef} className={styles.score} aria-label="Partition musicale" />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

export default function ABCNotation(props: ABCNotationProps): ReactNode {
  return (
    <BrowserOnly
      fallback={
        props.inline ? (
          <span className={styles.inlineFallback}>...</span>
        ) : (
          <div className={styles.fallback}>Chargement de la partition...</div>
        )
      }
    >
      {() => <ABCNotationClient {...props} />}
    </BrowserOnly>
  );
}
