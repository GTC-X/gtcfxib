import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const GlobalPresence = () => {
    const t = useTranslations("footerPage");
  const globalData = [
    {
      name: t("contactUs.globalPresence.uae.name"),
      place: t("contactUs.globalPresence.uae.place"),
      imageUrl: "/contact/uae.webp",
    },
    {
        name: t("contactUs.globalPresence.uk.name"),
        place: t("contactUs.globalPresence.uk.place"),
        imageUrl: "/contact/uk.webp",
      },
      {
        name: t("contactUs.globalPresence.mauritius.name"),
        place: t("contactUs.globalPresence.mauritius.place"),
        imageUrl: "/contact/mauritius.webp",
      },
      {
        name: t("contactUs.globalPresence.cyprus.name"),
        place: t("contactUs.globalPresence.cyprus.place"),
        imageUrl: "/contact/cyprus.webp",
      },
      {
        name: t("contactUs.globalPresence.sv.name"),
        place: t("contactUs.globalPresence.sv.place"),
        imageUrl: "/contact/saint.webp",
      },
      {
        name: t("contactUs.globalPresence.vanuatu.name"),
        place: t("contactUs.globalPresence.vanuatu.place"),
        imageUrl: "/contact/vanuatu.webp",
      },
    
  ];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-10">
      {globalData.map((person,index) => (
        <div
          key={index}
          className="relative flex items-center space-x-3"
        >
          <div className="flex-shrink-0">
            <Image
              src={person.imageUrl}
              width={78}
              height={78}
              className="h-16 w-16"
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="HeadingH3 font-medium leading-5">{person.name}</h3>
            <p className="truncate text-sm">{person.place}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlobalPresence;
