import { useState } from 'react';
import { useI18n } from '../i18n';
import type { SiteConfig } from '../config';
import styles from './About.module.css';

export default function About({ config }: { config: SiteConfig }) {
  const { t } = useI18n();
  const [photoBroken, setPhotoBroken] = useState(false);
  const showPhoto = Boolean(config.photoUrl) && !photoBroken;
  const initials = config.name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t.about.title}</h2>
        <div className={styles.grid}>
          <div className={styles.photoWrap}>
            {showPhoto ? (
              <img
                className={styles.photo}
                src={config.photoUrl}
                alt={config.name}
                loading="lazy"
                onError={() => setPhotoBroken(true)}
              />
            ) : (
              <div className={styles.photoFallback} aria-hidden="true">
                {initials || 'MC'}
              </div>
            )}
          </div>
          <div className={styles.text}>
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        {config.showEducation && (
          <div className={styles.education}>
            <h3 className={styles.eduTitle}>{t.about.education.title}</h3>
            <ul className={styles.eduList}>
              {t.about.education.items.map((item, i) => (
                <li key={i} className={styles.eduItem}>
                  <span className={styles.eduYears}>{item.years}</span>
                  <div className={styles.eduDetails}>
                    <strong>
                      {item.degree} · {item.field}
                    </strong>
                    <span className={styles.eduSchool}>{item.school}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
