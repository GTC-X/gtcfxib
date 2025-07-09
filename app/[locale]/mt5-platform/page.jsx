import { createTranslator } from "next-intl";
import React from "react";
import MT5PlatformPage from "../pages/MT5Platform";

export async function generateMetadata({ params: { locale } }) {
    const messages = (await import(`../../../messages/${locale}.json`)).default;
    const t = createTranslator({ locale, messages });
    const url =
      locale != "en"
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/mt5-platform`
        : `${process.env.NEXT_PUBLIC_BASE_URL}/mt5-platform`;
  
    return {
      title: t("metaData.mt5Platform.title"),
      description: t("metaData.mt5Platform.des"),
      alternates: {
        canonical: url,
      },
    };
  }

const page = ()=>{
    return <MT5PlatformPage/>
} 

export default page;