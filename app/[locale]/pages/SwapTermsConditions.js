"use client";
import React from "react";
import Hero from "../components/common/Hero";
import { useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';

const SwapTermsConditions = () => {
  const path= usePathname();
  const isAr = path.includes('/ar');
  const t = useTranslations("swapTermsCondition");
  const content = [
    t("points.option.one"),
    t("points.option.two"),
    t("points.option.three"),
    t("points.option.four"),
    t("points.option.five"),
    t("points.option.six"),
    t("points.option.seven"),
    t("points.option.eight"),
  ];

  const applicable = [
    t("points.applicable.one"),
    t("points.applicable.two"),
    t("points.applicable.three"),
    t("points.applicable.four"),
    t("points.applicable.five"),
    t("points.applicable.six"),
  ];

  const restrictions = [
    t("points.option.one"),
    t("points.option.two"),
    t("points.option.three"),
    t("points.option.four"),
    t("points.option.five"),
    t("points.option.six"),
    t("points.option.seven"),
    t("points.option.eight"),
  ];

  return (
    <>
      <Hero
        imageUrl="/banner/terms-condition.webp"
        title={t("bannerText.heading")}
        description={t("bannerText.description")}
      />
      <div className="inner-content py-10">
        <div className="container">
          <div className="inside-content mt-5 text-base leading-6">
            <h2 className="HeadingH3"> {t("points.label")} </h2>
            <p className="mb-2"> {t("points.para1")}</p>
            <h4 className="text-xl font-medium my-3">{t("points.option.label")}</h4>
            <ul className={`list-disc text-primary mb-3 leading-7 ${isAr ? 'md:mr-7':'md:ml-7'}`}>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h4 className="text-xl font-medium my-3">{t("points.applicable.label")}</h4>
            <ul className={`list-disc text-primary mb-3 leading-7 ${isAr ? 'md:mr-7':'md:ml-7'}`}>
            {applicable.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h4 className="text-xl font-medium my-3">{t("points.restrictions.label")}</h4>
            <ul className={`list-disc text-primary mb-3 leading-7 ${isAr ? 'md:mr-7':'md:ml-7'}`}>
              <li>{t("points.restrictions.one")}</li>
              <li>{t("points.restrictions.two")}</li>
              <li>{t("points.restrictions.three")}
                <ul className={`list-disc text-primary mb-3 leading-7 ${isAr ? 'md:mr-12':'md:ml-12'}`}>
                  <li>{t("points.restrictions.four")}</li>
                  <li>{t("points.restrictions.five")}</li>
                  <li>{t("points.restrictions.six")}</li>
                  <li>{t("points.restrictions.seven")}</li>
                </ul>
              </li>
             
            </ul>
          <h4 className="text-xl font-medium my-3">{t("points.acknowledgment.label")}</h4>
          <p className="mb-2"> {t("points.acknowledgment.para1")}</p>
          <ul className={`list-disc text-primary mb-3 leading-7 ${isAr ? 'md:mr-7':'md:ml-7'}`}>
            <li>{t("points.acknowledgment.one")}</li>
            <li>{t("points.acknowledgment.two")}</li>
            <li>{t("points.acknowledgment.three")}</li>
            <li>{t("points.acknowledgment.four")}</li>
          </ul>
            
          
          </div>
        </div>
      </div>
    </>
  );
};

export default SwapTermsConditions