import React from 'react'
import { useTranslations } from 'next-intl'

const YellowBannerShort = () => {
  const t = useTranslations("platform.mt4PlatformPage");
  return (
    <section className='container bg-secondary shadow-xl shadow-slate-200 md:rounded-[25px] left-0 right-0 bottom-[-1%] mb-[-30px] z-10 relative'>
        <div>
        <p className='tex-primary text-lg font-semibold text-center py-6 '>
       {t("yellowBannerShort")}
        </p>
        </div>
    </section>
  )
}

export default YellowBannerShort