import { createTranslator } from "next-intl";
import React from "react";
import DepositPage from "../pages/Deposit";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/deposit`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/deposit`;


  return {
    title: t("metaData.deposit.title"),
    description: t("metaData.deposit.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <DepositPage />;
};

export default Page;


