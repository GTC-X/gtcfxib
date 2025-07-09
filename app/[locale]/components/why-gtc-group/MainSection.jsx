"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Aos from "aos";
import { TiTick } from "react-icons/ti";
import { useTranslations } from "next-intl";
import { GrAchievement } from "react-icons/gr";
import { GrAction } from "react-icons/gr";
import { PiHandshakeLight } from "react-icons/pi";
import { FaHandHoldingHand } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import WhyBoss from "../about/WhyBoss";


const MainSection = () => {
  const t = useTranslations("about.why-gtc-group");
  const list1 = [
    { icon: <TiTick color="#29a643" size={30} />, text: t("point1_1") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point1_2") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point1_4") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point1_5") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point1_6") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point1_7") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point1_8") },
  ];
  const list2 = [
    { icon: <TiTick color="#29a643" size={30} />, text: t("point2_1") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point2_2") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point2_3") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point2_4") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point2_5") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point2_6") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point2_7") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point2_8") },
  ];
  const list3 = [
    { icon: <TiTick color="#29a643" size={30} />, text: t("point3_1") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point3_2") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point3_3") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point3_4") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point3_5") },
  ];
  const list4 = [
    { icon: <TiTick color="#29a643" size={30} />, text: t("point4_1") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point4_2") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point4_3") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point4_4") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point4_5") },
    { icon: <TiTick color="#29a643" size={30} />, text: t("point4_6") },
  ];

  const boxContents = [
    {
      icon: <GrAchievement />,
      title: t("note_title1"),
      description: t("note_desc1"),
      number: 1,
    },
    {
      icon: <GrAction />,
      title: t("note_title2"),
      description: t("note_desc2"),
      number: 2,
    },
    {
      icon: <FaHandHoldingHand />,
      title: t("note_title3"),
      description: t("note_desc3"),
      number: 3,
    },
    {
      icon: <GrServices />,
      title: t("note_title4"),
      description: t("note_desc4"),
      number: 4,
    },
  ];

  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <>
      <section className="md:pb-0 pb-4">
        <div className="container md:pt-16 pt-8">
          <div className="flex flex-row items-center justify-start gap-2 md:mb-6">
          <p className="text-secondary text-4xl md:text-5xl"><PiHandshakeLight /></p>
            <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 text-left mb-0">{t("title")}</h2>
          </div>
          <div className="text ltr:text-left rtl:text-right">
          <p>{t("sub_title1_1")}</p>
          <p className="my-4">{t("sub_title1_2")}</p>
          <p>{t("sub_title1_3")}</p>
          </div>
         
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 xl:gap-12 2xl:gap-20">
          <div className="md:w-[50%]">
            <h3 className="HeadingH2 text-base md:text-2xl ltr:text-left rtl:text-right md:mt-12 md:mb-4 ">
              {t("heading1_1")}
              <span className="text-secondary">{t("heading1_2")}</span>
            </h3>
            <div className="flex-col">
              {list1.map((el, index) => (
                <div key={index} className="flex items-end space-y-3 max-w-xl">
                  {el.icon}
                  <p className="text-primary md:text-[17px] text-[16px]">
                    {el.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-[50%]">
            <h3 className="HeadingH2 text-base md:text-2xl ltr:text-left rtl:text-right md:mt-12 md:mb-4">
              {t("heading2_1")}{" "}
              <span className="text-secondary">{t("heading2_2")}</span>
            </h3>
            <div className="flex-col">
              {list2.map((el, index) => (
                <div key={index} className="flex items-end space-y-3">
                  {el.icon}
                  <p className="text-primary md:text-[17px] text-[16px]">
                    {el.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-[40%] left-0 w-full h-[600px] opacity-10 bg-center bg-contain bg-no-repeat bg-[url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/bg-about.webp')]" />
      </section>

        <section className="max-w-7xl mx-auto  px-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between  gap-4 md:gap-8 xl:gap-12 2xl:gap-20">
          <div className="md:w-[50%]">
            <h3 className="HeadingH2 text-base md:text-2xl ltr:text-left rtl:text-right md:mt-12  mt-6 md:mb-4 ">
              {t("heading3_1")}{" "}
              <span className="text-secondary">{t("heading3_2")}</span>{" "}
              {t("heading3_3")}{" "}
            </h3>
            <div className="flex-col">
              {list3.map((el, index) => (
                <div key={index} className="flex items-end space-y-3">
                  {el.icon}
                  <p className="text ltr:text-left rtl:text-right">{el.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-[50%]">
            <h3 className="HeadingH2  text-base md:text-2xl ltr:text-left rtl:text-right md:mt-12 md:mb-4">
              {t("heading4_1")}{" "}
              <span className="text-secondary">{t("heading4_2")} </span>{" "}
              {t("heading4_3")}{" "}
            </h3>
            <div className="flex-col">
              {list4.map((el, index) => (
                <div key={index} className="flex items-end space-y-3">
                  {el.icon}
                  <p className="text text-left">{el.text}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>
    

      <WhyBoss />
    </>
  );
};

export default MainSection;
