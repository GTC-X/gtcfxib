import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useLocationDetail } from "@/context/useLocationDetail";

const LiveAccountButton = ({ hoverStyle, link }) => {
  const t = useTranslations("home.hero");
  const { countryCode } = useLocationDetail();
  const locale = useLocale(); // Get the current locale

  // Define lists of countries
  const europeanCountries = ['AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'];
  
  const isEuropean = countryCode && europeanCountries.includes(countryCode);
  const isChilean = countryCode === 'CL'; // Check if the country is Chile
  const isJapanese = countryCode === 'JP';
  const isPakistani = countryCode === 'PK';
  const isIndian = countryCode === 'IN';
  const isFarsi = locale === 'fa-IR'; // Check if the locale is Farsi (Iran)

  // Define links for different regions
  const baseLink = isFarsi ? 'https://mygtcportal.com/getview?view=register&token=ezq6owwwrowwwwww' :
                    isEuropean ? 'https://mygtcportal.com/getview?view=register&token=ezq6owwwrowwwwww' :
                    isChilean ? 'https://mygtcportal.com/getview?view=register&token=ezq6owwwrowwwwww' : // Chile token
                    isJapanese ? 'https://mygtcportal.com/getview?view=register&token=ezq6owwwrowwwwww' :
                    isPakistani ? 'https://mygtcportal.com/getview?view=register&token=ezq6owwwrowwwwww' :
                    isIndian ? 'https://mygtcportal.com/getview?view=register&token=ezq6owwwrowwwwww' :
                    'https://mygtcportal.com/getview?view=register&token=ezq6owwwrowwwwww'; // Default link
  
  const finalLink = link || baseLink;

  return (
    <Link
  href={finalLink}
  target="_blank"
  className={`text-sm 3xl:text-xl px-8 py-3 text-center rounded-md md:w-auto w-[300px] md:m-0 mx-auto transition-colors duration-500 ${hoverStyle || 'text-primary bg-gradient-to-b from-primary via-primary to-primary hover:bg-gradient-to-r hover:from-secondary hover:to-[#b68756]'}`}
>
  {t("liveAccount")}
</Link>
  );
};

export default LiveAccountButton;
