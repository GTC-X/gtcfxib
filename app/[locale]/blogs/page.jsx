import { createTranslator } from "next-intl";
import React from "react";
import BlogPage from "../pages/Blogs";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/blogs`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`;

  return {
    title: t("metaData.blogs.title"),
    description: t("metaData.blogs.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <BlogPage />;
};

export default Page;