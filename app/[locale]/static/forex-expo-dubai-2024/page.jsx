import { createTranslator } from "next-intl";
import React from "react";
import MoneyExpoPage from "../../pages/MoneyExpo";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/forex-expo-dubai-2024`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/forex-expo-dubai-2024`;

  return {
    title: 'Forex Expo Dubai 2024 – Join GTC FX at Booth 30!',
    description: 'Unlock new trading opportunities with GTC FX at Forex Expo Dubai 2024. Engage with industry experts, explore cutting-edge trading tools, and gain exclusive insights to elevate your forex trading strategy. Don’t miss out on this chance to meet our team and discover how we can help you trade smarter.',
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <MoneyExpoPage />;
};

export default Page;
