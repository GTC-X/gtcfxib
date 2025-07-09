import { createTranslator } from "next-intl";
import React from "react";
import DynamicLervagePage from "../pages/DynamicLervage";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/dynamic-leverage`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/dynamic-leverage`;


  return {
    title: t("metaData.dynamicLeverage.title"),
    description: t("metaData.dynamicLeverage.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <DynamicLervagePage />;
};

export default Page;


