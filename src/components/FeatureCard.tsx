import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  /** Stagger index for entrance animation */
  index: number;
}

/**
 * Individual feature card with hover lift + glow effect.
 * Uses staggered entrance animation based on index.
 */
export function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className={styles.card}
      initial={reduced ? undefined : { opacity: 0, y: 30 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={reduced ? undefined : { y: -4, transition: { duration: 0.2 } }}
    >
      <span className={styles.icon} aria-hidden="true">{icon}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </motion.article>
  );
}
