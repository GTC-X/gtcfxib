import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";
import Link from "next/link";
import Image from "next/image";
import LiveAccountButton from "../liveAccountButton";

const Hero = () => {
    const t = useTranslations("platform.ctrader");
    const router = useRouter();
  const locale = useLocale();
  return (
    <section className="container pt-8 md:pt-12 3xl:pt-16">
      <div className="flex flex-col md:space-y-5">
        <h1 className="HeadingH2">{t("bannerText.heading")}</h1>
        <p className="text md:max-w-3xl mx-auto">
        {t("bannerText.para1")}
        </p>
        <p className="text md:max-w-3xl mx-auto">
        {t("bannerText.para2")}
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-around md:pt-5 mb-6">
        <div className="flex-col">
          <h1 className="HeadingH2 md:ltr:text-left md:rtl:text-right leading-4">
          {t("bannerText.trade.heading1")}
          </h1>
          <h1 className="HeadingH2 md:ltr:text-left md:rtl:text-right mb-8">
          {t("bannerText.trade.heading2")}
          </h1>
          <LiveAccountButton  hoverStyle="hover:bg-primary hover:text-white" link="https://ct.gtcfx.com/" />
        </div>
        <div className="md:w-fit w-[55%]">
          <Image
            src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/images/extra.webp"
            width={450}
            height={300}
            alt="mt4 platform on Mobile Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
