import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './Section.module.css';

interface SectionProps {
  id?: string;
  children: ReactNode;
  /** Extra CSS class on the outer <section> */
  className?: string;
  /** Use a narrower container width */
  narrow?: boolean;
}

/**
 * Reusable section wrapper that:
 * 1. Applies consistent vertical padding and max-width container
 * 2. Animates children into view on scroll via Framer Motion
 * 3. Respects prefers-reduced-motion
 */
export function Section({ id, children, className = '', narrow }: SectionProps) {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={`${styles.section} ${narrow ? styles.narrow : ''} ${className}`}
      initial={reduced ? undefined : { opacity: 0, y: 40 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.container}>{children}</div>
    </motion.section>
  );
}
