"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next-intl/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { LocationContext } from "@/context/location-context";
import { useRouter } from "next-intl/client";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Language = (props) => {
  const { currentLanguage } = props;
  const locale = useLocale();
  const pathname = usePathname();
  const isAr = pathname.includes("/ar-AE");
  const router = useRouter();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
  const location = useContext(LocationContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (
      (location?.country_code == "MY" ||
        location?.languages?.includes("ms-MY")) &&
      !localStorage.getItem("visitedBefore")
    ) {
      localStorage.setItem("visitedBefore", "true");
      router.push(pathnameWithoutLocale, { locale: "ms-MY" });
    }
    if (
      (location?.country_code == "CN" || location?.languages?.includes("zh")) &&
      !localStorage.getItem("visitedBefore")
    ) {
      localStorage.setItem("visitedBefore", "true");
      router.push(pathnameWithoutLocale, { locale: "zh-hans" });
    }
  }, [location]);

  const languages = [
    { code: "en", label: "English", flagSrc: "/en.webp" },
    { code: "ar-AE", label: "العربية", flagSrc: "/ar.webp" }

    // Add more languages as needed
  ];

  return (
    <div className="dropdown dropdown-hover z-50 relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="bg-white text-primary border border-gray-200 px-2 py-[6px] text-sm flex justify-start items-center gap-2 cursor-pointer capitalize"
      >
        <Image
          src={`/${locale || "en"}.webp`}
          width={28}
          height={16}
          alt={locale.toLowerCase()}
        />
        {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {dropdownOpen && (
        <ul
          tabIndex={0}
          className={`dropdown-content z-[99] pt-1 mt-1 language-setting menu shadow bg-white border border-gray-300 absolute rounded-none  flex flex-row gap-1 text-sm ltr:right-0 rtl:left-0 ${currentLanguage?.direction == "rtl" ? "arabic" : ""}`}
        >
          {languages.map((language) => (
            <li key={language.code}>
              <Link
                href={
                  pathnameWithoutLocale === "" ? "/" : pathnameWithoutLocale
                }
                locale={language.code}
                className="language px-2"
              >
                <Image
                  src={language.flagSrc}
                  width={16}
                  height={8}
                  alt={language.label}
                />
                {language.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;