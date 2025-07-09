'use client'
import React from "react";
import Hero from "../components/common/Hero";
import { useTranslations } from "next-intl";
import PdfDocument from "../components/PDFDocument";

const ClientAgreementPage = () => {
    const t = useTranslations("footerPage")
  return (
    <>
      <Hero
        imageUrl="/banner/client-agreement.webp"
        title={t("clientAgreement.bannerText.heading")}
        description={t("clientAgreement.bannerText.description")}
      />
      <div className="inner-content">
        <div className="container">
            <PdfDocument 
            url='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf' 
            dir='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf'/>
        </div>
      </div>
    </>
  );
};

export default ClientAgreementPage;