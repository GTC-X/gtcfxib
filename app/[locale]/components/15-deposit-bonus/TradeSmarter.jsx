"use client";
import { useTranslations } from "next-intl";
import { TbNavigationDollar } from "react-icons/tb";
import { MdCreditScore } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { FcMultipleSmartphones } from "react-icons/fc";
import { FaArrowsUpToLine } from "react-icons/fa6";


const TradeSmarter = () => {

  const t = useTranslations("compaign.15-deposit-bonus.trade-smarter")
  return (
    <section className='container pb-16'>
       <h2 className="text-primary md:mb-12 mb-8   text-center md:text-[2.2rem] text-[1.3rem] font-[700]" >
        {t("title")}
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-14">
        <div 
        className="flex flex-col justify-center items-center bg-gray-100 p-4 rounded-xl w-64 h-36 gap-4 shadow-lg 
        border border-primary group hover:scale-125 transition-all duration-300">
          <TbNavigationDollar size={60} color="#02002f"/>
          <p className="text-center font-[600]">{t("para1")}</p>
        </div>
        <div 
        className="flex flex-col justify-center items-center bg-gray-100 p-4 rounded-xl w-64 h-36 gap-4 
        shadow-lg border border-primary group hover:scale-125 transition-all duration-300">
          <MdCreditScore size={60} color="#02002f"/>
          <p className="text-center font-[600]">{t("para2")}</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-100 p-4 rounded-xl w-64 h-36 gap-4 shadow-lg border border-primary group hover:scale-125 transition-all duration-300">
          <FaCheckDouble size={60} color="#02002f"/>
          <p className="text-center font-[600]">{t("para3")}</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-100 p-4 rounded-xl w-64 h-36 gap-4 shadow-lg border border-primary group hover:scale-125 transition-all duration-300">
          <FcMultipleSmartphones size={70} color="#02002f"/>
          <p className="text-center font-[600]">{t("para4")}</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-100 p-4 rounded-xl w-56 h-36 gap-4 shadow-lg border border-primary group hover:scale-125 transition-all duration-300">
          <FaArrowsUpToLine size={70} color="#02002f"/>
          <p className="text-center font-[600]">{t("para5")}</p>
        </div>
      </div>
    </section>
  )
}

export default TradeSmarter