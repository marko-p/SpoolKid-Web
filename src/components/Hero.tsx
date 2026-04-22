import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './Hero.module.css';

import logoDark from '/assets/spoolkid_dark.png';

/**
 * Hero section with radial gradient glow, animated logo, tagline, and CTAs.
 * The gradient creates a warm spotlight effect using the brand orange.
 */
export function Hero() {
  const reduced = useReducedMotion();

  const fade = reduced
    ? {}
    : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 } };

  return (
    <header className={styles.hero}>
      {/* Radial gradient background glow */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        {/* Animated logo */}
        <motion.img
          src={logoDark}
          alt="SpoolKid app icon — a filament spool with NFC signal waves"
          width={80}
          height={80}
          className={styles.logo}
          {...fade}
          transition={{ duration: 0.6, delay: 0.1 }}
        />

        {/* Heading */}
        <motion.h1
          className={styles.title}
          {...fade}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your NFC filament tag
          <br />
          <span className={styles.accent}>companion for iOS.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={styles.subtitle}
          {...fade}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          An iOS app to manage your 3D printing filament inventory, write NFC
          tags in multiple formats, and keep your physical spools in sync with{' '}
          <a href="https://github.com/Donkie/Spoolman" target="_blank" rel="noopener noreferrer">
            Spoolman
          </a>
          .
        </motion.p>

        {/* CTAs */}
        <motion.div
          className={styles.ctas}
          {...fade}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://testflight.apple.com/join/Y4BmejQk"
            className={styles.primaryCta}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Apple TestFlight icon (inline SVG for performance) */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.7 12.57 5.7C13.36 5.7 14.85 4.63 16.39 4.81C17.03 4.84 18.83 5.08 19.99 6.7C19.88 6.78 17.56 8.12 17.58 10.95C17.61 14.34 20.53 15.45 20.56 15.47C20.53 15.55 20.09 17.04 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                fill="currentColor"
              />
            </svg>
            Join TestFlight Beta
          </a>
          <a
            href="https://github.com/marko-p/SpoolKid"
            className={styles.secondaryCta}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* GitHub icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2C6.477 2 2 6.484 2 12.017C2 16.442 4.865 20.197 8.839 21.521C9.339 21.613 9.521 21.304 9.521 21.038C9.521 20.801 9.513 20.17 9.508 19.335C6.726 19.94 6.139 17.992 6.139 17.992C5.685 16.834 5.029 16.526 5.029 16.526C4.121 15.906 5.098 15.918 5.098 15.918C6.101 15.988 6.629 16.95 6.629 16.95C7.521 18.48 8.97 18.038 9.539 17.782C9.631 17.135 9.889 16.694 10.175 16.444C7.955 16.191 5.62 15.331 5.62 11.493C5.62 10.399 6.01 9.505 6.649 8.805C6.546 8.552 6.203 7.533 6.747 6.155C6.747 6.155 7.587 5.886 9.497 7.18C10.31 6.958 11.16 6.847 12.005 6.843C12.847 6.847 13.7 6.958 14.515 7.18C16.42 5.886 17.258 6.155 17.258 6.155C17.805 7.533 17.461 8.552 17.358 8.805C17.999 9.505 18.385 10.399 18.385 11.493C18.385 15.341 16.047 16.188 13.82 16.435C14.171 16.738 14.492 17.337 14.492 18.253C14.492 19.555 14.48 20.604 14.48 21.038C14.48 21.307 14.659 21.619 15.167 21.519C19.138 20.194 22 16.44 22 12.017C22 6.484 17.522 2 12 2Z"
                fill="currentColor"
              />
            </svg>
            View on GitHub
          </a>
        </motion.div>
      </div>
    </header>
  );
}
