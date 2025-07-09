import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const JoinIBNetwork = () => {
   const t = useTranslations("home.home_IB")
  const steps = [
    { number: "/icons-new/step1.png", text: t("point1") },
    { number: "/icons-new/step2.png", text: t("point2") },
    { number: "/icons-new/step3.png", text:  t("point3") },
    { number: "/icons-new/step4.png", text:  t("point4") },
  ];

  return (
 
      <div className="text-center md:pt-10">
        <h2 className="text-xl md:text-3xl font-bold text-[#A07C47] mb-10">
          {t("howTo")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 justify-center items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center">
                <Image src={step.number} alt={`Step ${index + 1}`} width={80} height={80} />
              </div>
              <p className="text-[10px] md:text-base text-[#0A0A23] font-medium">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
   
  );
};

export default JoinIBNetwork;