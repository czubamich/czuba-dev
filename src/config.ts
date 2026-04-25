export type Locale = 'pl' | 'en';

export type SiteConfig = {
  name: string;
  careerStartYear: number;
  email: string;
  linkedin: string;
  photoUrl: string;
  accentHue: number;
  defaultLanguage: Locale;
  phone?: string;
  companyTaxId?: string;
  companyRegon?: string;
  github?: string;
};

const FALLBACK: SiteConfig = {
  name: 'Michael Czuba',
  careerStartYear: 2022,
  email: 'contact@czuba.dev',
  linkedin: 'michael-czub-dev',
  photoUrl: '',
  accentHue: 200,
  defaultLanguage: 'pl',
};

export async function loadConfig(): Promise<SiteConfig> {
  try {
    const res = await fetch('/config.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as Partial<SiteConfig>;
    return { ...FALLBACK, ...data };
  } catch {
    return FALLBACK;
  }
}
