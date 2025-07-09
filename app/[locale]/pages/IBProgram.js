"use client";

import { useTranslations } from "next-intl";
import Hero from "../components/partner/ibBroker/Hero";
import HowToBecomeIB from "../components/partner/ibBroker/HowToBecomeIB";
import IBFAQS from "../components/partner/ibBroker/IBFAQS";
import IBProgramSection from "../components/partner/ibBroker/IBProgramSection";
import JoinUs from "../components/partner/ibBroker/JoinUs";
import WhyPartnerWithGtc from "../components/partner/ibBroker/WhyPartnerWithGtc";
import IBImageGallery from "../components/partner/ibBroker/IBImageGallery";
import VideoPopup from "../components/partner/ibBroker/VideoPopup";
import AwardCarousel from "../components/partner/ibBroker/AwardCarousel";

const IntroductoryBroker = () => {

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


const reasonList = [
  {
      "number":"1",
      "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/IB-02.webp",
      "text":t("theBest.option.one")
  },
  {
      "number":"2",
      "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/IB-03.webp",
      "text":t("theBest.option.two")
  },
  {
      "number":"3",
      "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/IB-04.webp",
      "text":t("theBest.option.three")
  },
 
  {
      "number":"4",
      "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/IB-06.webp",
      "text":t("theBest.option.five")
  },
]

const images = [
  '/ib/1b1.webp',
  '/ib/1b6.webp',
  '/ib/1b7.webp',
  '/ib/1b5.webp',
  '/ib/1b8.webp',
  '/ib/1b2.webp',
  '/ib/1b3.webp',
  '/ib/1b17.webp',
  '/ib/1b13.webp',
  '/ib/1b14.webp',
  '/ib/1b15.webp',
  '/ib/1b16.webp',
  '/ib/1b4.webp',
  '/ib/IB10.webp',
  '/ib/IB1.webp',
  '/ib/IB2.webp',
  '/ib/IB3.webp',
  '/ib/IB7.webp',
  '/ib/IB8.webp',
  '/ib/IB6.webp',

  '/ib/IB6.webp',
  '/ib/1b11.webp',
  '/ib/1b9.webp',
  '/ib/IB4.webp',

  // Add more images as needed
];

  return (
    <>
    <Hero/>
    <WhyPartnerWithGtc title={t("theBest.label1")} subHeading="" reasons={"/newIB1.webp"}/>
  

  
   
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

export default IntroductoryBroker;
