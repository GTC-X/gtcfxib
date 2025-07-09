import React from 'react';
import { createTranslator } from "next-intl";
import HundredCreditBonus from '../pages/HundredCreditBonus';

export async function generateMetadata({ params: { locale } }) {
 const messages = (await import(`../../../messages/${locale}.json`)).default;
 const t = createTranslator({ locale, messages });
 const url =
 locale != "en"
   ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/100-bonus`
   : `${process.env.NEXT_PUBLIC_BASE_URL}/100-bonus`;
  
 return {
  title: "Elevate Your Trading with a 20% Bonus | GTCFX",
  description: "Boost your trading journey with a 20% tradable and withdrawable bonus, applicable on funded accounts, up to $20,000.",
  alternates: {
    canonical: url,
  },
  };
}

const page = () => {
  return (
    <>
    <HundredCreditBonus/> 

    </>
  )
}

export default page;