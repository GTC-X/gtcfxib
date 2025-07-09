'use client'
import React from 'react'
import Hero from '../components/common/Hero'
import { useTranslations } from 'next-intl'
import PdfDocument from '../components/PDFDocument'

const MarginRequirmentsPage = () => {
    const t = useTranslations("footerPage")
  return (
    <>
     <Hero
        imageUrl="/banner/due.webp"
        title={t("margin.bannerText.heading")}
        description={t("margin.bannerText.description")}
      />
      <div className='inner-content'>
            <div className='container'>
            <PdfDocument url='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/videos/Margin-Requirments.pdf' dir='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/videos/Margin-Requirments.pdf'/>
            </div>
      </div>
    </>
  )
}

export default MarginRequirmentsPage