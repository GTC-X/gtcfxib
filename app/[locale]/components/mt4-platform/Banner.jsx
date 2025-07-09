import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TiTick } from "react-icons/ti";
import { useTranslations } from "next-intl";
import LiveAccountButton from "../liveAccountButton";

const Banner = () => {
  const t = useTranslations("platform.mt4PlatformPage");

  const advantagesCol1 = [
    {
      icon: <TiTick color="#b68756" size={25} />,
      text: t("advantages.column1.heading1"),
    },
    {
      icon: <TiTick color="#b68756" size={25} />,
      text: t("advantages.column1.heading2"),
    },
    { icon: <TiTick color="#b68756" size={25} />, text: t("advantages.column1.heading3")},
    {
      icon: <TiTick color="#b68756" size={25} />,
      text: t("advantages.column1.heading4"),
    },
    {
      icon: <TiTick color="#b68756" size={25} />,
      text: t("advantages.column1.heading5"),
    },
    {
      icon: <TiTick color="#b68756" size={25} />,
      text: t("advantages.column1.heading6"),
    },
    {
      icon: <TiTick color="#b68756" size={25} />,
      text: t("advantages.column1.heading7"),
    },
    {
      icon: <TiTick color="#b68756" size={25} />,
      text: t("advantages.column1.heading8"),
    },
  ];

  const advantagesCol2 = [
    {
      icon: <TiTick color="#b68756" size={25} />,
      text: t("advantages.column2.heading1"),
    },
    { icon: <TiTick color="#b68756" size={25} />, text: t("advantages.column2.heading2"),},
    { icon: <TiTick color="#b68756" size={25} />, text: t("advantages.column2.heading3"),},
    {
      icon: <TiTick color="#b68756" size={25} />,
      text: t("advantages.column2.heading4"),
    },
    {
      icon: <TiTick color="#b68756" size={25} />,
      text: t("advantages.column2.heading5"),
    },
    { icon: <TiTick color="#b68756" size={25} />, text: t("advantages.column2.heading6"), },
    {
      icon: <TiTick color="#b68756" size={25} />,
      text: t("advantages.column2.heading7"),
    },
    {
      icon: <TiTick color="#b68756" size={25} />,
      text: t("advantages.column2.heading8"),
    },
  ];

  return (
    <>
      <section className="container pt-8 md:pt-12 3xl:pt-16">
        <div className="flex flex-col md:space-y-5">
          <h1 className="HeadingH2">{t("bannerText.heading")}</h1>
          <p className="text md:max-w-3xl mx-auto">{t("bannerText.para1")}</p>
          <p className="text md:max-w-3xl mx-auto">{t("bannerText.para2")}</p>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-around md:pt-5 mb-6">
          <div className="flex-col">
            <h2 className="HeadingH2 md:text-left md:rtl:text-right leading-4">
              {t("bannerText.trade.heading1")}
            </h2>
            <h3 className="HeadingH2 md:ltr:text-left md:rtl:text-right mb-8">
              {t("bannerText.trade.heading2")}
            </h3>
            <LiveAccountButton  hoverStyle="hover:bg-primary text-white" />
          </div>
          <div className="md:w-fit w-[55%]">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/platform/mt4/mt4_mobile.webp"
              width={450}
              height={300}
              alt="mt4 platform on Mobile Image"
            />
          </div>
        </div>
      </section>
      <section className="bg-primary">
        <div className=" md:py-12 py-6 container">
          <h1 className="HeadingH2 text-white"> {t("advantages.title")}</h1>
          <div className="flex flex-col md:flex-row md:pt-8  justify-around gap-8">
            <div className="flex flex-col justify-center gap-4 px-8  py-8 border border-secondary border-opacity-30 w-[100%]  mx-auto md:m-0 md:w-[50%]">
              {advantagesCol1.map((adv, index) => (
                <div className="flex gap-2 ">
                  {adv.icon}
                  <p className="text-base ltr:text-left rtl:text-right text-white max-w-md">{adv.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center gap-4 px-4 py-4 md:py-0 border border-secondary border-opacity-30 w-[100%] mx-auto md:m-0 md:w-[50%]">
              {advantagesCol2.map((adv, index) => (
                <div className="flex gap-2 ">
                  {adv.icon}
                  <p className="text-base ltr:text-left rtl:text-right text-white max-w-xl">{adv.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
