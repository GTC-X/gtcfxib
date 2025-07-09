import { createTranslator } from "next-intl";
import { Suspense } from "react";
import SharesPage from "../../pages/(products)/Share";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/shares`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/shares`;

  return {
    title: t("metaData.shares.title"),
    description: t("metaData.shares.des"),
    alternates: {
      canonical: url,
    },
  };
}

const Page = () => {
  return <SharesPage />;
};

export default Page;
