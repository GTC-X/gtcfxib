'use client'
import React from 'react'
import Hero from '../components/common/Hero'
import { useTranslations } from 'next-intl'
import PdfDocument from '../components/PDFDocument'

const GTCFinancialPage = () => {
    const t = useTranslations("footerPage")
  return (
    <>
     <Hero
        imageUrl="/banner/due.webp"
        title={t("financial.bannerText.heading")}
        description={t("financial.bannerText.description")}
      />
      <div className='inner-content'>
            <div className='container'>
            <PdfDocument url='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/GTC-Financial-Consultancy-LLC-AML.pdf' dir='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/GTC-Financial-Consultancy-LLC-AML.pdf'/>
            </div>
      </div>
    </>
  )
}

export default GTCFinancialPage