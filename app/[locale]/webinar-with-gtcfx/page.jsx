import { createTranslator } from "next-intl";
import React from "react";
import WebinarAdvPage from "../pages/WebinarAdv";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/webinar-with-gtcfx`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/webinar-with-gtcfx`;

  return {
    title: t("metaData.weeklyWebinar.title"),
    description: t("metaData.weeklyWebinar.des"),
    alternates: {
      canonical: url,
    },
    
  };
}
const Page = () => {
  return <WebinarAdvPage />;
};

export default Page;