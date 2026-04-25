import { useI18n } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Nav.module.css';

export default function Nav() {
  const { t } = useI18n();
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.brand} aria-label="Home">
          <span>M</span>C
        </a>
        <div className={styles.links}>
          <a href="#about">{t.nav.about}</a>
          <a href="#stack">{t.nav.stack}</a>
          <a href="#contact">{t.nav.contact}</a>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
