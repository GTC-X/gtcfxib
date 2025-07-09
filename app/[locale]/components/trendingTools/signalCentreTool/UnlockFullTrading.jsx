"use client";

import { useTranslations } from "next-intl";

export default function UnLockFullTrading() {
  const t = useTranslations("prime-tech");

  return (
    <div className="w-full py-12 container">
      <h2 className="HeadingH2">
        {t("socialCentreTool.unlockFullTrading.title")}
      </h2>
      <p className="text">
        {t("socialCentreTool.unlockFullTrading.para")}
      </p>
    </div>
  );
}
