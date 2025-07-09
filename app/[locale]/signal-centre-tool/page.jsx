import { createTranslator } from "next-intl";
import React from "react";
import SignalCentreToolPage from "../pages/SignalCentreTool";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/signal-centre-tool`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/signal-centre-tool`;

  return {
    title: t("metaData.signalCenter.title"),
    description: t("metaData.signalCenter.des"),
    alternates: {
      canonical: url, 
    },
  };
}
const Page = () => {
  return <SignalCentreToolPage />;
};

export default Page;
