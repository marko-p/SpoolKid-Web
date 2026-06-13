import styles from './Footer.module.css';

/**
 * Footer with open-source notice, acknowledgments, and links.
 */
export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* Top row: brand + links */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <strong>SpoolKid</strong>
            <p className={styles.tagline}>Your NFC filament tag companion.</p>
          </div>

          <div className={styles.linkGroups}>
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Related</h4>
              <ul>
                <li><a href="https://github.com/Donkie/Spoolman" target="_blank" rel="noopener noreferrer">Spoolman</a></li>
                <li><a href="https://github.com/Donkie/SpoolmanDB" target="_blank" rel="noopener noreferrer">SpoolmanDB</a></li>
                <li><a href="https://github.com/paxx12/SnapmakerU1-Extended-Firmware" target="_blank" rel="noopener noreferrer">U1 Extended FW</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Bottom row */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            Open source under the MIT License. Made for the 3D printing community.
          </p>
          <p className={styles.contact}>
            Built by CRM Sistemi d.o.o.
          </p>
          <p className={styles.acknowledgments}>
            Thanks to{' '}
            <a href="https://github.com/unlucio/" target="_blank" rel="noopener noreferrer">Lucio</a> and{' '}
            <a href="https://github.com/Donkie" target="_blank" rel="noopener noreferrer">Donkie</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
