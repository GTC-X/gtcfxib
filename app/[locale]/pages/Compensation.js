"use client";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import Aos from "aos";
import { MdOutlineSecurity } from "react-icons/md";
import Link from "next/link";
import { VscFilePdf } from "react-icons/vsc";



const CompensationPage = () => {
  const t = useTranslations("about.client-fund-insurance");
  useEffect(() => {
    Aos.init({
      disable: "mobile",
      once: true, // This ensures the animation only happens once
    });
  }, []);
  return (
    <section className="md:pt-12 3xl:pt-16 pt-8 pb-10">
      <div className="absolute top-[20%] left-0 w-full h-96 md:h-[600px] opacity-45 bg-center bg-cover md:bg-contain bg-repeat md:bg-no-repeat bg-[url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/mobile-bg.webp')]" />
      <div className="container relative z-30">
        <div className="flex flex-row items-center justify-start gap-2 md:mb-6">
          <p className="text-secondary text-4xl md:text-5xl">
            <MdOutlineSecurity />
          </p>
          <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 text-left mb-0">
            {t("title")}
          </h2>
        </div>
        <div className="flex flex-col gap-4 justify-start mb-2 text ltr:text-left rtl:text-right">
          <p className="text-base text-primary py-3 w-full ">
            {t("sub_title1_1")}
          </p>
        
          {t("sub_title1_2")}
       
         {t("sub_title1_3")}
         
         <p>{t("sub_title1_4")}</p> 

          <div className="flex flex-col md:flex-row justify-start items-center gap-4">
            <Link href ="https://financialcommission.org/gtcfx/" target="_blank" className="bg-gradient-to-r from-[hsl(227,53%,33%)] via-[#1b2258] to-[#10122d] text-white text-sm 3xl:text-xl px-8 py-3 text-center md:w-auto uppercase w-[300px] md:m-0 mx-auto duration-500 transition-colors hover:bg-gradient-to-r hover:from-[#10122d]  hover:to-[#1b245e]">{t("visitButton")}</Link>
            <Link href ="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/GTC+Global+Trade+Capital+Co.+Ltd.pdf" target="_blank" className="flex flex-row items-center justify-center gap-3 bg-gradient-to-l from-[hsl(227,53%,33%)] via-[#1b2258] to-[#10122d] text-white text-sm 3xl:text-xl px-8 py-3 text-center md:w-auto uppercase w-[300px] md:m-0 mx-auto duration-500 transition-colors hover:bg-gradient-to-r hover:from-[#10122d]  hover:to-[#1b245e]"><VscFilePdf size={28} /> {t("downloadButton")}</Link>
          </div>
          <h2 className="HeadingH2 md:text-2xl ltr:text-left rtl:text-right">{t("heading1")}</h2>
          {t("desc1_1")}
          <h2 className="HeadingH2 md:text-2xl ltr:text-left rtl:text-right">{t("heading2")}</h2>
          {t("desc2_1")}
          <h2 className="HeadingH2 md:text-2xl ltr:text-left rtl:text-right">{t("heading3")}</h2>
          {t("desc3_1")}
          <h2 className="HeadingH2 md:text-2xl ltr:text-left rtl:text-right">{t("heading4")}</h2>
           {t("desc4_1")}
          {t("desc4_2")}
        </div>
      </div>
    </section>
  );
};

export default CompensationPage;
