'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const SocialTradingPlatform = () => {
    const t = useTranslations("platform");
  return (
    <div className='trading-platform py-10'> 
        <div className='container'>
        <h2 className="mainHeading">
        <span className="font-normal">{t("socialTranding.socialTradingPlatform.normalText")} </span>
        {t("socialTranding.socialTradingPlatform.boldText")} 
        </h2>
        <p className="text-primary text-center pb-5 max-w-5xl mx-auto leading-7">
        {t("socialTranding.socialTradingPlatform.description")} 
        </p>
        <div className='max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
            <Image src="/platform/social/mt4.webp" alt="MT4" width={219} height={67} />
            <Image src="/platform/social/mt5.webp" alt="MT4" width={219} height={67} />
            <Image src="/platform/social/cTrader.webp" alt="MT4" width={219} height={67} />
        </div>
        </div>
    </div>
  )
}

export default SocialTradingPlatform