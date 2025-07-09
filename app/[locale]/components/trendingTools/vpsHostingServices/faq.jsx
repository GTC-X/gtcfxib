import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Accordion from "../../common/Accordion";

const HostingFaq = () => {
  const t = useTranslations("prime-tech");
  const faqs = [
    {
      id: 1,
      title: t("vpsHosting.faqs.question1"),
      desc: t("vpsHosting.faqs.answer1"),
    },
    {
      id: 2,
      title: t("vpsHosting.faqs.question2"),
      desc: t("vpsHosting.faqs.answer2"),
    },
  ];

  return (
    <div className="py-10 mb-28">
      <div className="container">
        <h2 className="HeadingH2 bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90% inline-block text-transparent bg-clip-text text-center mb-8">{t("vpsHosting.faqs.title")}</h2>
        <Accordion accordionData={faqs} theme="blue" textColor="yellow" />
      </div>
    </div>
  );
};

export default HostingFaq;
