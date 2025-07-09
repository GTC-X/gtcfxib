import { createTranslator } from "next-intl";
import React from "react";
import MorePage from "../../pages/MorePage";


export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/tradable-bonus-promo/more-details`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/tradable-bonus-promo/more-details`;

  return {
    title: 'Boost Your Trading More Details | GTC FX',
    description: 'Maximize your trading potential at GTC FX! Get a 20% tradable bonus up to $15,000 and take your trading to the next level. Open your account today and start trading with extra funds to increase your investment opportunities.',
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {


  return (
    <>
   <MorePage />
    </>
  )
}

export default Page