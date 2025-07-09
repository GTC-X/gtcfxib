import { Disclosure, Transition } from "@headlessui/react";
import Aos from "aos";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import Accordion from "../../common/Accordion";

const Tabs = ({ title, descreption }) => {
  return (
    <Disclosure as="div" clasname="bg-[#fef2cd]">
      {({ open }) => (
        <>
          <dt>
            <Disclosure.Button className="flex w-full items-start text-left justify-between text-gray-700 bg-secondary p-4 border rounded-none border-white font-bold text-base">
              <span className="text-base font-semibold leading-7 pr-2">
                {title}
              </span>
              <span className=" flex h-7 items-center">
                {open ? (
                  <AiOutlineMinus
                    size={22}
                    aria-hidden="true"
                    fontWeight={800}
                  />
                ) : (
                  <IoMdAdd size={22} aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </dt>
          <Transition
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="bg-[#fef2cd]"
          >
            <Disclosure.Panel as="dd">
              <div>
                <p className=" text-base text-primary font-normal text-center p-4">
                  {descreption}
                </p>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

const WhatCFDTrading = () => {
  const t = useTranslations("Instruments");
  const title = t("energy.whtCFDTrading.heading")
    .replace(/\[c\]/g, "<span class='text-secondary'>")
    .replace(/\[\/c\]/g, "</span>");
  useEffect(() => {
    Aos.init();
  }, []);

  const tabData = [
    {
      title: t("energy.whtCFDTrading.faqs.question1"),
      desc: t("energy.whtCFDTrading.faqs.answer1"),
    },
    {
      title: t("energy.whtCFDTrading.faqs.question2"),
      desc: t("energy.whtCFDTrading.faqs.answer2"),
    },
    {
      title: t("energy.whtCFDTrading.faqs.question3"),
      desc: t("energy.whtCFDTrading.faqs.answer3"),
    },
  ];
  return (
    <div className="bg-gradient py-6 lg:py-16">
      <div className="max-width ">
        <div
          className="flex items-center justify-center pb-6 "
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img
            src={"/arrow-white.png"}
            alt={"title"}
            fill
            className="object-contain pr-2 w-16"
          />
          <h2
            className="font-extrabold text-3xl text-white "
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
        <p className="text-base text-white font-normal text-center pb-6">
          {t("energy.whtCFDTrading.heading1")}
        </p>
        <p className="text-base text-secondary font-normal text-center pb-6">
          {t("energy.whtCFDTrading.heading2")}
        </p>
        <div className="mt-6 bg-[#fef2cd]">
          <Accordion accordionData={tabData} theme="blue" textColor="yellow" />

          {/* {tabData?.map((single, index) => (
            <div key={index}>
              <Tabs title={single?.title} descreption={single?.descreption} />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default WhatCFDTrading;
