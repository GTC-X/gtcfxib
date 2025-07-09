import React from 'react';
import { createTranslator } from "next-intl";
import ThankYouPage from '../pages/ThankYou';

export async function generateMetadata({ params: { locale } }) {
    const messages = (await import(`../../../messages/${locale}.json`)).default;
    const t = createTranslator({ locale, messages });
    const url =
    locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/thank-you`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`;

    return {
        title: t("thankYouLiveAccount.metaData.title"),
        description: t("thankYouLiveAccount.metaData.des"),
        alternates: {
            canonical: url,
          },
    };
}
const page = () => {
  
    return (
        <ThankYouPage/>
    )
}

export default page;