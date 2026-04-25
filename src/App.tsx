import { useEffect, useState } from 'react';
import { loadConfig, type SiteConfig } from './config';
import { I18nProvider } from './i18n';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Offer from './components/Offer';
import Process from './components/Process';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [config, setConfig] = useState<SiteConfig | null>(null);

  useEffect(() => {
    loadConfig().then((c) => {
      document.documentElement.style.setProperty('--hue', String(c.accentHue));
      setConfig(c);
    });
  }, []);

  if (!config) return null;

  return (
    <I18nProvider defaultLocale={config.defaultLanguage}>
      <Nav />
      <main>
        <Hero config={config} />
        <About />
        <Offer />
        <Process />
        <Stack />
        <Contact config={config} />
      </main>
      <Footer config={config} />
    </I18nProvider>
  );
}
