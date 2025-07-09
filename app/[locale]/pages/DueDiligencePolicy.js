'use client'
import React from 'react'
import Hero from '../components/common/Hero'
import { useTranslations } from 'next-intl'
import PdfDocument from '../components/PDFDocument'

const DueDiligencePolicyPage = () => {
    const t = useTranslations("footerPage")
  return (
    <>
     <Hero
        imageUrl="/banner/due.webp"
        title={t("DuePolicy.bannerText.heading")}
        description={t("DuePolicy.bannerText.description")}
      />
      <div className='inner-content'>
            <div className='container'>
            <PdfDocument url='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/policy.pdf&download=true&print=&openfile=false' dir='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/policy.pdf'/>
            </div>
      </div>
    </>
  )
}

export default DueDiligencePolicyPage