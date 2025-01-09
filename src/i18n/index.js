import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en.json';
import es from './es.json';

i18n
  .use(LanguageDetector) // Detects user's language
  .use(initReactI18next) // Passes i18n to React
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
