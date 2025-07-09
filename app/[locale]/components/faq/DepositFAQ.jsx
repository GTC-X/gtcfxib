"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const DepositFAQ = () => {

    const t = useTranslations("faq");
    const path=usePathname();
    const isAr=path.includes("/ar");

    const faqs = [
        {
          question: t("deposit.one.ques"),
          answer: t("deposit.one.ans"),
        },
        {
            question: t("deposit.two.ques"),
            answer: t("deposit.two.ans"),
        },
        {
            question: t("deposit.three.ques"),
            answer: t("deposit.three.ans"),
        },
        {
            question: t("deposit.four.ques"),
            answer: t("deposit.four.ans"),
          },
          {
              question: t("deposit.five.ques"),
              answer: t("deposit.five.ans"),
          },
          {
              question: t("deposit.six.ques"),
              answer: t("deposit.six.ans"),
          },
          {
            question: t("deposit.seven.ques"),
            answer: t("deposit.seven.ans"),
          },
          {
              question: t("deposit.eight.ques"),
              answer: t("deposit.eight.ans"),
          },
          {
              question: t("deposit.nine.ques"),
              answer: t("deposit.nine.ans"),
          },
          {
            question: t("deposit.ten.ques"),
            answer: t("deposit.ten.ans"),
        },
      
        // More questions...
      ];

      

  return (
    <dl className=" space-y-1">
      {faqs.map((faq) => (
        <Disclosure as="div" key={faq.question}> 
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className={`flex w-full items-start justify-between text-primary p-3 border rounded-none border-gray-300 text-base ${isAr ? 'text-right':'text-left'}`}>
                  <span className="text text-left leading-7">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <AiOutlineMinus size={18} aria-hidden="true" />
                    ) : (
                      <IoMdAdd size={18} aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd">
                <p className="text text-left leading-7 border border-gray-200 p-3">
                  {faq.answer}
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  );
};

export default DepositFAQ;
