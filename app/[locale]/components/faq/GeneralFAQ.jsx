'use client'
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

const GeneralFAQ = () => {

    const path= usePathname();
    const isAr = path.includes('/ar');
    const t = useTranslations("faq")

    const general = [
       
        {
            question: t("general.two.ques"),
            answer: t("general.two.ans"),
            para: t("general.two.para"),
            para2: t("general.two.para2"),
            para3: t("general.two.para3"),
            para4: t("general.two.para4"),
        },
        {
            question: t("general.three.ques"),
            answer: t("general.three.ans"),
        }
      
        // More questions...
      ];

  return (
    <dl className=" space-y-1">
    {general.map((faq) => (
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
                    <IoMdAdd size={18} aria-hidden="true" />
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
                  {faq.para4 && <br /> /* Add line break if para2 exists */}
                  {faq.para4 && <span>{faq.para4}</span>}
              </p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    ))}
  </dl>
  )
}

export default GeneralFAQ