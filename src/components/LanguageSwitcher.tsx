import { useI18n } from '../i18n';
import type { Locale } from '../config';
import styles from './LanguageSwitcher.module.css';

const LOCALES: Locale[] = ['pl', 'en'];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  return (
    <div className={styles.switcher} role="group" aria-label="Language">
      {LOCALES.map((l, i) => (
        <span key={l} className={styles.item}>
          {i > 0 && <span className={styles.sep} aria-hidden="true">·</span>}
          <button
            type="button"
            className={locale === l ? styles.active : styles.button}
            onClick={() => setLocale(l)}
            aria-pressed={locale === l}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
