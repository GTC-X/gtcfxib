'use client'
import React from 'react'
import Hero from '../components/trendingTools/signalCentreTool/Hero'
import WhoServe from '../components/PrimeServe/WhoServe'
import WhatWeOffer from '../components/PrimeServe/WhatWeOffer'
import AssesAsset from '../components/home/AssesAsset'
import DirectAccess from '../components/home/DirectAccess'
import StatCounter from '../components/home/StatCounter'
import { useTranslations } from 'next-intl'
import WhyChooseIcon from '../components/about/WhyChooseIcon'



const LiquidityPage = () => {

  const t = useTranslations("prime-tech.liquidity")

  const assetData = [
    {
        name: t("Chooseliquidity.option1.title"),
        description: t("Chooseliquidity.option1.desc"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon1.webp",
        alt: "Forex"
    },
    {
      name: t("Chooseliquidity.option2.title"),
        description: t("Chooseliquidity.option2.desc"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon8.webp",
        alt: "Crypto CFDs"
    },
    {
      name: t("Chooseliquidity.option3.title"),
        description: t("Chooseliquidity.option3.desc"),
      imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon6.webp",
      alt: "Indices"
  },
    {
      name: t("Chooseliquidity.option4.title"),
      description: t("Chooseliquidity.option4.desc"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon3.webp",
        alt: "CFDs"
    },
    {
      name: t("Chooseliquidity.option5.title"),
      description: t("Chooseliquidity.option5.desc"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon4.webp",
        alt: "Commodities"
    },{
      name: t("Chooseliquidity.option6.title"),
      description: t("Chooseliquidity.option6.desc"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/icon/icon5.webp",
        alt: "Indices"
    }
];

const statsOne = [
    { value: 895000, description: t("counter.option1") },
    { value: 85000, description: t("counter.option2"), symbol: "", prepend: false,},
    { value: 300, description: t("counter.option3"), bold: t("counter.million"), symbol: " $", prepend: true,},
    { value: 28, description: t("counter.option4"), bold: t("counter.billion"), symbol: " $", prepend: "true", },

  ];

  return (
    <>
    <Hero
        title={t("banner.title")}
        paragraph={t("banner.subTitle")}
        buttonText={t("banner.liveAccount")}
        buttonLink="https://my.gtcfx.com/getview?view=register"
        imageSrc="/trading-tools/signal-centre.webp"
      />
      <AssesAsset assetData={assetData} title={t("Chooseliquidity.title")}  columns={3} />
      <WhoServe />
      <DirectAccess />
      <WhatWeOffer />
      


      <div className='container py-14'>
      <WhyChooseIcon />
      </div>
    
      
    </>
  )
}

export default LiquidityPage