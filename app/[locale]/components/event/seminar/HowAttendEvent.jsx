"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import Link from "next/link";

const VpsStepsImages = ({ imageSrc, alt, stepText, stepDescription, color }) => (
  <div className="flex flex-col overflow-hidden items-center firstStep text-center relative bg-white p-12">
    <Image
      src={imageSrc}
      alt={alt}
      width={152}
      height={100}
      className="w-20 md:w-40 h-16 md:h-32"
    />
    <div className="content-step pt-5">
      <h3 className={`text-sm md:text-lg font-medium text-${color}`}>{stepDescription}</h3>
      <p className={`text-xs md:text-base text-${color}`}>{stepText}</p>
    </div>
  </div> 
);

const HowToAttendEvent = ({ sectionTitle, sectionDescription, steps, registerButtonText, onRegisterClick }) => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#1a2256] via-[#222d75] to-[#243788]">
      <div className="container py-12 md:py-16 xl:py-16">
        <div className="text-center">
          <h2 className="HeadingH2 mb-8 bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text text-center font-semibold max-w-2xl mx-auto">
            {sectionTitle}
          </h2>
          <p className="text-white text-center text-lg w-full mx-auto md:w-4/4">
            {sectionDescription}
          </p>
        </div>

        <div className="relative pt-4 md:py-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:flex-row justify-between">
            {steps.map((step, index) => (
              <VpsStepsImages
                key={index}
                imageSrc={step.imageSrc}
                alt={step.alt}
                stepText={step.stepText}
                stepDescription={step.stepDescription}
                color={step.color}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10 md:mt-0">
        <Link
            href="/"
            onClick={(e) => {
              let section = document.getElementById("register");
              e.preventDefault();
              section && section.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="bg-secondary text-white px-6 py-4 font-medium rounded-md hover:bg-white hover:text-primary"
          >
            {registerButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowToAttendEvent;
