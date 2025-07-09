"use client";
import React from "react";
import { GrUserSettings } from "react-icons/gr";
import { TbChartCandleFilled } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { useTranslations } from "next-intl";

const WhoServe = () => {
  const t = useTranslations("prime-tech.liquidity.whoServe");

  const cardsData = [
    {
      icon: <FaUsers />,
      title: t("broker.title"),
      paragraph: t("broker.desc"), // Keep the original text with \n
      link: "",
    },
    {
      icon: <GrUserSettings />,
      title: t("hedge.title"),
      paragraph: t("hedge.desc"), // Keep the original text with \n
      link: "",
    },
    {
      icon: <TbChartCandleFilled />,
      title: t("professional.title"),
      paragraph: t("professional.desc"), // Keep the original text with \n
      link: "",
    },
  ];

  const boxStyle = {
    background: "linear-gradient(to bottom, rgba(182,135,86,.65) 40%, rgba(5,3,49,1) 60%)",
    borderRadius: "8px",
  };

  return (
    <section className="md:py-16 3xl:py-28 py-8 px-5 text-center bg-[url('/BG-11.webp')] bg-cover bg-center">
      <div className="container">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="bg-gradient-to-r from-secondary via-[#fff] to-secondary inline-block text-transparent bg-clip-text  text-xl xl:text-[30px] 2xl:text-[30px] max-w-xl leading-tight md:max-w-2xl capitalize font-semibold">
            {t("heading")}
          </h2>
          <p className="text text-white mt-5">{t("desc")}</p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-5 pt-8">
          {cardsData?.map((item, index) => (
            <div
              key={index}
              className="flip-card border-primary h-72 cursor-pointer flex-1 relative py-[1px] px-[1px]"
              style={boxStyle}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front relative bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#050331] rounded-lg shadow-lg overflow-hidden z-10 p-6 text-center">
                  <div className="text-white flex flex-col h-full justify-center items-center">
                    <p className="text-4xl md:text-6xl text-white">{item.icon}</p>
                    <h3 className="text-secondary text-base xl:text-lg 3xl:text-2xl my-5">
                      {item.title}
                    </h3>
                    <p className="underline text-sm md:text-base">
                      {t("view_more")}
                    </p>
                  </div>
                </div>
                <div className="flip-card-back relative bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#050331] rounded-lg shadow-lg overflow-hidden z-10 p-8 text-center">
                  <div className="text-white flex flex-col text">
                    {item.paragraph.split("\n").map((line, i) => (
                      <p key={i}>{line}</p> // Render each line as a <p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoServe;