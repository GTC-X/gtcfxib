import { createTranslator } from "next-intl";
import React from "react";
import FridayWebinar from "../pages/FridayWebinar";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/regulations`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/regulations`;

  return {
    title: t("compaign.FridayEvent.metaData.title"),
    description: t("compaign.FridayEvent.metaData.des"),
    alternates: {
      canonical: url,
    },
    
  };
}
const Page = () => {
  return <FridayWebinar />;
};

export default Page;