import { Section } from './Section';
import styles from './Support.module.css';

/**
 * Support section — honest explanation of the project's running costs,
 * with donation links for GitHub Sponsors and Ko-fi.
 */
export function Support() {
  return (
    <Section id="support" narrow size="compact">
      <div className={styles.header}>
        <h2 className={styles.title}>Keep SpoolKid alive.</h2>
        <p className={styles.subtitle}>
          Distributing an iOS app with NFC access requires an active Apple Developer membership —
          and that is only one of the running costs. There is test hardware, the tags themselves,
          and the subscriptions and services the project depends on. No ads, no tracking, no
          investors.
        </p>
        <p className={styles.subtitle}>
          If SpoolKid saves you time or makes your filament workflow better, consider helping
          cover the costs.
        </p>
      </div>

      <div className={styles.actions}>
        <a
          href="https://github.com/sponsors/marko-p"
          className={styles.action}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.actionIcon} aria-hidden="true">
            {/* GitHub Sponsors heart icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z"
                fill="currentColor"
              />
            </svg>
          </span>
          <div>
            <span className={styles.actionLabel}>Sponsor on GitHub</span>
            <span className={styles.actionDesc}>github.com/sponsors/marko-p</span>
          </div>
        </a>

        <a
          href="https://ko-fi.com/spoolkid"
          className={styles.action}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.actionIcon} aria-hidden="true">
            {/* Ko-fi coffee cup icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 8h1a4 4 0 0 1 0 8h-1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="6" y1="1" x2="6" y2="4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="10" y1="1" x2="10" y2="4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="14" y1="1" x2="14" y2="4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <div>
            <span className={styles.actionLabel}>Buy a Coffee on Ko-fi</span>
            <span className={styles.actionDesc}>ko-fi.com/spoolkid</span>
          </div>
        </a>
      </div>
    </Section>
  );
}
