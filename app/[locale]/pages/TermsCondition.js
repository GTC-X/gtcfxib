"use client";
import React from "react";
import Hero from "../components/common/Hero";
import { useTranslations } from "next-intl";

const TermsConditionPage = () => {
  const t = useTranslations("footerPage");
  const content = [
    t("termsCondition.content.restriction.option.one"),
    t("termsCondition.content.restriction.option.two"),
    t("termsCondition.content.restriction.option.three"),
    t("termsCondition.content.restriction.option.four"),
    t("termsCondition.content.restriction.option.five"),
    t("termsCondition.content.restriction.option.six"),
    t("termsCondition.content.restriction.option.seven"),
    t("termsCondition.content.restriction.option.eight"),
  ];

  return (
    <>
      <Hero
        imageUrl="/banner/terms-condition.webp"
        title={t("termsCondition.bannerText.heading")}
        description={t("termsCondition.bannerText.description")}
      />
      <div className="inner-content py-10">
        <div className="container">
          <div className="inside-content mt-5 text-base leading-6">
            <h2 className="HeadingH3"> {t("termsCondition.content.mainHeading")} </h2>
            <h4 className="text-xl font-medium my-3">{t("termsCondition.content.intro.label")}</h4>
            <p className="mb-2"> {t("termsCondition.content.intro.para1")}</p>
            <h4 className="text-xl font-medium my-3">{t("termsCondition.content.intellec.label")}</h4>
            <p className="mb-2"> {t("termsCondition.content.intellec.para1")}</p>
            <h4 className="text-xl font-medium my-3">{t("termsCondition.content.restriction.label")}</h4>
            <p className="mb-2"> {t("termsCondition.content.restriction.para1")}</p>
            <ul className="list-disc ml-7 text-primary mb-3">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
            <p className="mb-2"> {t("termsCondition.content.restriction.para2")}</p>
            <h4 className="text-xl font-medium my-3">{t("termsCondition.content.yourcontent.label")}</h4>
            <p className="mb-2"> {t("termsCondition.content.yourcontent.para1")}</p>
            <h4 className="text-xl font-medium my-3">{t("termsCondition.content.warranties.label")}</h4>
            <p className="mb-2"> {t("termsCondition.content.warranties.para1")}</p>
            <h4 className="text-xl font-medium my-3">{t("termsCondition.content.limitation.label")}</h4>
            <p className="mb-2"> {t("termsCondition.content.limitation.para1")}</p>
            <h4 className="text-xl font-medium my-3">{t("termsCondition.content.indemnification.label")}</h4>
            <p className="mb-2"> {t("termsCondition.content.indemnification.para1")}</p>
            <h4 className="text-xl font-medium my-3">{t("termsCondition.content.severability.label")}</h4>
            <p className="mb-2"> {t("termsCondition.content.severability.para1")}</p>
            <h4 className="text-xl font-medium my-3">{t("termsCondition.content.variation.label")}</h4>
            <p className="mb-2"> {t("termsCondition.content.variation.para1")}</p>
            <h4 className="text-xl font-medium my-3">{t("termsCondition.content.assignment.label")}</h4>
            <p className="mb-2"> {t("termsCondition.content.assignment.para1")}</p>
            <h4 className="text-xl font-medium my-3">{t("termsCondition.content.entire.label")}</h4>
            <p className="mb-2"> {t("termsCondition.content.entire.para1")}</p>
            <h4 className="text-xl font-medium my-3">{t("termsCondition.content.governing.label")}</h4>
            <p className="mb-2"> {t("termsCondition.content.governing.para1")}</p>
            { /* <h4 className="text-xl font-medium my-3">{t("termsCondition.content.company.label")}</h4>
            <p className="mb-2"> {t("termsCondition.content.company.para1")}</p> */
              } 
            <div className="address-content">
                <h5 className="font-semibold text-base my-5">GTC Global Ltd</h5>
                <p>GBC C188049</p>
                <p>FSC No. GB22200292</p>
                <p>The Cyberati Lounge, c/o Credentia International Management Ltd</p>
                <p> Ground Floor, The catalyst, Silicon Avenue</p>
                <p> 40 Cybercity, 72201 Ebene</p>
                <p> Republic of Mauritius</p>

               { /*
                <h5 className="font-semibold text-base my-5">GTC Markets (CY) Ltd.</h5>
                <p>HE 443759</p>
                <p>Agias Zonis 22A</p>
                <p>Office 101, 1st floor</p>
                <p>3027, Limassol, Cyprus</p> */
              } 
                
            </div>
            <div className="address-content">
                <h5 className="font-semibold text-base my-5">GTC Multi Trading DMCC</h5>
                <p>DMCC-312687</p>
                <p>SCA Licence No.202200000007</p> 
                <p>Broker & Direct Clearing Member Of DGCX</p> 
                <p>Office Address: Unit No: 1501, 1 Lake Plaza</p>
                <p> Plot No: JLT-PH2-T2A, Jumeirah Lakes Towers </p>
                <p> Dubai, UAE</p>

               { /*
                <h5 className="font-semibold text-base my-5">GTC Markets (CY) Ltd.</h5>
                <p>HE 443759</p>
                <p>Agias Zonis 22A</p>
                <p>Office 101, 1st floor</p>
                <p>3027, Limassol, Cyprus</p> */
              } 
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditionPage;
