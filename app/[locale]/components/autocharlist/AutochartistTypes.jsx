"use client";
import { FaCirclePlay } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import Link from "next/link";
const AutochartistTypes = () => {
    const t = useTranslations("prime-tech.technicalTool.autoCharlist.AutochartistTypes");
  return (
    <section className=" pt-12">
    <div className='container'>
                <h2 className='HeadingH2'>
                {t("title")}
                </h2>
                <p className='py-6 text'>
                {t("type1")}
                </p>
                <div className='grid md:grid-cols-2 grid-cols-1'>
                <div 
        className='overflow-y-scroll h-[425px] md:order-1 order-2'
        data-aos="fade-right"
        data-aos-duration="1500"
      >
                        <div className='py-4'>
                            <div className='flex items-center gap-2'><img src='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/prime/horizontal-Levels.webp' className='w-[15%]' /><h2 className='text-xl text-primary hover:text-secondary'>{t("heading1")}</h2></div>
                            <p className='py-3 text text-left'>
                            {t("des1")} 
                            </p>
                            <Link href="https://vimeo.com/310889000/e45284c594" target="_blank" className='bg-secondary px-3 py-2  text-white hover:text-secondary  w-48 hover:bg-primary flex justify-center items-center gap-2'><FaCirclePlay className='inline' />{t("more")}</Link>
                        </div>

                        <div className='py-4'>
                            <div className='flex items-center gap-2'><img src='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/prime/horizontal-Levels.webp' className='w-[15%]' /><h2 className='text-xl text-primary hover:text-secondary'>{t("heading2")}</h2></div>
                            <p className='py-3 text text-left'>
                            {t("type2")}  
                            </p>
                            <Link href="https://vimeo.com/310889038/b4c4b67010" target="_blank" className='bg-secondary px-3 py-2  text-white hover:text-secondary  w-48 hover:bg-primary flex justify-center items-center gap-2'><FaCirclePlay className='inline' />{t("more")}</Link>
                        </div>
                        <div className='py-4'>
                            <div className='flex items-center gap-2'><img src='/volatility-analysis.webp' className='w-[15%]' /><h2 className='text-xl hover:text-secondary'>{t("heading3")}</h2></div>
                            <p className='py-3 text text-left'>
                            {t("type3")}
                            </p>
                            <Link  href="https://vimeo.com/310889027/7500f24f03" target="_blank" className='bg-secondary px-3 py-2 text-white hover:text-secondary  w-48 hover:bg-primary flex justify-center items-center gap-2'><FaCirclePlay className='inline' />{t("more")}</Link>
                        </div>
                        <div className='py-4'>
                            <div className='flex items-center gap-2'><img src='/fibonacci.png' className='w-[15%]' /> <h2 className='text-xl hover:text-secondary'>{t("heading4")}</h2></div>
                            <p className='py-3 text text-left'>
                            {t("type4")}
                            </p>
                            <Link  href="https://vimeo.com/310889008/692960ec25" target="_blank" className='bg-secondary px-3 py-2 text-white hover:text-secondary w-48 hover:bg-primary flex justify-center items-center gap-2 text-right'><FaCirclePlay className='inline' />{t("more")}</Link>
                        </div>
                    </div>
                    <div 
        className='flex justify-center items-center md:order-2 order-1'

      >
                        <img src='/tablet-charts.png' alt='charts' className='w-[50%] md:w-[87%]' />
                    </div>
                </div>
            </div>
            </section>
  )
}
export default AutochartistTypes