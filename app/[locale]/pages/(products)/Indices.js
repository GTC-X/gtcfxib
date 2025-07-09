"use client";
import React, { Suspense } from "react";
import { useTranslations } from "next-intl";
import ProductsBanner from "@/app/[locale]/components/account/forex/ProductsBanner";
import ForexTradingAdv from "@/app/[locale]/components/account/forex/ForexTradingAdv";
import ForexSpreadTable from "@/app/[locale]/components/account/forex/ForexSpreadTable";
import ProductsFAQ from "@/app/[locale]/components/account/forex/ProductsFAQ";
import ProductsImageContent from "@/app/[locale]/components/account/forex/ForexImageContent";
import NoteNew from "../../components/account/stock/NoteNew";

const IndicesPage = () => {
  const t = useTranslations("Instruments.indices");
  const ContentData = [
    {
      image: {
        src: "/account/forex/forex-banner.webp",
        width: "500",
        height: "450",
        alt: "indices",
      },
      title: t("title4"),
      description: `${t("desc4_1")} <br />
            ${t("desc4_2")} <br />
            ${t("desc4_3")} <br />
            ${t("desc4_4")} <br />  `,
    },
    {
      image: {
        src: "/account/forex/mobiles.webp",
        width: "500",
        height: "450",
        alt: "Forex",
      },
      title: t("title5"),
      description: `${t("desc5_1")} <br> ${t("desc5_2")}`,
    },
    //     {
    //         image: {
    //             src: "/account/forex/laptop.webp",
    //             width: "500",
    //             height: "450",
    //         },
    //         title: "Forex trading with us",
    //         description: `Engaging in Forex trading through our broker. we provide clients with immediate access to live forex market prices. They are presented with buying and selling rates for a variety of financial instruments via an online trading platform.<br/><br/> Clients enjoy the flexibility to choose their preferred purchase or sale prices and can execute transactions at their discretion.
    //   Forex trading is conducted 24 hours a day, five days a week, due to the international nature of the market. The primary goal of forex trading is to profit from the fluctuations in exchange rates between different currency pairs`,
    //     },
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
          src: "/products/indices-image.webp",
          alt: "Forex Banner",
        }}
        className={"pt-10"}
      />
      <ForexTradingAdv className={"mt-8 lg:mt-10 bg-primary rounded-xl p-10"} data={advData} />
      <Suspense>
        {/* <ForexSpreadTable className={"mt-10 lg:mt-20"} /> */}
      </Suspense>
      <ProductsImageContent className={"mt-10 lg:my-20"} data={ContentData} />
      <NoteNew />
  
    </>
  );
};

export default IndicesPage;
