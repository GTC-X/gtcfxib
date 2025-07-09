import { createTranslator } from "next-intl";
import React from "react";
import EconomicNewspage from "../pages/EconomicNews";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/economic-news-feed`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/economic-news-feed`;

  return {
    title: t("tradingTools.ecoNews.metaData.title"),
    description: t("tradingTools.ecoNews.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <EconomicNewspage />;
};

export default Page;