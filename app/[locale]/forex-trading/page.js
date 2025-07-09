import { createTranslator } from "next-intl";
import React from "react";
import ForexTradingPage from "../pages/ForexTrading";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/forex-trading`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/forex-trading`;


  return {
    title: t("metaData.forex.title"),
    description: t("metaData.forex.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <ForexTradingPage />;
};

export default Page;