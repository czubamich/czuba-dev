import { useI18n } from '../i18n';
import styles from './About.module.css';

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t.about.title}</h2>
        <div className={styles.body}>
          <p className={styles.p}>{t.about.p1}</p>
          <p className={styles.p}>{t.about.p2}</p>
        </div>
      </div>
    </section>
  );
}
