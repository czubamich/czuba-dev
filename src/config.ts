export type Locale = 'pl' | 'en';

export type SiteConfig = {
  name: string;
  location: string;
  careerStartYear: number;
  email: string;
  github: string;
  linkedin: string;
  photoUrl: string;
  accentHue: number;
  defaultLanguage: Locale;
  showEducation: boolean;
  openToWork: boolean;
};

const FALLBACK: SiteConfig = {
  name: 'Michael Czuba',
  location: 'Świętochłowice, PL',
  careerStartYear: 2022,
  email: 'contact@czuba.dev',
  github: 'czubamich',
  linkedin: 'michael-czub-dev',
  photoUrl: '',
  accentHue: 200,
  defaultLanguage: 'pl',
  showEducation: true,
  openToWork: false,
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
