"use client";
import React from "react";
import { useTranslations } from "next-intl";

const careerData = [
  {
    title: "Social Media Expert with Forex Experience",
    subTilte: "",
    time: "Full Time",
    duration: "Posted 9 months ago",
    location: "Dubai",
  },
  {
    title: "Accountant with Forex Experience",
    subTilte: "Global Trade Capital",
    time: "Full Time",
    duration: "Posted 9 months ago",
    location: "Vitnam",
  },
  {
    title: "Business Development Manager",
    subTilte: "",
    time: "Full Time",
    duration: "Posted 9 months ago",
    location: "Malaysia",
  },
];

const JoinUsCareer = () => {
  const t = useTranslations("footerPage");

  return (
    <div className="container md:py-16 py-8 ">
      <p className="text-base text-center text-primary font-normal pb-4">
        {t("careers.joinUs.title")}
      </p>
      <h2 className="text-2xl text-center lg:text-4xl font-semibold text-primary pb-4">
        {t("careers.joinUs.desc")}
      </h2>
      <div className=" p-4 bg-[#eeeeee] mt-2">
        <div className="grid grid-cols-12 gap-x-4 gap-y-2">
          <div className=" md:col-span-6 col-span-12">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder={t("careers.joinUs.input1Placeholder")}
              className="formInput m-0 bg-white border-primary"
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder={t("careers.joinUs.input2Placeholder")}
              className="formInput m-0 bg-white border-primary"
            />
          </div>
          <div className="col-span-12">
            <button className="text-[#c36] w-full border-[1px] border-[#c36] text-center rounded-[3px] py-[0.5rem] px-[1rem] hover:bg-[#c36] hover:text-[#FFF]">
              {t("careers.joinUs.btnText")}
            </button>
          </div>
        </div>
      </div>
      <div className="border flex flex-wrap items-center border-t-[1px] bg-[#f9f9f9] border-[#e5e5e5]">
        <div className="flex items-center gap-2 p-2 border-r-[1px] border-[#e5e5e5]">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            value="checked"
            className="h-3 w-3"
          />
          <p className="inline text-[13px] text-primary">
            {t("careers.joinUs.checkbox1")}
          </p>
        </div>
        <div className="flex items-center gap-2 p-2 border-r-[1px] border-[#e5e5e5]">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            value="checked"
            className="h-3 w-3"
          />
          <p className="inline text-[13px] text-primary">
             {t("careers.joinUs.checkbox2")}
          </p>
        </div>
        <div className="flex items-center gap-2 p-2 border-r-[1px] border-[#e5e5e5]">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            value="checked"
            className="h-3 w-3"
          />
          <p className="inline text-[13px] text-primary">
             {t("careers.joinUs.checkbox3")}
          </p>
        </div>
        <div className="flex items-center gap-2 p-2 border-r-[1px] border-[#e5e5e5]">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            value="checked"
            className="h-3 w-3"
          />
          <p className="inline text-[13px] text-primary">
             {t("careers.joinUs.checkbox4")}
          </p>
        </div>
        <div className="flex items-center gap-2 p-2">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            value="checked"
            className="h-3 w-3"
          />
          <p className="inline text-[13px] text-primary">
             {t("careers.joinUs.checkbox5")}'
          </p>
        </div>
      </div>
      {careerData?.map((single, index) => (
        <div
          className="grid grid-cols-12 p-4 border-b-[1px] border-[#e5e5e5]  hover:bg-[#f9f9f9]"
          key={index}
        >
          <div className=" grid  md:col-span-6 col-span-9">
            <div className="flex">
              <img
                className="w-10 h-10 mr-4 hidden md:block"
                src="/careers-list.png"
                alt="wl-icon"
              />
              <div>
                <h3 className=" text-[#c36] text-base hover:text-primary">
                  {single?.title}
                </h3>
                <h4 className=" text-gray-400 text-base hover:text-primary font-semibold">
                  {single?.subTilte}
                </h4>
              </div>
            </div>
          </div>
          <div className=" grid  col-span-3">
            <p className=" text-gray-400 text-right md:text-left text-base">
              {single?.location}
            </p>
          </div>
          <div className=" grid  md:col-span-3 col-span-12">
            <p className="text-right text-base font-semibold text-green-500">
              {single?.time}
            </p>
            <p className="text-right text-gray-400 text-base">
              {single?.duration}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JoinUsCareer;
