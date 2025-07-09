"use client";
import React from "react";
import WhyChooseIcon from "../components/about/WhyChooseIcon";
import FreshPress from "../components/about/FreshPress";
import { useTranslations } from "next-intl";

const AboutUsPage = () => {
  const t = useTranslations("about.about-gtc-group");
  return (
    <>
        <section className='top-content pt-10 lg:pt-14 2xl:pt-20 3xl:pt-20 relative z-30'>
        <div className="absolute top-[50%] left-0 w-full h-96 md:h-[800px] opacity-45 bg-center bg-cover md:bg-contain bg-repeat md:bg-no-repeat bg-[url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/mobile-bg.webp')]" />
        <div className='container'>
        <div className='content-inner text-center mb-10'>
          <h2 className='HeadingH2'>{t("title")}</h2>
          <p className='text text-xl'>{t("subTitle")}</p>
        </div>
        <WhyChooseIcon />
        </div>
      </section>
      <FreshPress /> 
    </>
  );
};

export default AboutUsPage;
