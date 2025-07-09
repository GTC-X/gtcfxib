'use client';
import Image from "next/image";

const FeaturesList = ({ features }) => {
  return (
    <div className="container mx-auto mb-12 md:mb-16">
        <div className="text-center">
            <h2 className="HeadingH2 2xl:text-4xl w-72 md:w-full font-[500] bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-center">What We Offer</h2>
                   </div>
      <div className="grid grid-cols-2 md:grid-cols-2 md:gap-8 pt-5 md:pt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? "flex-row-reverse text-right" : "flex-row"
            } md:space-x-4 gap-2 md:gap-4`}
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 md:w-20 md:h-20 flex items-center justify-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            {/* Text */}
            <div className="font-semibold text-[11px] md:text-lg text-primary uppercase">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesList;
