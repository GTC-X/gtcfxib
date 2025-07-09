import { createTranslator } from "next-intl";
import React from "react";
import MamAccountPage from "../pages/MamAccount";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/mam-account`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/mam-account`;


  return {
    title: t("metaData.mamAccount.title"),
    description: t("metaData.mamAccount.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <MamAccountPage />;
};

export default Page;