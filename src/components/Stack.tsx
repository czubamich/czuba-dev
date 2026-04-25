import type { ComponentType } from 'react';
import { useI18n } from '../i18n';
import { stack, type StackGroup } from '../data/stack';
import {
  IconCloud,
  IconDatabase,
  IconLayout,
  IconServer,
  IconSparkles,
} from './Icons';
import styles from './Stack.module.css';

const GROUP_ICONS: Record<StackGroup, ComponentType<{ size?: number }>> = {
  backend: IconServer,
  data: IconDatabase,
  cloud: IconCloud,
  frontend: IconLayout,
  ai: IconSparkles,
};

const GROUP_ORDER: StackGroup[] = ['backend', 'data', 'cloud', 'frontend', 'ai'];

export default function Stack() {
  const { t } = useI18n();
  return (
    <section id="stack" className={styles.stack}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t.stack.title}</h2>
        <p className={styles.lead}>{t.stack.lead}</p>
        <div className={styles.grid}>
          {GROUP_ORDER.map((key) => {
            const Icon = GROUP_ICONS[key];
            return (
              <article key={key} className={styles.card}>
                <header className={styles.cardHeader}>
                  <Icon />
                  <h3>{t.stack.groups[key]}</h3>
                </header>
                <ul className={styles.chips}>
                  {stack[key].map((item) => (
                    <li key={item} className={styles.chip}>
                      {item === 'GCP' ? (
                        <>
                          GCP <span className={styles.chipMark}>{t.stack.exPca}</span>
                        </>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
