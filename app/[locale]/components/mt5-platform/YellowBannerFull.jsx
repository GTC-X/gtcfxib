"use client";
import { useTranslations } from 'next-intl';

const YellowBannerFull = () => {
  const t = useTranslations("platform.mt5PlatformPage");
  return (
    <section className='bg-secondary shadow-xl shadow-slate-200'>
        <div className='container max-w-5xl'>
        <p className='tex-primary text-lg font-semibold text-center py-6 '>
        {t("yellowBannerFull")}
        
        </p>
        </div>
    </section>
  )
}

export default YellowBannerFull