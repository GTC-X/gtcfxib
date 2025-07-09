"use client";
import { useTranslations } from "next-intl";
const BetterTradingDecisions = () => {
    const t = useTranslations("tradingTools.technicalTool.autoCharlist");
  return (
    <section className='container py-12'>
    <h2 className='HeadingH2'>
    {t("BetterTradingDecisions.heading")}
    </h2>
    <div className='md:flex gap-5'>
        <div className='flex flex-col justify-center items-center mb-5 md:mb-1'>
            <figure className='w-[40%] md:w-[30%]'>
                <img src='/autocharlist-icon1.webp' alt='' />
            </figure>
            <p className='text-center w-[90%]  md:w-[80%] h-16'>
            {t("BetterTradingDecisions.title1")}
            </p>
        </div>
        <div className='flex flex-col justify-center items-center  mb-5 md:mb-1'>
            <figure className='w-[40%] md:w-[30%]'>
                <img src='/autocharlist-icon2.webp' alt='' />
            </figure>
            <p className='text-center md:w-[90%] w-[80%] h-16'>
            {t("BetterTradingDecisions.title2")}
            </p>
        </div>
        <div className='flex flex-col justify-center items-center  mb-5 md:mb-1'>
            <figure className='w-[40%] md:w-[30%]'>
                <img src='/autocharlist-icon3.png' alt='' />
            </figure>
            <p className='text-center md:w-[90%] w-[80%] h-16'>
            {t("BetterTradingDecisions.title3")}
            </p>
        </div>
    </div>
</section>
  )
}
export default BetterTradingDecisions