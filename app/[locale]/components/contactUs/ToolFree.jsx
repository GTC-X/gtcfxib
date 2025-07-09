import React from "react";
import Link from "next/link";
import Image from "next/image";
import LocationContextProvider from "@/context/location-context";
import { RiGlobalFill } from "react-icons/ri";
import { GiRotaryPhone } from "react-icons/gi";
import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";
const ToolFreeContact = () => {
  const t = useTranslations("about.contact-us")
  // Define an array of toll-free numbers with corresponding country flags and phone numbers
  const tollFreeNumbers = [
    {
      countryCode: "AE",
      phoneNumber: "800 667788",
      link: "tel:+971800667788",
      type: "global",
    },
    {
      countryCode: "US",
      phoneNumber: "646 585 5011",
      link: "tel:+16465855011",
      type: "global",
    },
    {
      countryCode: "GB",
      phoneNumber: "800 048 8461",
      link: "tel:+448000488461",
      type: "global",
    },
    {
      countryCode: "HK",
      phoneNumber: "2319 4360",
      link: "tel:+85223194360",
      type: "global",
    },
    {
      countryCode: "MX",
      phoneNumber: "800 283 3478",
      link: "tel:+528002833478",
      type: "global",
    },
    {
      countryCode: "CO",
      phoneNumber: "601 5086 288",
      link: "tel:+576015086288",
      type: "local",
    },
    {
      countryCode: "BR",
      phoneNumber: "213 5002 665",
      link: "tel:+552135002665",
      type: "local",
    },
    {
      countryCode: "AG",
      phoneNumber: "115 9841 195",
      link: "tel:+541159841195",
      type: "local",
    },
    {
      countryCode: "SG",
      phoneNumber: "315 816 89",
      link: "tel:+6531581689",
      type: "local",
    },
    {
      countryCode: "IN",
      phoneNumber: "11 7181 6797",
      link: "tel:+911171816797",
      type: "local",
    },
  ];

  // Separate the toll-free numbers into global and local
  const globalTollFreeNumbers = tollFreeNumbers.filter(item => item.type === "global");
  const localTollFreeNumbers = tollFreeNumbers.filter(item => item.type === "local");

  return (
    <LocationContextProvider>
        <section className="main-content">
        <div className="max-w-6xl mx-auto">
          {/* WhatsApp Contact Section */}
            {/* WhatsApp Contact Section */}
            <div className="flex flex-row items-center justify-start gap-2 mt-6">
              <p className="text-green-500 text-4xl md:text-4xl">
                <FaWhatsapp />
              </p>
              <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 text-left mb-0">
                Contact Us Via WhatsApp
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 justify-start items-center gap-4 py-6 mb-2">
              <Link
                href="https://wa.me/448000488461"
                target="_blank"
                rel="noopener noreferrer"
                className="flex bg-gray-100 items-center justify-center gap-2 px-3 md:px-12 py-2 md:py-3 group hover:bg-secondary rounded-3xl hover:rounded-3xl hover:cursor-pointer transition-all duration-300 hover:shadow-xl"
              >
                <FaWhatsapp className="text-green-600 group-hover:text-white text-2xl" />
                <span className="text-green-700 group-hover:text-white text-base font-medium">
                  +44 800 048 8461
                </span>
              </Link>
            </div>


        <div className="flex flex-row items-center justify-start gap-2">
              <p className="text-secondary text-4xl md:text-5xl">
                <RiGlobalFill />
              </p>
              <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 text-left mb-0">
              {t("globalHeading")}
              </h2>
            </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-6 md:gap-8 pt-6">
          {globalTollFreeNumbers.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex bg-gray-100 items-center justify-center gap-2 px-3 md:px-12 py-2 md:py-3 group hover:bg-secondary rounded-3xl hover:rounded-3xl hover:cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative w-6 h-6">
                <Image
                  src={`/flags/toll/${item.countryCode}.svg`}
                  fill
                  alt={item.countryCode}
                />
              </div>
              <span className="text-primary group-hover:text-[#FFF] text-sm 2xl:text-[17px]">
                {item.phoneNumber}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex flex-row items-center justify-start gap-2 mt-8">
              <p className="text-secondary text-4xl md:text-5xl">
                <GiRotaryPhone />
              </p>
              <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 text-left mb-0">
              {t("localHeading")}
              </h2>
            </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-6 md:gap-8 pt-6">
          {localTollFreeNumbers.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex bg-gray-100 items-center justify-center gap-2 px-3 md:px-12 py-2 md:py-3 group hover:bg-secondary rounded-3xl hover:rounded-3xl hover:cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative w-6 h-6">
                <Image
                  src={`/flags/toll/${item.countryCode}.svg`}
                  fill
                  alt={item.countryCode}
                />
              </div>
              <span className="text-primary group-hover:text-[#FFF] text-sm 2xl:text-[17px]">
                {item.phoneNumber}
              </span>
            </Link>
          ))}
        </div>
      </div>
      </section>
    </LocationContextProvider>
  );
};

export default ToolFreeContact;
