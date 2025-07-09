'use client'
import React from "react";
import Hero from "../components/common/Hero";
import AccountFAQ from "../components/faq/AccountFAQ";
import DepositFAQ from "../components/faq/DepositFAQ";
import GeneralFAQ from "../components/faq/GeneralFAQ";
import { useTranslations } from "next-intl";

const FAQPage = () => {
   const t = useTranslations("faq") 
  return (
    <>
   
      <div className="max-width md:py-12 3xl:py-16 py-8">
        <div className="text-center mb-16">
          <h2 className="HeadingH2">{t("heading")}</h2> 
          <h4 className="text">
            {t("sub-title")}
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 md:p-0">
          <div className="account">
            <h3 className="text-lg text-primary border-l-[3px] border-secondary pl-5  uppercase mb-5">
            {t("account-title")}
            </h3>
            <AccountFAQ />
          </div>
          <div className="account">
            <h3 className="text-lg text-primary border-l-[3px] border-secondary pl-5  uppercase mb-5">
            {t("deposit-heading")}
            </h3>
            <DepositFAQ />
            <h3 className="text-lg text-primary border-l-[3px] border-secondary pl-5  uppercase my-5">
            {t("general-heading")}
            </h3>
            <GeneralFAQ />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
