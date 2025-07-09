import { createTranslator } from "next-intl";
import React from "react";
import RestrictedCountriesPage from "../pages/RestrictedCountries";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/restricted-countries`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/restricted-countries`;


  return {
    title: t("metaData.restrictedCountries.title"),
    description: t("metaData.restrictedCountries.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <RestrictedCountriesPage />;
};

export default Page;