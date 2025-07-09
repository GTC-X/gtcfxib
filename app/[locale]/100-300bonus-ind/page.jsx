import React from 'react';
import { createTranslator } from "next-intl";
import PakistanPage from '../pages/PakistanPage';
import JashnAzadi from '../components/CreditBonus/JashnAzadi';

export async function generateMetadata({ params: { locale } }) {
 const messages = (await import(`../../../messages/${locale}.json`)).default;
 const t = createTranslator({ locale, messages });
  
 return {
  title: t("compaign.100BonusPro.300Bonus.title"),
  description: t("compaign.100BonusPro.300Bonus.des"),
  };
}

const page = () => {
  return (
    <>
    <JashnAzadi
    title="Exclusive Year-End Offer!" 
    subTitle="Get a Special 100% Bonus of up to $300 on Your Deposit" 
    dateTime="Valid until 30 November, 2024" 
    finalTagline="Hurry, take advantage of this limited-time offer!"
    validOff="This promotion is only valid for Indian Traders"
    />
    <PakistanPage/>

    </>
  )
}

export default page;


