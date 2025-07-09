"use client";
import LocationContextProvider from "@/context/location-context";
import { useTranslations } from "next-intl";
import LiveAccountNew from "../components/account/LiveDemo/LiveAccountNew";
import AssesAsset from "../components/home/AssesAsset";
import { TiTick } from "react-icons/ti";
import WhyChooseIcon from "../components/about/WhyChooseIcon";
const LiveAccountPage = () => {
  const t = useTranslations("accounts.live-account.products");

  const assetData = [
    {
      name: t("title1"),
      description: t("desc1"),
      imageUrl:
        "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon1.webp",
      alt: "Forex",
    },
    {
      name: t("title2"),
      description: t("desc2"),
      imageUrl:
        "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon7.webp",
      alt: "Crypto CFDs",
    },
    {
      name: t("title3"),
      description: t("desc3"),
      imageUrl:
        "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/metal-icon.webp",
      alt: "Indices",
    },
    {
      name: t("title4"),
      description: t("desc4"),
      imageUrl:
        "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon3.webp",
      alt: "CFDs",
    },
    {
      name: t("title5"),
      description: t("desc5"),
      imageUrl:
        "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon4.webp",
      alt: "Commodities",
    },
    {
      name: t("title6"),
      description: t("desc6"),
      imageUrl:
        "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon5.webp",
      alt: "Indices",
    },
    {
      name: t("title7"),
      description: t("desc7"),
      imageUrl:
        "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon6.webp",
      alt: "Indices",
    },
    {
      name: t("title8"),
      description: t("desc8"),
      imageUrl:
        "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon8.webp",
      alt: "Indices",
    },
  ];

  return (
    <>
      <LocationContextProvider>
        <LiveAccountNew />
        <AssesAsset assetData={assetData} title={t("heading")} columns={4} />
        <section className="top-content pb-32 sm:pb-52 2xl:pb-48 3xl:pb-36 relative z-30">
          <div className="container">
            <WhyChooseIcon />
          </div>
        </section>
      </LocationContextProvider>
    </>
  );
};

export default LiveAccountPage;
