import React from 'react';
import Image from 'next/image';

const DepositRules = ({ title, description, steps }) => {
  return (
    <div className="start-trading bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] py-10 md:py-12 xl:py-16 2xl:py-20 3xl:py-24">
      <div className="container">
        <div className="top-content8">
          <h2 className="HeadingH2 text-white capitalize">{title}</h2>
          <p className="text text-white">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start py-8">
          {steps.map((step, index) => (
            <div key={index} className="inner-content flex flex-col justify-center gap-4">
              <div className="relative w-full h-64 md:h-[300px] pb-5">
                <Image src={step.imageSrc} alt={step.alt} fill className="object-contain" />
              </div>
              <h3 className="HeadingH2 text-secondary text-2xl">{step.title}</h3>
              <p className="text text-white">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default DepositRules;
