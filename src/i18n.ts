// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  welcome: 'Welcome to SQL-Campus.de!',
  discover: 'Discover Amazing Features',
  explore: 'Start exploring our services and features to make your experience better.',
};

// German translations
const deTranslations = {
  welcome: 'Willkommen bei SQL-Campus.de!',
  discover: 'Erkunden Sie fantastische Funktionen',
  explore: 'Beginnen Sie damit, unsere Dienstleistungen und Funktionen zu erkunden, um Ihr Erlebnis zu verbessern.',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: enTranslations,
      de: deTranslations,
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;