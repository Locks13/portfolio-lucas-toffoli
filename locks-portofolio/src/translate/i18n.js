import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import pt from './lenguage/pt.json'
import en from './lenguage/en.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    debug: true,
    lng:"pt",
    react: {
      wait:false,
      useSuspense: true,
    },
    interpolation: {
      escapeValue: false,
    },
    resource: {
      en: en,
      pt: pt
    },
  });


export default i18n;