import { createTranslator } from "next-intl";
import React from "react";
import TradeableBonusPage from "../pages/TradeableBonus";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/cashback-bonus-promotion`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/cashback-bonus-promotion`;

  return {
    title: t("metaData.promotion.title"),
    description: t("metaData.promotion.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <TradeableBonusPage />;
};

export default Page;
