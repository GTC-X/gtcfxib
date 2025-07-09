"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Aos from "aos";
import Button from "../../common/Button";

const Hero = () => {
  const t = useTranslations("prime-tech");
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <div className="md:pt-12 3xl:pyt-16 pt-8">
      <div className="container border-b border-gray-200">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-2">
          <div
            className="md:basis-1/2 content-section text-center md:ltr:text-left md:rtl:text-right gap-4 pb-6 flex flex-col justify-start"
          >
            <h2 className="HeadingH2 mb-0 text-center md:ltr:text-left md:rtl:text-right">
              {t("technicalTool.hero.heading")}
              <br/>
              <span className=" text-secondary ">
                {t("technicalTool.hero.heading2")}
              </span>
              <br/>
              {t("technicalTool.hero.heading3")}
            </h2>
           
            <div className="relative h-14 lg:h-6 w-full flex flex-col md:flex-row justify-start gap-4 items-center">
            <p className="text-secondary text-center text-sm pb-4">
            {t("technicalTool.hero.powerBy")}
            </p>
            <Image
                src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/techical.webp"
                alt={"title"}
                fill
                className="object-contain" 
              />
            </div>
            <div className="hero-content-button flex flex-col md:flex-row gap-4 justify-start items-center md:items-end md:pb-10 md:mt-4">
              <Button />
            </div>
          </div>
       
        <div className="md:basis-1/2 relative h-28 md:h-64 z-10 w-full md:mt-[-80px]">
          <Image
            src={"/trading-tools/brand.png"}
            alt={"title"}
           fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
