"use client";
import { useTranslations } from "next-intl";
import { TbDatabaseMinus } from "react-icons/tb";
import { BsDatabaseAdd } from "react-icons/bs";
import { useEffect } from "react";
import Aos from "aos";

const HowItWorks = () => {
    useEffect(() => {
        Aos.init({ disable: "mobile" });
      }, []);
    const t = useTranslations("compaign.15-deposit-bonus.how-it-works")
  return (
    <>
    <h2 className="text-primary md:mb-5 md:pt-8 pt-5  text-center md:text-[2.2rem] text-[1.3rem] font-[700]">
   {t("heading")}
    </h2>
    <section className='container py-12 flex flex-col md:flex-row justify-around gap-16'>
          
         <div 
         className=" w-full md:w-[50%] border-b border-primary rounded-2xl border shadow-2xl"
         data-aos-easing="ease-in-sine"
         data-aos="fade-right"
         >
            <div className="bg-gray-100  border border-primary border-b-0 rounded-2xl rounded-b-none">
            <h4 className="text-primary text-center py-3 md:text-[1.8rem] text-[1.3rem] font-[500]">{t("title1")}</h4>
            </div>
            <div  className="text-primary">
            <TbDatabaseMinus size={100} className="mx-auto my-4"/>
            </div>
            <div>
                <table width='100%' className="text-primary md:text-[1rem] text-[1rem] font-[500]">
                    <tbody >
                        <tr className="border border-gray-200">
                       <td className="py-5 px-3">{t("para1")}</td>
                       <td className="text-right px-3">$1,000</td>
                        </tr>
                        <tr className="border border-gray-200">
                       <td className="py-5 text-left px-3">{t("para2")}</td>
                       <td className="text-right px-3">$0</td>
                        </tr>
                        <tr className="border border-gray-200">
                       <td className="py-5 text-left px-3">{t("para3")}</td>
                       <td className="text-right px-3">$1,000</td>
                        </tr>
                        <tr className="border border-gray-200">
                       <td className="py-5 px-3">{t("para4")}</td>
                       <td className="text-right px-3">$100</td>
                        </tr>
                        <tr>
                       <td className="py-5 text-left px-3">{t("para5")}</td>
                       <td className="text-right px-3">$900 ($1,000 - $100)</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            <h4 className="text-primary text-center md:text-[2.3rem] font-[600] bg-gray-100 rounded-b-2xl py-5">$900</h4>
        </div>
        <div 
        className=" w-full md:w-[50%] border-b border-primary rounded-2xl border shadow-2xl"
        data-aos-easing="ease-in-sine"
        data-aos="fade-left"
        >
            <div className="bg-gray-100  border border-primary border-b-0 rounded-2xl rounded-b-none">
            <h4 className="text-primary text-center py-3 md:text-[1.8rem] text-[1.3rem] font-[500]">{t("title2")}</h4>
            </div>
            <div className="text-primary">
            <BsDatabaseAdd  size={100} className="mx-auto my-4"/>
            </div>
            <div>
                <table width='100%' className="text-primary md:text-[1rem] text-[1rem] font-[500]">
                    <tbody >
                        <tr className="border border-gray-200">
                       <td className="py-5 px-3">{t("para1")}</td>
                       <td className="text-right px-3">$1,000</td>
                        </tr>
                        <tr className="border border-gray-200">
                       <td className="py-5 text-left px-3">{t("para2")}</td>
                       <td className="text-right px-3">$150</td>
                        </tr>
                        <tr className="border border-gray-200">
                       <td className="py-5 text-left px-3">{t("para3")}</td>
                       <td className="text-right px-3">$1,150</td>
                        </tr>
                        <tr>
                       <td className="py-5 px-3">{t("para4")}</td>
                       <td className="text-right px-3">$100</td>
                        </tr >
                        <tr className="border border-gray-200">
                       <td className="py-5 text-left px-3">{t("para5")}</td>
                       <td className="text-right px-3">$1,050 ($1,150 - $100)</td>
                        </tr>
                    </tbody>
                </table>
                <h4 className="text-primary text-center md:text-[2.3rem] font-[600] bg-gray-100 rounded-b-2xl py-5">$1,050</h4>
            </div>
        </div>
       
    </section>
    </>
  )
}

export default HowItWorks;