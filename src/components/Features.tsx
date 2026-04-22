import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Section } from './Section';
import styles from './Features.module.css';

/**
 * Feature data — grouped into primary (highlighted) and secondary (compact list).
 * This breaks the identical-card-grid anti-pattern by using two different layouts.
 */
const PRIMARY_FEATURES = [
  {
    label: 'NFC Tag Writing',
    description:
      'Read and write NTAG213/215/216 tags in four formats: OpenSpool, OpenPrintTag, OpenTag3D, and Anycubic ACE. Format auto-detected on read.',
    detail: '4 formats supported',
    color: 'orange' as const,
  },
  {
    label: 'Spoolman Integration',
    description:
      'Browse and manage Spools, Filaments, and Vendors directly from your self-hosted Spoolman instance. Full CRUD with pull-to-refresh.',
    detail: 'Full CRUD',
    color: 'sage' as const,
  },
  {
    label: 'Printer Compatibility',
    description:
      'Snapmaker U1 mode validates and auto-maps material types before writing. Works with extended firmware\'s OpenSpool NFC support. Other 3D printers are pending validation.',
    detail: 'Snapmaker U1 ready',
    color: 'amber' as const,
  },
];

const SECONDARY_FEATURES = [
  {
    label: 'SpoolmanDB Import',
    description: 'Import filament definitions from the global SpoolmanDB catalog. Automatically creates the vendor and filament in your local Spoolman.',
    color: 'sage' as const,
  },
  {
    label: 'Recent Tags',
    description: 'Recently written tags are saved for quick re-use. Configure how many to remember: 5, 10, 20, 50, or 100.',
    color: 'orange' as const,
  },
  {
    label: 'Standalone Mode',
    description: 'Read and write NFC tags without a Spoolman connection. SpoolKid works on its own — set up Spoolman later if you want inventory sync.',
    color: 'amber' as const,
  },
];

export function Features() {
  const reduced = useReducedMotion();

  const fadeUp = reduced
    ? {}
    : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' } };

  return (
    <Section id="features" size="generous">
      {/* Left-aligned header — breaks centered-everything pattern */}
      <motion.div
        className={styles.header}
        {...fadeUp}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.title}>
          Everything you need to tag your filament.
        </h2>
        <p className={styles.subtitle}>
          SpoolKid bridges your physical spool shelf and your digital filament database.
        </p>
      </motion.div>

      {/* Primary features — stacked rows with detail callouts, not identical cards */}
      <div className={styles.primaryList}>
        {PRIMARY_FEATURES.map((feature, i) => (
          <motion.div
            key={feature.label}
            className={styles.primaryItem}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className={styles.primaryContent}>
              <h3 className={styles.primaryLabel}>{feature.label}</h3>
              <p className={styles.primaryDesc}>{feature.description}</p>
            </div>
            <span className={`${styles.primaryDetail} ${styles[`detail_${feature.color}`]}`}>{feature.detail}</span>
          </motion.div>
        ))}
      </div>

      {/* Secondary features — compact, no cards, just clean rows */}
      <motion.div
        className={styles.secondaryList}
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className={styles.secondaryHeading}>Also included</h3>
        {SECONDARY_FEATURES.map((feature) => (
          <div key={feature.label} className={styles.secondaryItem}>
            <strong className={styles.secondaryLabel}>
              <span className={`${styles.dot} ${styles[`dot_${feature.color}`]}`} aria-hidden="true" />
              {feature.label}
            </strong>
            <p className={styles.secondaryDesc}>{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
