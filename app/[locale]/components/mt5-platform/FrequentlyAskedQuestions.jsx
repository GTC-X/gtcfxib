"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useTranslations } from "next-intl";

const accordionData = [
  {
    title: "First title",
    desc: "first Description",
  },
];

const FrequentlyAskedQuestions = ({ faqList }) => {
  const t = useTranslations("platform.mt5PlatformPage");

  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) setOpen(0);
  });
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  return (
    <section className="container md:py-12 pt-8">
      <h1 className="HeadingH2 pb-8 md:text-center text-left">
        {t("faqList.heading")}
      </h1>
      <p className="text text-left">{t("faqList.para")}</p>
      <div className="md:py-8 py-4">
        {faqList.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              open={index === open}
              title={item.title}
              desc={item.desc}
              toggle={() => toggle(index)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;

const AccordionItem = ({ toggle, open, title, desc }) => {
  return (
    <div>
      <div
        className={`py-[14px] px-[15px] bg-white flex gap-2 justify-between items-center cursor-pointer border border-gray-200`}
        onClick={toggle}
      >
        <p className={`text-[16px] text-accent font-medium`}>{title}</p>
        <div className={`text-[24px] text-accent font-medium`}>
          {open ? <AiOutlineMinus size={15} /> : <AiOutlinePlus size={15} />}
        </div>
      </div>
      <Collapse
        isOpened={open}
        className="border"
        style={{ border: "1px solid #D4D4D4" }}
      >
        <div className="bg-white py-[20px] border border-gray-200 px-2">
          {desc}
        </div>
      </Collapse>
    </div>
  );
};
