"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import ProductsBanner from "@/app/[locale]/components/account/forex/ProductsBanner";
import ForexTradingAdv from "@/app/[locale]/components/account/forex/ForexTradingAdv";
import ProductsImageContent from "@/app/[locale]/components/account/forex/ForexImageContent";
import NoteNew from "../../components/account/stock/NoteNew";

const EnergyPage = () => {
  const t = useTranslations("Instruments.energy");
  const locale = useLocale();
  const ContentData = [
    {
      image: {
        src: "/account/forex/forex-banner.webp",
        width: "500",
        height: "450",
        alt: "Energy",
      },
      title: t("title4"),
      description: `${t("desc4_1")} <br />
      <br />
      ${t("desc4_2")}<br />
      
      `,
    },
    {
      image: {
        src: "/account/forex/mobiles.webp",
        width: "500",
        height: "450",
        alt: "Forex",
      },
      title: t("title5"),
      description: t("desc5"),
    },
  ];

  const advData = [
    {
      title: t("adv1_1"),
      subtitle: t("subTitle1"),
      image: {
        src: "/account/forex/spread.webp",
        width: "245",
        height: "245",
      },
    },
    {
      title: t("adv2_1"),
      subtitle: t("subTitle2"),
      image: {
        src: "/account/forex/leverage.webp",
        width: "245",
        height: "245",
      },
    },
    {
      title: t("adv3_1"),
      subtitle: t("subTitle3"),
      image: {
        src: "/account/forex/execution.webp",
        width: "245",
        height: "245",
      },
    },
    {
      title: t("adv4_1"),
      subtitle: t("subTitle4"),
      image: {
        src: "/account/forex/protection.webp",
        width: "245",
        height: "245",
      },
    },
    {
      title: t("adv5_1"),
      subtitle: t("subTitle5"),
      image: {
        src: "/account/forex/candles.webp",
        width: "245",
        height: "245",
      },
    },
    {
      title: t("adv6_1"),
      subtitle: t("subTitle6"),
      image: {
        src: "/account/forex/thumbs-up.webp",
        width: "245",
        height: "245",
      },
    },
  ];
  return (
    <>
      <ProductsBanner
        title={t("title1")}
        subtitle={t("sub_title1")}
        image={{
          src: "/products/energy-image.webp",
          alt: "Energy",
        }}
        className={"pt-10"}
      />
      <ForexTradingAdv className={"mt-8 lg:mt-10 bg-primary rounded-xl p-10"} data={advData} />
      {/* <ForexSpreadTable className={"mt-10 lg:mt-20"} /> */}
      <ProductsImageContent className={"mt-10 lg:my-20"} data={ContentData} />
      <NoteNew />
   
    </>
  );
};

export default EnergyPage;
