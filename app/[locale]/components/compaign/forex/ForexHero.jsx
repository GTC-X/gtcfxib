import React from "react";
import SimpleForm from "../../common/SimpleForm";
import Image from "next/image";


const ForexHero = ({ title, subTitle, mainTitle, mainTitleHighlight, terms, imageSrc, imageAlt, footerText }) => {
  return (
    <div className="bg-gradient py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="basis-full md:basis-8/12 content-hero text-center md:text-left">
            <h4 className="text-white text-lg md:text-2xl font-semibold">
              {title}
            </h4>
            <h3 className="text-white text-lg md:text-2xl font-semibold">
              {subTitle}
            </h3>
            <h1 className="py-1">
              {mainTitleHighlight}
              {mainTitle}
            </h1>
            <h4 className="text-secondary text-lg md:text-2xl font-semibold">
              {terms}
            </h4>
            <div className="hidden md:flex justify-end items-center">
              <div className="relative h-96 w-full md:w-[500px] md:mt-[-90px]">
                <Image src={imageSrc} alt={imageAlt} fill className="object-contain" />
              </div>
            </div>
          </div>
          <SimpleForm />
        </div>
        <p className="text-center text-xs text-secondary pt-5">{footerText}</p>
      </div>
    </div>
  );
};

export default ForexHero;
