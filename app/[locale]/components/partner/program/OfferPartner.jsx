import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const OfferPartner = () => {
    const t = useTranslations("partner")
  const partnerImages = Array.from({ length: 7 }, (_, index) => `/partner/program/premium-partner-program-step${index + 1}.webp`);

  return (
    <section className="py-8 md:py-12 3xl:py-16 bg-[#f2f2f2]">
      <div className="container">
        <h2 className="HeadingH2">
        {t("premiumPartner.content.other.whyPartner")}
        </h2>
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-5 pt-5">
          {partnerImages.map((image, index) => (
            <div className='relative w-full h-44'>
            <Image key={index} src={image} alt={`ib benefits-${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferPartner;
