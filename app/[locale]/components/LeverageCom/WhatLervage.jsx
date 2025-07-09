'use client';
import React from 'react';
import Image from 'next/image';
import LiveAccountButton from '../liveAccountButton';
import { useTranslations } from 'next-intl';

const WhatLervage = () => {
  const t = useTranslations("lervage.whatLervage")
  const details = [
    t("leverageDetails.one"),
    t("leverageDetails.two"),
    t("leverageDetails.three"),
    t("leverageDetails.five"),
    t("leverageDetails.six")
  ];

  const examples = [
    t("exampleDetails.one"),
    t("exampleDetails.two"),
  ];

  return (
    <section className="md:py-16 3xl:py-16 py-8 bg-gradient-to-b from-slate-50 via-gray-300 to-zinc-50 border-b border-gray-300">
      <div className="container">
        <div className="relative text-center">
          <h2
            style={{ lineHeight: '4rem' }}
            className="text-primary font-normal xl:text-[30px] 2xl:text-[35px] capitalize"
          >
             {t('title')}
          </h2>
          <p className="text-primary md:text-base 2xl:text-[17px] text-sm text-center max-w-5xl mx-auto">{t('description')}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 pt-10">
          <div className="basis-full md:basis-1/5 flex flex-col gap-6 md:gap-16 justify-center items-center">
            <div className="text-left flex flex-col items-start justify-start gap-3 md:w-96">
              <button className="bg-primary text-sm rounded-full text-white px-3 h-6">
              {t('boostTrades')}
              </button>
              <h3 className="bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text md:text-lg xl:text-xl 3xl:text-[24px] text-lg m-0 p-0 justify-center gap-2 items-center py-2">
              {t('leverage')}
              </h3>
              <p className="text-primary text-left m-0">
              {t('leverageDescription')}
              </p>
              <ul className="leading-8 text-left list-disc pl-4">
                {details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden md:block md:basis-4/5 relative w-full h-64 md:h-[600px]">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/images/gtcmtd/phone2.webp"
              alt="Invest with GTC"
              fill
              className="object-contain"
            />
          </div>
          <div className="basis-full md:basis-1/5 flex flex-col gap-6 md:gap-16 justify-center items-center">
            <div className="text-left flex flex-col items-start justify-start gap-3 md:w-96">
              <button className="bg-primary text-sm rounded-full text-white px-3 h-6">
              {t('scaleTrades')}
              </button>
              <h3 className="bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text md:text-lg xl:text-xl 3xl:text-[24px] text-lg m-0 p-0 justify-center gap-2 items-center py-2">
              {t('dynamicLeverageTiers')}
              </h3>
              <p className="text-primary text-left m-0">
              {t('tiersDescription')}              </p>
              <p className="text-left font-[500]">{t('example')}</p>
              <ul className="leading-7 text-left list-disc pl-4">
                {examples.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container text-primary flex flex-col justify-center items-center py-4 pt-16 gap-2 md:gap-4 text-xs 2xl:text-[17px]">
          <p className="text-center italic">
          {t('disclaimer')}
          </p>
          <LiveAccountButton hoverStyle="bg-primary text-white hover:bg-secondary" />
        </div>
      </div>
    </section>
  );
};

export default WhatLervage;
