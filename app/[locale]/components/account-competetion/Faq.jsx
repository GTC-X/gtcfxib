"use client";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Faq = ({ accordionData, theme, textColor }) => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };



  return (
    <div className="container py-8">
        <h2 className="text-primary text-center md:text-[32px] text-[18px] font-[600] leading-[32px] py-5">Frequently Asked Questions</h2>
      {accordionData.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            open={index === open}
            title={item.title}
            desc={item.desc}
            theme={theme}
            textColor={textColor}
            toggle={() => toggle(index)}
          />
        );
      })}
    </div>
  );
};

export default Faq;

const AccordionItem = ({ toggle, open, title, desc, theme, textColor }) => {
  return (
    <div>
      <div
        className={` py-[14px] px-[15px] bg-white"
        } flex gap-2 items-center cursor-pointer`}
        onClick={toggle}
      >
        <div
          className={`text-[24px] ${
            textColor === "yellow" ? "text-secondary" : "text-primary"
          } font-medium`}
        >
          {open ? <AiOutlineMinus color="#f9c617" /> : <AiOutlinePlus />}
        </div>
        <p
          className={`text-[16px] font-[700]  ${
            textColor === "yellow" ? "text-secondary" : "text-primary"
          } `}
        >
          {title}
        </p>
      </div>
      <Collapse
        isOpened={open}
       style={{border:'none'}}
       className="border-none"
      >
        <div className="bg-white px-[15px] py-[20px]">
          {desc}
        </div>
      </Collapse>
    </div>
  );
};
