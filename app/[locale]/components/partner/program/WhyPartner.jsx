import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const WhyPartner = () => {
    const t = useTranslations("partner")
  const prizeImages = Array.from({ length: 8 }, (_, index) => `/account/premium-partner-Program-prize${index + 1}.webp`);

  return (
    <div className="py-8 2xl:py-12 bg-[#f2f2f2] 3xl:py-16">
      <div className="container">
        <h2 className="HeadingH2 pb-6">
         {t("premiumPartner.content.other.believe")}
          <span className="text-secondary"> {t("premiumPartner.content.other.successful")}</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-0 ">
          {prizeImages.map((image, index) => (
            <div className='relative w-full h-64'>
            <Image key={index} src={image} fill alt={`prize-${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyPartner; 
