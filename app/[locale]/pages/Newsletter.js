'use client'
import React from "react";
import Hero from "../components/common/Hero";
import Link from "next/link";
import Subscriber from "../components/common/Subscriber";
import { useTranslations } from "next-intl";

const NewsletterPage = () => {
  const t = useTranslations("newsletter")
  return (
    <>
      <Hero
        imageUrl="/newsletter.webp"
        title={t("banner-heading")}
        description={t("banner-des")}
      />
     <div className="max-width px-2 lg:px-0 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="subscribe-left pr-0 md:pr-10">
            <h4 className="text-base text-secondary font-semibold">{t("top-title")}</h4>
            <h2 className="HeadingH2 pt-2">{t("heading")}</h2>
            <p className="text-base text-primary mb-4">{t("des1")}</p>
            <p className="text-base text-primary mb-8">{t("des2")}</p>
            <Link href="" className="bg-primary text-white text-base rounded-3xl px-6 py-3 mt-5 hover:text-secondary">{t("button-text")}</Link>
        </div>
        <Subscriber /> 
      </div>
      </div>
    </>
  );
};

export default NewsletterPage;
