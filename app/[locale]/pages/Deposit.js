"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import DepositRules from "../components/account/DepositRules";
import PaymentOption from "../components/account/PaymentOption";
import BankTransfer from "../components/account/BankTransfer";

const DepositPage = () => {
  const t = useTranslations("accounts.deposit.banner");

  return (
    <>
     <div className="inner-content md:py-12 3xl:py-16 py-8">
      <div className="container">
        <div className="top-content flex flex-col-reverse md:flex-row justify-end items-center gap-6">
           <div className="basis-full md:basis-8/12 left-portion ltr:md:text-left rtl:md:text-right"> {/* Added text-center and md:text-left classes */}
              <h2 className="bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text HeadingH2 md:text-5xl pb-3 ltr:md:text-left rtl:md:text-right mb-0">{t("heading")}</h2>
              <p className="text ltr:text-left rtl:text-right">{/* Removed text alignment classes */}{t("subHeading")}</p>
           </div>
           <div className="md:basis-4/12 relative w-full h-56 md:h-96">
             <Image src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/Account-02.webp" alt="Fund Account" fill className="object-contain" />
           </div>
        </div>
      </div>
     </div>
      <DepositRules />
      <PaymentOption />
      <BankTransfer />
    </>
  );
};

export default DepositPage;
