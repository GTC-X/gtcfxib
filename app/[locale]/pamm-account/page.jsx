import { createTranslator } from "next-intl";
import React from "react";
import PammAccountPage from "../pages/PammAccount";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/pamm-account`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/pamm-account`;


  return {
    title: t("metaData.pammAccount.title"),
    description: t("metaData.pammAccount.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <PammAccountPage />;
};

export default Page;