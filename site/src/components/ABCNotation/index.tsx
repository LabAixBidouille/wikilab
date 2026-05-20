import { useEffect, useRef, useState, type ReactNode } from 'react';
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
  // Types abcjs non exposés en TS strict : on garde any pour cette première
  // exploration audio. À typer correctement quand le contrat sera figé.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const visualObjRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const abcjsRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const synthRef = useRef<any>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const stopTimerRef = useRef<number | null>(null);
  const [audioSupported, setAudioSupported] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);

  const effectiveResponsive = responsive ?? !inline;
  const effectiveStaffWidth = staffwidth ?? (inline ? 60 : 740);

  useEffect(() => {
    let cancelled = false;
    import('abcjs').then((mod) => {
      if (cancelled || !containerRef.current) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const abcjs: any = (mod as any).default ?? mod;
      abcjsRef.current = abcjs;
      const visualObjs = abcjs.renderAbc(containerRef.current, children, {
        responsive: effectiveResponsive ? 'resize' : undefined,
        staffwidth: effectiveStaffWidth,
        paddingleft: 0,
        paddingright: 0,
        paddingtop: 0,
        paddingbottom: 0,
        scale: inline ? 0.7 : 1,
      });
      visualObjRef.current = visualObjs?.[0] ?? null;

      // Le synthé n'est exposé qu'en mode non-inline (UX trop chargée
      // pour les mini-portées d'illustration). `supportsAudio` vérifie
      // que WebAudio est dispo côté navigateur.
      if (!inline && abcjs.synth && typeof abcjs.synth.supportsAudio === 'function') {
        setAudioSupported(Boolean(abcjs.synth.supportsAudio()));
      }

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
      if (stopTimerRef.current !== null) {
        window.clearTimeout(stopTimerRef.current);
        stopTimerRef.current = null;
      }
      if (synthRef.current) {
        try {
          synthRef.current.stop();
        } catch {
          /* noop */
        }
        synthRef.current = null;
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => undefined);
        audioCtxRef.current = null;
      }
    };
  }, [children, effectiveResponsive, effectiveStaffWidth, inline]);

  const setRef = (el: HTMLElement | null) => {
    containerRef.current = el;
  };

  async function handlePlay() {
    const abcjs = abcjsRef.current;
    const visualObj = visualObjRef.current;
    if (!abcjs || !visualObj) return;

    setIsLoadingAudio(true);
    try {
      // L'AudioContext ne peut être créé que dans le gestionnaire d'un geste
      // utilisateur (Chrome/Safari). Comme handlePlay est branché sur onClick,
      // on est OK.
      if (!audioCtxRef.current) {
        const AC =
          window.AudioContext ??
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).webkitAudioContext;
        audioCtxRef.current = new AC();
      }
      if (audioCtxRef.current!.state === 'suspended') {
        await audioCtxRef.current!.resume();
      }

      const synth = new abcjs.synth.CreateSynth();
      await synth.init({
        visualObj,
        audioContext: audioCtxRef.current,
        millisecondsPerMeasure:
          typeof visualObj.millisecondsPerMeasure === 'function'
            ? visualObj.millisecondsPerMeasure()
            : undefined,
      });
      await synth.prime();
      synthRef.current = synth;
      synth.start();
      setIsPlaying(true);

      // CreateSynth ne signale pas la fin de lecture : on déclenche un
      // timer basé sur la durée totale + petite marge.
      const totalSec =
        typeof visualObj.getTotalTime === 'function' ? Number(visualObj.getTotalTime()) : 0;
      if (totalSec > 0) {
        stopTimerRef.current = window.setTimeout(
          () => {
            setIsPlaying(false);
            synthRef.current = null;
            stopTimerRef.current = null;
          },
          totalSec * 1000 + 200,
        );
      }
    } catch (e) {
      // En cas d'échec (soundfont indisponible, autorisation audio),
      // on log et on remet le bouton en état initial.
      // eslint-disable-next-line no-console
      console.error('ABCNotation audio play failed:', e);
      setIsPlaying(false);
    } finally {
      setIsLoadingAudio(false);
    }
  }

  function handleStop() {
    if (stopTimerRef.current !== null) {
      window.clearTimeout(stopTimerRef.current);
      stopTimerRef.current = null;
    }
    if (synthRef.current) {
      try {
        synthRef.current.stop();
      } catch {
        /* noop */
      }
      synthRef.current = null;
    }
    setIsPlaying(false);
  }

  if (inline) {
    return (
      <span ref={setRef} className={styles.inline} aria-label="Position de la note sur la portée" />
    );
  }

  return (
    <figure className={styles.figure}>
      <div ref={setRef} className={styles.score} aria-label="Partition musicale" />
      {audioSupported && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.playButton}
            onClick={isPlaying ? handleStop : handlePlay}
            disabled={isLoadingAudio}
            aria-label={isPlaying ? 'Arrêter la lecture' : 'Écouter la mélodie'}
          >
            {isLoadingAudio ? '⏳ Chargement…' : isPlaying ? '⏹ Arrêter' : '▶ Écouter'}
          </button>
        </div>
      )}
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
