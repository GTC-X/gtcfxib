'use client'
import React from "react";
import Banner from "../components/mam-account/Banner";
import FrequentlyAskedQuestions from "../components/mam-account/FrequentlyAskedQuestions";
import { useTranslations } from "next-intl";

const MamAccountPage = () => {
  const t = useTranslations("prime-tech.mam")
  const accordionData = [
    {
      title: t("faq.accordionData.title"),
      paragraphs: [
        t("faq.accordionData.para.one"),
        t("faq.accordionData.para.onea"),
        t("faq.accordionData.para.oneb"),
        t("faq.accordionData.para.two"),
        t("faq.accordionData.para.three"),
        t("faq.accordionData.para.four"),
        t("faq.accordionData.para.five"),
        t("faq.accordionData.para.six"),
        t("faq.accordionData.para.seven"),
        t("faq.accordionData.para.eight"),
        ],
    },
  ];
  return (
    <>
      <Banner 
           title={t("banner.title")} 
           subtitle={t("CallAction.first")}
           subtitle2={t("CallAction.sec")}
           content={t("banner.des1")}  
        imageUrl="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/mam.webp" 
        buttonText={t("CallAction.liveAccount")}
        buttonLink="https://web.mygtc.app/login/register?code=2544249&scope=1"  
      />
      <FrequentlyAskedQuestions data={accordionData} />
    </>
  );
};

export default MamAccountPage;
