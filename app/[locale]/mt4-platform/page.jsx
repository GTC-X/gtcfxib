import { createTranslator } from "next-intl";
import React from "react";
import MT4PlatformPage from "../pages/MT4Platform";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/mt4-platform`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/mt4-platform`;

  return {
    title: t("metaData.mt4Platform.title"),
    description: t("metaData.mt4Platform.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <MT4PlatformPage />;
};

export default Page;
