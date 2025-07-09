import React from 'react'
import SimpleForm from '../common/SimpleForm'
import LocationContextProvider from '@/context/location-context'
import { useTranslations } from 'next-intl'
import ClientRegistrationForm from '../common/ClientRegistrationForm'

const TradeWinWork = () => {
  const t = useTranslations("compaign.tradeWin.CallToAction")
  return (
    <LocationContextProvider>
    <section id='register' className='py-12 md:py-16 xl:py-20 3xl:py-24'>
       <div className='container'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='content-side'>
                <h2 className='HeadingH2 ltr:text-left rtl:text-right text-secondary'>{t("para1")}</h2>
                <h4 className='text-primary text-2xl font-medium ltr:text-left rtl:text-right py-4'>{t("para2")}</h4>
                <p className='text ltr:text-left rtl:text-right md:w-[450px] mb-10'>{t("para3")}</p>
            </div>
            <ClientRegistrationForm />
        </div>
       </div>
    </section>
    </LocationContextProvider>
  )
}

export default TradeWinWork