// components/TermsAndConditions.js
'use client'
import React from 'react';
import { useTranslations } from 'next-intl';

const TermsCredit = () => {
  const t = useTranslations("compaign.100BonusPro.terms");

  // Fetch terms data from translations and filter out any empty values
  const termsData = [
    t("points.one"),
    t("points.two"),
    t("points.three"),
    t("points.five"),
    t("points.four"),
    t("points.six"),
    t("points.seven"),
    t("points.eight"),
    t("points.nine"),
    t("points.ten"),
    t("points.eleven"),
    t("points.twelve"),
    t("points.thirteen"),

  ].filter(term => term && term.trim() !== "");

  return (
    <section className="py-10 md:py-12 xl:py-16 2xl:py-20 bg-gradient-to-b from-slate-100 via-gray-50 to-white" id="register3">
      <div className="container mx-auto px-4 text-center">
        <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-[600] xl:text-[20px] 2xl:text-[22px] capitalize max-w-6xl mx-auto leading-tight">
          {t("heading")}
        </h2>
        <p className="text-gray-600 mt-4 mb-8 max-w-4xl mx-auto">{t("subHeading")}</p>
        
        <ul className="list-disc pl-6 space-y-2 ltr:text-left rtl:text-right mt-8">
          {termsData.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TermsCredit;
