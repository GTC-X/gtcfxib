'use client'
import { useTranslations } from "next-intl";
import { useState } from "react";

const CampaignRules = () => {
  const [activeTab, setActiveTab] = useState(null);
  const t = useTranslations("partner.IBProgram.rules")

  const toggleTab = (index) => {
    if (activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };

  const rules = [
    {
      title: t("one.title"),
      content: [
        t("one.points.p1"),
        t("one.points.p2"),
        t("one.points.p3"),
        t("one.points.p4"),
        t("one.points.p5"),
        t("one.points.p6"),
        t("one.points.p7"),
        t("one.points.p8"),
      ],
    },
    {
      title: t("two.title"),
      content: [
        t("two.points.p1"),
        t("two.points.p2"),
        t("two.points.p3"),
        t("two.points.p4"),
        t("two.points.p5"),
      ],
    },
    {
      title: t("three.title"),
      content: [
        t("three.points.p1"),
      ],
    },
  ];

  return (
    <div className="py-5">
      {rules.map((rule, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full rtl:text-right ltr:text-left px-4 py-5 bg-transparent bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90% border border-gray-50 hover:bg-secondary focus:outline-none font-bold text-secondary hover:text-white"
            onClick={() => toggleTab(index)}
          >
            {rule.title}
          </button>
          <div
            className={`border border-gray-100 pl-4 py-8 ${activeTab === index ? "block bg-gradient-to-b from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90% bg-opacity-25" : "hidden"}`}
          >
            <ul className="list-disc text-white ltr:pl-5 ltr:text-left rtl:pr-10 rtl:text-right">
              {rule.content.map((item, i) => (
                <li key={i} className="leading-8">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampaignRules;
