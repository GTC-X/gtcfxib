'use client'
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { sanitize } from "isomorphic-dompurify";
import { useTranslations } from "next-intl";
const IBFAQS = () => {

  const t = useTranslations("partner.IBProgram.faq")

    const faqs = [
        {
          title: t("one.ques"),
          paragraphs: [
            t("one.ans"),
          ],
        },
        {
          title: t("two.ques"),
          paragraphs: [
            t("two.ans"),
          ],
        },
        {
          title: t("three.ques"),
          paragraphs: [
            t("three.ans"),
          ],
        },
        {
          title: t("four.ques"),
          paragraphs: [
            t("four.ans"),
          ],
        },
          
      ];
  return (
    <section className="py-12 container">
        <FrequentlyAskedQuestions data={faqs}/>
    </section>
  )
}

export default IBFAQS;

const FrequentlyAskedQuestions = ({ data }) => {
  const t = useTranslations("partner.IBProgram.faq")
    if (!data || data?.length < 1) return <></>;
    const isOneElement = data.length === 1;
    const [openIndex, setOpenIndex] = useState(isOneElement ? 0 : 0);
    const toggle = (index) =>{
      isOneElement ? setOpenIndex(openIndex === 0 ? 1 : 0) : setOpenIndex(index);
    }
  
    return (
      <section className="container">
        <div className="text-center">
      <h2 className='HeadingH2 font-semibold text-center mb-10'>  {t("heading")}</h2>

      </div>

        <div className="border border-gray-300">
          {data.map((item, index) => {
            return (
              <AccordionItem
                key={index}
                open={index === openIndex ?? false}
                title={item.title}
                paragraphs={item.paragraphs}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
      </section>
    );
  };

  const AccordionItem = ({ toggle, open, title, paragraphs }) => {
    return (
      <div>
        <div
          className={`py-[14px] px-[15px] lg:px-12 bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90% flex gap-2 justify-between items-center cursor-pointer`}
          onClick={toggle}
        >
          <p className={`text-[18px]  font-[400] text-white`}>{title}</p>
          <div className={`text-[24px]  font-[400] text-white`}>
            {open ? <AiOutlineMinus size={15} /> : <AiOutlinePlus size={15} />}
          </div>
        </div>
        <div className="border-b border-gray-300 w-[90%] mx-auto" />
        <Collapse
          isOpened={open}
          className="border"
          style={{ border: "1px solid #D4D4D4" }}
        >
          <div className="bg-white px-2 md:px-[10px] py-[20px] lg:px-12 border-1 border-solid border-[#d4d4d4] space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text ltr:text-left rtl:text-right" 
                dangerouslySetInnerHTML={{
                  __html: sanitize(paragraph),
                }}
              />
            ))}
          </div>
        </Collapse>
      </div>
    );
  };
  