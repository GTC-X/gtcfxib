"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocationDetail } from "@/context/useLocationDetail";

import TradeForm from "../15-deposit-bonus/TraderForm";
import Image from "next/image";
import LiveAccountButton from "../liveAccountButton";


const MarginBonusBanner = () => {
  const t = useTranslations("partner.IBProgram.bannerText");
  
  return (
    <useLocationDetail>
      <section className="relative hero-banner py-10 bg-[url('/marginbonus.webp')] bg-cover bg-left-bottom">
        {/* Content */}
        <div className="relative z-10 container flex flex-col md:flex-row justify-between items-center h-full">
          <div className="content-side text-center rtl:md:text-right ltr:md:text-left pb-16 md:pb-0">
            <h4 className="text-white text-sm md:text-3xl pb-2 uppercase">
            Margin Bonus Offer
            </h4>
            <h2 className="bg-gradient-to-r from-secondary via-[#ffffffd4] to-secondary inline-block text-transparent bg-clip-text font-semibold text-base xl:text-[30px] 2xl:text-[45px] max-w-xl  leading-tight md:max-w-2xl uppercase">
            Boost Your Trading Power with GTCFX
            </h2>
            <p className="text-white text-xs max-w-2xl md:text-[16px] py-2  leading-8">
            At GTCFX, we are committed to supporting our traders with promotions that enhance their trading potential. Our Margin Bonus is a special trading credit added to your account upon making a qualifying deposit. It is designed to increase your available margin and support your trading activity under defined terms.
            </p>
            <div className="mt-10">
                 <LiveAccountButton hoverStyle="bg-white text-primary hover:bg-secondary hover:text-white" />
            </div>

        
       
          </div>
          <div className="images-setting flex flex-row items-center justify-end">
              <TradeForm />
          </div>
          
           
        

        </div>
        <div id="register2"></div>
      </section>

    </useLocationDetail>
  );
};
export default MarginBonusBanner