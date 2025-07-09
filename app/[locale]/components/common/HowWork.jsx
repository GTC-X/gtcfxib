'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import { useTranslations } from "next-intl";

const VpsStepsImages = ({
  imageSrc,
  alt,
  stepText,
  stepDescription,
  aosDuration,
  aosDelay,
  color,
  aosFade,
  id,
}) => {
   
  return (
    <div
      className={`flex flex-col overflow-hidden items-center  firstStep text-center z-50 relative`}
      data-aos-duration={aosDuration}
      data-aos-delay={aosDelay}
      data-aos-easing="ease-in-sine"
      data-aos="fade-right"
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={152}
        height={100}
        className="w-20 md:w-40 h-16 md:h-32"
      />
      <div className="content-step pt-5">
        <h3 className={`text-sm md:text-lg font-medium text-${color}`}>
          {stepDescription}
        </h3>
        <p className={`text-xs md:text-base w-80 text-${color}`}>{stepText}</p>
      </div>
    </div>
  );
};

const HowWork = () => {
    const t = useTranslations("partner");
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  const steps = [
    {
        imageSrc: "/common/step1.webp",
        alt: "Step 1",
        stepText: t("IBProgram.howWork.option1.title"),
        stepDescription: t("IBProgram.howWork.option1.heading"),
        aosDuration: 300,
        aosDelay: 0,
      },
      {
        imageSrc: "/common/step2.webp",
        alt: "Step 2",
        stepText: t("IBProgram.howWork.option2.title"),
        stepDescription: t("IBProgram.howWork.option2.heading"),
        aosDuration: 400,
        aosDelay: 100,
      },
      {
        imageSrc: "/common/step3.webp",
        alt: "Step 3",
        stepText: t("IBProgram.howWork.option3.title"),
        stepDescription: t("IBProgram.howWork.option3.heading"),
        aosDuration: 500,
        aosDelay: 200,
      },
  ];

  return (
    <div className="container py-10">
      <h2 className="HeadingH2">{t("IBProgram.howWork.title")}</h2>
        <p className="text">
          {t("IBProgram.howWork.descr")}
        </p>
      <div className="relative max-w-6xl mx-auto pt-4 md:py-12">
        <div className="attend-event flex flex-row justify-between items-center">
          {steps.map((step, index) => (
            <VpsStepsImages key={index} {...step} color="primary" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWork;
