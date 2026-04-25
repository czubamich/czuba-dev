import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Locale } from '../config';
import pl from './pl.json';
import en from './en.json';

const dictionaries = { pl, en } as const;
export type Dict = typeof pl;

type PluralForms = Record<string, string>;

type I18nCtx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
  plural: (count: number, forms: PluralForms) => string;
};

const Ctx = createContext<I18nCtx | null>(null);
const STORAGE_KEY = 'czuba.lang';

export function I18nProvider({
  children,
  defaultLocale,
}: {
  children: ReactNode;
  defaultLocale: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return defaultLocale;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'pl' || stored === 'en' ? (stored as Locale) : defaultLocale;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const plural = (count: number, forms: PluralForms) => {
    const pr = new Intl.PluralRules(locale);
    const category = pr.select(count);
    const template = forms[category] ?? forms.other ?? '';
    return template.replace('{n}', String(count));
  };

  return (
    <Ctx.Provider value={{ locale, setLocale: setLocaleState, t: dictionaries[locale] as Dict, plural }}>
      {children}
    </Ctx.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
