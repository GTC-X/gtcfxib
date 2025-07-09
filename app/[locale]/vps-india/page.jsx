import { createTranslator } from "next-intl";
import React from "react";
import VPSPakistan from "../pages/VPSPakistan";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/vps-pakistan`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/vps-pakistan`;


  return {
    title: t("prime-tech.vpsHosting.metaData.title"),
    description: t("prime-tech.vpsHosting.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <VPSPakistan  />;
}; 

export default Page;
