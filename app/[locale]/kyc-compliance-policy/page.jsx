import { createTranslator } from "next-intl";
import React from "react";
import CompliancePolicyPage from "../pages/CompliancePolicy";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/kyc-compliance-policy`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/kyc-compliance-policy`;

  return {
    title: t("footerPage.CompliancePolicy.metaData.title"),
    description: t("footerPage.CompliancePolicy.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <CompliancePolicyPage />;
};

export default Page;