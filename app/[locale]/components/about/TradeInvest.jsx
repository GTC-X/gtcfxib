'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LiveAccountButton from "../liveAccountButton";
import LocationContextProvider from "@/context/location-context";

const TradeInvest = () => {
  const t = useTranslations("about.tradeInvest");
  return (
    <LocationContextProvider >
    <section className="sm:pt-1 md:pt-1 mt-[22%] sm:mt-[20%] lg:mt-[18%] xl:mt-[16%] 2xl:mt-[12%] 3xl:mt-[11%] 4xl:mt-[8%]">
      <div className="md:container">
        <div className="bg-[#e9e9e9] relative ltr:md:pl-12 rtl:md:pr-12 mt-[-20px] md:my-[-130px] pb-10 md:pb-0">
          <div className="overlay absolute inset-0 h-full w-full opacity-20 bg-no-repeat bg-left-bottom bg-contain bg-[url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/overlay-bg.webp')]" />
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
            <div className="content text-center ltr:md:text-left rtl:md:text-right z-20">
            <h2 className='text-xl sm:text-2xl lg:text-3xl uppercase text-primary pt-5 sm:pt-0 md:leading-[40px] sm:w-[350px] lg:w-[600px] mb-5'><b className=' text-secondary font-normal'>{t("part1")} </b> <br/>
            {t("part2")}</h2>
         <LiveAccountButton hoverStyle="bg-primary text-white hover:bg-secondary hover:text-white" />
            </div>
            <div className='relative h-48 sm:h-[200px] md:h-[300px] w-full mt-[-50px] md:mt-[-80px]'>
                    <Image src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/about-client.webp" fill alt="" className="object-contain" />
                </div> 
          </div>
        </div>
      </div>
    </section>
    </LocationContextProvider>
  );
};

export default TradeInvest;
