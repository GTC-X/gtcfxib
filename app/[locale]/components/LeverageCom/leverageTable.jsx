'use client'
import React from 'react'
import TabsContentdData from './TabsContentdData'
import { useTranslations } from 'next-intl'

const leverageTable = () => {
  const t = useTranslations("lervage")
  return (
    <section className='hero-banner py-10 md:py-14 lg:py-20 2xl:py-24 bg-gradient-to-t from-[#24358b] via-[#202766] to-[#141b43] border-y border-gray-200'>
         <div className="container">
                <div className="relative text-center">
                        <h2
                    style={{ lineHeight: "4rem" }}
                    className="bg-gradient-to-b from-white to-secondary inline-block text-transparent bg-clip-text text-xl font-normal xl:text-[30px] 2xl:text-[35px] capitalize"
                    >
                    {t('dynamicLeverageDetailsTitle')}
                    </h2>
                <p className="text-white md:text-base 2xl:text-[17px] text-sm text-center max-w-5xl mx-auto">
                {t('dynamicLeverageDetailsDescription')}
                </p>
                <div className='tabs-content'>
                    <TabsContentdData />
                </div>
                </div>
        </div>
    </section>
  )
}

export default leverageTable 