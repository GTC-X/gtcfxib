import { createTranslator } from "next-intl";
import React from "react";
import TechnicalToolPage from "../pages/TechnicalTools";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/technical-tools`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/technical-tools`;


  return {
    title: t("metaData.expertAnalysis.title"),
    description: t("metaData.expertAnalysis.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <TechnicalToolPage />; 
};

export default Page;
