import { createTranslator } from "next-intl";
import React from "react";
import IntroductoryBrokerPage from "../pages/IBProgram";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/introductory-broker`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/introductory-broker`;

  return {
    title: t("metaData.introductoryBroker.title"),
    description: t("metaData.introductoryBroker.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <IntroductoryBrokerPage />
};

export default Page;

