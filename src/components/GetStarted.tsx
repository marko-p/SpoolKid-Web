import { Section } from './Section';
import styles from './GetStarted.module.css';

/**
 * Call-to-action section — left-aligned, no wrapping card.
 */
export function GetStarted() {
  return (
    <Section id="get-started" inset>
      <div className={styles.wrapper}>
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.content}>
          <h2 className={styles.title}>Get started with SpoolKid.</h2>
          <p className={styles.subtitle}>
            Join the public TestFlight beta. Found a bug, or want a feature?
            Open an issue on GitHub — I read every one.
          </p>

          <div className={styles.actions}>
            <a
              href="https://testflight.apple.com/join/Y4BmejQk"
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.actionIcon} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.7 12.57 5.7C13.36 5.7 14.85 4.63 16.39 4.81C17.03 4.84 18.83 5.08 19.99 6.7C19.88 6.78 17.56 8.12 17.58 10.95C17.61 14.34 20.53 15.45 20.56 15.47C20.53 15.55 20.09 17.04 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="currentColor"/>
                </svg>
              </span>
              <div>
                <span className={styles.actionLabel}>Join the Beta</span>
                <span className={styles.actionDesc}>Download via TestFlight</span>
              </div>
            </a>

            <a
              href="https://github.com/marko-p/SpoolKid"
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.actionIcon} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017C2 16.442 4.865 20.197 8.839 21.521C9.339 21.613 9.521 21.304 9.521 21.038C9.521 20.801 9.513 20.17 9.508 19.335C6.726 19.94 6.139 17.992 6.139 17.992C5.685 16.834 5.029 16.526 5.029 16.526C4.121 15.906 5.098 15.918 5.098 15.918C6.101 15.988 6.629 16.95 6.629 16.95C7.521 18.48 8.97 18.038 9.539 17.782C9.631 17.135 9.889 16.694 10.175 16.444C7.955 16.191 5.62 15.331 5.62 11.493C5.62 10.399 6.01 9.505 6.649 8.805C6.546 8.552 6.203 7.533 6.747 6.155C6.747 6.155 7.587 5.886 9.497 7.18C10.31 6.958 11.16 6.847 12.005 6.843C12.847 6.847 13.7 6.958 14.515 7.18C16.42 5.886 17.258 6.155 17.258 6.155C17.805 7.533 17.461 8.552 17.358 8.805C17.999 9.505 18.385 10.399 18.385 11.493C18.385 15.341 16.047 16.188 13.82 16.435C14.171 16.738 14.492 17.337 14.492 18.253C14.492 19.555 14.48 20.604 14.48 21.038C14.48 21.307 14.659 21.619 15.167 21.519C19.138 20.194 22 16.44 22 12.017C22 6.484 17.522 2 12 2Z" fill="currentColor"/>
                </svg>
              </span>
              <div>
                <span className={styles.actionLabel}>Source on GitHub</span>
                <span className={styles.actionDesc}>v0.9 snapshot, MIT licensed</span>
              </div>
            </a>

            <a
              href="https://github.com/marko-p/SpoolKid/issues/new"
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.actionIcon} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="16" r="1" fill="currentColor"/>
                </svg>
              </span>
              <div>
                <span className={styles.actionLabel}>Report an Issue</span>
                <span className={styles.actionDesc}>Open a GitHub issue</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
