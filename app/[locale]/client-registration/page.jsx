import { createTranslator } from "next-intl";
import React from "react";
import ClientRegistrationPage from "../pages/ClientRegistrationPage";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/client-registration`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/client-registration`;
  return {
    title: "Client Registration | GTCFX",
    description: t("footerPage.careers.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <ClientRegistrationPage />;
};

export default Page;