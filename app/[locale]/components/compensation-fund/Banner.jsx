import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../common/Button'

const Banner = () => {
    const t = useTranslations("compensation");
  return (
    <div className='bg-gradient p-5 md:p-0'>
      <div className='max-width'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-2 lg:p-0'>
            <div className='content-side text-center md:text-left'>
                <h2 className='text-3xl md:text-4xl text-secondary font-bold mb-3'>{t("banner-heading")}</h2>
                <p className='text-white text-lg'>{t("banner-des")}</p>
                <Button />
            </div>
            <div className='relative h-96 w-full'>
              <Image src="/compensation.webp" alt="Regulations" fill className='object-contain' />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Banner