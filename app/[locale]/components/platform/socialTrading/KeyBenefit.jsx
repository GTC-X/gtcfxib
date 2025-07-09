import React from 'react'
import { FaUserClock, FaUserGraduate, FaHandHoldingDollar  } from "react-icons/fa6";
import { useTranslations } from 'next-intl';


const KeyBenefit = () => {
    const t = useTranslations("prime-tech.socialTranding.benefits");
    const cardsData = [
        {
            icon: <FaUserGraduate />,
            title: t("one.label"),
            paragraph:t("one.description"),
            link: "",
        },
        {
            icon: <FaHandHoldingDollar />,
            title: t("two.label"),
            paragraph:t("two.description"),
            link: "",
        },
        {
            icon: <FaUserClock  />,
            title: t("three.label"),
            paragraph:t("three.description"),
            link: "",
        },
    ]
  return (
    <div className='bg-gray-100  md:py-12 3xl:py-16 py-8'>
        <div className='container'>
            <div className='inner-content text-center'>
                    <h2 className='HeadingH2 mb-8 font-semibold'>{t("heading")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cardsData?.map((item) => (
                        <div className='bg-white shadow-2xl p-10'>
                            <div className=' flex flex-row items-center justify-start gap-5 mb-5'>
                            <p className="text-white text-2xl bg-secondary p-3 rounded-full">{item?.icon}</p>
                                <h4 className='font-semibold text-lg'>{item?.title}</h4>
                            </div>
                            <div className='content text text-left'>
                                <p>{item?.paragraph}</p>
                            </div>
                
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default KeyBenefit