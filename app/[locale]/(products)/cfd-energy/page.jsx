import { createTranslator } from "next-intl";
import React from "react";
import EnergyPage from "../../pages/(products)/Energy";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/cfd-energy`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/cfd-energy`;

  return {
    title: t("metaData.energy.title"),
    description: t("metaData.energy.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <EnergyPage />;
};

export default Page;
