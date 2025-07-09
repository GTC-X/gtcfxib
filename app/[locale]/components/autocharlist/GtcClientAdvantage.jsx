"use client";
import { useTranslations } from "next-intl";
import TradingTool from "./TradingTool";
const GtcClientAdvantage = () => {
    const t = useTranslations("prime-tech");
  return (
    <section className="py-12">
    <div className="container md:flex gap-7">
    <div style={{ flex: 1 }} className="md:border-l-4 rounded-md border-gray-300 md:pl-10">
        <h1 className='HeadingH2 ltr:text-left rtl:text-right'>
        {t("technicalTool.autoCharlist.GtcClientAdvantage.title1")} <span className='text-[#01C38D]'>Autochartist™ </span>{t("technicalTool.autoCharlist.GtcClientAdvantage.title2")}
        </h1>
        <p className='text ltr:text-left rtl:text-right pb-5'>
        {t("technicalTool.autoCharlist.GtcClientAdvantage.subTitle")}
        </p>
    
      <TradingTool />
    </div>
</div>
</section>
  )
}
export default GtcClientAdvantage