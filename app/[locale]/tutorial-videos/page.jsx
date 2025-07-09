import { createTranslator } from "next-intl";
import React from "react";
import AccountTutorialPage from "../pages/AccountTutorial";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/tutorial-videos`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/tutorial-videos`;

  return {
    title: t("metaData.tutorialVideo.title"),
    description: t("metaData.tutorialVideo.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <AccountTutorialPage />;
};

export default Page;
