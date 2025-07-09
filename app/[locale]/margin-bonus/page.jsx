import { createTranslator } from "next-intl";
import React from "react";
import MarginBonusPage from "../pages/MarginBonus";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/margin-requirments`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/margin-requirments`;

  return {
    title: "Margin Bonus Offer | Boost Your Trading Power with GTCFX",
    description: "Our Margin Bonus is a special trading credit added to your account upon making a qualifying deposit. It is designed to increase your available margin and support your trading activity under defined terms.",
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <MarginBonusPage />;
};

export default Page;
