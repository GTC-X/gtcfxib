import { createTranslator } from "next-intl";
import React from "react";
import ClientAgreementPage from "../pages/ClientAgreement";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/client-agreement`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/client-agreement`;

  return {
    title: t("footerPage.clientAgreement.metaData.title"),
    description: t("footerPage.clientAgreement.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <ClientAgreementPage />;
};

export default Page;
