"use client";
import React from "react";
import Link from "next/link";

const AboutGTCFX = ({ sectionTitle, description1, description2, description3 }) => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-slate-50 to-white py-10 md:py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="HeadingH2 font-medium">
            {sectionTitle}
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-base text-center pb-4">
            {description1}
          </p>
          <p className="text-center font-medium  text-base md:text-xl py-4">
            {description2}
          </p>
          <p className="text-sm text-center">
            {description3}
          </p>
          <div className="text-center  my-16">
          <Link
              href="/"
              onClick={(e) => {
                let section = document.getElementById("register");
                e.preventDefault();
                section && section.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="bg-primary text-white text-[10px] md:text-base px-2 md:px-6 py-4 font-medium rounded-md hover:bg-secondary hover:text-white"
            >
              Get actionable trading insights & live market strategies – Sign up today!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGTCFX;
