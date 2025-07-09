"use client";
import React from "react";
import Hero from "../components/common/Hero";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const RestrictedCountriesPage = () => {
  const t = useTranslations("footerPage");
  const path = usePathname();
  const isAr = path.includes("/ar");

  // Dynamic data for content and countries
  const content = [
    { label:t("restrictedCountry.content.option.one3")},
    { label: t("restrictedCountry.content.option.one")},
    { label: t("restrictedCountry.content.option.six")},
  ];

  const countryListKeys = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirty",
    "foutry",
    "fifty",
    "fifty1",
    "sixty",
    "seventy",
    "eighty",
    "ninty",
    "tten",
    "oneOne",
    "oneTwo",
  ];

  const countries = countryListKeys.map((key) =>
    t(`restrictedCountry.content.list.${key}`)
  );

  return (
    <>
      {/* Hero Section */}
      <Hero
        imageUrl="/trading/banner/latest-news.webp"
        title={t("restrictedCountry.bannerText.heading")}
        description=""
      />

      <div className="inner-content py-10">
        <div className="container">
          {/* Main Heading */}
          <h2 className="HeadingH2 pb-5">
            {t("restrictedCountry.content.mainHeading")}
          </h2>
          <h3 className="HeadingH3 font-medium">
            {t("restrictedCountry.content.subHeading")}
          </h3>

          {/* Content List */}
          <ul
            className={`list-disc text-lg text-primary  
            }`}
          >
            {content.map((item, index) => (
              <li key={index}>{item.label}</li>
            ))}
          </ul>

          {/* Detail Section */}
          <div className="my-4 text-primary text-xl">
            {t("restrictedCountry.content.detail")}
          </div>

          {/* Countries List */}
          <ul
            className={`list-disc text-lg text-primary
            }`}
          >
            {countries.map((country, index) => (
              <li key={index}>{country}</li>
            ))}
          </ul>

          {/* Footer Note */}
          <p className="text-lg pt-10">
            {t("restrictedCountry.notice")}
          </p>
        </div>
      </div>
    </>
  );
};

export default RestrictedCountriesPage;
