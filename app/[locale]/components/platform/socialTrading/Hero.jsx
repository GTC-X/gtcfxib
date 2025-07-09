'use client'
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SimpleForm from "../../common/SimpleForm";
import Link from "next/link";
import LocationContextProvider from "@/context/location-context";

const Hero = () => {
    const t = useTranslations("prime-tech")
  return (
    <LocationContextProvider>
    <div className="bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] border-y border-gray-200 pt-16 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-8  pb-12">
          <div className="content-section gap-4 text-center relative">
            <h2 className="bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text text-xl xl:text-3xl 2xl:text-[55px] capitalize font-semibold mb-0 md:mb-0 line-height-setting md:w-[1100px]">
              {t("socialTranding.hero.heading")}
            </h2>
            <h3 className="HeadingH2  text-xl xl:text-3xl 2xl:text-[55px]  capitalize font-semibold bg-gradient-to-r from-white to-secondary text-transparent bg-clip-text  line-height-setting"> {t("socialTranding.hero.subHeading")}</h3>
            <p className="text-white text"> 
            {t("socialTranding.hero.paragraph")}
            </p>
            <div class="absolute top-[5%] md:top-[10%] left-0 w-full h-[600px] opacity-90 bg-center bg-contain bg-no-repeat bg-[url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/platform/map-2.webp')]"></div>
            <div className="relative w-full h-48 md:h-[450px]">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/videos/ct.gif"
              fill
              alt="Social Trading"
              className="object-contain" 
            />
          </div>
         
          </div>
        
        </div>
       
      </div>
    </div>
    </LocationContextProvider>
  );
};

export default Hero;
