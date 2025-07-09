"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Accordion from "../../common/Accordion";

const PreciousFAQ = () => {
  const t = useTranslations("Instruments");

  const faqs = [
    {
      title: t("preciousMetals.faqs.question1"),
      desc: t("preciousMetals.faqs.answer1"),
    },
    {
      title: t("preciousMetals.faqs.question2"),
      desc: t("preciousMetals.faqs.answer2"),
    },
    {
      title: t("preciousMetals.faqs.question3"),
      desc: t("preciousMetals.faqs.answer3"),
    },
    {
      title: t("preciousMetals.faqs.question4"),
      desc: t("preciousMetals.faqs.answer4"),
    },
  ];
  return (
    <div className="forex-faq py-12">
      <div className="container">
        <h2 className="mainHeading pb-4">{t("preciousMetals.faqs.title")}</h2>
        <Accordion accordionData={faqs} theme="blue" textColor="yellow" />
      </div>
    </div>
  );
};

export default PreciousFAQ;
