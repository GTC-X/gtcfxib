'use client'
import React from "react";
import Hero from "../components/platform/socialTrading/Hero";
import LeaderBoard from "../pages/Leaderboard";
import GlobalTrusted from "../components/platform/socialTrading/GlobalTrusted";
import KeyBenefit from "../components/platform/socialTrading/KeyBenefit";
import Accordion from "../components/common/Accordion";
import { useTranslations } from "next-intl";
import AssesAsset from "../components/home/AssesAsset";
import HowToBecomeIB from "../components/partner/ibBroker/HowToBecomeIB";
import OtherFollow from "../components/platform/socialTrading/OtherFollow";
import BecomeTrader from "../components/platform/socialTrading/BecomeTrader";
import TopPerformer from "../components/leaderBoard/topPerformer";

const SocialTradingPage = () => {
  const t = useTranslations("prime-tech.socialTranding")
  const faqList = [
    {
      title:t("faq.one.ques"),
      desc: t("faq.one.ans"),
    },
    {
      title:t("faq.two.ques"),
      desc: t("faq.two.ans"),
    },
    {
      title:t("faq.three.ques"),
      desc: t("faq.three.ans"),
    },
    {
      title:t("faq.four.ques"),
      desc: t("faq.four.ans"),
    },

    {
      title:t("faq.five.ques"),
      desc: t("faq.five.ans"),
    },
  ];

  const assetData = [
    {
        name: t("socialIconBoxes.option1"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon6.webp",
        alt: "Forex"
    },
    {
        name: t("socialIconBoxes.option2"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon1.webp",
        alt: "Crypto CFDs"
    },
    {
      name: t("socialIconBoxes.option3"),
      imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon8.webp",
      alt: "Indices"
  },
    {
        name: t("socialIconBoxes.option4"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon3.webp",
        alt: "CFDs"
    },
    {
        name: t("socialIconBoxes.option5"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon4.webp",
        alt: "Commodities"
    },{
        name: t("socialIconBoxes.option6"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon5.webp",
        alt: "Indices"
    }
];

const joinSteps = [
  {
      "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/1.webp",
      "text": t("howWork.option1.heading")
  },
  {
      "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/3.webp",
      "text": t("howWork.option2.heading")
  },
  {
      "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/4.webp",
      "text": t("howWork.option3.heading")
  }
];
  return (
    <>
      <Hero />
      <OtherFollow />

    <BecomeTrader />
    <LeaderBoard />
      <KeyBenefit />
      <div className="bg-primary py-6">
        <div className="container">
          <h3 className="HeadingH2 text-white font-semibold">
          {t("benefits.portfolio")}
          </h3> 
        </div>
      </div>

      <GlobalTrusted />
   
      <section className="conatiner py-12"> 
        <h2 className="HeadingH2 pb-10 font-semibold">
         {t("faq.heading")}
        </h2>
        <div className="container">
          <Accordion accordionData={faqList} theme="blue" textColor="yellow" />
        </div>
      </section>
    </>
  );
};

export default SocialTradingPage;
