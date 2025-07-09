"use client";
import React, { useState } from "react";
import { Disclosure, Tab, Transition } from "@headlessui/react";
import ButtonTabs from "./ButtonTabs";
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import AccountTable from "./AccountTable";
import { useLocale, useTranslations } from "next-intl";
import { enAccountTableData } from "./constent/enConstentData";
import { arAccountTableData } from "./constent/arConstentData";
import { zhAccountTableData } from "./constent/zhConstentData";
import { msAccountTableData } from "./constent/msConsentData";
import { thAccountTableData } from "./constent/thConsentData";


const Tabs = ({ title, header, data }) => {
  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <dt>
            <Disclosure.Button className="flex w-full items-start text-left text-secondary bg-primary p-3 border rounded-none border-gray-300 font-bold text-base">
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
              <span className="ml-2 text-base font-semibold leading-7">
                {title}
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
          >
            <Disclosure.Panel as="dd">
              <AccountTable header={header} data={data} />
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

const InstrumentTabs = () => {
  const t = useTranslations("Instruments");
  const locale = useLocale();
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = [
    {
      label: t("forex.tab1.tabName"),
    },
    {
      label: t("forex.tab2.tabName"),
    },
    {
      label: t("forex.tab3.tabName"),
    },
    {
      label: t("forex.tab4.tabName"),
    },
    {
      label: t("forex.tab5.tabName"),
    },
  ];

  const getHeader = (index) => {
    switch (locale) {
      case "en":
        return enAccountTableData?.[index];
      case "ar":
        return arAccountTableData?.[index];
      case "zh-hans":
        return zhAccountTableData?.[index];
      default:
        return [];
    }
  };

  const getData = (key, value) => {
    switch (locale) {
      case "en":
        return enAccountTableData?.forex?.[key]?.[value];
      case "ar":
        return arAccountTableData?.forex?.[key]?.[value];
      case "zh-hans":
        return zhAccountTableData?.forex?.[key]?.[value];
      case "ms-MY":
        return msAccountTableData?.forex?.[key]?.[value];  
      case "th-TH":
        return thAccountTableData?.forex?.[key]?.[value];  
      default:
        return [];
    }
  };
  return (
    <>
      <div className="w-full">
        <ButtonTabs />

        <Tab.Group>
          <Tab.List className="border-b border-gray-200">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                onClick={() => setCurrentTab(index)}
                className={`${
                  currentTab === index
                    ? "bg-secondary text-primary border border-secondary"
                    : "bg-white text-gray-400 border border-gray-200 border-b-0"
                } py-2 px-6 cursor-pointer font-semibold hover:text-primary hover:bg-secondary hover:border hover:border-secondary mr-3`}
              >
                {tab.label}
              </Tab>
            ))}
          </Tab.List>
          <div className="bg-gray-50 p-3">
            <p className="text-base text-primary font-normal">
              {t("forex.tab1.type")}
            </p>
            <div className="tab-content ">
              <div className="reason-content py-1">
                <h2 className="font-semibold text-2xl text-primary pb-3">
                  {currentTab == 4
                    ? t("forex.tab4.subHeading")
                    : t("forex.tab1.subHeading")}
                </h2>
              </div>
            </div>
            <Tab.Panels>
              {tabs.map((tab, index) => (
                <Tab.Panel key={index}>
                  {index == 0 ? (
                    <>
                      <Tabs
                        title={t("forex.majorText")}
                        data={getData("standard", "major") || []}
                        header={getHeader("standardHeader")}
                      />
                      <Tabs
                        title={t("forex.minorText")}
                        data={getData("standard", "minor") || []}
                        header={getHeader("standardHeader")}
                      />
                      <Tabs
                        title={t("forex.exoticText")}
                        data={getData("standard", "exotic") || []}
                        header={getHeader("standardHeader")}
                      />
                    </>
                  ) : index == 1 ? (
                    <>
                      <Tabs
                        title={t("forex.majorText")}
                        data={getData("standardCent", "major") || []}
                        header={getHeader("CentHeader")}
                      />
                      <Tabs
                        title={t("forex.minorText")}
                        data={getData("standardCent", "minor") || []}
                        header={getHeader("standardHeader")}
                      />
                      <Tabs
                        title={t("forex.exoticText")}
                        data={getData("standardCent", "exotic") || []}
                        header={getHeader("standardHeader")}
                      />
                    </>
                  ) : index == 2 ? (
                    <>
                      <Tabs
                        title={t("forex.majorText")}
                        data={getData("rawSpread", "major") || []}
                        header={getHeader("standardHeader")}
                      />
                      <Tabs
                        title={t("forex.minorText")}
                        data={getData("rawSpread", "minor") || []}
                        header={getHeader("standardHeader")}
                      />
                      <Tabs
                        title={t("forex.exoticText")}
                        data={getData("rawSpread", "exotic") || []}
                        header={getHeader("standardHeader")}
                      />
                    </>
                  ) : index == 3 ? (
                    <>
                      <Tabs
                        title={t("forex.majorText")}
                        data={getData("zero", "major") || []}
                        header={getHeader("standardHeader")}
                      />
                      <Tabs
                        title={t("forex.minorText")}
                        data={getData("zero", "minor") || []}
                        header={getHeader("standardHeader")}
                      />
                      <Tabs
                        title={t("forex.exoticText")}
                        data={getData("zero", "exotic") || []}
                        header={getHeader("standardHeader")}
                      />
                    </>
                  ) : index == 4 ? (
                    <>
                      <Tabs
                        title={t("forex.majorText")}
                        data={getData("pro", "major") || []}
                        header={getHeader("standardHeader")}
                      />
                      <Tabs
                        title={t("forex.minorText")}
                        data={getData("pro", "minor") || []}
                        header={getHeader("standardHeader")}
                      />
                      <Tabs
                        title={t("forex.exoticText")}
                        data={getData("pro", "exotic") || []}
                        header={getHeader("standardHeader")}
                      />
                    </>
                  ) : null}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </>
  );
};

export default InstrumentTabs;
