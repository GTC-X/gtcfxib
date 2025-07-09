import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const JoinPPP = () => {
  const t = useTranslations("partner");
  return (
    <div className="container pt-10">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="basis-full  w-full md:basis-7/12">
          <h2 className="HeadingH2 pb-6 text-center md:text-left w-full  md:w-[500px]">
            <span className="text-secondary bg-primary px-4 rounded-[6px] mr-1">
              {t("premiumPartner.content.join.joinThe")}
            </span>{" "}
            {t("premiumPartner.content.join.ppp")}{" "}
            {t("premiumPartner.content.join.today")}
          </h2>
          <p className="text-primary text-[1rem] pb-6 text-center md:text-left">
            {t("premiumPartner.content.join.para1")}
          </p>
          <p className="text-primary text-[1rem] pb-8 text-center md:text-left">
            {t("premiumPartner.content.join.para2")}
          </p>
          <Link
            href="https://my.gtcfx.com/getview?view=register"
            target="_blank"
            className="liveAccount"
          >
            {t("premiumPartner.content.join.button")}
          </Link>
        </div> 
        <div className="basis-full w-full md:basis-5/12">
          <div className="relative w-full h-96">
            <Image
              src="/partner/program/premium-partner-program2.webp"
              fill
              alt="section logo"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPPP;
