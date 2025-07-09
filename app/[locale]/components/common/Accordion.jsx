"use client";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordion = ({ accordionData, theme, textColor }) => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div>
      {accordionData.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            open={index === open}
            title={item.title}
            desc={item.desc} // Keep the original text with \n
            theme={theme}
            textColor={textColor}
            toggle={() => toggle(index)}
          />
        );
      })}
    </div>
  );
};

export default Accordion;

const AccordionItem = ({ toggle, open, title, desc, theme, textColor }) => {
  return (
    <div>
      <div
        className={`py-4 md:py-[14px] ${
          theme === "blue" ? "bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90%" : "bg-white"
        } flex gap-2 items-center cursor-pointer border-b`}
        onClick={toggle}
      >
        <div
          className={`text-[24px] ${
            textColor === "yellow" ? "text-white" : "text-primary"
          }`}
        >
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
        <p
          className={`text text-left md:text-lg  ${
            textColor === "yellow" ? "text-white" : "text-primary"
          } `}
        >
          {title}
        </p>
      </div>
      <Collapse
        isOpened={open}
        className="border"
        style={{ border: "1px solid #D4D4D4" }}
      >
        <div className="bg-white px-[15px] py-[20px] border-1 border-solid border-[#d4d4d4] text ltr:text-left rtl:text-right">
          {desc.split("\n").map((line, i) => (
            <p key={i}>{line}</p> // Render each line as a <p>
          ))}
        </div>
      </Collapse>
    </div>
  );
};