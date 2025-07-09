import React from 'react'
import FeaturesList from '../components/PrimeServe/FeaturesList'
import LiquidityOffer from '../components/PrimeServe/LiquidityOffer'
import WhoServe from '../components/PrimeServe/WhoServe'
import DirectAccess from '../components/home/DirectAccess'
import AwardCarousel from '../components/partner/ibBroker/AwardCarousel'
import { useTranslations } from 'next-intl'

const RemainLp = () => {

  const t=useTranslations("lp.offers")

    const features = [
        {
          icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-03.png",
          title:t("one.title"),
          description: t("one.subTitle"),
        },
        {
          icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-04.png", 
          title:t("two.title"),
          description: t("two.subTitle"),
        },
        {
          icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-05.png",
          title:t("three.title"),
          description: t("three.subTitle"),
        },
        {
            icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-06.png",
            title:t("four.title"),
            description: t("four.subTitle"),
          },
          {
            icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-07.png",
            title:t("five.title"),
          description: t("five.subTitle"),
          },
          {
            icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-08.png",
            title:t("six.title"),
          description: t("six.subTitle"),
          },
          {
            icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-09.png",
            title:t("seven.title"),
          description: t("seven.subTitle"),
          },
          {
            icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-10.png",
            title:t("eight.title"),
          description: t("eight.subTitle"),
          },
          {
            icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-11.png",
            title:t("nine.title"),
          description: t("nine.subTitle"),
          },
          {
            icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-12.png",
            title:t("ten.title"),
          description: t("ten.subTitle"),
          },
      ];


  return (
    <>
         <LiquidityOffer />
         <FeaturesList features={features} />
         <WhoServe />
         <DirectAccess />
         <AwardCarousel />
    </>
  )
}

export default RemainLp