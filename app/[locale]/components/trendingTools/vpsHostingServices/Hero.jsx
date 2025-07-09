import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import VpsHostingForm from "./vpsHostingForm";
import Aos from "aos";
import LocationContextProvider from "@/context/location-context";
import LiveAccountButton from "../../liveAccountButton";


const Hero = () => {
  const t = useTranslations("prime-tech");
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <LocationContextProvider>
    <div className="pt-5"  id="top-banner">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 items-center border-b border-gray-200 pb-10">
          <div
            className="content-section text-center md:ltr:text-left md:rtl:text-right gap-4 col-span-2 py-6"
          >
            <h2 className="HeadingH2 md:ltr:text-left md:rtl:text-right px-10 md:px-0 md:w-[600px]">
              {t("vpsHosting.hero.heading")}
            </h2>
          
            <p className=" text md:ltr:text-left md:rtl:text-right">
              <span className=" text-secondary">
                {t("vpsHosting.hero.para.yellow1")}
              </span>{" "}
              {t("vpsHosting.hero.para.white")}
              <span className=" text-secondary">
                {t("vpsHosting.hero.para.yellow2")}
              </span>
            </p>
            <div className="relative h-40 w-full md:h-72">
              <Image
                src="/vps.webp"
                fill
                alt="Social Trading"
                className="object-contain"
              />
            </div>
            <p className="text md:ltr:text-left md:rtl:text-right pb-5">
              {t("vpsHosting.hero.buttonHeading")}
            </p>
            <LiveAccountButton hoverStyle="text-white bg-primary hover:bg-secondary" />
          </div>
          <div>
            <VpsHostingForm />
          </div>
        </div>
      </div>
    </div>
    </LocationContextProvider>
  );
};

export default Hero;
