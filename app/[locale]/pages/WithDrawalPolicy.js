"use client";
import React from "react";
import Hero from "../components/common/Hero";
import { useTranslations } from "next-intl";

const WithDrawalPolicyPages = () => {
  const t = useTranslations("footerPage");
  return (
    <>
      <Hero
        imageUrl="/banner/drawalPolicy.webp"
        title={t("withDrawal.bannerText.heading")}
        description={t("withDrawal.bannerText.description")}
      />
      <section className="py-12 container">
        <h2 className="text-primary md:text-[1.75rem] font-semibold pb-4">
          {t("withDrawal.content.mainHeading")}
        </h2>
        <ul className="list-decimal pb-8">
          <li>{t("withDrawal.content.intro.label")}</li>
          <p className="text-primary md:text-[1rem] pb-2">
            {t("withDrawal.content.intro.para1")}
          </p>
          <li>{t("withDrawal.content.ack.label")}</li>
          <p className="text-primary md:text-[1rem] pb-2">
            {t("withDrawal.content.ack.para1")}{" "}
            <a className="underline" href="https://gtcfx.com">
              gtcfx.com
            </a>
          </p>
          <li>{t("withDrawal.content.procedure.label")}</li>
          <p className="text-primary md:text-[1rem] pb-2">
            {t("withDrawal.content.procedure.para1")}
          </p>
          <ul className="list-disc pl-6">
            <li>{t("withDrawal.content.procedure.option.one")}</li>
            <li>{t("withDrawal.content.procedure.option.two")}</li>
            <li>{t("withDrawal.content.procedure.option.three")}</li>
            <li>{t("withDrawal.content.procedure.option.four")}</li>
            <li>{t("withDrawal.content.procedure.option.five")}</li>
            <li>
              {t("withDrawal.content.procedure.option.six")}
              <ul>
                <li>a) {t("withDrawal.content.procedure.refund.one")}</li>
                <li>b) {t("withDrawal.content.procedure.refund.two")}</li>
                <li>c) {t("withDrawal.content.procedure.refund.three")}</li>
              </ul>
            </li>
            <li>{t("withDrawal.content.procedure.option.seven")}</li>
            <li>{t("withDrawal.content.procedure.option.eight")}</li>
            <li>{t("withDrawal.content.procedure.option.nine")}</li>
            <li>{t("withDrawal.content.procedure.option.ten")}</li>
            <li>{t("withDrawal.content.procedure.option.one1")}</li>
            <li>{t("withDrawal.content.procedure.option.one2")}</li>
            <li>{t("withDrawal.content.procedure.option.one3")}</li>
            <li>{t("withDrawal.content.procedure.option.one4")}</li>
          </ul>
        </ul>

        <p className="text-primary md:text-[1rem] pb-2">
          {t("withDrawal.content.procedure.para2")}
        </p>
        <ul className="list-decimal">
          <li>{t("withDrawal.content.procedure.para3")}</li>
          <li>{t("withDrawal.content.procedure.para4")}</li>
          <li>
            {t("withDrawal.content.procedure.para5")}
          
          </li>
          <li>
            {t("withDrawal.content.procedure.para6")}
            <a href="mailto:support@gtcfx.com">support@gtcfx.com</a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default WithDrawalPolicyPages;
