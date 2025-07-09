import { createTranslator } from "next-intl";
import React from "react";
import DueDiligencePolicyPage from "../pages/DueDiligencePolicy";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/customer-due-diligence-policy`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/customer-due-diligence-policy`;


  return {
    title: t("footerPage.DuePolicy.metaData.title"),
    description: t("footerPage.DuePolicy.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <DueDiligencePolicyPage />;
};

export default Page;
