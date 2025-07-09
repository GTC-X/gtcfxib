"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Aos from "aos";

const Hero = () => {
  const t = useTranslations("tradingTools");
  
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  return (
    <div className="hero-banner bg-gradient-to-b from-[#050331] via-[#202766] to-[#050331] border-y border-gray-200">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center">
          {/* Image column first on mobile */}
          <div className="relative w-full h-72 md:h-[450px] md:order-last">
            <Image src='/Seminar.webp' fill alt='spinning wheel' className="object-contain" />
          </div>

          {/* Text section */}
          <div className="content-section text-center md:text-left py-10 md:py-28">
            <h2 className="text-secondary text-lg md:text-2xl font-medium">
              FREE EXCLUSIVE SEMINAR 
            </h2>
            <h2 className="bg-gradient-to-b from-white to-secondary inline-block text-transparent bg-clip-text text-3xl xl:text-[30px] 2xl:text-[45px] capitalize max-w-xl leading-tight md:max-w-2xl font-semibold">
              Reach New Heights with GTCFX’s Partnership Program
            </h2>

            <p className="text-white text-base md:text-lg xl:text-xl py-4">
              Learn how to establish and grow a successful partnership with GTCFX, the leading name in fintech. Gain practical insights on maximizing opportunities in the financial markets and scaling your business for sustained success! 
            </p>
            <h2 className="text-white font-semibold text-base md:text-xl pb-8">
              9th October 2024 | Dubai - UAE | 6PM - 9PM  
            </h2>

            <Link href="/"
              onClick={(e) => {
                let section = document.getElementById('register');
                e.preventDefault();
                section && section.scrollIntoView({ behavior: "smooth", block: "start" });
              }} 
              className="bg-[#29a643] rounded-lg shadow-lg overflow-hidden text-white 3xl:text-xl px-8 py-3 text-center block mx-auto transition-colors duration-900 hover:bg-gradient-to-b hover:from-[#050331] hover:to-[#05033162] duration-500 hover:text-white"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
