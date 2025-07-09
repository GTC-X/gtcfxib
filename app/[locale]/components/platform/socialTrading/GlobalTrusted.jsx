"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const GlobalTrusted = () => {
  const t = useTranslations("prime-tech.socialTranding");
  return (
    <div className="bg-gray-100 md:py-12 3xl:py-16 py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="content-side">
            <h4 className="HeadingH2 ltr:text-left rtl:text-right font-semibold"> 
            {t("globalTrading.normalText")}
            </h4>
            <ul class="list-disc ml-4 text ltr:text-left rtl:text-right mb-3 py-3 leading-7">
              <li>{t("globalTrading.list1")}</li>
              <li>{t("globalTrading.list2")}</li>
              <li>{t("globalTrading.list3")}</li> 
            </ul>
          </div>
          <div className="relative w-full h-56">
              <Image src="/Social-Trading-04.webp" alt="Focus on Invest" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTrusted;
