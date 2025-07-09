import { createTranslator } from "next-intl";
import React from "react";
import StockPage from "../../pages/(products)/Stock";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/stock`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/stock`;

  return {
    title: t("metaData.stock.title"),
    description: t("metaData.stock.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Stock = () => {
  return <StockPage />;
};

export default Stock;
