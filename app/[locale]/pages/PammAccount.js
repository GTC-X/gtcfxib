'use client'
import React from "react";
import Banner from "../components/mam-account/Banner";
import FrequentlyAskedQuestions from "../components/mam-account/FrequentlyAskedQuestions";
import { useTranslations } from "next-intl";

const PammAccountPage = () => {
  const t = useTranslations("prime-tech.pamm");
  
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
        t("faq.accordionData.para.nine"),
        t("faq.accordionData.para.ten"),
        t("faq.accordionData.para.one1"),
        t("faq.accordionData.para.one2"),
        t("faq.accordionData.para.one3"),
        t("faq.accordionData.para.one4"),
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
        content2={t("banner.des2")} 
        imageUrl="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/pamm.webp" 
        buttonText={t("CallAction.liveAccount")}
        buttonLink="https://pamm-ratings.gtcfx.com/widgets/ratings?widgetKey=pamm-ratings" 
      />
      <FrequentlyAskedQuestions data={accordionData} />
    </>
  );
};

export default PammAccountPage