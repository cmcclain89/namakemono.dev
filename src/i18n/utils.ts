import { ui, defaultLang } from './ui';

// use Astro.currentLocale for an easy way to use the locale from the URL
export function getLangFromLocale(locale: string) {
  if (locale in ui) return locale as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}