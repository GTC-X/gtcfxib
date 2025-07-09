import { createTranslator } from "next-intl";
import React from "react";
import SocialTradingPage from "../pages/SocialTrading";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/copy-trading`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/copy-trading`;

  return {
    title: t("metaData.copyTrading.title"),
    description: t("metaData.copyTrading.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <SocialTradingPage />;
};

export default Page;