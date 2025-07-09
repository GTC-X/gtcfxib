import React from "react";
import Link from "next-intl/link";
import { useTranslations } from "use-intl";

const MTAccountLink = () => {
  const t = useTranslations("datacontent");
  return (
    <div className="yellowButton mt-3">
      <Link href="/free-demo-account" className="block w-full">{t("standard.button")}</Link>
    </div>
  );
};

export default MTAccountLink;
