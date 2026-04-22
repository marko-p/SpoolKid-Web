import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './Navbar.module.css';

import logoLight from '/assets/spoolkid.png';

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#screenshots', label: 'Screenshots' },
  { href: '#formats', label: 'Tag Formats' },
  { href: '#get-started', label: 'Get Started' },
];

export function Navbar() {
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* Close on Escape */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen, closeMenu]);

  /* Close mobile menu if viewport grows past mobile breakpoint */
  useEffect(() => {
    if (!menuOpen) return;
    const mql = window.matchMedia('(min-width: 768px)');
    const onChange = () => { if (mql.matches) closeMenu(); };
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [menuOpen, closeMenu]);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      aria-label="Main navigation"
    >
      <div className={styles.inner}>
        <a href="#" className={styles.brand} aria-label="SpoolKid home">
          <img src={logoLight} alt="" width={32} height={32} className={styles.logo} />
          <span className={styles.brandName}>SpoolKid</span>
        </a>

        <ul className={styles.links} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className={styles.mobileMenu}
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ul role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.mobileLink} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
