"use client";
import React from "react";
import Accordion from "../components/common/Accordion";
import Banner from "../components/partner/Affiliate/Banner";
import ProgramBoxes from "../components/partner/Affiliate/ProgramBoxes";
import AffilicatePart from "../components/partner/Affiliate/AffilicatePart";
import ActionProgram from "../components/partner/Affiliate/ActionProgram";
import { useTranslations } from "next-intl";
import ApartOthers from "../components/partner/Affiliate/ApartOthers";
import WhyPartnerWithGtc from "../components/partner/ibBroker/WhyPartnerWithGtc";

const AffiliateProgramPage = () => {
  const t = useTranslations("partner");

  const affiliateFaqList = [
    {
      title: t("affiliateProgram.content.faq.one.ques"),
      desc: t("affiliateProgram.content.faq.one.ans"), 
    },
    {
      title: t("affiliateProgram.content.faq.two.ques"),
      desc: t("affiliateProgram.content.faq.two.ans"),
    },
    {
      title: t("affiliateProgram.content.faq.three.ques"),
      desc: t("affiliateProgram.content.faq.three.ans"),
    },
    {
      title: t("affiliateProgram.content.faq.four.ques"),
      desc: t("affiliateProgram.content.faq.four.ans"),
    },
  ];

  const reasonList = [
    {
        "number":"1",
        "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/IB-02.webp",
        "text":t("affiliateProgram.content.boxes.one")
    },
    {
        "number":"2",
        "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/IB-03.webp",
        "text":t("affiliateProgram.content.boxes.two")
    },
    {
        "number":"3",
        "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/IB-04.webp",
        "text": t("affiliateProgram.content.boxes.three")
    },
    {
        "number":"4",
        "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/IB-05.webp",
        "text":t("affiliateProgram.content.boxes.four")
    },
    
  ]

  return (
    <>
      <Banner
          />
          <AffilicatePart title={t("affiliateProgram.whyAffiliate")} reasons={reasonList} columns={4} />
 
      <section className="py-8 md:py-12 bg-primary relative">
    
        <div className="container flex flex-col gap-4 md:mt-0 mt-5">
          <h2 className="HeadingH2 text-secondary">
            {t("affiliateProgram.content.intro.heading")}
          </h2>
          <p className="text text-white">
            {t("affiliateProgram.content.intro.para1")}
          </p>
          <p className="text text-white">
            {t("affiliateProgram.content.intro.para2")}
          </p>
        </div>
      </section>
      <ActionProgram />
      <ApartOthers />
      <section className="py-6 md:py-12">
        <div className="container">
          <h2 className="HeadingH2 mb-8">
            {t("affiliateProgram.content.faq.heading")}
          </h2>
          <Accordion accordionData={affiliateFaqList} theme="light" />
        </div>
      </section>
    </>
  );
};

export default AffiliateProgramPage;
