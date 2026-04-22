import { Section } from './Section';
import { FeatureCard } from './FeatureCard';
import styles from './Features.module.css';

/**
 * Feature data -- each maps to a key SpoolKid capability.
 * Using native emoji as icons keeps bundle size small
 * while remaining visually clear.
 */
const FEATURES = [
  {
    icon: '📡',
    title: 'NFC Tag Writing',
    description:
      'Read and write NTAG213/215/216 tags in four formats: OpenSpool, OpenPrintTag, OpenTag3D, and Anycubic ACE. Format auto-detected on read.',
  },
  {
    icon: '🗄️',
    title: 'Spoolman Integration',
    description:
      'Browse and manage Spools, Filaments, and Vendors directly from your self-hosted Spoolman instance. Full CRUD with pull-to-refresh.',
  },
  {
    icon: '📦',
    title: 'SpoolmanDB Import',
    description:
      'Import filament definitions from the global SpoolmanDB catalog. Automatically creates the vendor and filament in your local Spoolman.',
  },
  {
    icon: '🕐',
    title: 'Recent Tags',
    description:
      'Recently written tags are saved for quick re-use. Configure how many to remember: 5, 10, 20, 50, or 100.',
  },
  {
    icon: '🖨️',
    title: 'Printer Compatibility',
    description:
      'Snapmaker U1 mode validates and auto-maps material types before writing. Works with extended firmware\'s OpenSpool NFC support.',
  },
  {
    icon: '✈️',
    title: 'Offline Mode',
    description:
      'Read and write NFC tags without a Spoolman connection. Perfect for tagging spools on the go or when your server is offline.',
  },
];

/**
 * Features section -- renders a responsive 3-column grid of FeatureCards.
 */
export function Features() {
  return (
    <Section id="features">
      <div className={styles.header}>
        <h2 className={styles.title}>Everything you need to tag your filament.</h2>
        <p className={styles.subtitle}>
          SpoolKid bridges the gap between your physical spool shelf and your
          digital filament database.
        </p>
      </div>
      <div className={styles.grid}>
        {FEATURES.map((feature, i) => (
          <FeatureCard key={feature.title} {...feature} index={i} />
        ))}
      </div>
    </Section>
  );
}
