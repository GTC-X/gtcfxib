"use client";
import React from "react";
import Hero from "../components/common/Hero";
import { useTranslations } from "next-intl";

const CompliancePolicyPage = () => {
  const t = useTranslations("footerPage");
  return (
    <>
      <Hero
        imageUrl="/banner/complain.webp"
        title={t("CompliancePolicy.bannerText.heading")}
        description={t("CompliancePolicy.bannerText.description")}
      />
      <section className="py-12 container">
        <h2 className="text-primary md:text-[1.75rem] font-bold pb-4">
          {t("CompliancePolicy.content.heading")}
        </h2>
        <h2 className="text-primary md:text-[1.5rem] font-semibold pb-4">
          {t("CompliancePolicy.content.subHeading")}
        </h2>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("CompliancePolicy.content.para1")}
          <br />
          <br />
          {t("CompliancePolicy.content.para2")}
          <br />
          <br />
          {t("CompliancePolicy.content.para3")}
        </p>
        <ul className="list-decimal pl-6 pt-6">
          <li>
            {t("CompliancePolicy.content.para4")}
            <p className="text-primary md:text-[1rem] py-2">
              {t("CompliancePolicy.content.para5")}
              <ul className="list-disc pl-6">
                <li> {t("CompliancePolicy.content.para6")}</li>
                <li> {t("CompliancePolicy.content.para7")}</li>
              </ul>
            </p>
            <p className="text-primary md:text-[1rem] py-2">
              {t("CompliancePolicy.content.para8")}
              <br />
              <br />
              {t("CompliancePolicy.content.para9")}
            </p>
          </li>
          <li>
            {t("CompliancePolicy.content.internet.label")}
            <p className="text-primary md:text-[1rem] py-2">
              {t("CompliancePolicy.content.internet.para1")}
            </p>
          </li>
          <li>
            {t("CompliancePolicy.content.account.label")}
            <p className="text-primary md:text-[1rem] py-2">
              {t("CompliancePolicy.content.account.para1")}
            </p>
          </li>
          <li>
            {t("CompliancePolicy.content.trust.label")}
            <p className="text-primary md:text-[1rem] py-2">
              {t("CompliancePolicy.content.trust.para1")}
              <br />
              <br />
              {t("CompliancePolicy.content.trust.para2")}
            </p>
          </li>
          <li>
            {t("CompliancePolicy.content.opening.label")}
            <p className="text-primary md:text-[1rem] py-2">
              {t("CompliancePolicy.content.opening.para1")}
              <ul className="marker:text-black list-disc list-outside  pl-6">
                <li>{t("CompliancePolicy.content.opening.option.one")}</li>
                <li>{t("CompliancePolicy.content.opening.option.two")}</li>
                <li>{t("CompliancePolicy.content.opening.option.three")}</li>
                <li>{t("CompliancePolicy.content.opening.option.four")}</li>
                <li>
                  {t("CompliancePolicy.content.opening.option.five")}
                  <ul className="list-disc pl-6">
                    <li>{t("CompliancePolicy.content.opening.option.six")}</li>
                    <li>
                      {t("CompliancePolicy.content.opening.option.seven")}
                    </li>
                    <li>
                      {t("CompliancePolicy.content.opening.option.eight")}
                    </li>
                  </ul>
                </li>
                <li>{t("CompliancePolicy.content.opening.option.nine")}</li>
                <li>{t("CompliancePolicy.content.opening.option.ten")}</li>
                <li>{t("CompliancePolicy.content.opening.option.one1")}</li>
              </ul>
            </p>
          </li>
          <li>
          {t("CompliancePolicy.content.scrutiny.label")}
            <p className="text-primary md:text-[1rem] py-2">
            {t("CompliancePolicy.content.scrutiny.para1")}
              <br />
              <br />
              {t("CompliancePolicy.content.scrutiny.para2")}
              <br />
              <br />
              {t("CompliancePolicy.content.scrutiny.para3")}
              <br />
              <br />
              {t("CompliancePolicy.content.scrutiny.para4")}
            </p>
          </li>
          <li>
          {t("CompliancePolicy.content.securities.label")}
            <p className="text-primary md:text-[1rem] py-2">
            {t("CompliancePolicy.content.securities.para1")}
              <br />
              <br />
              {t("CompliancePolicy.content.securities.para2")}
              <ul className="list-decimal pl-6 pt-6">
                <li>
                {t("CompliancePolicy.content.securities.para3")}
                </li>
                <li>
                {t("CompliancePolicy.content.securities.para4")}
                </li>
                <li>
                {t("CompliancePolicy.content.securities.para5")}
                </li>
              </ul>
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default CompliancePolicyPage;
