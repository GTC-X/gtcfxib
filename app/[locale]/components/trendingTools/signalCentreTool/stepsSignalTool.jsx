"use client";
// HowWork.js
import React, { useEffect } from "react";
import AOS from "aos";
import { useTranslations } from "next-intl";
import HowWorkStep from "../../common/HowWorkStep";

const StepsSignalTool = () => {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);
  const t = useTranslations("tradingTools");
  const steps = [
    {
      imageSrc: "/common/step1.webp",
      alt: "Step 1",
      id: 1,
      stepText: t("socialCentreTool.signalCentreSteps.option1.title"),
      stepDescription: "",
      aosDuration: 300,
      aosDelay: 0,
    },
    {
      imageSrc: "/common/step2.webp",
      alt: "Step 2",
      id: 2,
      stepText: t("socialCentreTool.signalCentreSteps.option2.title"),
      stepDescription: "",
      aosDuration: 400,
      aosDelay: 100,
    },
    {
      imageSrc: "/common/step3.webp",
      alt: "Step 3",
      id: 3,
      stepText: t("socialCentreTool.signalCentreSteps.option3.title"),
      stepDescription: "",
      aosDuration: 500,
      aosDelay: 200,
    },
  ];

  return (
    <div className="how-work py-10">
      <div className="container">
        <h2 className="HeadingH2">
          {t("socialCentreTool.signalCentreSteps.title")}
        </h2>
        <p className="text">
        {t("socialCentreTool.signalCentreSteps.para")}
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 md:flex-row justify-between pt-4 md:pt-8">
          {steps.map((step, index) => (
            <HowWorkStep key={index} index={index} {...step} color="primary" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSignalTool;
