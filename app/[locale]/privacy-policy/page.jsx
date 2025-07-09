import { createTranslator } from "next-intl";
import React from "react";
import PrivacyPolicyPage from "../pages/PrivacyPolicy";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/privacy-policy`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`;


  return {
    title: t("footerPage.privacyPolicy.metaData.title"),
    description: t("footerPage.privacyPolicy.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <PrivacyPolicyPage />;
};

export default Page;
