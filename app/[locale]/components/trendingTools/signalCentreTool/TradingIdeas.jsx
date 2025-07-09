"use client";

import { useTranslations } from "next-intl";

export default function TradingIdeas() {
  const t = useTranslations("prime-tech");

  return (
    <div className="w-full container relative -mb-12">
      <div className="bg-secondary  rounded-3xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 700 10"
          preserveAspectRatio="none"
        >
          <path
            class="elementor-shape-fill"
            fill="#fff"
            d="M350,10L340,0h20L350,10z"
          ></path>
        </svg>
        <div className="pb-6 px-2 pt-3">
          <h2 className="HeadingH2 text-white">
            {t("socialCentreTool.tradingIdea.title")}
          </h2>
          <p className="text text-white">
            {t("socialCentreTool.tradingIdea.title")}
          </p>
        </div>
      </div>
    </div>
  );
}
