import { useI18n } from '../i18n';
import styles from './Offer.module.css';

const ITEM_ORDER = ['b2b', 'project', 'ai'] as const;

export default function Offer() {
  const { t } = useI18n();
  return (
    <section id="offer" className={styles.offer}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t.offer.title}</h2>
        <p className={styles.lead}>{t.offer.lead}</p>
        <ol className={styles.list}>
          {ITEM_ORDER.map((key, i) => {
            const item = t.offer.items[key];
            return (
              <li key={key} className={styles.item}>
                <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.body}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDesc}>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
