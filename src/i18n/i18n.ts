import i18n, { InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// Define the initialization options using the InitOptions type from i18next
const i18nConfig: InitOptions = {
    fallbackLng: 'en', // Default language
    lng: 'en', // Initial language
    debug: false, // Enable debug mode (useful for development)
    interpolation: {
        escapeValue: false, // React handles escapings
    },
    backend: {
        loadPath: 'locales/{{lng}}/{{ns}}.json',
    },
};

// Initialize i18n with necessary plugins and configuration
i18n
    .use(Backend) // Load translations using HTTP
    .use(LanguageDetector) // Automatically detect user's language
    .use(initReactI18next) // Integrate with React
    .init(i18nConfig); // Pass the configuration to i18next

export default i18n;
