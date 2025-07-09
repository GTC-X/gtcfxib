"use client";
import React from "react";
import Hero from "../components/common/Hero";
import { useTranslations } from "next-intl";
import Link from "next/link";

const RefundPolicyPage = () => {
  const t = useTranslations("footerPage");
  return (
    <>
      <Hero
        imageUrl="/banner/regulation.webp"
        title={t("RefundPolicy.bannerText.heading")}
        description={t("RefundPolicy.bannerText.description")}
      />
      <section className="container py-12">
        <h2 className="text-primary md:text-[2rem] font-bold pb-4">
          {t("RefundPolicy.content.heading")}
        </h2>
        <ul className="list-decimal pl-8">
          <li>{t("RefundPolicy.content.intro.label")}</li>
          <p className="text-primary md:text-[1rem] py-2">
            {t("RefundPolicy.content.intro.para1")}
          </p>
          <li>{t("RefundPolicy.content.ack.label")}</li>
          <p className="text-primary md:text-[1rem] py-2">
            {t("RefundPolicy.content.ack.para1")}
            www.old.gtcup.com
          </p>
          <li>
            {t("RefundPolicy.content.procedure.label")}
            <ul className="list-disc pl-6">
              <li className="py-2">
                {t("RefundPolicy.content.procedure.option.one")}
              </li>
              <li className="py-2">
                {t("RefundPolicy.content.procedure.option.two")}
              </li>
              <li className="py-2">
                {t("RefundPolicy.content.procedure.option.three")}
              </li>
              <li className="py-2">
                {t("RefundPolicy.content.procedure.option.four")}{" "}
              </li>
              <li className="py-2">
                {t("RefundPolicy.content.procedure.option.five")}{" "}
              </li>
              <li className="py-2">
                {t("RefundPolicy.content.procedure.option.six")}{" "}
              </li>
              <li className="py-2">
                {t("RefundPolicy.content.procedure.option.sixone")}
                <ul className="list-disc pl-6">
                  <li>{t("RefundPolicy.content.procedure.option.nine")}</li>
                  <li>{t("RefundPolicy.content.procedure.option.ten")}</li>
                  <li>{t("RefundPolicy.content.procedure.option.one1")}</li>
                  <li>
                    {t("RefundPolicy.content.procedure.option.one2")}
                    <Link
                      className="underline text-[#c36]"
                      href="mailto:support@gtcfx.com"
                    >
                      support@gtcfx.com
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="py-2">
                {t("RefundPolicy.content.procedure.option.seven")}
                <ul className="list-disc pl-6">
                  <li>{t("RefundPolicy.content.procedure.option.one3")}</li>
                  <li>{t("RefundPolicy.content.procedure.option.one4")}</li>
                </ul>
              </li>
              <li className="py-2">
                {t("RefundPolicy.content.procedure.option.eight")}
                <Link
                  className="underline text-[#c36]"
                  href="mailto:support@gtcfx.com."
                >
                  support@gtcfx.com.
                </Link>
              </li>
            </ul>
          </li>
          <li>
          {t("RefundPolicy.content.procedure.refund.label")}

            <ul className="list-disc pl-6">
              <li className="py-2">
              {t("RefundPolicy.content.procedure.refund.one")}
                <ul className="list-disc pl-6">
                  <li>
                  {t("RefundPolicy.content.procedure.refund.two")}
                  </li>
                  <li>
                  {t("RefundPolicy.content.procedure.refund.three")}
                  </li>
                  <li>
                  {t("RefundPolicy.content.procedure.refund.four")}
                  </li>
                  <li>
                  {t("RefundPolicy.content.procedure.refund.five")}
                  </li>
                </ul>
              </li>
              <li className="py-2">
              {t("RefundPolicy.content.procedure.refund.six")}
              </li>
              <li className="py-2">
              {t("RefundPolicy.content.procedure.refund.seven")}
                <ul className="list-item pl-6">
                  <li className="py-1">
                  {t("RefundPolicy.content.procedure.refund.eight")}
                  </li>
                  <li className="py-1">
                  {t("RefundPolicy.content.procedure.refund.nine")}
                  </li>
                  <li className="py-1">
                  {t("RefundPolicy.content.procedure.refund.ten")}
                    <ul className="list-decimal pl-10">
                      <li>
                      {t("RefundPolicy.content.procedure.refund.one1")}
                      </li>
                      <li>
                      {t("RefundPolicy.content.procedure.refund.one2")}
                      </li>
                    </ul>
                  </li>
                  <li className="py-1">
                  {t("RefundPolicy.content.procedure.refund.one3")}
                  </li>
                </ul>
              </li>
              <li className="py-2">
              {t("RefundPolicy.content.procedure.refund.one4")}
              </li>
              <li className="py-2">
              {t("RefundPolicy.content.procedure.refund.one5")}
              </li>
            </ul>
          </li>
          <li>
          {t("RefundPolicy.content.procedure.dispute.label")}
            <ul className="list-disc pl-6">
              <li>
              {t("RefundPolicy.content.procedure.dispute.para1")}
              </li>
              <li>
              {t("RefundPolicy.content.procedure.dispute.para2")}
                <Link
                  href="mailto:support@gtcfx.com"
                  className="underline text-[#c36]"
                >
                  support@gtcfx.com
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <p className="pt-12">
        {t("RefundPolicy.content.procedure.dispute.para3")}
        </p>
      </section>
    </>
  );
};

export default RefundPolicyPage;
