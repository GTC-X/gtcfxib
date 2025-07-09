import React from 'react'
import LiquidityBanner from '../components/PrimeServe/LiquidityBanner'
import FeaturesList from '../components/PrimeServe/FeaturesList'
import LiquidityOffer from '../components/PrimeServe/LiquidityOffer'
import WhoServe from '../components/PrimeServe/WhoServe'
import DirectAccess from '../components/home/DirectAccess'
import AwardCarousel from '../components/partner/ibBroker/AwardCarousel'

const LiquidityProviderPage = () => {

    const features = [
        {
          icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-03.png",
          title: "Secure, Transparent ",
          description: "& Reliable",
        },
        {
          icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-04.png",
          title: "Advanced Technology",
          description: "Cutting-edge infrastructure and APIs",
        },
        {
          icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-05.png",
          title: "Deep Liquidity Access",
          description: "Ultra-low latency pricing",
        },
        {
            icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-06.png",
            title: "Fast Execution",
            description: "Ultra-low latency pricing",
          },
          {
            icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-07.png",
            title: "Up to 10 levels",
            description: "of market depth",
          },
          {
            icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-08.png",
            title: "Offering Liquidity ",
            description: "Solution",
          },
          {
            icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-09.png",
            title: "24/7 support",
            description: "expert assistance",
          },
          {
            icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-10.png",
            title: "Professional Risk",
            description: "Management",
          },
          {
            icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-11.png",
            title: "Custom pricing",
            description: "Flexible models",
          },
          {
            icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/icon/Icons-12.png",
            title: "Quick Access ",
            description: "to multiple platforms",
          },
      ];


  return (
    <>
      <LiquidityBanner
      />
      
    </>
  )
}

export default LiquidityProviderPage