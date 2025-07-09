"use client";
import React from "react";
import { GiTakeMyMoney, GiMetalBar } from "react-icons/gi";
import { BsCurrencyExchange } from "react-icons/bs";
import { LuArrowUpWideNarrow, LuCalendarClock } from "react-icons/lu";
import { AiOutlineSliders } from "react-icons/ai";
import { FaArrowTrendUp } from "react-icons/fa6";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ProductItem = ({ icon, title, link, isLast }) => (
  <Link
    href={link}
    className={`relative md:col-span-1 flex flex-col items-center text-primary p-4 bg-secondary hover:z-40 hover:bg-primary hover:text-white text-gtcPrimary transform md:scale-300 transition-transform duration-500 md:ease-in-out md:hover:scale-110 hover:bg-opacity-100`}
  >
    {isLast ? null : (
      <div className="border-r border-opacity-50 border-primary h-20 absolute right-0" />
    )}
    {icon}
    <h3 className="font-bold text-xs md:text-xs mt-3">{title}</h3>
  </Link>
);

const IconBoxes = () => {
  const t = useTranslations("platform");
  const productData = [
    {
      icon: <GiTakeMyMoney size={40} />,
      title: t("socialTranding.socialIconBoxes.option1"),
      link: "",
    },
    {
      icon: <LuArrowUpWideNarrow size={40} />,
      title: t("socialTranding.socialIconBoxes.option2"),
      link: "",
    },
    {
      icon: <FaArrowTrendUp size={40} />,
      title: t("socialTranding.socialIconBoxes.option3"),
      link: "",
    },
    {
      icon: <AiOutlineSliders size={40} />,
      title: t("socialTranding.socialIconBoxes.option4"),
      link: "",
    },
    {
      icon: <BsCurrencyExchange size={40} />,
      title: t("socialTranding.socialIconBoxes.option5"),
      link: "",
    },
    {
      icon: <LuCalendarClock size={40} />,
      title: t("socialTranding.socialIconBoxes.option6"),
      link: "",
    },
  ];
  return (
    <div className="container pt-10">
      <h2 className="mainHeading mb-8">{t("socialTranding.socialIconBoxes.title")}</h2>
      <div className="grid grid-cols-2 md:grid-cols-6">
        {productData.map((product, index) => (
          <ProductItem
            key={index}
            icon={product.icon}
            title={product.title}
            link={product.link}
            isLast={index == productData?.length - 1} // Check if it's the last item
          />
        ))}
      </div>
    </div>
  );
};

export default IconBoxes;
