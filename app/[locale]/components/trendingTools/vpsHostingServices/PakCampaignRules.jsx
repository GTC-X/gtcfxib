import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import icons

const PakCampaignRules = () => {
    const [activeTab, setActiveTab] = useState(null);

    const toggleTab = (index) => {
      setActiveTab(activeTab === index ? null : index);
    };

  const rules = [
    {
      title: "Definitions and Interpretations",
      content: [
        "\"VPS\" means a Virtual Private Server.",
        "\"Trade,\" \"Trading,\" \"Live Trading\" refers to any transactions involving Shares, FX, CFDs, or Spread Bets executed on an execution-only basis through GTCFX.",
        "\"You,\" \"Your,\" and \"You're\" pertain to the individual client who is participating in or utilizing the Free VPS service/program offered by GTCFX, which requires opening a live trading account and maintaining a minimum deposit of $1,000."
      ]
    },
    {
      title: "Prerequisites for Receiving Your Virtual Private Server",
      content: [
        "To qualify for a new Virtual Private Server, you must successfully open a live trading account and deposit a minimum of $1,000.",
        "Account Types: \"Standard\" or \"ECN\""
      ]
    },
    {
      title: "Requirements to Maintain a FREE Virtual Private Server",
      content: [
        "To keep your VPS free of charge, you must meet the monthly trading volume requirements, or minimum deposit which vary by account type:",
        "Standard Account: 10 lots per month",
        "ECN Account: 10 lots per month",
        "Maintain a minimum deposit of $1,000",
        "If you do not meet the required monthly volume, you will be charged a fee:",
        "VPS Charge: $40 per month",
        "Volume assessments are based on trading in Forex pairs (currencies) and metals."
      ]
    },
    {
      title: "VPS Termination Conditions",
      content: [
        "Your VPS may be terminated if:",
        "You do not meet the required trading volume in any given month.",
        "Your live trading account becomes inactive.",
        "You cancel or opt-out of the Free VPS program.",
        "Your account balance is fully liquidated."
      ]
    },
    {
      title: "Agreeing to the Terms and Conditions",
      content: [
        "By submitting an application and requesting a free VPS, you agree to these terms and conditions of the Free VPS program."
      ]
    }
  ];

  return (
    <div className="pb-8 md:pb-12 2xl:pb-16 container">
        <div className=" text-center">
        <h2 className="HeadingH2 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-center mb-8">FREE VPS TERMS & CONDTIONS</h2>
        </div>
          
      {rules.map((rule, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full text-left flex justify-between items-center px-4 py-5 bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90% border border-gray-50 hover:bg-secondary focus:outline-none font-bold text-white hover:text-white"
            onClick={() => toggleTab(index)}
          >
            {rule.title}
            {activeTab === index ? <FaMinus size={18} /> : <FaPlus size={18} />}
          </button>
          <div
            className={`pl-4 py-8 border border-gray-100 ${activeTab === index ? "block bg-primary" : "hidden"}`}
          >
            <ul className="list-disc text-white pl-5">
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

export default PakCampaignRules