"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import { useTranslations } from "next-intl";

const Map = () => {
  
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []); 

  const t = useTranslations("home.global_presence")

  const countries = [
    { name: t("usa") },
    { name: t("uae") },
    { name: t("ksa") },
    { name: t("china") },
    { name: t("maxico") },
    { name: t("vanuato") },
    { name: t("vietnam") },
    { name: t("pakistan") },
    { name: t("malaysia") },
    { name: t("hong_kong") },
    { name: t("indonesia") },
    { name: t("india") },
    { name: t("egypt") },
    { name: t("jordan") },
    { name: t("palestine") },
    { name: t("cyprus") },
    { name: t("chile") },
    { name: t("taiwan") },
    { name: t("turkey") },
    { name: t("nigeria") },
    { name: t("mauritius") },
    { name: t("south_africa") }
  ];

  return (
    <section className="container md:pt-16 3xl:pt-20 pt-8 text-center">
      <h2 className="HeadingH2 mb-5 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">{t("heading")}</h2>
      <p className='text pb-5 max-w-4xl mx-auto'>
      {t("desc")}
        </p>
      <div className="flex flex-col lg:flex-col justify-center items-center lg:items-start">

        <div className="relative w-full h-40 md:h-[650px]">
          <Image
            src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/map-new.webp"
            alt="map"
           fill
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Map;