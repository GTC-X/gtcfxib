import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { GrAction } from "react-icons/gr";
import { BiCandles } from "react-icons/bi";
import { GiUnbalanced } from "react-icons/gi";
import { RxRocket } from "react-icons/rx";
import LiveAccountButton from "../liveAccountButton";





const WhyGTC = () => {
  const t = useTranslations("home.whyGTC");
  const featuresColumn1 = [
    {
      icon: <GrAction />,
      miniheading: t("first.title"), 
      heading: t("first.heading"),
      text: t("first.description"),
    },
    {
        icon: <BiCandles />,
        miniheading: t("second.title"), 
        heading: t("second.heading"),
        text: t("second.description"),
    }, 
  ];

  const featuresColumn2 = [
    {
      icon: <GiUnbalanced />,
      miniheading: t("third.title"), 
      heading: t("third.heading"),
      text: t("third.description"),
    },
    {
      icon: <RxRocket />,
      heading: "Ultra-fast Execution",
      miniheading: t("fourth.title"), 
      heading: t("fourth.heading"),
      text: t("fourth.description"),
    },
  ];

  return (
    <section className="py-10 lg:py-[70px] text-center"> 
      <div className="container">
        <h2 className="HeadingH2 font-medium">{t("title")}</h2>
        <p className="text-primary md:text-base 2xl:text-[17px] text-xs text-center">
          {t("desc")}
        </p>
        <div className="flex flex-row items-center justify-between gap-4 pt-8">
          <div className="basis-full md:basis-1/5 flex flex-col gap-10 justify-around items-center pt-5">
            {featuresColumn1.map((feature, index) => (
              <div
                key={index}
                className="text-center md:flex md:flex-col items-center justify-center gap-4 md:w-96"
              >
                <button className="bg-secondary text-[10px] md:text-xs rounded-full text-white px-3 h-5">
                  {feature.miniheading}
                </button>
                <div className="text-center flex flex-row gap-2 items-center  justify-center">
                <p className="text-secondary text-xl md:text-3xl">{feature.icon}</p>
                <h3 className="bg-gradient-to-r from-primary via-primary  from-10% to-secondary to-90% my-2 text-transparent bg-clip-text md:text-lg xl:text-xl 3xl:text-[24px] text-xs  m-0 p-0 ">
                     {feature.heading}
                </h3>
                </div>
                
                <p className=" text-primary md:text-base xl:text-base text-[9px] max-w-xs mx-auto m-0 text-center">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden md:block md:basis-4/5 relative w-full h-64 md:h-[400px]">
            <Image
              src="/asset.webp"
              alt="Invest with GTC"
              fill
              className="object-contain"
            />
          </div>
          <div className="basis-full md:basis-1/5 flex flex-col gap-10 justify-center items-center pt-5">
            {featuresColumn2.map((feature, index) => (
              <div
                key={index}
                className="text-center md:flex md:flex-col items-center justify-center gap-4 md:w-96"
              >
                <button className="bg-secondary text-[10px] md:text-xs rounded-full text-white px-3 h-5">
                  {feature.miniheading}
                </button>
                <div className="text-center flex flex-row gap-2 items-center  justify-center">
                <p className="text-secondary text-xl md:text-3xl">{feature.icon}</p>
                <h3 className="bg-gradient-to-r from-primary via-primary  from-10% to-secondary to-90% my-2 text-transparent bg-clip-text md:text-lg xl:text-xl 3xl:text-[24px] text-xs  m-0 p-0 ">
                     {feature.heading}
                </h3>
                </div>
                <p className="text-primary md:text-base xl:text-base text-[9px] m-0 text-center">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="container text-primary flex flex-col justify-center items-center gap-2 pt-8 md:pt-0 md:gap-4 text-xs md:text-base 2xl:text-[17px]">
          <p>{t("desc2")}</p>{" "}
         <LiveAccountButton hoverStyle="bg-primary text-white hover:bg-secondary"
         />
        </div>
      </div>
    </section>
  );
};

export default WhyGTC;