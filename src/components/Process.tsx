import { useI18n } from '../i18n';
import styles from './Process.module.css';

const STEP_ORDER = ['talk', 'estimate', 'build', 'deploy'] as const;

export default function Process() {
  const { t } = useI18n();
  return (
    <section id="process" className={styles.process}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t.process.title}</h2>
        <p className={styles.lead}>{t.process.lead}</p>
        <ol className={styles.steps}>
          {STEP_ORDER.map((key, i) => {
            const step = t.process.items[key];
            return (
              <li key={key} className={styles.step}>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.body}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
