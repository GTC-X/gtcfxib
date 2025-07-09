"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { GiTakeMyMoney } from "react-icons/gi";
import { LuArrowUpWideNarrow } from "react-icons/lu";
import { AiOutlineSliders } from "react-icons/ai";
import { FaArrowTrendUp } from "react-icons/fa6";
import Link from "next/link";
import Aos from "aos";

const ProductItem = ({ icon, title, link, isLast, paragraph }) => (
  <Link
    href={link}
    className={`relative md:col-span-1 flex flex-col items-center text-primary p-4 md:p-6 bg-secondary hover:z-40 hover:bg-primary hover:text-white hover:shadow-lg text-gtcPrimary transform md:scale-300 transition-transform duration-500 md:ease-in-out md:hover:scale-110 hover:bg-opacity-100`}
  >
    {isLast ? null : (
      <div className="border-r border-opacity-50 border-primary h-20 absolute right-0" />
    )}
    {icon}
    <h3 className="font-bold text-base mt-3 pb-2">{title}</h3>
    <p className="text-center text-sm">{paragraph}</p>
  </Link>
);
const GtcVps = () => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  const t = useTranslations("tradingTools");
  const steps = [
    {
      imageSrc: "/trading-tools/step1.webp",
      alt: "Step 1",
      stepText: "",
      id: 1,
      stepDescription: t("vpsHosting.howToSubscribe.option1"),
      aosDuration: 300,
      aosDelay: 0,
    },
    {
      imageSrc: "/trading-tools/step2.webp",
      alt: "Step 2",
      stepText: "",
      id: 2,
      stepDescription: t("vpsHosting.howToSubscribe.option2"),
      aosDuration: 400,
      aosDelay: 100,
    },
    {
      imageSrc: "/trading-tools/step3.webp",
      alt: "Step 3",
      stepText: "",
      id: 3,
      stepDescription: t("vpsHosting.howToSubscribe.option3"),
      aosDuration: 500,
      aosDelay: 200,
    },
    {
      imageSrc: "/trading-tools/step4.webp",
      alt: "Step 3",
      stepText: "",
      id: 4,
      stepDescription: t("vpsHosting.howToSubscribe.option4"),
      aosDuration: 500,
      aosDelay: 200,
    },
  ];
  const productData = [
    {
      icon: <GiTakeMyMoney size={40} />,
      title: t("vpsHosting.gtcfxVpsSection.column1.title"),
      paragraph: t("vpsHosting.gtcfxVpsSection.column1.para"),
      link: "",
    },
    {
      icon: <LuArrowUpWideNarrow size={40} />,
      title: t("vpsHosting.gtcfxVpsSection.column2.title"),
      paragraph: t("vpsHosting.gtcfxVpsSection.column1.para"),
      link: "",
    },
    {
      icon: <FaArrowTrendUp size={40} />,
      title: t("vpsHosting.gtcfxVpsSection.column3.title"),
      paragraph: t("vpsHosting.gtcfxVpsSection.column3.title"),
      link: "",
    },
    {
      icon: <AiOutlineSliders size={40} />,
      title: t("vpsHosting.gtcfxVpsSection.column4.title"),
      paragraph: t("vpsHosting.gtcfxVpsSection.column4.title"),
      link: "",
    },
  ];
  return (
    <div
      className="bg-gradient-to-b rounded-t-[50px] from-[#1e446d] via-[#1e446d] to-[#1e446d] py-5"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="relative w-full -mt-11 h-14">
          <Image
            src="/arow-vps.png"
            fill
            alt="Social Trading"
            className="object-contain"
          />
        </div>
        <h2 className="HeadingH2 text-white pb-4 mt-6">
          
            {t("vpsHosting.gtcfxVpsSection.titleColor")} 
       
          {t("vpsHosting.gtcfxVpsSection.titleWhite")}
        </h2>
       
  
      </div>
    </div>
  );
};

export default GtcVps;
