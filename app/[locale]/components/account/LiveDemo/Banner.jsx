"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocationDetail } from "@/context/useLocationDetail";
import MainForm from "../../common/MainForm";
import Image from "next/image";
import LiveAccountButton from "../../liveAccountButton";


const Banner = () => {
  const t = useTranslations("partner.IBProgram.bannerText");
  
  return (
    <useLocationDetail>
      <section className="relative hero-banner py-14 bg-gradient-to-t from-primary via-[#191e4f] to-primary">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center-right opacity-20"
          style={{ backgroundImage: `url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/demo-banner.webp')` }}
        />
        {/* Content */}
        <div className="relative z-10 container grid grid-cols-1 md:grid-cols-3 justify-between items-center h-full">
          <div className="content-side md:col-span-2 text-center rtl:md:text-right ltr:md:text-left pb-16 md:pb-0">
            <h4 className="text-white text-base md:text-2xl pb-2">
            Master the Markets with GTCFX Advanced Trading Platforms
            </h4>
            <h2 className="bg-gradient-to-r from-secondary via-[#ffffffd4] to-secondary inline-block text-transparent bg-clip-text font-semibold text-xl xl:text-[30px] 2xl:text-[45px] uppercase max-w-2xl  leading-tight md:max-w-2xl">
            Trade Smarter, Not Riskier – Open Your Free Demo Account Today
            </h2>
            <p className="text-white text-sm max-w-2xl md:text-[20px] py-2 leading-8">
            Explore GTCFX MT5 and WebTrader platforms in a secure, risk-free environment. Practice trading with real-time market data and sharpen your strategy with zero financial exposure.
            </p>
            <div className="mt-10">
                  <LiveAccountButton hoverStyle="bg-white text-primary hover:bg-secondary hover:text-white" />
            </div>

        
       
          </div>
          <div className="images-setting flex flex-row items-center justify-end">
              <MainForm />
           
          </div>
          
           
        

        </div>
        <div id="register2"></div>
      </section>

    </useLocationDetail>
  );
};

export default Banner;
