"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { usePathname } from "next/navigation";

const AccountFAQ = () => {

  const path=usePathname();
  const isAr=path.includes("/ar");

  const t = useTranslations("faq")

  const accordionData = [
    {
      question: t("account.one.ques"),
      answer: t("account.one.ans"),
    },
    {
      question: t("account.two.ques"),
      answer: t("account.two.ans"),
      para: t("account.two.para"),
    },
    {
      question: t("account.three.ques"),
      answer: t("account.three.ans"),
    },
    {
      question: t("account.four.ques"),
      answer: t("account.four.ans"),
      para: t("account.four.para"),
      para2: t("account.four.para2"),
    },
    {
      question: t("account.five.ques"),
      answer: t("account.five.ans"),
    },
    {
      question: t("account.six.ques"),
      answer: t("account.six.ans"),
      para: t("account.six.para"),
    },
    {
      question: t("account.seven.ques"),
      answer: t("account.seven.ans"),
    },
    {
      question: t("account.seven1.ques"),
      answer: t("account.seven1.ans"),
    },
    {
      question: t("account.seven2.ques"),
      answer: t("account.seven2.ans"),
      para: t("account.seven2.para"),
      para2: t("account.seven2.para2"),
      para3: t("account.seven2.para3"),  
    },
    {
      question: t("account.seven3.ques"),
      answer: t("account.seven3.ans"),
    },
    {
      question: t("account.eight.ques"),
      answer: t("account.eight.ans"),
      para: t("account.eight.para"),
      para2: t("account.eight.para2"),
      para3: t("account.eight.para3"),  
    },
    {
      question: t("account.nine.ques"),
      answer: t("account.nine.ans"),
      
    },
    {
      question: t("account.ten.ques"),
      answer: t("account.ten.ans"),
    },
    {
      question: t("account.eleven.ques"),
      answer: t("account.eleven.ans"),
    },
    {
      question: t("account.twelve.ques"),
      answer: t("account.twelve.ans"),
    },
    {
      question: t("account.thirteen.ques"),
      answer: t("account.thirteen.ans"),
    },
    {
      question: t("account.fourteen.ques"),
      answer: t("account.fourteen.ans"),
    },
    {
      question: t("account.fifteen.ques"),
      answer: t("account.fifteen.ans"),
    },
  ];

  return (
    <dl className=" space-y-1">
      {accordionData.map((faq) => (
        <Disclosure as="div" key={faq.question}> 
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className={`flex w-full items-start justify-between text-primary p-3 border rounded-none border-gray-300 text-base ${isAr ? 'text-right':'text-left'}`}>
                  <span className="text-base leading-7">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <AiOutlineMinus size={18} aria-hidden="true" />
                    ) : (
                      <IoMdAdd size={18}  aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd">
                <p className="text text-left leading-7 border border-gray-200 p-3">
                  {faq.answer}
                  {faq.para && <br /> /* Add line break if para exists */}
                  {faq.para && <span>{faq.para}</span>}
                  {faq.para2 && <br /> /* Add line break if para2 exists */}
                  {faq.para2 && <span>{faq.para2}</span>}
                  {faq.para3 && <br /> /* Add line break if para2 exists */}
                  {faq.para3 && <span>{faq.para3}</span>}
                </p>
               
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  );
};

export default AccountFAQ;
