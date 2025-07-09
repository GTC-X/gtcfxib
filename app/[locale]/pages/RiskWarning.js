"use client";
import React, { useState } from "react";
import Hero from "../components/common/Hero";
import { useTranslations } from "next-intl";
import { Tab, Disclosure } from "@headlessui/react";
import { FaFilePdf } from "react-icons/fa";
const RiskWarningPage = () => {
  const t = useTranslations("footerPage");

  const legalData = {
  'GTC Financial Consultancy': [
    {
      title: 'GTC Financial Consultancy and GTC Global LTD ( Mauritius)',
      items: [
        { name: 'Client Onboarding Application GTC FC - MU – Retail V1.0', link: '#' },
        { name: 'Corporate Onboarding Application GTC FC - MU - Corporate V1.0', link: '#' },
        { name: 'Terms of Business', link: '#' },
        { name: 'Complaint Handling Policy', link: '#' },
        { name: 'Conflict of Interest Policy', link: '#' },
        { name: 'Risk Warning Policy', link: '#' },
        { name: 'Cookie Policy', link: '#' },
        { name: 'Privacy Policy', link: '#' }
      ]
    },
    {
      title: 'GTC Financial Consultancy and GTC Global Trade Capital Co.Ltd (Vanuatu)',
      items: [
        { name: 'Client Onboarding Application GTC FC - VA – Retail V1.0', link: '#' },
        { name: 'Corporate Onboarding Application GTC FC - VA - Corporate V1.0', link: '#' },
        { name: 'Terms of Business', link: '#' },
        { name: 'Complaint Handling Policy', link: '#' },
        { name: 'Conflict of Interest Policy', link: '#' },
        { name: 'Risk Warning Policy', link: '#' },
        { name: 'Cookie Policy', link: '#' },
        { name: 'Privacy Policy', link: '#' }
      ]
    }
  ],
  'GTC Global LTD ( Mauritius)': [
    {
      title: 'Documents',
      items: [
        { name: 'Client Onboarding Application - MU – Retail', link: '#' },
        { name: 'Corporate Onboarding Application - MU - Corporate', link: '#' },
        { name: 'Client Agreement', link: '#' },
        { name: 'Privacy Policy', link: '#' },
        { name: 'Risk Warning', link: '#' },
        { name: 'Cookie Policy', link: '#' },
        { name: 'Website Disclaimer', link: '#' }
      ]
    }
  ],
  'GTC Global Trade Capital Co.Ltd (Vanuatu)': [
    {
      title: 'Documents',
      items: [
        { name: 'Client Onboarding Application - VA – Retail', link: '#' },
        { name: 'Corporate Onboarding Application - VA - Corporate', link: '#' },
        { name: 'Client Agreement', link: '#' },
        { name: 'Privacy Policy', link: '#' },
        { name: 'Risk Warning', link: '#' },
        { name: 'Cookie Policy', link: '#' },
        { name: 'Website Disclaimer', link: '#' }
      ]
    }
  ]
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

  const categories = Object.keys(legalData);
  const [selectedTab, setSelectedTab] = useState(0);

  // Open accordion index per tab
  const [openIndexes, setOpenIndexes] = useState(
    categories.map(() => 0) // default open first index in each tab
  );

  const handleAccordionToggle = (tabIndex, index) => {
    setOpenIndexes((prev) =>
      prev.map((item, i) => (i === tabIndex ? (item === index ? item : index) : item))
    );
  };

  return (
    <>
      <Hero
        imageUrl="/banner/faq.webp"
        title="Legal Policies & Client Agreements "
        description="Access all legal documents, client onboarding forms, privacy policies, risk disclosures, and regulatory information for GTC Financial Consultancy, GTC Global LTD (Mauritius), and GTC Global Trade Capital Co. Ltd (Vanuatu).
"
      />
    <div className="w-full max-w-6xl px-4 py-12 mx-auto">
      <Tab.Group
        selectedIndex={selectedTab}
        onChange={(index) => {
          setSelectedTab(index);
        }}
      >
        <Tab.List className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 border-b pb-2 mb-5">

          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'py-2 px-4 rounded-t-md text-sm md:text-base font-medium whitespace-nowrap',
                  selected ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className=" shadow-2xl p-2 border border-gray-100">
          {categories.map((category, tabIdx) => (
            <Tab.Panel key={category} className="space-y-4">
              {legalData[category].map((section, secIdx) => {
                const isOpen = openIndexes[tabIdx] === secIdx;

                return (
                  <div key={secIdx} className="border rounded-md">
                    <button
                      onClick={() => handleAccordionToggle(tabIdx, secIdx)}
                      className="w-full flex justify-between items-center px-4 py-3 bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] text-white text-left font-medium text-sm md:text-base"
                    >
                      <span>{section.title}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="px-4 py-3 bg-white">
                        <ul className="space-y-2">
                          {section.items.map((doc, idx) => (
                            <li key={idx}>
                              <a
                                href={doc.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-700 hover:underline"
                              >
                                <FaFilePdf className="text-red-600 w-4 h-4" />
                                <span className="text-sm md:text-base">{doc.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
    </>
  );
}; 

export default RiskWarningPage;
