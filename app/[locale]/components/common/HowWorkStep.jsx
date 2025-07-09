// HowWorkStep.js
import React from "react";
import Image from "next/image";

const HowWorkStep = ({
  imageSrc,
  alt,
  stepText,
  stepDescription,
  aosDuration,
  aosDelay,
  color,
  id,
}) => {
  const step =
    id == 1
      ? "step-one-common"
      : id == 2
      ? "step-two-common"
      : "step-three-common";
  return (
    <div
      className={`flex flex-col overflow-hidden items-center ${step}  firstStep text-center relative`}
      data-aos="fade-right"
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

export default HowWorkStep;
