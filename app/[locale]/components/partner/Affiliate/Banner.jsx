import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LocationContextProvider from "@/context/location-context";
import { useTranslations } from "next-intl";
import AffiliatedForm from "../../common/AffiliatedForm";

const Banner = () => {
  const path=usePathname();
  const isAr=path.includes("/ar");
  const t = useTranslations("partner.affiliateProgram.bannerText");
  return (
    <>
    <LocationContextProvider>
    <section className="container py-10 sm-py-12 lg:py-16">
        <div className="content-inner">
          <h2 className="HeadingH2 capitalize">{t("heading")}
</h2>
          <p className="text">
          {t("heading2")}
          </p>
        </div>
        <div className="relative w-full h-24 md:h-[350px]">
          <Image
            src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/AF/af-banner.png"
            alt="AF program"
            fill
            className="object-contain"
          />
        </div>
        <div className="content-form">
            <div className="bg-primary py-3 md:py-5">
                    <h2 className="HeadingH2 text-white text-base md:text-2xl px-5 md:px-0">{t("subHeading")}</h2>
            </div>
        </div>
        <AffiliatedForm />
      </section>
      </LocationContextProvider>
    </>
  );
};

export default Banner;
