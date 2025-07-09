// HowWorkStep.js
import React from "react";
import Image from "next/image";

const VpsStepsImages = ({
  imageSrc,
  alt,
  stepText,
  stepDescription,
  aosDuration,
  aosDelay,
  color,
  aosFade,
  id,
}) => {
  return (
    <div
      className={`flex flex-col overflow-hidden items-center  firstStep text-center relative`}
      data-aos-duration={aosDuration}
      data-aos-delay={aosDelay}
      data-aos-easing="ease-in-sine"
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={152}
        height={100}
        className="w-20 md:w-40 h-16 md:h-32"
      />
      <div className="content-step pt-5">
        <p className={`text-xs md:text-base text-${color}`}>{stepText}</p>
        <h3 className={`text-sm md:text-lg font-medium text-${color}`}>
          {stepDescription}
        </h3>
      </div>
    </div>
  );
};

export default VpsStepsImages;
