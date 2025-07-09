import React from 'react'
import { useTranslations } from 'next-intl'
const YellowBannerFull = () => {
  const t = useTranslations("platform.mt4PlatformPage");
  return (
    <section className='bg-secondary shadow-xl shadow-slate-200'>
        <div className=' max-w-5xl mx-auto'>
        <p className='tex-primary text-lg font-semibold text-center py-6 '>
        {t("yellowBannerFull")}
        </p>
        </div>
    </section>
  )
}

export default YellowBannerFull