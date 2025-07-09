import { createTranslator } from "next-intl";
import React from "react";
import VPSHostingPage from "../pages/VpsHostingServices";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/vps-hosting-services`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/vps-hosting-services`;


  return {
    title: t("metaData.vpsHosting.title"),
    description: t("metaData.vpsHosting.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <VPSHostingPage />;
}; 

export default Page;
