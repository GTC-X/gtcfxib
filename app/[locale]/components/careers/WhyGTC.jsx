'use client';
import React, { useEffect } from 'react'
import Aos from "aos";
import { useTranslations } from 'next-intl';
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineSlack } from "react-icons/ai";
import { PiHandHeartBold } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";
import { GrWorkshop } from "react-icons/gr";

const WhyGTC = () => {
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
      title: [t("heading1_1"), t("heading1_2")],
      description: t("desc1"),
      number: 1,
    },
    {
      icon: <AiOutlineSlack />,
      title: [t("heading2_1"), t("heading2_2")],
      description: t("desc2"),
      number: 2,
    },
    {
      icon: <BsGraphUpArrow />,
      title: [t("heading3_1"), t("heading3_2")],
      description: t("desc3"),
      number: 3,
    },
    {
      icon: <RiGlobalLine />,
      title: [t("heading4_1"), t("heading4_2")],
      description: t("desc4"),
      number: 4,
    },
  ];
  return (
    <section className='container relative z-30'>
      <div
      >
        <div className="flex flex-row items-center justify-start gap-2 md:mb-6">
          <p className="text-secondary text-4xl md:text-5xl">
            <GrWorkshop />
          </p>
          <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 text-left mb-0">
            {t("title")}
          </h2>
        </div>
        <p className='text ltr:text-left rtl:text-right'>
          {t("sub-title")}
        </p>
      </div>
      <div className='flex flex-col space-y-2' >
        <div
        >
          <h2 className='HeadingH2 py-6'>{t("why-working")}</h2>
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
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default WhyGTC