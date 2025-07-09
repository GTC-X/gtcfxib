import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import VpsHostingForm from "./vpsHostingForm";
import Aos from "aos";
import LocationContextProvider from "@/context/location-context";
import ClientRegistrationForm from "../../common/ClientRegistrationForm";
import LiveAccountButton from "../../liveAccountButton";
import VPSPakFrom from "../../common/VPSPakFrom";


const HeroPakistani = () => {
  const t = useTranslations("prime-tech");
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <LocationContextProvider>
    <div className="bg-gradient-to-t from-[#b68756c9] from-5% via-[#243586] via-35% to-[#181e50] to-90% border-y border-gray-200 pt-16 py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 items-center pb-10">
          <div
            className="content-section text-center md:ltr:text-left md:rtl:text-right gap-4 col-span-2 py-6"
          >
            <h4 className="text-white text-2xl"> Make Money With VPS (Limited Time Offer)</h4>
            <h2 className="HeadingH2 bg-gradient-to-b from-white to-secondary inline-block text-transparent bg-clip-text text-2xl md:text-[40px] md:max-w-2xl md:text-left font-[600] pt-2 uppercase leading-tight">
           Don’t Watch Helplessly as Profitable Trades Slip Through Your Fingers
            </h2>

            
          
            <p className=" text-white md:ltr:text-left md:rtl:text-right text-lg">
            Accelerate with VPS (Limited Time Offer)  Get it FREE with GTCFX
            </p>
            <h4 className="bg-gradient-to-r from-white to-gray-200 inline-block text-transparent bg-clip-text text-lg xl:text-2xl font-[500] py-2 w-72 md:w-full">
                Offer Expire Date: 31 Dec, 2024
              </h4>
            <div className="relative h-40 w-full md:h-72">
              <Image
                src="/vps.webp"
                fill
                alt="Social Trading"
                className="object-contain"
              />
            </div>
            
          </div>
          <div>
            <VPSPakFrom />
          </div>
        </div>
      </div>
    </div>
    </LocationContextProvider>
  );
};

export default HeroPakistani