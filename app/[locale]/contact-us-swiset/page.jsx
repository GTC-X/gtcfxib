import { createTranslator } from "next-intl";
import React from "react";
import ContactUsPage from "../pages/ContactUs";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/contact-us-swiset`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us-swiset`;


  return {
    title: t("metaData.contactUs.title"),
    description: t("metaData.contactUs.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <ContactUsPage />;
};

export default Page;
