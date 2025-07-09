'use client'
import React from "react";
import GlossaryList from "../components/glossary/glossaryList";
import { useTranslations } from "next-intl";

const GlossaryFaqs = () => {
  const t = useTranslations("metaData.glossary")
  return (
    <div className="inner-content py-10">
      <div className="container">
        <div className="content-inner">
          <h2 className="HeadingH2 capitalize text-secondary">{t("title")}</h2>
          <p className="text max-w-4xl mx-auto">{t("des")}</p>
          <div className="mt-8">
            <GlossaryList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlossaryFaqs;
