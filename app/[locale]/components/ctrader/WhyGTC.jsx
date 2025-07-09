"use client";
import { useTranslations } from 'next-intl';
import { TiTick } from "react-icons/ti";



const WhyGTC = ({imgSrc}) => {
    const t = useTranslations("platform");
    const whyGtcList = [
        {
            fact: t("ctrader.WhyGTC.reason1.fact"),
            icon:<TiTick size={30} color=' #FFD300'/>
        },
        {
            fact:t("ctrader.WhyGTC.reason2.fact"),
            icon:<TiTick size={30} color=' #FFD300'/>
        },
        {
            fact:t("ctrader.WhyGTC.reason3.fact"),
            icon:<TiTick size={30} color=' #FFD300'/>
        },
        {
            fact:t("ctrader.WhyGTC.reason4.fact"),
            icon:<TiTick size={30} color=' #FFD300'/>
        },
        {
            fact:t("ctrader.WhyGTC.reason5.fact"),
            icon:<TiTick size={30} color=' #FFD300'/>
        },
        {
            fact:t("ctrader.WhyGTC.reason6.fact"),
            icon:<TiTick size={30} color=' #FFD300'/>
        }    
    ]
  return (
    <section className='py-10 bg-gray-200'>
    <div className='container flex flex-col md:flex-row justify-evenly items-center gap-2 md:px-16'>
        
        <div className='flex-1'>
            <h2 className='HeadingH2 md:ltr:text-left md:rtl:text-right my-10'>
            {t("ctrader.WhyGTC.title")}
            </h2>
            <ul>
                {
                    whyGtcList.map((el,index)=>{
                        return(
                            <li 

                            key={index}
                            className='flex items-center h-12 gap-5'
                            ><span className='text-secondary'>{el.icon}</span><p>{el.fact}</p></li>
                        )
                    })
                }
               
            </ul>
        </div>
        <div className='flex-1'>
            <img
                src={imgSrc}
                alt='section image'
                className='w-[60%] mx-auto md:m-0 md:w-[100%]'
            />
        </div>
    </div>
</section>
  )
}

export default WhyGTC;