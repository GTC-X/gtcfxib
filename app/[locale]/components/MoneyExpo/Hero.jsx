"use client";
import React from "react";
import Image from "next/image";
import LocationContextProvider from "@/context/location-context";

const MoneyHero = ({ title, subTitle, location, time, date }) => {
  return (
    <LocationContextProvider>
      <section className="relative hero-banner bg-gradient-to-r from-[#24358b] via-[#202766] to-[#141b43]">
        {/* Content */}
        <div className="relative z-10 container flex flex-col md:flex-row-reverse justify-between items-end h-full">
          
          {/* Image Section */}
          <div className="hidden md:block md:basis-1/2 text-center">
            <div className="relative w-full h-40 sm:h-72 md:h-[320px] mb-5 md:mb-0">
              {/* Ensure that the image is responsive */}
              <Image 
                src='/ifxx.webp' 
                fill 
                alt='spinning wheel' 
                className="object-contain" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                priority
              />
            </div>
          </div>
          
          {/* Text Content Section */}
          <div className="content-side text-center md:text-left pb-10 md:basis-1/2  py-10">
            <h2 className="bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text text-[25px] xl:text-[30px] 2xl:text-[40px]  max-w-xl leading-tight md:max-w-3xl px-5 md:p-0">
            Unlock Exciting Trading Opportunities <b className=" font-semibold">with GTCFX at iFX EXPO Dubai 2025!</b>
            </h2>

            <p className="text-white font-base max-w-2xl pt-5">
            Join us at <b>Booth No. 59</b> and connect with industry leaders. Gain exclusive insights, explore advanced trading platforms, and discover how to boost your trading strategies.
            </p>

            <div className="flex flex-col gap-2 text-base md:text-2xl pt-4 text-gray-200">
              <p><strong className="text-secondary">Location:</strong> Dubai World Trade Centre, Dubai, UAE</p>
              <p><strong className="text-secondary">Date:</strong> January 14-16, 2025</p>
              <p><strong className="text-secondary">ELITE SPONSOR
              </strong>  📍 Booth No: 59 </p>
            </div>
          </div>
          
        </div>
      </section>
    </LocationContextProvider>
  );
};

export default MoneyHero;
