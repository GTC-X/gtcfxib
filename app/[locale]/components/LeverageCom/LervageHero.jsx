'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LiveAccountButton from '../liveAccountButton';

const LervageHero = () => {
  const t = useTranslations('lervage.lervageHero');

  return (
    <section className="hero-banner py-10 md:py-14 lg:py-20 2xl:py-24 bg-gradient-to-t from-[#24358b] via-[#202766] to-[#141b43] border-y border-gray-200">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left">
          {/* Image column */}
          <div className="relative w-full h-72 md:h-[450px] md:order-2">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/images/gtcmtd/phone.png"
              fill
              alt="MT5 Trader"
              className="object-contain"
            />
          </div>
          {/* Content column */}
          <div className="content md:order-1">
            <h2 className="bg-gradient-to-b from-white to-secondary inline-block text-transparent bg-clip-text text-2xl font-normal lg:text-5xl 3xl:text-[55px] leading-normal xl:leading-[3.8rem] mobile-setting-line">
              {t('title')}
            </h2>
            <p className={`text-white text-sm xl:text-base 2xl:text-lg tracking-wider py-8 mx-auto`}>
              {t('description')}
            </p>
            <LiveAccountButton hoverStyle="text-primary bg-white hover:bg-secondary hover:text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LervageHero;
