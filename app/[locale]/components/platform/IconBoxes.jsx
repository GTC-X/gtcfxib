import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const IconBoxes = () => {

    const t = useTranslations("platform")
  const iconData = [
    { src: "/platform/Platform1.webp", alt: "Trade Wherever You Are", title: t("plafformPage.content.tradeWhenever") },
    { src: "/platform/Platform2.webp", alt: "Variety of Instruments", title: t("plafformPage.content.varietyInstru")  },
    { src: "/platform/Platform3.webp", alt: "Trade Whenever You Want", title: t("plafformPage.content.youWant")  }, 
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 mb-5">
      {iconData.map(({ src, alt, title }, index) => (
        <div key={index} className="flex flex-col items-center justify-center gap-4">
          <div className="relative">
            <Image src={src} alt={alt} width="88" height="88" />
          </div>
          <h4 className="text-primary text-xl font-semibold">{title}</h4>
        </div>
      ))}
    </div>
  );
};

export default IconBoxes;
