"use client";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { sanitize } from "isomorphic-dompurify";
import { useTranslations } from "next-intl";

const AccordionItem = ({ toggle, open, title, paragraphs }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 bg-white transition hover:shadow-lg">
      {/* Accordion Header */}
      <div
        className="py-4 px-5 flex justify-between items-center cursor-pointer text-primary"
        onClick={toggle}
      >
        <p className="text-base font-medium">{title}</p>
        <div className="text-xl">{open ? <AiOutlineUp /> : <AiOutlineDown />}</div>
      </div>

      {/* Accordion Content */}
      <Collapse isOpened={open}>
        <div className="px-5 py-3 border-t border-gray-200 text-primary bg-white">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base"
              dangerouslySetInnerHTML={{ __html: sanitize(paragraph) }}
            />
          ))}
        </div>
      </Collapse>
    </div>
  );
};


const FrequentlyAskedQuestions = ({ data }) => {
  const t = useTranslations("prime-tech.pamm");
  if (!data || data.length < 1) return null;
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="container pb-12 mb-28 text-white">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#333] mb-8 text-center">
        {t("faq.faqHeading")}
      </h2>
      <div className="max-w-6xl mx-auto space-y-2">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            open={index === openIndex}
            title={item.title}
            paragraphs={item.paragraphs}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
