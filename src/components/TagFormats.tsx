import { Section } from './Section';
import styles from './TagFormats.module.css';

const FORMATS = [
  {
    name: 'OpenSpool',
    type: 'JSON NDEF',
    notes: 'Default format. JSON-based NDEF record.',
    printers: 'Snapmaker U1 (extended FW), OpenSpool-compatible printers',
  },
  {
    name: 'OpenPrintTag',
    type: 'MIME NDEF',
    notes: 'Uses application/vnd.openprinttag MIME type.',
    printers: 'Prusa printers with NFC spool recognition',
  },
  {
    name: 'OpenTag3D',
    type: 'MIME NDEF',
    notes: 'Uses application/opentag3d MIME type.',
    printers: 'Community standard for 3D printing NFC tags',
  },
  {
    name: 'Anycubic ACE',
    type: 'Raw pages',
    notes: 'Raw page writes (non-NDEF) for ACE Pro compatibility.',
    printers: 'Anycubic ACE Pro spool holder',
  },
];

/**
 * Tag format comparison table.
 * Responsive: switches from table to stacked cards on small screens.
 */
export function TagFormats() {
  return (
    <Section id="formats" narrow>
      <div className={styles.header}>
        <h2 className={styles.title}>Four NFC tag formats. One app.</h2>
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
                <td className={styles.formatName}>{f.name}</td>
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
              <strong className={styles.formatName}>{f.name}</strong>
              <span className={styles.badge}>{f.type}</span>
            </div>
            <p className={styles.cardPrinters}>{f.printers}</p>
            <p className={styles.cardNotes}>{f.notes}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
