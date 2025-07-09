"use client";

import { useTranslations } from "next-intl";
import HowToBecomeIB from "../components/partner/ibBroker/HowToBecomeIB";
import IBFAQS from "../components/partner/ibBroker/IBFAQS";
import IBProgramSection from "../components/partner/ibBroker/IBProgramSection";
import JoinUs from "../components/partner/ibBroker/JoinUs";
import WhyPartnerWithGtc from "../components/partner/ibBroker/WhyPartnerWithGtc";

import AwardCarousel from "../components/partner/ibBroker/AwardCarousel";

const RemainIb = () => {

    const t = useTranslations("partner.IBProgram")

  const joinSteps = [
    {
        "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/1.webp",
        "text": t("howWork.option1.heading")
    },
    {
        "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/2.webp",
        "text": t("howWork.option2.heading")
    },
    {
        "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/3.webp",
        "text": t("howWork.option3.heading")
    }
];



  return (
    <>
    <WhyPartnerWithGtc title={t("theBest.label1")} subHeading="" reasons={"/newIB1.webp"}/>
  
    <JoinUs/>
    <IBProgramSection/>
   
    <HowToBecomeIB
      title={t("howWork.title")}
      subtitle={t("howWork.descr")}
      steps={joinSteps}
      gridCols="lg:grid-cols-3" // for 3 columns on large screens
      bgColor="md:py-16 3xl:py-20 py-8 bg-gray-100" // for white background
    />

    <AwardCarousel />
   
  
    <IBFAQS/>
    </>
  );
};

export default RemainIb;
