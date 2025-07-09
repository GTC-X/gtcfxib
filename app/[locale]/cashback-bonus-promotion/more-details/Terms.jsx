// components/TermsAndConditions.js
'use client'
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';



const TermsAndConditionsCashBack = () => {

  const t = useTranslations("callback.terms")

  // Suppose this data comes from a JSON file or fetched from an API
const termsData = [
  t("term1"),
  t("term2"),
  t("term3"),
  t("term4"),
  t("term5"),
  t("term6"),
  t("term7"),
  t("term8"),
];
  return (
    <section className="py-10 md:py-12 xl:py-16 2xl:py-20 bg-gradient-to-r from-[#0f1c44] to-[#193a7a] text-white" id="register3">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-white inline-block bg-clip-text text-xl font-[600] xl:text-[30px] 2xl:text-[32px] capitalize max-w-xl leading-tight">{t("title")}</h2>
        <ul className="list-disc pl-6 space-y-2 ltr:text-left rtl:text-right mt-8">
          {termsData.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>    
        <p className='text-white ltr:text-left rtl:text-right mt-4'>{t("note")}</p>
 
      </div>
    </section>
  );
};

export default TermsAndConditionsCashBack;
