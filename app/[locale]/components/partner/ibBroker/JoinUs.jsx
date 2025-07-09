'use client'
import { useTranslations } from "next-intl"
import Image from "next/image"
import { GrMoney } from "react-icons/gr";
import { TbHeartHandshake } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import { BiNetworkChart } from "react-icons/bi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineMoney } from "react-icons/md";
import { GiSmokingFinger } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";




const JoinUs = () => {
    const t = useTranslations("partner.IBProgram.benefits")
    const benefits = [
        {
            "iconSrc": <GrMoney />,
            "text":t("option.one")
        },
        {
            "iconSrc": <TbHeartHandshake />,
            "text":t("option.two")
        },
        {
            "iconSrc": <GiProgression />,
            "text":t("option.three")
        },
        {
            "iconSrc": <BiNetworkChart />,
            "text":t("option.four")
        },
        {
            "iconSrc": <MdOutlineManageAccounts />,
            "text":t("option.five")
        },
        {
            "iconSrc": <FaLaptopCode />,
            "text":t("option.six")
        },
        {
            "iconSrc": <MdOutlineMoney />,
            "text":t("option.seven")
        },
        {
            "iconSrc": <GiSmokingFinger />,
            "text":t("option.eight")
        },
        {
            "iconSrc": <GrTechnology/>,
            "text":t("option.nine")
        }
    ]

  return (
    <section className='ib-broker pb-10'>
    <div className="container">
    <div className="text-center">
      <h2 className='HeadingH2 2xl:text-4xl w-72 md:w-full font-[500] bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-center'>{t("heading")}</h2>
      <p className='text text-primary py-2'>{t("subHeading")}</p>
      </div>
            {/* 
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-2">
            {benefits.map((benefit,index)=>(
                <div key={index} className="flex flex-row gap-6 mx-3 my-3 items-center border border-white p-5 bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90% border-opacity-15 hover:bg-secondary hover:bg-opacity-10 cursor-pointer">
                    <p className="text-secondary text-2xl md:text-5xl">{benefit.iconSrc} </p>
                    <p className="text text-white ltr:text-left rtl:text-right">{benefit.text}</p>
                </div>
            ))}
        </div>
 */}
        </div>
    </section>
  )
}

export default JoinUs