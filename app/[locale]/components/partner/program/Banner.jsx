import React from 'react'
import Image from 'next/image'
import SimpleForm from '../../common/SimpleForm'
import { useTranslations } from 'next-intl'
import LocationContextProvider from '@/context/location-context'


const Banner = () => {
  const t = useTranslations("partner.premiumPartner.bannerText");
  return (

    <LocationContextProvider>
    <section className='container pt-12'> 
        <h2 className='HeadingH2 md:text-left text-center pt-8'>{t("heading")}</h2>
        <h2 className='HeadingH2 md:text-left text-center pb-8'>{t("heading2")}</h2>
        <div className='flex flex-col lg:flex-row border-t border-t-secondary border-l border-l-secondary border-r border-r-secondary shadow-xl'>
            <div className='lg:w-[60%] px-4 pt-6 flex flex-col items-center pb-10'>
                <h1 className='HeadingH2 pb-2'>{t("subHeading")}</h1>
                <p className='text max-w-lg'>{t("description")}</p>
                <div className='relative w-full h-[350px]'>
                    <Image src='/partner/program/premium-partner-program.webp' fill className=" object-contain" alt='ib_bg'/>
                </div>
            </div>
            <div className='border-r border-l-gray-300 lg:h-[400px] mt-12'/>
            <div className='lg:w-[40%] w-[100%] flex justify-center items-center'>
              
                <SimpleForm
                 title={t("formHeading")}
                 subtitle={t("formdesc")}
                />
            </div>
        </div>
    </section>
      </LocationContextProvider>

  )
}

export default Banner;