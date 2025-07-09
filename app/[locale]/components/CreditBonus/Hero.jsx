"use client";
import { useTranslations } from "next-intl";
import LocationContextProvider from "@/context/location-context";
import VPSPakFrom from "../common/VPSPakFrom";
import LiveAccountButton from "../liveAccountButton";


const Hero = () => {
  const t = useTranslations("compaign.tradeWin.banner");

  return (
    <LocationContextProvider>
       <section className="relative hero-banner py-5 bg-gradient-to-t from-[#24358b] via-[#202766] to-[#141b43] border-y border-gray-200" id="register2">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-15 bg-no-repeat"
          style={{ backgroundImage: `url('/ben.webp')` }}
        />
        {/* Content */}
        <div className="container">
        <div className="relative z-10 container flex flex-col md:flex-row justify-between items-center h-full">
          <div className="basis-full md:basis-3/4 content-side text-center ltr:md:text-left rtl:md:text-right md:pt-10">
            <h4 className=" text-base md:text-2xl pb-2 font-semibold text-secondary">
             {t("title")}
            </h4>
            <h2 className="bg-gradient-to-b from-white via-[#ffffffc9] to-white inline-block text-transparent bg-clip-text text-base font-[600] lg:text-[35] xl:text-[35px] 2xl:text-[35px] capitalize max-w-xl leading-tight md:max-w-3xl">
            {t("subtitle")}
            </h2>
            <p className="text-white text-sm max-w-3xl xl:text-xl 2xl:text-2xl py-2">
            {t("description")}
            </p>
            <div className="flex flex-col gap-2 text-base md:text-xl md:pt-4 text-gray-200">
                            <p className="flex flex-row justify-start items-center gap-4 py-2">
                <LiveAccountButton hoverStyle="text-white" />
              </p>
           
             
            </div>
          </div>
          
          
          <VPSPakFrom />
          
        </div>
        <p className="container relative z-40">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("register3")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white text-sm"
                >
                        {t("tc")}
                </button>
              </p>
              </div>
       
      </section>
    </LocationContextProvider>
  );
};

export default Hero;

