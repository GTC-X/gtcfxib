import { useTranslations } from "next-intl";
import React from "react";
import Link from "next/link";
import ClientLogo from "../../home/ClientLogo";
import Button from "../../common/Button";

const GetFreeAccess = () => {
  const t = useTranslations("prime-tech");
  return (
    <section className="pb-10 ">
    <div className="max-width pt-10">
      <div className="bg-gradient p-6 rounded-[30px] shadow-2xl mb-5">
        <h2 className="HeadingH2 text-white text-lg md:text-xl capitalize">
          {t("technicalTool.banner.heading")}
        </h2>
        <Button/>
      </div>
      <ClientLogo />
    </div>
    </section>
  );
};

export default GetFreeAccess;
