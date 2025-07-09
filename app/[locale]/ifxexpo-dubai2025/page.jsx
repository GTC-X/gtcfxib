import { createTranslator } from "next-intl";
import React from "react";
import BrokerView from "../pages/BrokerView";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/wiki-expo`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/wiki-expo`;

  return {
    title: 'Unlock exciting trading opportunities with GTCFX at iFX EXPO Dubai 2025!',
    description: 'Join us at Booth No. 59 and connect with industry leaders. Gain exclusive insights, explore advanced trading platforms, and discover how to boost your trading strategies.',
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <BrokerView />;
};

export default Page;
