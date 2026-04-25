import { useI18n } from '../i18n';
import type { SiteConfig } from '../config';
import { IconArrowDown, IconGithub, IconLinkedin, IconMail, IconPin } from './Icons';
import styles from './Hero.module.css';

export default function Hero({ config }: { config: SiteConfig }) {
  const { t, plural } = useI18n();
  const currentYear = new Date().getFullYear();
  const years = Math.max(1, currentYear - config.careerStartYear);
  const yearsText = plural(years, t.hero.yearsExp as unknown as Record<string, string>);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        {config.openToWork && (
          <span className={styles.badge}>
            <span className={styles.dot} aria-hidden="true" />
            {t.hero.openToWork}
          </span>
        )}
        <h1 className={styles.name}>{config.name}</h1>
        <p className={styles.role}>{t.hero.role}</p>
        <p className={styles.tagline}>{t.hero.tagline}</p>
        <div className={styles.meta}>
          <span>{yearsText}</span>
          <span aria-hidden="true" className={styles.sep}>·</span>
          <span className={styles.location}>
            <IconPin />
            {config.location}
          </span>
        </div>
        <div className={styles.ctas}>
          <a className={styles.ctaPrimary} href={`mailto:${config.email}`}>
            <IconMail />
            {t.hero.ctaContact}
          </a>
          <a
            className={styles.ctaSecondary}
            href={`https://github.com/${config.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <IconGithub />
            {t.hero.ctaGithub}
          </a>
          <a
            className={styles.ctaSecondary}
            href={`https://linkedin.com/in/${config.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <IconLinkedin />
            {t.hero.ctaLinkedin}
          </a>
        </div>
      </div>
      <a href="#about" className={styles.scrollHint} aria-label="Scroll">
        <IconArrowDown />
      </a>
    </section>
  );
}
