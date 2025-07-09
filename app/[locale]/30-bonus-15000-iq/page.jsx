import React from 'react';
import { createTranslator } from "next-intl";
import HundredCreditBonus from '../pages/CreditBonusCom';
import NewHeroBanner from '../components/CreditBonus/NewHeroBanner';

export async function generateMetadata({ params: { locale } }) {
 const messages = (await import(`../../../messages/${locale}.json`)).default;
 const t = createTranslator({ locale, messages });
  
 return {
  title: 'Get a Special 30% Bonus of up to $15k on Your Deposit | GTCFX',
  description: '100% Credit bonus is Tradeable & Loseable, upon withdrawal of funds, Credit will he removed ratio to withdrawal amount.',
  };
}

const page = () => {
  return (
    <>
    <NewHeroBanner/>
    <HundredCreditBonus/> 

    </>
  )
}

export default page;