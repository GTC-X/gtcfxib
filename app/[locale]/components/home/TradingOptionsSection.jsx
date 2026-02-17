"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";

function ArrowIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className} 
    >
      <path d="M5 12h12" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function FeatureCard({
  title,
  desc,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  variant = "blue",
  image,
}) {
  const styles =
    variant === "blue"
      ? {
          ring: "ring-blue-600/20 hover:ring-blue-600/35",
        }
      : {
          ring: "ring-emerald-600/20 hover:ring-emerald-600/35",
        };

  return (
    <div
      className={clsx(
        "group rounded-2xl bg-gradient-to-r from-[#293794] to-[#000021] p-6 shadow-sm ring-1 transition",
        styles.ring
      )}
    >
      {/* Image */}
      <div className="relative w-20 p-4 h-20 mb-4 flex bg-gray-200 rounded-full">
        <Image src={image} alt={title} width={120} height={120} className="" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white capitalize">{title}</h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-white rtl:h-20">{desc}</p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col md:flex-row gap-3">
        {/* Primary Button */}
         <Link
    href={primaryHref}
    target="_blank"
    className="w-full md:flex-1 inline-flex items-center justify-center gap-2 rounded-md px-2 py-3 text-sm font-semibold text-white
    bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22]
    hover:from-[#263788] hover:via-[#101638] hover:to-[#263788] hover:border border-white"
  >
    {primaryLabel}
    <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
  </Link>

  {/* Secondary Button */}
  <Link
    href={secondaryHref}
    target="_blank"
    className="w-full md:flex-1 inline-flex items-center justify-center rounded-md px-4 py-3 text-sm font-semibold
    border border-gray-300 text-white hover:bg-white hover:text-primary"
  >
    {secondaryLabel}
  </Link>
      </div>
    </div>
  );
}


 
export default function TradingOptionsSection() { 
    const t = useTranslations("home.primeHome")
  return (
   <section className="w-full bg-white py-10 lg:py-[60px]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-10 max-w-5xl mx-auto">
            <h2 className="HeadingH2 font-medium mb-5 text-center">{t("heading")}</h2>
            <p className="text-accent md:text-base text-sm 2xl:text-[17px] text-center max-w-7xl mx-auto">{t("desc")}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Copy Trading */}
          <FeatureCard
            title={t("CopyTrading.heading")}
            desc={t("CopyTrading.desc")}
            image="/pamm.png"
            primaryHref="https://gtccopy.com/portal/login?redirectUrl=%2F"
            primaryLabel={t("CopyTrading.button")}
            secondaryHref="/copy-trading"
            secondaryLabel= {t("CopyTrading.button1")}
            variant="blue"
          />

          {/* PAMM Trading */}
          <FeatureCard
            title={t("PAMMTrading.heading")}
            desc={t("PAMMTrading.desc")}
            image="/copy.png"
            primaryHref="https://gtcpamm.com/app/auth"
            primaryLabel={t("PAMMTrading.button")}
            secondaryHref="/pamm-account"
            secondaryLabel={t("PAMMTrading.button1")}
            variant="green"
          />
        </div>
      </div>
    </section>
  );
}
