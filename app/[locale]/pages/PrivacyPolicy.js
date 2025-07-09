"use client";
import React from "react";
import Hero from "../components/common/Hero";
import { useTranslations } from "next-intl";

const PrivacyPolicyPage = () => {
  const t = useTranslations("footerPage");
  const content = [
    t("privacyPolicy.content.collect.option.one"),
    t("privacyPolicy.content.collect.option.two"),
    t("privacyPolicy.content.collect.option.three"),
    t("privacyPolicy.content.collect.option.four"),
    t("privacyPolicy.content.collect.option.five"),
    t("privacyPolicy.content.collect.option.six"),
    t("privacyPolicy.content.collect.option.seven"),
    t("privacyPolicy.content.collect.option.eight"),
    t("privacyPolicy.content.collect.option.nine"),
    t("privacyPolicy.content.collect.option.ten"),
    t("privacyPolicy.content.collect.option.one1"),
    t("privacyPolicy.content.collect.option.one2"),
    t("privacyPolicy.content.collect.option.one3"),
    t("privacyPolicy.content.collect.option.one4"),
    t("privacyPolicy.content.collect.option.one5"),
  ];
  const interest = [
    t("privacyPolicy.content.interests.option.one"),
    t("privacyPolicy.content.interests.option.two"),
    t("privacyPolicy.content.interests.option.three"),
    t("privacyPolicy.content.interests.option.four"),
    t("privacyPolicy.content.interests.option.five"),
  ];
  const disclosure = [
    t("privacyPolicy.content.disclosure.option.one"),
    t("privacyPolicy.content.disclosure.option.two"),
    t("privacyPolicy.content.disclosure.option.three"),
    t("privacyPolicy.content.disclosure.option.four"),
  ];
  const disclosure2 = [
    t("privacyPolicy.content.disclosure.option2.one"),
    t("privacyPolicy.content.disclosure.option2.two"),
    t("privacyPolicy.content.disclosure.option2.three"),
    t("privacyPolicy.content.disclosure.option2.four"),
    t("privacyPolicy.content.disclosure.option2.five"),
  ];
  const storage = [
    t("privacyPolicy.content.storage.option.one"),
    t("privacyPolicy.content.storage.option.two"),
  ];
  const objection = [
    t("privacyPolicy.content.objection.option.one"),
    t("privacyPolicy.content.objection.option.two"),
    t("privacyPolicy.content.objection.option.three"),
  ];
  return (
    <>
      <Hero
        imageUrl="/account/withdraw.webp"
        title={t("privacyPolicy.bannerText.heading")}
        description={t("privacyPolicy.bannerText.description")}
      />

      <section className="py-12 container">
        <h2 className="text-primary md:text-[1.75rem] font-semibold pb-4">
          {t("privacyPolicy.content.mainHeading")}
        </h2>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.intro.para1")}
        </p>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.intro.para2")}.
        </p>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.intro.para3")}
        </p>
        <h2 className="text-primary md:text-[1.25rem] font-semibold pb-4">
          {t("privacyPolicy.content.protection.label")}
        </h2>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.protection.para1")}
        </p>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.protection.para2")}
        </p>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.protection.para3")}
        </p>
        <h2 className="text-primary md:text-[1.25rem] font-semibold pb-4">
          {t("privacyPolicy.content.collect.label")}
        </h2>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.collect.para1")}
        </p>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.collect.para2")}
        </p>
        <ul className="list-disc ml-7 text-primary mb-3">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.collect.para3")}
        </p>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.collect.para4")}
        </p>
        <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
          {t("privacyPolicy.content.processing.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2 ">
          {t("privacyPolicy.content.processing.para1")}
        </p>
        <ol className="list-decimal">
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.performance.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.performance.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.compliance.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.compliance.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-1">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.interests.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.interests.para1")}
              <ul className="list-disc ml-7 text-primary my-3">
                {interest.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.Consent.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.Consent.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.product.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.product.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.investigate.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.investigate.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.comply.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.comply.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.data.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.data.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.marketing.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.marketing.para1")}
            </p>
          </li>
         
            <li className="text-primary md:text-[1rem] pb-8">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.record.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.record.para1")}
            </p>
          </li>
     
          <li className="text-primary md:text-[1rem] pb-8">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.legal.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.legal.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-8">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.physical.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.physical.para1")}
            </p>
          </li>
      
        </ol>
      
       
     

      
        
        <h3 className="text-primary md:text-[1.25rem] font-semiboldpb-4">
          {t("privacyPolicy.content.regarding.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2 ">
          {t("privacyPolicy.content.regarding.para1")}
        </p>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
          {t("privacyPolicy.content.rectification.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2 ">
          {t("privacyPolicy.content.rectification.para1")}
        </p>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
          {t("privacyPolicy.content.erasure.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2 ">
          {t("privacyPolicy.content.erasure.para1")}
        </p>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
          {t("privacyPolicy.content.restrictions.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2 ">
          {t("privacyPolicy.content.restrictions.para1")}
        </p>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
          {t("privacyPolicy.content.portability.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.portability.para1")}
        </p>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
          {t("privacyPolicy.content.objection.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.objection.para1")}
        </p>
        <ul className="list-disc ml-7 text-primary my-3">
                {objection.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
        {t("privacyPolicy.content.submitting.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2">
        {t("privacyPolicy.content.submitting.para1")}
        </p>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
        {t("privacyPolicy.content.lagel.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2">
        {t("privacyPolicy.content.lagel.para1")} 
        </p>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
        {t("privacyPolicy.content.card.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2">
        {t("privacyPolicy.content.card.para1")}
        </p>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
        {t("privacyPolicy.content.contact.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2">
        {t("privacyPolicy.content.contact.para1")}
          <a href="mailto:support@gtcfx.com.">support@gtcfx.com.</a>
        </p>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
