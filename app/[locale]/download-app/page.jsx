import { createTranslator } from "next-intl";
import React from "react";
import DownloadPage from "../pages/DownloadPage";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/download-app`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/download-app`;

  return {
    title: t("metaData.downloadApp.title"),
      description: t("metaData.downloadApp.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <DownloadPage />;
};

export default Page;