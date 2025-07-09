'use client'
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { sanitize } from "isomorphic-dompurify";
import { useTranslations } from "next-intl";
const LPIBFAQS = () => {

  const t = useTranslations("partner.IBProgram.faq")

    const faqs = [
        {
          title: 'What is an Introducing Broker (IB)?',
          paragraphs: [
           'An Introducing Broker (IB) is a person or company that refers new clients to a broker in exchange for a commission or fee. IBs focus on marketing and acquiring clients but do not handle client funds or execute trades. Their main role is to introduce potential traders to a broker and assist in growing the brokers customer base.'
          ],
        },
        {
          title: 'What is Client Referral?',
          paragraphs: [
            'Client referral refers to the process where Introducing Brokers attract new traders to a broker through marketing and promotional efforts. This can involve online advertising, social media campaigns, email marketing, or even personal recommendations, all aimed at expanding the brokers customer base.',
          ],
        },
        {
          title: 'How to Partner as an Introducing Broker with a Broker?',
          paragraphs: [
            "Introducing Brokers (IBs) form formal partnerships or agreements with brokers. These agreements detail the terms of the relationship, including commission structures, payment schedules, and support provided by the broker.",
          ],
        },
        {
          title: 'What Do Introducing Brokers Offer to Their Clients?',
          paragraphs: [
            'While Introducing Brokers (IBs) don’t handle trades directly, they often provide valuable support to their referred clients. This can include assistance with account setup, offering guidance on trading strategies, and answering general questions.',

'IBs play a crucial role by acting as intermediaries between traders and brokers, helping with client acquisition and contributing to the broker’s growth. They can be individuals, businesses, or even financial institutions that refer traders in exchange for commissions.',
          ],
        },
          
      ];
  return (
    <section className="py-12 container">
        <FrequentlyAskedQuestions data={faqs}/>
    </section>
  )
}

export default LPIBFAQS;

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
      <h2 className='HeadingH2 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-center mb-10'>  {t("heading")}</h2>

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
