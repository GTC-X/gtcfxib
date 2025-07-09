"use client";
import Link from "next/link";
import { GiTakeMyMoney } from "react-icons/gi";
import { LuArrowUpWideNarrow } from "react-icons/lu";
import { AiOutlineSliders } from "react-icons/ai";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useEffect } from "react";
import Aos from "aos";
import { useTranslations } from "next-intl";

const ProductItem = ({ icon, title, link, isLast }) => (
  <Link
    href={link}
    className={`relative flex flex-col items-center text-white p-6 bg-gradient-to-b from-[#ecf3fd] via-[#ecf3fd] to-[#ecf3fd] hover:z-40 hover:text-white text-gtcPrimary transform md:scale-300 transition-transform duration-500 md:ease-in-out md:hover:scale-110 hover:bg-opacity-100 ${
      isLast ? "col-span-2 md:col-span-1" : ""
    }`}
  >

    <p className="text-secondary">{icon}</p>
    <h3 className="font-bold text-sm mt-1 text-primary">{title}</h3>
  </Link>
);

export default function WhoShouldAttend() {
  const t = useTranslations("compaign.webinar.whoShouldAttend");

  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  const productData = [
    {
      icon: <GiTakeMyMoney size={40} />,
      title: t("productTitles.investorsTraders"),
      link: "",
    },
    {
      icon: <LuArrowUpWideNarrow size={40} />,
      title: t("productTitles.financialProfessionals"),
      link: "",
    },
    {
      icon: <FaArrowTrendUp size={40} />,
      title: t("productTitles.businessLeaders"),
      link: "",
    },
    {
      icon: <AiOutlineSliders size={40} />,
      title: t("productTitles.studentsAcademics"),
      link: "",
    },
    {
      icon: <FaArrowTrendUp size={40} />,
      title: t("productTitles.interestedInTrading"),
      link: "",
    },
  ];

  return (
    <div className="w-full container">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 700 10"
          preserveAspectRatio="none"
        >
          <path
            className="elementor-shape-fill"
            fill="#fff"
            d="M350,10L340,0h20L350,10z"
          ></path>
        </svg>
        <div className="py-6 px-2 text-center">
          <h2 className="HeadingH2 font-medium">
            {t("title")}
          </h2>
          <p className="text max-w-3xl mx-auto">Boost your trading with two powerful webinar series, perfect for all levels. Learn technical analysis and real-time market predictions to trade confidently.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 my-6 gap-4">
            {productData.map((product, index) => (
              <ProductItem
                key={index}
                icon={product.icon}
                title={product.title}
                link={product.link}
                isLast={index === productData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
