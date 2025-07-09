import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const DemoBanner = () => {
  const t = useTranslations("partner.demoCompetition.bannerText");
  
  return (
    <div className="bg-primary hero-section relative">
      <div className="container">
        <div className="flex flex-col justify-center items-center h-64 md:h-[470px] md:pb-16">
          <div className="content-side">
            <h2 className="HeadingH2 text-white text-xl md:text-5xl">
              {t("heading")}<span className="text-secondary">{t("heading2")}</span>
            </h2>
            <p className="text text-white text-base md:text-lg xl:text-2xl">
              {t("subHeading")}
            </p> 
          </div>
        </div>
      </div>
      <svg
        className="absolute bottom-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path fill="#FFFFFF" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
      </svg>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
        <div className="w-16 h-16 relative">
          <Image src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/arrow.webp" alt="Arrow" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default DemoBanner;
