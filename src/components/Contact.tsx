import { useState } from 'react';
import { useI18n } from '../i18n';
import type { SiteConfig } from '../config';
import { IconCheck, IconCopy, IconGithub, IconLinkedin, IconMail } from './Icons';
import styles from './Contact.module.css';

export default function Contact({ config }: { config: SiteConfig }) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(config.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t.contact.title}</h2>
        <p className={styles.lead}>{t.contact.lead}</p>
        <div className={styles.cards}>
          <a className={styles.card} href={`mailto:${config.email}`}>
            <span className={styles.cardIcon}><IconMail size={22} /></span>
            <span className={styles.cardText}>
              <span className={styles.cardLabel}>{t.contact.email}</span>
              <span className={styles.cardValue}>{config.email}</span>
            </span>
            <button
              type="button"
              className={styles.copy}
              onClick={copyEmail}
              aria-label={t.contact.copy}
            >
              {copied ? <IconCheck /> : <IconCopy />}
              <span>{copied ? t.contact.copied : t.contact.copy}</span>
            </button>
          </a>

          <a
            className={styles.card}
            href={`https://github.com/${config.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.cardIcon}><IconGithub size={22} /></span>
            <span className={styles.cardText}>
              <span className={styles.cardLabel}>{t.contact.github}</span>
              <span className={styles.cardValue}>github.com/{config.github}</span>
            </span>
          </a>

          <a
            className={styles.card}
            href={`https://linkedin.com/in/${config.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.cardIcon}><IconLinkedin size={22} /></span>
            <span className={styles.cardText}>
              <span className={styles.cardLabel}>{t.contact.linkedin}</span>
              <span className={styles.cardValue}>linkedin.com/in/{config.linkedin}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
