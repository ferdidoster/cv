import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Import translation files
import en from './locals/en.json';
import de from './locals/de.json';

// i18n configuration
i18n
  .use(Backend) // Load translation files
  .use(LanguageDetector) // Detect the user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    fallbackLng: 'en', // Default language
    debug: true, // Enable debug mode for development
    interpolation: {
      escapeValue: false, // React already escapes the values
    },
  });

export default i18n;