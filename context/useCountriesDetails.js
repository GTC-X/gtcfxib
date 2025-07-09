import { useEffect, useState } from "react";
import countries from "i18n-iso-countries";

const locales = [
    "en",
    "ar",
    "zh",
    "ms",
    "tr",
    "ur",
    "hi",
    "id",
    "fr",
    "es",
    "pt",
    "vi",
    "fa",
    "tl",
    "th",
    "ru",
    "ja",
    "ko",
    "ps",
    "it",
    "ml",
];

const useCountriesDetails = (locale) => {
    const [countryList, setCountryList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const registerLocales = async () => {
        await Promise.all(
            locales.map(async (loc) => {
                try {
                    const langData = await import(`i18n-iso-countries/langs/${loc}.json`);
                    countries.registerLocale(langData.default || langData);
                } catch (error) {
                    console.error(`Failed to register locale '${loc}':`, error);
                }
            })
        );
    };

    const fetchCountries = (currentLocale) => {
        const normalizedLocale = currentLocale?.split("-")[0];
        const fallbackLocale = "en";

        // Validate the locale; default to English if invalid
        const validLocale = locales.includes(normalizedLocale)
            ? normalizedLocale
            : fallbackLocale;

        // Fetch names in both the selected language and English
        const namesInLocale = countries.getNames(validLocale);
        const namesInEnglish = countries.getNames(fallbackLocale);

        // Create an array of objects with names in both languages
        const countryListArray = Object.keys(namesInLocale).map((countryCode) => ({
            code: countryCode, // Country code (e.g., "US", "FR")
            name: namesInLocale[countryCode], // Name in the selected language
            nameInEnglish: namesInEnglish[countryCode], // Name in English
        }));

        setCountryList(countryListArray);
    };

    useEffect(() => {
        const initialize = async () => {
            setIsLoaded(false);
            await registerLocales();
            fetchCountries(locale);
            setIsLoaded(true);
        };
        initialize();
    }, [locale]);

    return { countryList, isLoaded };
};

export default useCountriesDetails;
