import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Section } from './Section';
import styles from './Screenshots.module.css';

/** Vite injects the base path (e.g. '/SpoolKid-Web/') so assets resolve on GH Pages */
const BASE = import.meta.env.BASE_URL;

/**
 * Screenshot metadata. Alt text is descriptive for screen readers.
 */
const SCREENSHOTS = [
  { src: `${BASE}assets/screenshots/onboarding.png`, alt: 'SpoolKid onboarding screen showing NFC tag format selection: OpenSpool, OpenPrintTag, OpenTag3D, and Anycubic ACE' },
  { src: `${BASE}assets/screenshots/connect-spoolman.png`, alt: 'Connect to Spoolman setup screen with server URL, authentication options, and certificate trust toggle' },
  { src: `${BASE}assets/screenshots/create-tag.png`, alt: 'Create Tag screen showing filament details (material, color, brand), printing parameters, and Write to NFC Tag button' },
  { src: `${BASE}assets/screenshots/manage-spoolman.png`, alt: 'Spoolman management hub with options to manage Spools, Filaments, and Vendors' },
  { src: `${BASE}assets/screenshots/manage-filaments.png`, alt: 'Filament list showing various PLA Silk Dual and Tri Color filaments from AzureFilm with color indicators' },
  { src: `${BASE}assets/screenshots/add-filament.png`, alt: 'Add Filament form with fields for name, material, vendor, color, physical properties, and temperatures' },
];

/**
 * Horizontal-scrolling screenshot gallery wrapped in phone-like frames.
 * Uses native CSS scroll-snap for smooth touch/trackpad interaction.
 * Framer Motion handles staggered entrance animation.
 */
export function Screenshots() {
  const reduced = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Section id="screenshots">
      <div className={styles.header}>
        <h2 className={styles.title}>See it in action.</h2>
        <p className={styles.subtitle}>
          A native iOS experience built for speed and simplicity.
        </p>
      </div>

      <div className={styles.scrollContainer} ref={scrollRef} role="region" aria-label="App screenshots" tabIndex={0}>
        {SCREENSHOTS.map((shot, i) => (
          <motion.div
            key={shot.src}
            className={styles.frame}
            initial={reduced ? undefined : { opacity: 0, scale: 0.92 }}
            whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            {/* Phone bezel wrapper */}
            <div className={styles.phone}>
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                width={280}
                height={607}
                className={styles.screenshot}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
