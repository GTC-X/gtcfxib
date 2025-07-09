'use client';
import React, { useEffect } from 'react'
import Aos from "aos";
import { useTranslations } from 'next-intl';
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineSlack } from "react-icons/ai";
import { PiHandHeartBold } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";
import { GrWorkshop } from "react-icons/gr";
import { FaLongArrowAltRight } from 'react-icons/fa';

const JobsGtcfx = () => {
    const t = useTranslations("about.careers")
    useEffect(() => {
        Aos.init({
            disable: "mobile",
            once: true // This ensures the animation only happens once
        });
    }, []);

    const boxContents = [
        {
            icon: <PiHandHeartBold />,
            title: "Business Development Manager",
            description: "We, GTCFX, are seeking as a Business Development Manager in India, you will be at the forefront of identifying and developing new business opportunities for you and your team. Your focus will be on expanding the client base, increasing trading volumes, and driving revenue growth for the company.",
            number: 1,
        },

    ];
    
    return (
        <section className='container relative z-30 mt-5'>
            <div className='flex flex-col space-y-2' >
                <div
                >
                    <h2 className='HeadingH2 py-6'>{t("jobs")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {boxContents.map((box, index) => (
                            <div
                                key={index}
                                className="box-setting border border-gray-300 p-4 bg-[#f9f9f9] bg-opacity-70"
                            >
                                <div className="flex flex-row items-center justify-between border-b border-gray-300 pb-5 mb-5">
                                    <div className="flex flex-row items-center justify-start gap-4">
                                        <p className="text-secondary text-3xl">{box.icon}</p>
                                        <h3 className="text-xl md:text-lg 2xl:text-xl text-primary">
                                            {box.title}
                                        </h3>
                                    </div>
                                    <h2 className="text-4xl text-secondary">{box.number}</h2>
                                </div>
                                <p className="text ltr:text-left rtl:text-right">{box.description}</p>
                                <div className="mt-2 text-right">
                                    <button
                                        type="submit"
                                        className="yellowButton  inline-flex items-center font-normal rounded-none capitalize hover:bg-primary hover:text-secondary"
                                    >
                                        {t("apply")} <FaLongArrowAltRight className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default JobsGtcfx