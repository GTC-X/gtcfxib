"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ApplyNow from "../components/careers/ApplyNow";
import WhyGTC from "../components/careers/WhyGTC";
import JobsGtcfx from "../components/careers/Jobs";

const CareerPage = () => {
  const t = useTranslations("footerPage");

  return (
    <section className="md:pt-12 3xl:pt-16 pt-8">
      <div className="absolute top-[20%] left-0 w-full h-96 md:h-[800px] opacity-45 bg-center bg-cover md:bg-contain bg-repeat md:bg-no-repeat bg-[url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/mobile-bg.webp')]" />
      {/* <Hero
        imageUrl="/careers.png"
        title={t("careers.hero.title")}
        description={t("careers.hero.des")}
      /> */}
      {/* <JoinUsCareer /> */}
      <WhyGTC />
      {/* <JobsGtcfx /> */}
      <ApplyNow />
    </section>
  );
};

export default CareerPage;
