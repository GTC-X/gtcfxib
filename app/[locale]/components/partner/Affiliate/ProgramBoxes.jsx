import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'

const ProgramBoxes = () => {
    const t = useTranslations("partner");
    const benefitList = [
        {
            img: '/partner/affiliate-program/affliate-program-icon1.png',
            text: t("affiliateProgram.content.boxes.one")
        },
        {
            img: '/partner/affiliate-program/affliate-program-icon2.png',
            text: t("affiliateProgram.content.boxes.two")
        },
        {
            img: '/partner/affiliate-program/affliate-program-icon3.png',
            text: t("affiliateProgram.content.boxes.three")
        },
        {
            img: '/partner/affiliate-program/affliate-program-icon4.png',
            text: t("affiliateProgram.content.boxes.four")
        }
    ]
  return (
    <div className='py-12'>
    <div className='grid grid-cols-2 gap-5 md:grid-cols-4 container'>
        {benefitList.map((item, index) => {
            return (
                <div key={index} className='flex flex-col items-center'>
                    <img className='w-32 h-32 md:w-32 md:h-32' src={item.img} alt={item.text} />
                    <p className='text-lg font-[500] text-center justify-center w-56'>{item.text}</p>
                </div>
            )
        })}

    </div>
</div>
  )
}

export default ProgramBoxes