'use client'
import React from 'react'
import DemoBanner from '../components/demoCompetition/DemoBanner'
import Image from 'next/image'
import IBFrom from '../components/common/IBFrom'
import LocationContextProvider from '@/context/location-context'
import HowToBecomeIB from '../components/partner/ibBroker/HowToBecomeIB'
import AssestDemo from '../components/demoCompetition/AssestDemo'
import DemoLeaderBoard from '../components/demoCompetition/DemoLeaderBoard'
import { useTranslations } from 'next-intl'
const DemoCompetition = () => {

  const t = useTranslations("partner.demoCompetition")

  const joinSteps = [
    {
        "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/1.webp",
        "text": t("demoCom.option1.title"),
        "des" : t("demoCom.option1.des"),
    },
    {
        "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/3.webp",
        "text": t("demoCom.option2.title"),
        "des" : t("demoCom.option2.des"),
    },
    {
        "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/4.webp",
        "text": t("demoCom.option3.title"),
        "des" : t("demoCom.option3.des"),
    }
  ];

  const assetData = [
    {
        name: t("parCom.option1.title"),
        description: t("parCom.option1.des"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/demo/Demo+Competition-05.webp",
        alt: "Forex"
    },
    {
      name: t("parCom.option2.title"),
      description: t("parCom.option2.des"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/demo/Demo+Competition-06.webp",
        alt: "Crypto CFDs"
    },
    {
      name: t("parCom.option3.title"),
      description: t("parCom.option3.des"),
      imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/demo/Demo+Competition-07.webp",
      alt: "Indices"
  },
    {
      name: t("parCom.option4.title"),
      description: t("parCom.option4.des"),
        imageUrl: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/demo/Demo+Competition-08.webp",
        alt: "CFDs"
    }
];

  return (
    <>
    <LocationContextProvider >
    <DemoBanner />
    <div className='banner-image md:py-10 mb-[-150px] z-50 relative'>
      <div className='container'>
        <div className=' relative w-full h-60 md:h-[500px]'>
            <Image src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/demo/demo-com.webp" fill alt='Demo Comppetition' className='object-contain' />
        </div>
        <div className="content-form mt-8 lg:mt-12 3xl:mt-16">
            <div className="bg-primary py-5">
                    <h2 className="HeadingH2 text-white"> <span className='text-secondary'>{t("formHeading")} </span> {t("showHeading")}</h2>
            </div>
        </div>
        <IBFrom />
        </div>
    </div>
    <HowToBecomeIB
      title="How to Participate in the GTC Group Demo Competition"
      subtitle=""
      steps={joinSteps}
      gridCols="lg:grid-cols-3" // for 3 columns on large screens
      bgColor="bg-gray-100 xl:pb-16 3xl:pb-24 py-8 pt-[170px]" // for white background
    />
    <section className='bg-primary py-5'>
        <div className='container'>
            <div className='content-note'>
                <h4 className='HeadingH2 text-white text-center md:ltr:text-left md:rtl:text-right'><span className='text-secondary'>{t("noteheading")}</span> {t("noteDetail")} </h4>
            </div>
        </div>
    </section>
    <AssestDemo assetData={assetData} title={t("parCom.title")}  columns={4} />
    <DemoLeaderBoard />
    </LocationContextProvider>
    </>
  )
}

export default DemoCompetition