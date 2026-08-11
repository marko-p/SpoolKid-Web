import { Section } from './Section';
import styles from './TagFormats.module.css';

const FORMATS = [
  {
    name: 'OpenSpool',
    type: 'JSON NDEF',
    notes: 'Default format. JSON-based NDEF record.',
    printers: 'Snapmaker U1 (extended FW), OpenSpool-compatible printers',
    color: 'orange' as const,
  },
  {
    name: 'OpenPrintTag',
    type: 'MIME NDEF',
    notes: 'Uses application/vnd.openprinttag MIME type. Device validation in progress.',
    printers: 'OpenPrintTag-compatible tooling',
    color: 'sage' as const,
  },
  {
    name: 'OpenTag3D',
    type: 'MIME NDEF',
    notes: 'Uses application/opentag3d MIME type. Pending verification.',
    printers: 'Community standard for 3D printing NFC tags',
    color: 'sage' as const,
  },
  {
    name: 'Anycubic ACE',
    type: 'Raw pages',
    notes: 'Raw page writes (non-NDEF) for ACE Pro compatibility. Pending verification.',
    printers: 'Anycubic ACE Pro spool holder',
    color: 'sage' as const,
  },
  {
    name: 'ELEGOO',
    type: 'Raw pages',
    notes: 'Raw page format for ELEGOO RFID tags. Decoder built from captured tag dumps; printer-side validation pending.',
    printers: 'ELEGOO printers with RFID spool support',
    color: 'sage' as const,
  },
];

/**
 * Tag format comparison table.
 * Responsive: switches from table to stacked cards on small screens.
 */
export function TagFormats() {
  return (
    <Section id="formats" narrow size="compact">
      <div className={styles.header}>
        <h2 className={styles.title}>Five NFC tag formats. One app.</h2>
        <p className={styles.subtitle}>
          SpoolKid auto-detects the format when reading. Choose your preferred
          write format in Settings.
        </p>
      </div>

      {/* Desktop table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table} role="table">
          <thead>
            <tr>
              <th scope="col">Format</th>
              <th scope="col">Type</th>
              <th scope="col">Printers</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {FORMATS.map((f) => (
              <tr key={f.name}>
                <td className={`${styles.formatName} ${styles[`format_${f.color}`]}`}>{f.name}</td>
                <td><span className={styles.badge}>{f.type}</span></td>
                <td>{f.printers}</td>
                <td className={styles.notes}>{f.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards (visible < 768px) */}
      <div className={styles.cards}>
        {FORMATS.map((f) => (
          <div key={f.name} className={styles.card}>
            <div className={styles.cardHeader}>
              <strong className={`${styles.formatName} ${styles[`format_${f.color}`]}`}>{f.name}</strong>
              <span className={styles.badge}>{f.type}</span>
            </div>
            <p className={styles.cardPrinters}>{f.printers}</p>
            <p className={styles.cardNotes}>{f.notes}</p>
          </div>
        ))}
      </div>

      <p className={styles.callout}>
        OpenSpool is the format I use daily, and the one with the most real-world testing. The
        others are implemented to spec but still need validation on actual hardware — if you have
        an Anycubic ACE Pro, an ELEGOO printer, or OpenPrintTag/OpenTag3D tooling, your findings
        would genuinely help.{' '}
        <a href="https://github.com/marko-p/SpoolKid/issues/new" target="_blank" rel="noopener noreferrer">
          Open an issue
        </a>{' '}
        to share your results.
      </p>
    </Section>
  );
}
