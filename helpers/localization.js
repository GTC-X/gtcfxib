import { AppLanguage } from "../middleware";

export const supportedLanguages = {
  [AppLanguage.English]: {
    code: AppLanguage.English,
    name: "English",
    shortName: "EN",
    direction: "ltr",
    isLeftDirection: true,
    locale: "en-EN",
  },
  [AppLanguage.Arabic]: {
    code: AppLanguage.Arabic,
    name: "العربية",
    shortName: "عربي",
    direction: "rtl",
    isLeftDirection: false,
    font: "font-kufi",
    locale: "ar-AE",
  }
};
