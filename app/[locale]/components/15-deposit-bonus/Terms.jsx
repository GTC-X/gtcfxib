// components/TermsAndConditions.js
'use client'
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';



const TermsAndConditions = () => {

  const t = useTranslations("compaign.tradeWin.terms")

  // Suppose this data comes from a JSON file or fetched from an API
const termsData = [
  t("term1"),
  t("term2"),
  t("term3"),
  t("term4"),
  t("term5"),
  t("term6"),
  t("term7"),
  t("term9"),
  t("term10"),
  t("term11"),
  t("term12"),
  t("term13"),
  t("term14"),
  t("term15")
];
  return (
    <section className="py-10 md:py-12 xl:py-16 2xl:py-20 bg-gradient-to-b from-slate-100 via-gray-50 to-white" id="register3">
      <div className="container mx-auto px-4 text-center">
        <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-[600] xl:text-[30px] 2xl:text-[32px] capitalize max-w-xl leading-tight">{t("title")}</h2>
        <ul className="list-disc pl-6 space-y-2 ltr:text-left rtl:text-right mt-8">
          {termsData.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
        <p className='text-primary ltr:text-left rtl:text-right mt-4'>{t("note")}</p>
     
      </div>
    </section>
  );
};

export default TermsAndConditions;
