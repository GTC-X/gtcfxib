"use client"
import React, { useState,useEffect } from 'react';
import Aos from "aos";
import { TfiWrite } from "react-icons/tfi";
import { useTranslations } from 'next-intl';
import Link from 'next/link';



const RegulationPage = () => {
  const t = useTranslations('about.gtc-regulations')
  useEffect(() => {
    Aos.init({ 
      disable: "mobile",
      once: true // This ensures the animation only happens once 
    });
  }, []); 
  return (
    <div>
    <section className="md:pt-16 pt-8">
    <div className="absolute top-[20%] left-0 w-full h-96 md:h-[800px] opacity-45 bg-center bg-cover md:bg-contain bg-repeat md:bg-no-repeat bg-[url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/mobile-bg.webp')]" /> 
      <div className="container relative z-30"
      >
           <div className="flex flex-row items-center justify-start gap-2 md:mb-6">
          <p className="text-secondary text-4xl md:text-5xl">
            <TfiWrite />
          </p>
          <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 text-left mb-0">
            {t("title")}
          </h2>
        </div>
        <p className='text max-w-7xl ltr:text-left rtl:text-right'>{t("des")}</p>
        <h3 className='text-lg md:text-xl text-secondary py-6 font-semibold'>
        {t("sub_title")}
          </h3>
          
        
      </div>
    </section>
    <section>
  <div className="container md:pt-12 pt-8 relative z-30">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* First Section */}
      <div className="ltr:border-l-4 ltr:border-l-gray-200 ltr:pl-4 rtl:border-r-4 rtl:border-r-gray-200 rtl:pr-4">
       
        <div className="flex py-4 items-center gap-3">
          <img src="/flags/sca.svg" className="w-8 h-8" alt="SCA Flag" />
          <p className="text-primary text-xl">{t("regulation1_3")}</p>
        </div>
        <p className="text-primary text-md">{t("regulation1_4")}</p>
        <p className="text-primary text-md">
          {t("regulation5_6")}{" "}
          <Link className="text-blue-600" href="https://www.gtcmtd.com/" target="_blank">
            www.gtcmtd.com
          </Link>
        </p>
      </div>

      {/* Second Section */}
      <div className="ltr:border-l-4 ltr:border-l-gray-200 ltr:pl-4 rtl:border-r-4 rtl:border-r-gray-200 rtl:pr-4">
       
        <div className="flex py-4 items-center gap-3">
          <img src="/flags/sca.svg" className="w-9 h-6" alt="SCA Flag" />
          <p className="text-primary text-xl">{t("regulation1_3")}</p>
        </div>
        <p className="text-primary text-md">{t("regulationnew_4")}</p>
        <p className="text-primary text-md">
          {t("regulation5_6")}{" "}
          <Link className="text-blue-600" href="https://www.gtcfc.com/" target="_blank">
            www.gtcfc.com
          </Link>
        </p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container md:pt-12 pt-8 relative z-30">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* First Section */}
      <div className="ltr:border-l-4 ltr:border-l-gray-200 ltr:pl-4 rtl:border-r-4 rtl:border-r-gray-200 rtl:pr-4">
       
        <div className="flex py-4 items-center gap-3">
          <img src="/flags/uk.png" className="w-9 h-6" alt="UK Flag" />
          <p className="text-primary text-xl">{t("regulation5_3")}</p>
        </div>
        <p className="text-primary text-md">
          {t("regulation5_4")} <br />
          {t("regulation5_5")}
        </p>
        <p className=" text-primary text-md">
          {t("regulation5_6")}{" "}
          <Link className="text-blue-600" href="https://www.gmgmarkets.co.uk/" target="_blank">
            www.gmgmarkets.co.uk
          </Link>
        </p>
      </div>

      {/* Second Section */}
        <div className='ltr:border-l-4 ltr:border-l-gray-200 ltr:pl-4 rtl:border-r-4 rtl:border-r-gray-200 rtl:pr-4'
         >
        
         <div className='flex py-4 items-center gap-3'>
         <img src='/flags/vfsc.png' className='w-8 h-6'/>
         <p className='text-primary text-xl'>  {t("regulation4_3")}</p>
         </div>
         <p className=' text-primary text-md'>
         {t("regulation4_4")}
         </p>
         </div>
    </div> 
  </div>
</section>

<section>
  <div className="container md:pt-12 pt-8 relative z-30">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Regulation 3 Section */}
      <div className="ltr:border-l-4 ltr:border-l-gray-200 ltr:pl-4 rtl:border-r-4 rtl:border-r-gray-200 rtl:pr-4">
       
        <div className="flex py-4 items-center gap-3">
          <img src="/flags/Mauritius.png" className="w-8 h-6" alt="Mauritius Flag" />
          <p className="text-primary text-xl">{t("regulation3_3")}</p>
        </div>
        <p className="max-w-xl text-primary text-md">{t("regulation3_4")}</p>
      </div>

      {/* Regulation 6 Section */}
      <div className="ltr:border-l-4 ltr:border-l-gray-200 ltr:pl-4 rtl:border-r-4 rtl:border-r-gray-200 rtl:pr-4">
        
        <div className="flex py-4 items-center gap-3">
          <img src="/flags/ZA.svg" className="w-8 h-6" alt="South Africa Flag" />
          <p className="text-primary text-xl">{t("regulation6_3")}</p>
        </div>
        <p className="max-w-xl text-primary text-md">{t("regulation6_4")}</p>
      </div>
    </div>
  </div>
</section>

  
   <div className='container pt-20'>
      
      <p className='text max-w-6xl mx-auto'>{t("notice")}</p>
      
   </div>
   
   </div>
  )
}

export default RegulationPage;
