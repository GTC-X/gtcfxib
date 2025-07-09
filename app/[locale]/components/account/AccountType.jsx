import { useState } from "react";
import { Tab } from "@headlessui/react";
import StandardPricing from "./StandardPricing";
import { MdStars } from "react-icons/md";
import AccountsFeatures from "./AccountsFeatures";
import ProfessionalAccounts from "./ProfessionalAccounts";
import { useTranslations } from "use-intl";

export default function AccountType() {
  const [currentTab, setCurrentTab] = useState(0);
  const t = useTranslations("datacontent");

  const tabs = [
    {
      label: t("standard.label"),
    },
    {
      label: t("professional.label"),
    },
    // Add more tabs as needed
  ];

  const detail1 = [
    { title: t("standard.option.one.label"), value: t("standard.option.one.subLabel") },
    { title: t("standard.option.two.label"), value: t("standard.option.two.subLabel") },
    { title: t("standard.option.three.label"), value: t("standard.option.three.subLabel") },
    { title: t("standard.option.four.label"), value: t("standard.option.four.subLabel") },
    { title: t("standard.option.five.label"), value: t("standard.option.five.subLabel") },
  ];
  const detail2 = [
    { title: t("standard.cent.one.label"), value: t("standard.cent.one.subLabel") },
    { title: t("standard.cent.two.label"), value: t("standard.cent.two.subLabel") },
    { title: t("standard.cent.three.label"), value: t("standard.cent.three.subLabel") },
    { title: t("standard.cent.four.label"), value: t("standard.cent.four.subLabel") },
    { title: t("standard.cent.five.label"), value: t("standard.cent.five.subLabel") },
  ];
  const Professionaldetail1 = [
    { title: t("professional.option.one.label"), value: t("professional.option.one.subLabel") },
    { title: t("professional.option.two.label"), value: t("professional.option.two.subLabel") }, 
    { title: t("professional.option.three.label"), value:t("professional.option.three.subLabel") },
    { title: t("professional.option.four.label"), value: t("professional.option.four.subLabel") },
    { title: t("professional.option.five.label"), value: t("professional.option.five.subLabel") },
  ];
  const Professionaldetail2 = [
    { title: t("professional.option2.one.label"), value: t("professional.option2.one.subLabel") },
    { title: t("professional.option2.two.label"), value: t("professional.option2.two.subLabel") },
    { title: t("professional.option2.three.label"), value:t("professional.option2.three.subLabel") },
    { title: t("professional.option2.four.label"), value: t("professional.option2.four.subLabel") },
    { title: t("professional.option2.five.label"), value: t("professional.option2.five.subLabel") },
  ];
  const Professionaldetail3 = [
    { title: t("professional.option3.one.label"), value: t("professional.option3.one.subLabel") },
    { title: t("professional.option3.two.label"), value: t("professional.option3.two.subLabel") },
    { title: t("professional.option3.three.label"), value:t("professional.option3.three.subLabel") },
    { title: t("professional.option3.four.label"), value: t("professional.option3.four.subLabel") },
    { title: t("professional.option3.five.label"), value: t("professional.option3.five.subLabel") },
  ];

  return (
    <div className="w-full">
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
              } py-2 px-2 md:px-6 cursor-pointer text-sm md:text-base font-semibold hover:text-primary hover:bg-secondary hover:border hover:border-secondary  mr-2`}
            >
              {tab.label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab, index) => (
            <Tab.Panel key={index}>
              {/* Static content goes here */}
              {index === 0 ? (
                <div className="tab-content py-6">
                  <h2 className="HeadingH3">{t("standard.heading")}</h2>
                  <p className="text-base text-primary font-normal">
                    {t("standard.description")}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-5">
                    <div>
                      <StandardPricing
                        accountType={t("standard.subHeading")}
                        description={t("standard.option.detail")}
                        details={detail1}
                        Icon={<MdStars size={40} />}
                      />
                    </div>
                    <div>
                      <StandardPricing
                        accountType={t("standard.cent.centHeading")}
                        description={t("standard.cent.detail")}
                        details={detail2}
                      />
                    </div>
                  </div>
                  <div className="reason-content py-5">
                    <h2 className="font-semibold text-2xl text-primary pb-3">
                      {t("standard.reasonheading")}
                    </h2>
                    <p className="text-base text-primary font-normal">
                      {t("standard.reasonpara")}
                    </p>
                  </div>
                  <div className="reason-content py-5">
                    <h2 className="font-semibold text-2xl text-primary pb-3">
                      {t("standard.features.heading")}
                    </h2>
                    <AccountsFeatures />
                  </div>
                </div>
              ) : index === 1 ? (
                <div className="tab-content py-6">
                  <h2 className="HeadingH3">{t("professional.heading")}</h2>
                  <p className="text-base text-primary font-normal">
                    {t("professional.description")}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5">
                    <div>
                      <StandardPricing
                        accountType={t("professional.option.heading")}
                        description={t("professional.option.detail")}
                        details={Professionaldetail1}
                      />
                    </div>
                    <div>
                      <StandardPricing
                        accountType={t("professional.option2.heading")}
                        description={t("professional.option2.detail")}
                        details={Professionaldetail2}
                      />
                    </div>
                    <div>
                      <StandardPricing
                        accountType={t("professional.option3.heading")}
                        description={t("professional.option3.detail")}
                        details={Professionaldetail3}
                      />
                    </div>
                  </div>
                  <div className="reason-content py-5">
                    <h2 className="font-semibold text-2xl text-primary pb-3">
                      {t("professional.reasonheading")}
                    </h2>
                    <p className="text-base text-primary font-normal">
                      {t("professional.reasonpara")}
                    </p>
                  </div>
                  <div className="reason-content py-5">
                    <h2 className="font-semibold text-2xl text-primary pb-3">
                      {t("professional.features.heading")}
                    </h2>
                    <ProfessionalAccounts />
                  </div>
                </div>
              ) : null}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
