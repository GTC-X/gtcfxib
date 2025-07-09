import { createTranslator } from "next-intl";
import React from "react";
import GTCFinancialPage from "../pages/GTCFinancial";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/gtc-financial-consultancy-llc`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/gtc-financial-consultancy-llc`;

  return {
    title: t("footerPage.financial.metaData.title"),
    description: t("footerPage.financial.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <GTCFinancialPage />;
};

export default Page;
