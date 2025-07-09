import GlobalPresence from "../pages/GlobalPresence"
import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/global-presence`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/global-presence`;

  return {
    title: t("metaData.globalPresence.title"),
    description: t("metaData.globalPresence.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <GlobalPresence />;
};

export default Page;
