"use client";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import { GiTakeMyMoney } from "react-icons/gi";
import { LuArrowUpWideNarrow } from "react-icons/lu";
import { GrCurrency, GrCli, GrObjectUngroup   } from "react-icons/gr";
import { AiOutlineSliders, AiFillControl  } from "react-icons/ai";
import { SiMarketo } from "react-icons/si";

import { FaArrowTrendUp, FaHouseLaptop  } from "react-icons/fa6";
import Link from "next/link";
import Aos from "aos";
// import VpsStepsImages from "./stepsVps";
const ProductItem = ({ icon, title, link, isLast }) => (
  <Link
    href={link}
    className={`relative flex flex-col items-center text-white p-6 bg-secondary hover:z-40 hover:bg-primary hover:text-white text-gtcPrimary transform md:scale-300 transition-transform duration-500 md:ease-in-out md:hover:scale-110 hover:bg-opacity-100`}
  >
    {isLast ? null : (
      <div className="border-r border-opacity-50 border-primary h-16 absolute right-0" />
    )}
    {icon}
    <h3 className="font-bold text-sm mt-1 ">{title}</h3>
  </Link>
);

const BackOfCard = ({ title, icon, paragraph }) => {
  return (
    <div className="flip-card  border-primary  h-72 bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#050331] shadow-lg overflow-hidden rounded-[25px]">
      <div className="flip-card-inner ">
        <div className="flip-card-front border rounded-[25px] p-6">
          <div className="text-white flex flex-col h-full justify-center items-center">
           <p className="text-secondary">{icon}</p> 
            <h3 className="text-white font-medium text-lg my-4">{title}</h3>
            <div className="h-[2px] w-4/12 bg-secondary mt-2"></div>
          </div>
        </div>
        <div className="flip-card-back p-6 bg-gradient-to-t from-[#202d7bdb] via-[#050331] to-[#050331] rounded-[25px]">
          <p className="text-white flex flex-col h-full justify-center items-center text-base">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};
const WhoAttend = () => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  const t = useTranslations("tradingTools");

  const productData = [
    {
      icon: <GiTakeMyMoney size={40} />,
      title: "Investors",
      link: "",
    },
    {
      icon: <LuArrowUpWideNarrow size={40} />,
      title: "Traders & Brokers",
      link: "",
    },
    {
      icon: <FaArrowTrendUp size={40} />,
      title: "Finance Professionals",
      link: "",
    },
    {
      icon: <AiOutlineSliders size={40} />,
      title: "Entrepreneurs",
      link: "",
    },
    {
      icon: <FaArrowTrendUp size={40} />,
      title: "Influencers",
      paragraph: t("vpsHosting.gtcfxVpsSection.column3.title"),
      link: "",
    },
    {
      icon: <AiOutlineSliders size={40} />,
      title: "Brokerage Enthusiasts",
      link: "",
    },
  ];

  const cardData = [
    {
      icon: <FaHouseLaptop  size={60} />,
      title: "Setting Up Regulatory Compliance & Tech",
      paragraph:
        "Explore the acquisition of regulatory approvals and gain insights into setting up cutting-edge technology for your brokerage.",
      link: "",
    },
    {
      icon: <GrCurrency size={60} />,
      title: "Strategic Brokerage Marketing Tactics ",
      paragraph:
        "Dive into the art of marketing your brokerage house strategically, learning effective tactics to enhance visibility and attract clients.",
      link: "",
    },
    {
      icon: <AiFillControl size={60} />,
      title: "Mastering Brokerage Sales Techniques",
      paragraph:
        "Discover the essential skills and strategies to effectively sell your brokerage house, ensuring a successful transition and optimal value",
      link: "",
    },
    {
      icon: <SiMarketo size={60} />,
      title: "Financial Market Analysis Insights",
      paragraph:
        "Enhance your skills in financial market analysis, gaining a deeper understanding of market trends and dynamics crucial for informed decision-making.",
      link: "",
    },
  ];
  return (
    <>
    <div className="container py-10 md:py-16 2xl:py-20">
      <div className="text-center">
      <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-2xl lg:text-[2.5rem] font-[400] 2xl:text-[30px] 3xl:text-[35px] capitalize leading-normal xl:leading-[3rem] 3xl:leading-[4rem]">
        Who Should Attend?
      </h2>
      <p className="text-lg max-w-4xl mx-auto">Our client experienced the seamless and instant withdrawal process at GTC FX, reaffirming our commitment to providing a seamless trading experience where client satisfaction is our top priority.</p>
      </div>
    
      <div className="grid grid-cols-2 md:grid-cols-6 my-6">
        {productData.map((product, index) => (
          <ProductItem
            key={index}
            icon={product.icon}
            title={product.title}
            link={product.link}
            paragraph={product?.paragraph}
            isLast={index == productData?.length - 1}
          />
        ))}
      </div>
      </div>
      <div className="relative hero-banner py-10 md:py-14 lg:py-16 2xl:py-20 bg-gradient-to-r from-[#050331] via-[#202766] to-[#050331] border-y border-gray-200">
  {/* Overlay background image */}
  <div className="absolute inset-0 bg-cover bg-center bg-[url('/about/bg-seminar.webp')]"></div>

  <div className="container relative z-10 text-center">
    <h2 className="bg-gradient-to-b from-white to-secondary inline-block text-transparent bg-clip-text text-2xl lg:text-[2.5rem] font-[400] 2xl:text-[30px] 3xl:text-[35px] capitalize leading-normal xl:leading-[3rem] 3xl:leading-[4rem] mb-8">
    Why Partner with GTCFX? 
    </h2>
    <p className="text-lg max-w-6xl mx-auto text-white pb-10">At GTCFX, we empower our partners with unparalleled support, cutting-edge technology, and market expertise. Our partnership program is designed to help you thrive in the fintech industry, with tools and resources that drive business growth. From regulatory support and market analysis to marketing strategies, GTCFX is committed to your success in the ever-evolving financial market. </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData?.map((item, index) => (
        <BackOfCard
          key={index}
          title={item?.title}
          icon={item?.icon}
          paragraph={item?.paragraph}
        />
      ))}
    </div>
  </div>
</div>

    </>
  );
};

export default WhoAttend;
