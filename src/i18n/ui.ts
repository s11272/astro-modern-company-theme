import en from './en.json';
import pl from './pl.json';

export const languages = {
  en: 'English',
  pl: 'Polski',
};

export const defaultLang = 'en';

export const showDefaultLang = false;

export const ui = {
  en,
  pl,
} as const;

export type Lang = keyof typeof ui; 