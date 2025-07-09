"use client";
import React from "react";
import Hero from "../components/trendingTools/signalCentreTool/Hero";
 import Head from "next/head";
import UnLockFullTrading from "../components/trendingTools/signalCentreTool/UnlockFullTrading";
import TradingIdeas from "../components/trendingTools/signalCentreTool/TradingIdeas";
import TimeLine from "../components/trendingTools/signalCentreTool/TimeLine";
import HowToBecomeIB from "../components/partner/ibBroker/HowToBecomeIB";
import { useTranslations } from "next-intl";

const SignalCentreToolPage = () => {
  const t = useTranslations("prime-tech.socialCentreTool")

  const joinSteps = [
    {
        "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/1.webp",
 
        "des": t("signalCentreSteps.option1.title")
    },
    {
        "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/3.webp",
       
        "des": t("signalCentreSteps.option2.title")
    },
    {
        "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/4.webp",
      
        "des": t("signalCentreSteps.option3.title")
    }
  ];

   return (
    <>
  <Hero
        title={t("hero.title")}
        paragraph={t("hero.para")}
        buttonText={t("hero.buttonWhiteText")}
        buttonLink="https://my.gtcfx.com/getview?view=register"
        imageSrc="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/signal.webp"
      />
      <UnLockFullTrading />
      <TradingIdeas />
      <TimeLine />
       <HowToBecomeIB
      title={t("signalCentreSteps.title")}
      subtitle={t("signalCentreSteps.para")}
      steps={joinSteps}
      gridCols="lg:grid-cols-3" // for 3 columns on large screens
      bgColor="bg-white  py-8 md:py-12 xl:py-16 3xl:py-20" // for white background
    />


    </>
  );
};

export default SignalCentreToolPage;
