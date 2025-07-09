"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
const TradingTool = () => {
  const t = useTranslations("prime-tech.technicalTool");
  return (
    <section className='container py-6 bg-[#f2f2f2] rounded-[20px] mb-5 w-[90%] md:w-[100%] '>
    <p className='text pb-5 pt-5'>
    {t("autoCharlist.TradingTool.para1")}
    </p>
    <p className='text'>
    {t("autoCharlist.TradingTool.para2")}
    </p>
    <div className='md:flex justify-center gap-6'>
        <Link href='https://download.mql5.com/cdn/web/gtc.global.trade/mt4/gtcglobaltrade4setup.exe'  className=' text-white w-[250px] text-center py-2 px-3 mx-auto md:mx-0 block  bg-secondary mt-5 hover:bg-primary shadow'>
        {t("autoCharlist.TradingTool.btnTxt1")}
        </Link>
        <Link href="https://www.autochartist.com/metatrader_en/?lang=en#installation_guide" target="_blank" className=' text-white py-2 px-3 mx-auto text-center w-[250px] md:mx-0 block  bg-secondary  mt-5  hover:bg-primary shadow'>
        {t("autoCharlist.TradingTool.btnTxt2")}
        </Link>
    </div>
</section>
  )
}
export default TradingTool;