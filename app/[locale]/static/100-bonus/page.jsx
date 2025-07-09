import React from 'react';
import { createTranslator } from "next-intl";
import HundredCreditBonus from '../../pages/HundredCreditBonus';

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
 const t = createTranslator({ locale, messages });
  
 return {
  title: t("compaign.100BonusPro.metaData.title"),
  description: t("compaign.100BonusPro.metaData.des"),
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