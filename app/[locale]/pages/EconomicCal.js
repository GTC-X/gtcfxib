'use client'
import React from "react";
import Hero from "../components/common/Hero";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const EconomicCalPage = () => {
  const t = useTranslations("tradingTools.economicCal");
  const path= usePathname();
  const isAr = path.includes("/ar-AE");
  const isCh = path.includes("/zh-hans");
  let pathUrl;

  if (isAr) {
    pathUrl = "https://www.tradays.com/ar/economic-calendar/widget?mode=2&utm_source=mountaxis.com";
  } else if (isCh) {
    pathUrl = "https://www.tradays.com/zh/economic-calendar/widget?mode=2&utm_source=mountaxis.com"; // Assuming you have a zh-2.webp for Chinese
  } else {
    pathUrl = "https://www.tradays.com/en/economic-calendar/widget?mode=2&utm_source=mountaxis.com"; // Default image
  }

  let frameUrl;

  if (isAr) {
    frameUrl = "https://component.autochartist.com/news/stock-news?broker_id=843&account_type=LIVE&user=GTCFX&expire=1727647200&token=21e717739b02d6702364d5afd432d844&locale=ar&css=https:%2F%2Fbroker-resources.autochartist.com%2Fcss%2Fcomponents%2F843-news-feeds-app-light.css";
  } else if (isCh) {
    frameUrl = "https://component.autochartist.com/news/stock-news?broker_id=843&account_type=LIVE&user=GTCFX&expire=1727647200&token=21e717739b02d6702364d5afd432d844&locale=en&css=https:%2F%2Fbroker-resources.autochartist.com%2Fcss%2Fcomponents%2F843-news-feeds-app-light.css"; // Assuming you have a zh-2.webp for Chinese
  } else {
    frameUrl = "https://component.autochartist.com/news/stock-news?broker_id=843&account_type=LIVE&user=GTCFX&expire=1727647200&token=21e717739b02d6702364d5afd432d844&locale=en&css=https:%2F%2Fbroker-resources.autochartist.com%2Fcss%2Fcomponents%2F843-news-feeds-app-light.css"; // Default image
  }
  return (
    <>
      <Hero
        imageUrl="/trading/banner/economicCal.webp"
        title={t("bannerText.heading")}
        description={t("bannerText.description")}
      />
      <div className="max-width md:py-12 3xl:py-16 py-8">
        <h3 className="HeadingH2 text-center">{t("content.tradingHeading")}</h3>
        <p className="text">
        {t("content.subTitle")}
        </p>
        <div className="ltr:text-left rtl:text-right">
          <h3 className="text-lg md:text-xl font-normal py-4"> {t("content.economicCal")}</h3>
          <p className="text-base text-primary w-full">
          {t("content.detailEco")}
          </p>
          <h3 className="text-lg md:text-xl font-normal py-4"> {t("content.whatEco")}</h3>
          <p className="text-base text-primary w-full">
          {t("content.detail2")}
          </p>
          <h3 className="text-lg md:text-xl font-normal py-4"> {t("content.comNews")}</h3>
          <p className="text-base text-primary w-full">
          {t("content.detailComp")}
          </p>
          <h3 className="text-lg md:text-xl font-normal py-4"> {t("content.newsHeading")}</h3>
          <p className="text-base text-primary w-full mb-10">
          {t("content.detailNew")}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <iframe
          src={pathUrl}
          width="100%"
          height="620px"
          style={{ border: "unset" }} // Use an object for inline styles
          className="border-none" // Add Tailwind class for border-none
        ></iframe>
        <div className="border boder-gray-200 py-4">
        <iframe
                src={frameUrl}
                width="100%"
                height='580px'
                style={{ border: 'unset' }} // Use an object for inline styles
                className="border-none" // Add Tailwind class for border-none
            ></iframe>
        </div>
        </div>
       
      </div>
    </>
  );
};

export default EconomicCalPage;
