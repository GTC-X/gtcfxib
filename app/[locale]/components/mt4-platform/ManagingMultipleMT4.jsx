import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ManagingMultipleMT4 = () => {
    const t = useTranslations("platform.mt4PlatformPage.manage");
  return (
    <div className='bg-gradient-to-r from-[#335580] from-30% via-[#152c49] via-50% to-[#0c1c3d] to-90% md:mb-[-50px] pt-10 md:pt-0 pb-10'>
        <div className='container'>
                <div className='flex flex-col md:flex-row justify-between items-center md:gap-10'>
                    <div className='relative h-52 md:h-[450px] w-full'>
                        <Image src="/mt4-platform/manage-mt4.webp" fill alt='Manage Multiple MT4' className=' object-contain' />
                    </div>
                    <div className='content-manage text-center md:text-left'>
                        <h3 className='text-secondary text-xl md:text-3xl leading-10 py-5 font-bold'>{t("heading")}</h3>
                        <p className='text-white text-base leading-7'>{t("description")}</p>
                        <div className='flex flex-row justify-center md:justify-start gap-4 items-center py-5'>
                            <Link href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/app-files/gtcglobaltrade4multisetup.exe" className='yellowButton hover:bg-white hover:text-primary'  target='_blank'> {t("button")}  </Link>
                            <Link href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/MM-MT4.pdf" target='_blank' className='yellowButton hover:bg-white hover:text-primary'> {t("button2")}  </Link>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ManagingMultipleMT4