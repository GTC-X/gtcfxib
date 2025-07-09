import { createTranslator } from "next-intl";
import React from "react";
import TradeableBonusPage from "../../pages/TradeableBonus";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/tradable-bonus-promo`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/tradable-bonus-promo`;

  return {
    title: t("compaign.tradeWin.metaData.title"),
    description: t("compaign.tradeWin.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <TradeableBonusPage />;
};

export default Page;
