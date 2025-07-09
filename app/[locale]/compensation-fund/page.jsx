import { createTranslator } from "next-intl";
import React from "react";
import CompensationPage from "../pages/Compensation";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/compensation-fund`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/compensation-fund`;


  return {
    title: t("metaData.compensationFund.title"),
    description: t("metaData.compensationFund.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <CompensationPage />;
};

export default Page;