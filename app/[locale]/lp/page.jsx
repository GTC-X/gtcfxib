import { createTranslator } from "next-intl";
import React from "react";
import LiquidityProviderPage from "../pages/LiquidityProvider";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/lp`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/lp`;

  return {
    title: t("lp.metaData.title"),
    description: t("lp.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <LiquidityProviderPage />;
};

export default Page;
