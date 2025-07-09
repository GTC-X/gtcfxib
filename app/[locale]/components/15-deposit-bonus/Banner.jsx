"use client"
import React from "react";
import Image from "next/image";
import LiveAccountButton from "../liveAccountButton";
import TradeForm from "./TraderForm";
import VPSPakFrom from "../common/VPSPakFrom";
import { useTranslations } from "next-intl";

const CashbackBanner = ({ promo = false }) => {
    const t = useTranslations("callback.banner")
  
  return (
    <section className="relative w-full min-h-[500px] bg-gradient-to-r from-[#0f1c44] to-[#193a7a] py-10">
      <div className="max-w-6xl min-h-96 gap-2 mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="text-white text-center rtl:sm:text-right ltr:sm:text-left">
          <h3 className="text-sm md:text-lg text-secondary font-semibold uppercase">{t("para1")}
          </h3>
          <h2 className="text-2xl rtl:md:text-[50px] leading-normal ltr:md:text-6xl font-bold mt-2  sm:max-w-xl">
            <p className="text-white uppercase">{t("heading")}</p>{" "}
          </h2>


          <p className="text-white text-sm max-w-2xl xl:text-xl 2xl:text-2xl py-2">
          {t("para2")}
          </p>

          <div className="flex flex-col gap-2 text-base md:text-xl md:pt-4 text-gray-200">
            <p className="flex flex-row justify-start items-center gap-4 py-2">
              <LiveAccountButton hoverStyle="text-primary bg-[#fff] text-[#141b43] hover:bg-secondary hover:text-[#fff]" />
            </p>
          </div>
        </div>

        {promo && <VPSPakFrom />}

        {/* Right Image */}
        {promo == false &&
          <div className="mt-6 absolute right-0 bottom-0 md:mt-0 w-[250px] md:w-[600px]">
            <Image
              src="/15-deposit/Banner.png"
              alt="Cashback Bonus"
              width={600} // Adjust the width
              height={200} // Adjust the height
              className="rounded-lg shadow-lg  "
            />
          </div>
        }
      </div>
    </section>
  );
};

export default CashbackBanner;
