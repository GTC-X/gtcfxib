'use client'
import { useState } from "react";

const CampaignRules = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (index) => {
    if (activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };

  const rules = [
    {
      title: "Campaign Rules:",
      content: [
        "This campaign only applicable for Forex, Gold, Silver and Oil trading.",
        "The campaign only applies to ECN account, standard account and pro account.",
        "Clients who are trading under a PAM or MAM account is not entitled to this campaign.",
        "Only IB itself and the IB’s direct clients’ performance will be calculated (excluding the IB’s sub-IBs).",
        "All IBs with a net deposit of more than $50,000 are eligible to participate.",
        "Only trading on MT4/MT5 platforms are permissive.",
        "The program started at January 1, 2025, and it will be ended at Dec 31st 2025.",
        "GTCFX reserves the right to disqualify agents found engaging in irregular trading activities, including scalping, price manipulation, and abuse of liquidity."
      ]
    },
    {
      title: "Reward Claiming Rules:",
      content: [
        "An IB can only apply for one reward at a time; two rewards can't be valid simultaneously.",
        "Please contact your relationship manager or support@gtcfx.com to claim the reward.",
        "Once a reward is redeemed, trading volume resets for new rewards.",
        "Rewards may vary by the partner's country of residence.",
        "After meeting the conditions, clients can apply anytime, and GTCFX will issue the reward within 15 working days."
      ]
    },
    {
      title: "Disclaimer:",
      content: ["GTCFX reserves the right of final interpretation of this program."]
    }
  ];

  return (
    <div className="py-5">
      {rules.map((rule, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full text-left px-4 py-5 bg-transparent border border-gray-50 hover:bg-secondary focus:outline-none font-bold text-secondary hover:text-white"
            onClick={() => toggleTab(index)}
          >
            {rule.title}
          </button>
          <div
            className={`border border-gray-100 pl-4 py-8 ${activeTab === index ? "block bg-secondary bg-opacity-25" : "hidden"}`}
          >
            <ul className="list-disc text-white pl-5 op">
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
