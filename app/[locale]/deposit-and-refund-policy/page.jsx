import { createTranslator } from "next-intl";
import React from "react";
import RefundPolicyPage from "../pages/RefundPolicy";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/deposit-and-refund-policy`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/deposit-and-refund-policy`;


  return {
    title: t("footerPage.RefundPolicy.metaData.title"),
    description: t("footerPage.RefundPolicy.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <RefundPolicyPage />;
};

export default Page;