"use client";
import { useTranslations } from "next-intl";
import React from "react";


const TradeInvestStep = () => {

  const t = useTranslations("compaign.tradeWin.invest")

  const features = [
    { title: t("point.one") },
    { title: t("point.two") },
    { title: t("point.three") },
    { title: t("point.four")},
    { title: t("point.five")},
    { title: t("point.six")},
  ];

  const boxStyle = {
    background: "linear-gradient(to bottom, rgba(182,135,86,.65) 40%, rgba(5,3,49,1) 60%)",
    borderRadius: "8px",
  };

  return (
    <section className="bg-[#050331] py-12 md:py-16 2xl:py-20">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-xl xl:text-3xl 2xl:text-[32px] text-transparent bg-clip-text bg-gradient-to-t from-white to-secondary capitalize font-normal pb-5">
          {t("title")}
          </h2>
          <p className="text-gray-200 text-sm xl:text-base tracking-wider md:max-w-4xl mx-auto">
          {t("subTitle")}          </p>
          <h2 className="text-xl xl:text-[20px] 2xl:text-[22px] font-medium text-transparent bg-clip-text bg-gradient-to-l from-white to-secondary capitalize pt-10 m-0">
          {t("des")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative py-[1px] px-[1px]" style={boxStyle}>
              <div className="contact-form relative bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#050331] rounded-lg shadow-lg overflow-hidden z-10 p-6 text-center">
                <h2 className="text-sm xl:text-lg capitalize pb-5 text-transparent bg-clip-text bg-gradient-to-t from-white to-secondary font-medium">
                  {feature.title}
                </h2>
               
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-200 max-w-5xl mx-auto mb-10">{t("dontmiss")}  </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("register1")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-primary bg-gradient-to-r from-white to-secondary rounded-md px-8 py-3 md:w-auto w-[300px] hover:bg-gradient-to-r hover:from-secondary hover:to-white transition-colors duration-500"
          >
            {t("button")} 
          </button>
        </div>
      </div>
    </section>
  );
};

export default TradeInvestStep;
