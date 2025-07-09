import React from "react";
import Image from "next/image";
import Link from "next/link";
import LiveAccountButton from "../../liveAccountButton";

const Hero = ({ title, paragraph, buttonText, buttonLink, imageSrc }) => {
  return (
    <div className="bg-[url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/background.webp')] bg-center 3xl:bg-[50% 100%] 5xl:mb-10 md:bg-bottom bg-cover bg-no-repeat pt-8 md:pt-10 pb-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="HeadingH2 text-white">
          {title}
        </h2>
        <p className="text text-white">
          {paragraph}
        </p>
        <div className="mt-8 flex justify-center gap-6 pb-8">
          <LiveAccountButton hoverStyle="hover:bg-white hover:text-white text-white" />
        </div>
        <div className="relative w-full h-72 md:h-96 flex justify-center">
          <Image
            src={imageSrc}
            fill
            alt="GTC Hero"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
