import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import translationPt from './lenguage/pt/translation.json'
import translationEn from './lenguage/en/translation.json'

const resources = {
  en: {
    translation: translationEn
  },
  pt: {
    translation: translationPt
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    fallbackLng: 'pt',
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    },
    react: { useSuspense: false },
  });

export default i18n;