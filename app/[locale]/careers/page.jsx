import { createTranslator } from "next-intl";
import React from "react";
import CareerPage from "../pages/careers";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/careers`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/careers`;
  return {
    title: t("metaData.career.title"),
    description: t("metaData.career.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <CareerPage />;
};

export default Page;
