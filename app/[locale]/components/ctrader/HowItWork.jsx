'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import { useTranslations } from 'next-intl';
import AppIcon5 from "./AppIconCtrader";
import AppIconCtrader from "./AppIconCtrader";


const VpsStepsImages = ({
  imageSrc,
  alt,
  stepText,
  stepDescription,
  aosDuration,
  aosDelay,
  color,
  aosFade,
  id,
}) => {

  return (
    <div
      className={`flex flex-col overflow-hidden items-center  firstStep text-center z-50 relative`}
      data-aos-duration={aosDuration}
      data-aos-delay={aosDelay}
      data-aos-easing="ease-in-sine"
      data-aos="fade-right"
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={152}
        height={100}
        className="w-20 md:w-40 h-16 md:h-32"
      />
      <div className="content-step pt-5">
        <p className={`text-xs md:text-base text-${color}`}>{stepText}</p>
      </div>
    </div>
  );
};

const HowItWork = () => {
  const t = useTranslations("platform.ctrader.gettingStarted");
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  return (
    <section className="md:pb-12 3xl:pb-16 pb-8">
      
      <div className="container space-y-5 mt-5">
        <p className="text">
        {t("para1")}
        </p>
      </div>
      <div className="flex justify-center items-center">
      <AppIconCtrader
       windowLink={"https://getctrader.com/gtcfx/ctrader-gtcfx-setup.exe"}
       appleLink={"https://apps.apple.com/app/gtcfx-ctrader/id1644704134"}
       globalLink={"https://ct.gtcfx.com/"}
       apkLink={"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/app-files/ctrader.apk"}
       playLink={"https://play.google.com/store/apps/details?id=com.gtcfx.ct"}
       />       
      </div>
    </section>
  );
};

export default HowItWork;
