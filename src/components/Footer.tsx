import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../i18n';
import type { SiteConfig } from '../config';
import { IconClose } from './Icons';
import styles from './Footer.module.css';

const SECTION_ORDER = ['controller', 'scope', 'purpose', 'retention', 'rights', 'sharing'] as const;

export default function Footer({ config }: { config: SiteConfig }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => setOpen(false);
    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} {config.name}. {t.footer.rights}
          </span>
          <button
            type="button"
            className={styles.privacyLink}
            onClick={() => setOpen(true)}
          >
            {t.footer.privacy}
          </button>
        </div>
        <div className={styles.legal}>
          <a className={styles.legalLink} href={`mailto:${config.email}`}>
            <span className={styles.legalLabel}>{t.contact.email}</span>{' '}
            {config.email}
          </a>
          {config.phone && (
            <a className={styles.legalLink} href={`tel:${config.phone.replace(/\s+/g, '')}`}>
              <span className={styles.legalLabel}>{t.footer.phone}</span>{' '}
              {config.phone}
            </a>
          )}
          {config.companyTaxId && (
            <span>
              <span className={styles.legalLabel}>{t.footer.taxId}</span>{' '}
              {config.companyTaxId}
            </span>
          )}
          {config.companyRegon && (
            <span>
              <span className={styles.legalLabel}>{t.footer.regon}</span>{' '}
              {config.companyRegon}
            </span>
          )}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClick={(e) => {
          if (e.target === dialogRef.current) setOpen(false);
        }}
      >
        <div className={styles.dialogInner}>
          <header className={styles.dialogHeader}>
            <div>
              <h2 className={styles.dialogTitle}>{t.privacy.title}</h2>
              <p className={styles.dialogUpdated}>{t.privacy.updated}</p>
            </div>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label={t.footer.close}
            >
              <IconClose />
            </button>
          </header>
          <div className={styles.dialogBody}>
            {SECTION_ORDER.map((key) => {
              const section = t.privacy.sections[key];
              return (
                <section key={key} className={styles.section}>
                  <h3 className={styles.sectionTitle}>{section.title}</h3>
                  <p className={styles.sectionBody}>{section.body}</p>
                </section>
              );
            })}
          </div>
        </div>
      </dialog>
    </footer>
  );
}
