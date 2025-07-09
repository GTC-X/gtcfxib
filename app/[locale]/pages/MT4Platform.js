"use client";
import React from "react";
import AssesAsset from "../components/home/AssesAsset";
import { useTranslations } from "next-intl";
import Banner from "../components/mt4-platform/Banner";


const MT4PlatformPage = () => {
  const t = useTranslations("home");

  const assetData = [
    {
        name: t("products.title1"),
        description: t("products.desc1"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon1.webp",
        alt: "Forex"
    },
    {
      name: t("products.title2"),
      description: t("products.desc2"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon7.webp",
        alt: "Crypto CFDs"
    },
    {
      name: t("products.title3"),
      description: t("products.desc3"),
      imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/metal-icon.webp",
      alt: "Indices"
  },
    {
      name: t("products.title4"),
      description: t("products.desc4"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon8.webp",
        alt: "CFDs"
    },
    {
      name: t("products.title5"),
      description: t("products.desc5"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon6.webp",
        alt: "Commodities"
    },{
      name: t("products.title6"),
      description: t("products.desc6"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon5.webp",
        alt: "Indices"
    },{
      name: t("products.title7"),
      description: t("products.desc7"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon4.webp",
        alt: "Indices"
    },
    {
      name: t("products.title8"),
      description: t("products.desc8"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon3.webp",
        alt: "Indices"
    },
];

  return (
    <>
      <Banner />
      <AssesAsset assetData={assetData} title={t("products.heading")}  columns={4} />
      
    </>
  );
};

export default MT4PlatformPage;
