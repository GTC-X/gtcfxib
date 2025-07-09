"use client";
import { useTranslations } from 'next-intl';

const YellowBannerFull = () => {
  const t = useTranslations("platform.ctrader");
  return (
    <section className='bg-primary shadow-xl shadow-slate-200 py-5'>
        <div className='container max-w-5xl'>
        <p className='HeadingH2 text-white'>
        {t("yellowBannerFull")}
        
        </p>
        </div>
    </section>
  )
}

export default YellowBannerFull