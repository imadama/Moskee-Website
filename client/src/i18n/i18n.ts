import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import nl from "./locales/nl.json";
import tr from "./locales/tr.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      nl: { translation: nl },
      tr: { translation: tr },
    },
    lng: "nl",
    fallbackLng: "nl",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
