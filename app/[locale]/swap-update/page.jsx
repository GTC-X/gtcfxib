import { createTranslator } from "next-intl";
import React from "react";
import SwapUpdatePage from "../pages/SwapUpdate";

export async function generateMetadata({ params: { locale } }) {
    const messages = (await import(`../../../messages/${locale}.json`)).default;
    const t = createTranslator({ locale, messages });
    const url =
      locale != "en"
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/swap-update`
        : `${process.env.NEXT_PUBLIC_BASE_URL}/swap-update`;
  
    return {
      title: t("swapUpdate.metaData.title"),
      description: t("swapUpdate.metaData.des"),
      alternates: {
        canonical: url,
      },
    };
  }

const page = ()=>{
    return <SwapUpdatePage/>
} 

export default page;