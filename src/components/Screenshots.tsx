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
  { src: `${BASE}assets/screenshots/onboarding.png`, alt: 'First-run setup asking you to choose the tag format that matches your printer, with OpenSpool selected' },
  { src: `${BASE}assets/screenshots/connect-spoolman.png`, alt: 'First-run setup for connecting to a Spoolman server: URL, authentication options, and a trust-certificates toggle, with the option to skip for now' },
  { src: `${BASE}assets/screenshots/home-dashboard.png`, alt: 'Home dashboard showing spool status across 38 spools, tag coverage, reorder-soon, a colour swatch row, and material statistics by weight' },
  { src: `${BASE}assets/screenshots/tags-tab.png`, alt: 'Tags tab showing tag coverage at 11 percent, options to create a tag from Spoolman or manually, recent tags, and a Scan Tag button' },
  { src: `${BASE}assets/screenshots/spoolman-tab.png`, alt: 'Spoolman tab showing a connected server, counts for spools, filaments, vendors and locations, and a list of recent spools' },
  { src: `${BASE}assets/screenshots/manage-spools-filters.png`, alt: 'Manage Spools list with the sort and filter menu open, offering sort keys plus Filter by Color, Materials, and Show Archived' },
  { src: `${BASE}assets/screenshots/color-filter.png`, alt: 'Filter by Color sheet in Complementary mode, showing a colour spectrum map with anchor and complement rings, a tolerance slider, and four matching spools' },
];

/**
 * Horizontal-scrolling screenshot gallery wrapped in phone-like frames.
 * Uses native CSS scroll-snap for smooth touch/trackpad interaction.
 * Framer Motion handles staggered entrance animation.
 */
export function Screenshots() {
  const reduced = useReducedMotion();

  return (
    <Section id="screenshots" inset>
      <div className={styles.header}>
        <h2 className={styles.title}>See it in action.</h2>
        <p className={styles.subtitle}>
          A native iOS experience built for speed and simplicity.
        </p>
      </div>

      <div className={styles.scrollContainer} role="region" aria-label="App screenshots" tabIndex={0}>
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
                onError={(e) => {
                  // Hide the phone frame if the screenshot fails to load
                  const frame = (e.target as HTMLElement).closest(`.${styles.frame}`);
                  if (frame) (frame as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
