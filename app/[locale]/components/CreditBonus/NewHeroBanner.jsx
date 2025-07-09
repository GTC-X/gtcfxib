"use client";
import { useTranslations } from "next-intl";
import LocationContextProvider from "@/context/location-context";
import VPSPakFrom from "../common/VPSPakFrom";


const NewHeroBanner = () => {
  const t = useTranslations("compaign.tradeWin.banner2");

  return (
    <LocationContextProvider>
      <section className="relative hero-banner py-10 md:py-14 lg:py-16 2xl:py-20 bg-gradient-to-t from-[#24358b] via-[#202766] to-[#141b43] border-y border-gray-200">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/trading.jpg')` }}
        />
        {/* Content */}
        <div className="relative z-10 container flex flex-col md:flex-row justify-between items-center h-full">
          <div className="order-2 md:order-1 content-side text-center ltr:md:text-left rtl:md:text-right basis-full md:basis-9/12">
            <h4 className="text-white text-base md:text-2xl pb-2">
             {t("title")}
            </h4>
            <h2 className="bg-gradient-to-t from-white to-secondary inline-block text-transparent bg-clip-text text-2xl font-[600] xl:text-[30px] 2xl:text-[50px] capitalize max-w-xl leading-tight md:max-w-2xl">
            {t("subtitle")}
            </h2>
            <p className="text-white text-sm max-w-xl md:text-lg py-2">
            {t("description")}
            </p>
            <div className="flex flex-col gap-2 text-base md:text-xl pt-4 text-gray-200">
              <p>{t("validUntil")}</p>
       
              <p className="text-sm cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("register3")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("tc")}
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 iframe-code w-full basis-full md:basis-3/12">
          <VPSPakFrom />
          </div>
        </div>
        <div id="register2"></div>
      </section>
    </LocationContextProvider>
  );
};

export default NewHeroBanner;
