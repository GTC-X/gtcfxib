import { createTranslator } from "next-intl";
import React from "react";
import SwapTermsConditions from "../pages/SwapTermsConditions";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
  ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/swap-free-terms-and-conditions`
  : `${process.env.NEXT_PUBLIC_BASE_URL}/swap-free-terms-and-conditions`;

  return {
    title: t("metaData.swapTermsCondition.title"),
    description: t("metaData.swapTermsCondition.des"), 
    alternates: {
      canonical: url,
    },
    
  };
}
const Page = () => {
  return <SwapTermsConditions />;
};

export default Page;