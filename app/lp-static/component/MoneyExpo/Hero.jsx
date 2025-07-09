"use client";
import React from "react";
import Image from "next/image";
import LocationContextProvider from "@/context/location-context";

const MoneyHero = ({ title, subTitle, location, time, date }) => {
  return (
    <LocationContextProvider>
      <section className="relative hero-banner py-10 bg-gradient-to-r from-[#24358b] via-[#202766] to-[#141b43]">
        {/* Content */}
        <div className="relative z-10 container flex flex-col md:flex-row-reverse justify-between items-center h-full">
          
          {/* Image Section */}
          <div className="md:basis-1/2 text-center">
            <div className="relative w-full h-72 md:h-[600px] mb-5 md:mb-0">
              <Image src='/spinnar.webp' fill alt='spinning wheel' className="object-contain" />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("new1")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-[hsl(227,53%,33%)] via-[#1b2258] to-[#10122d] shine-button text-white text-sm mt-[-40px] 2xl:text-base px-4 py-3 text-center rounded-md md:w-auto uppercase w-[300px] md:m-0 mx-auto duration-500 transition-colors hover:bg-gradient-to-r hover:from-[#10122d]  hover:to-[#1b245e]"
            >
              <strong className="text-secondary">Register now</strong> to play lucky draw spinning wheel at <strong className="text-secondary">GTCFX</strong> Booth
            </button>
          </div>
          
          {/* Text Content Section */}
          <div className="content-side text-center md:text-left pb-10 md:basis-1/2">
            <h3 className="text-white text-lg mb-2 md:text-xl capitalize hidden md:block">
              <strong className="text-secondary">register now</strong> to play lucky draw spinning wheel at <strong className="text-secondary">GTCFX</strong> Booth
            </h3>
            <h2 className="bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text text-[25px] xl:text-[30px] 2xl:text-[55px] capitalize max-w-xl leading-tight md:max-w-2xl font-semibold p-5 md:p-0">
              {subTitle}
            </h2>
            <p className="text-white text-base md:text-[18px] pb-2 max-w-3xl pt-3 leading-8">
              {title}
            </p>
            <div className="flex flex-col gap-2 text-base md:text-2xl pt-4 text-gray-200">
              <p><strong className="text-secondary">Location:</strong> {location}</p>
              <p><strong className="text-secondary">Time:</strong> {time}</p>
              <p><strong className="text-secondary">Date:</strong> {date}</p>
            </div>
          </div>
          
        </div>
      </section>
    </LocationContextProvider>
  );
};

export default MoneyHero;
