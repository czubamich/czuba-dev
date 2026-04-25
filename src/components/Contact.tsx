import { useI18n } from '../i18n';
import type { SiteConfig } from '../config';
import { IconGithub, IconLinkedin, IconMail } from './Icons';
import styles from './Contact.module.css';

export default function Contact({ config }: { config: SiteConfig }) {
  const { t } = useI18n();

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t.contact.title}</h2>
        <p className={styles.lead}>{t.contact.lead}</p>

        <a className={styles.cta} href={`mailto:${config.email}`}>
          <IconMail size={20} />
          <span className={styles.ctaText}>{t.contact.cta}</span>
          <span className={styles.ctaEmail}>{config.email}</span>
        </a>

        <div className={styles.socials}>
          <a
            className={styles.social}
            href={`https://linkedin.com/in/${config.linkedin}`}
            target="_blank"
            rel="noreferrer"
            aria-label={t.contact.linkedin}
          >
            <IconLinkedin size={20} />
            <span>{t.contact.linkedin}</span>
          </a>
          {config.github && (
            <a
              className={styles.social}
              href={`https://github.com/${config.github}`}
              target="_blank"
              rel="noreferrer"
              aria-label={t.contact.github}
            >
              <IconGithub size={20} />
              <span>{t.contact.github}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
