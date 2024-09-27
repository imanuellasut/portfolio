import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import file JSON untuk terjemahan
import translationEN from './locales/en/translation.json';
import translationID from './locales/id/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    id: {
      translation: translationID,
    },
  },
  lng: 'en', // Bahasa default
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
