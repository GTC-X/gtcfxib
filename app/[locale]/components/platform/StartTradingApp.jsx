import React from "react";
import Image from "next/image";
import Button from "../common/Button";
import { useTranslations } from "next-intl";

const StartTradingApp = () => {
  const t = useTranslations("platform")
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="relative w-full h-64 md:h-80">
        <Image
          src="/platform/GTC-Apps-Download.webp"
          alt="Download App"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <h2 className="mainHeading md:text-2xl lg:text-3xl">{t("plafformPage.content.downloadApp")}</h2>
        <p className="text-primary md:pt-5">{t("plafformPage.content.descriptionApp")}</p>
        <Button />
      </div>
    </div>
  );
};

export default StartTradingApp;
