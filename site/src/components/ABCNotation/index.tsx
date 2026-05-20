import { useEffect, useRef, type ReactNode } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

type ABCNotationProps = {
  children: string;
  caption?: ReactNode;
  responsive?: boolean;
  staffwidth?: number;
};

function ABCNotationClient({
  children,
  caption,
  responsive = true,
  staffwidth = 740,
}: ABCNotationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    import('abcjs').then((mod) => {
      if (cancelled || !containerRef.current) return;
      const abcjs = mod.default ?? mod;
      abcjs.renderAbc(containerRef.current, children, {
        responsive: responsive ? 'resize' : undefined,
        staffwidth,
        paddingleft: 0,
        paddingright: 0,
        paddingtop: 0,
        paddingbottom: 0,
      });
    });
    return () => {
      cancelled = true;
    };
  }, [children, responsive, staffwidth]);

  return (
    <figure className={styles.figure}>
      <div ref={containerRef} className={styles.score} aria-label="Partition musicale" />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

export default function ABCNotation(props: ABCNotationProps): ReactNode {
  return (
    <BrowserOnly fallback={<div className={styles.fallback}>Chargement de la partition…</div>}>
      {() => <ABCNotationClient {...props} />}
    </BrowserOnly>
  );
}
