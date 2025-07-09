import { createTranslator } from "next-intl";
import React from "react";
import EconomicCalPage from "../pages/EconomicCal";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/economic-calendar`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/economic-calendar`;


  return {
    title: t("metaData.economicCalendar.title"),
    description: t("metaData.economicCalendar.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <EconomicCalPage />;
};

export default Page;