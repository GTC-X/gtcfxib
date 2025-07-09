import { createTranslator } from "next-intl";
import React from "react";
import AccountTypePage from "../pages/AccountType";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/account-types`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/account-types`;

  return {
    title: t("metaData.accountTypes.title"),
    description: t("metaData.accountTypes.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <AccountTypePage />;
};

export default Page;
