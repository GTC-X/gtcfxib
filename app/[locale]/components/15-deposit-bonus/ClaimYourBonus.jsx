"use client";
import React from "react";
import Link from "next/link";
import LocationContextProvider from "@/context/location-context";
import { useTranslations } from "next-intl";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const ClaimYourBonus = () => {
  const t = useTranslations("compaign.tradeWin.claim")
  return (
    <LocationContextProvider>
      <section className="py-10 md:py-12 xl:py-16 2xl:py-20">
        <div className="container">
          <div className="relative text-center">
            <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-[600] lg:text-[30px] 2xl:text-[32px] capitalize max-w-xl leading-tight">
              {t("title")}
            </h2>
          </div>
          <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:gap-16 pt-4">
            <div className="order-2 md:order-1 content-side-portion ltr:text-left rtl:text-right basis-full md:basis-2/4">
              <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-[400] xl:text-[25px] 2xl:text-25px] capitalize max-w-2xl leading-tight">
              {t("subTitle")}
              </h2>
              <p className="textprimary md:text-[16px] 2xl:text-[17px] text-sm  py-2 leading-6">
              {t("des")}
              </p>
              <p className="textprimary md:text-[16px] 2xl:text-[17px] text-sm py-2 leading-6">  {t("detail")}</p>
              <ul className="space-y-4 pt-2">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-green-500 mt-1" />
            <p className="text-primary  md:text-lg">
            {t("list.one")}
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-green-500 mt-1" />
            <p className="text-primary md:text-lg">
            {t("list.two")}
            </p>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-green-500 mt-1" />
            <p className="text-primary  md:text-lg">
            {t("list.three")}
            </p>
          </li>
        </ul>
              <div className="pt-10">
                <Link
                  href='https://mygtcportal.com/getview?view=register'
                  target="_blank"
                  className={`bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#05033162] rounded-lg shadow-lg overflow-hidden text-white 3xl:text-xl px-8 py-3 text-center md:w-auto w-[300px] md:m-0 mx-auto transition-colors duration-900 hover:bg-gradient-to-b hover:from-secondary hover:to-[#fff] duration-500 hover:text-primary`}
                >
                  {t("liveButton")}
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 basis-full md:basis-2/4">
            <div className="relative w-full h-2 md:h-[400px]">
              <Image
                src="/sideimg.webp"
                fill
                alt="Booth"
                className="object-contain"
              
              />
            </div>
              
            </div>
          </div>
        </div>
      </section>
    </LocationContextProvider>
  );
};

export default ClaimYourBonus;
