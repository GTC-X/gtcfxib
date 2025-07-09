
import { createTranslator } from "next-intl";
import React from "react";
import DemoAccountPage from "../../pages/DemoAccount";
export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/free-demo-account`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/free-demo-account`;


  return {
    title: t("accounts.demoAccount.metaData.title"),
    description: t("accounts.demoAccount.metaData.des"),
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return (
    <div className="mb-20">
      
      <DemoAccountPage />
    </div>
  )
}

export default Page;