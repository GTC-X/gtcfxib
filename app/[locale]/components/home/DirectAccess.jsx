'use client'
import { GiChart } from "react-icons/gi";
import { SlSpeedometer } from "react-icons/sl";
import { LiaCoinsSolid } from "react-icons/lia";
import { TbArrowBigUpLineFilled } from "react-icons/tb";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaPeopleRobbery } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const DirectAccess = () => {

  const t = useTranslations("home.liquidity_provider");

  const tradingBenefits = [
    {
      "text": t("point1"),
      "icon": <GiChart />
    },
    {
      "text": t("point2"),
      "icon": <SlSpeedometer />
    },
    {
      "text": t("point3"),
      "icon": <LiaCoinsSolid />
    },
    {
      "text": t("point4"),
      "icon": <TbArrowBigUpLineFilled />
    },
    {
      "text": t("point5"),
      "icon": <BsSpeedometer2 />
    },
    {
      "text": t("point6"),
      "icon": <FaPeopleRobbery />
    }
  ];


  return (
    <section className="md:py-16 3xl:py-28 py-8 border-b border-t border-b-gray-300 bg-gradient-to-bl from-slate-100 via-gray-50 to-zinc-50 text-center ">
      <div className="container ">
    <h2 className="HeadingH2 mb-8 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-center">
      {t("heading")}
    </h2>
    <p className="text-accent md:text-base text-sm 2xl:text-[17px] text-center max-w-4xl mx-auto">{t("desc")}
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-2 md:gap-8 pt-12" >
      {
        tradingBenefits.map((benefit, index) => (
          <div key={index} className="flex bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90% items-center justify-center gap-2 px-3 md:px-12 py-2 md:py-4 group hover:bg-gradient-to-l  rounded-3xl hover:rounded-3xl hover:cursor-pointer transition-all duration-300 hover:shadow-xl">
            <span className="group-hover:text-[#FFF] text-secondary text-3xl">{benefit.icon}</span>
            <span className="text-white group-hover:text-[#FFF] text-xs 2xl:text-[16px]">{benefit.text}</span>
          </div>
        ))
      }
    </div>
    </div>
  </section>
  )
}

export default DirectAccess