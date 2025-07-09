import React from 'react';
import { createTranslator } from "next-intl";
import HundredCreditBonus from '../pages/CreditBonusCom';
import NewBannerHero2 from '../components/CreditBonus/NewBannerHero2';

export async function generateMetadata({ params: { locale } }) {
 const messages = (await import(`../../../messages/${locale}.json`)).default;
 const t = createTranslator({ locale, messages });
  
 return {
  title: 'Get a Special Bonus 100% maximum 200$ valid for 10 days | GTCFX',
  description: '100% Credit bonus is Tradeable & Loseable, upon withdrawal of funds, Credit will he removed ratio to withdrawal amount.',
  };
}

const page = () => {
  return (
    <>
        <NewBannerHero2 />
    <HundredCreditBonus/>

    </>
  )
}

export default page;