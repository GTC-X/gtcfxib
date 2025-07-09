import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'; // Import plus and minus icons

const NewTermsCredit = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = index => {
    setActiveSection(activeSection === index ? null : index);
  };

  // Fetching sections from translations
  const sections = [
    {
      title: "General Provisions",
      details: [
        "As part of our promotional offerings, GTCFX is pleased to offer a 100% Tradable Bonus up to $300 on the first deposit, available to all clients.",
        "The promotion is available to all new and existing clients who meet the eligibility criteria specified below.",
      ]
    },
    {
      title: "Eligibility Criteria",
      details: [
        "Open a real trading account with GTC FX.",
        "Make a first or subsequent deposit into their real trading account.",
        "The maximum bonus amount per client is $300 or the equivalent in other currencies."
      ]
    },
    {
      title: "Bonus Allocation",
      details: [
        "The bonus amount is equal to 100% of the deposit made by the client, subject to the maximum bonus cap of $300.",
        "It may take up to 24 hours for the bonus to be credited to the client's account after the deposit has been made and verified."
      ]
    },
    {
      title: "Usage of Bonus",
      details: [
        "The trading bonus can be used exclusively for trading purposes within the GTCFX trading platform.",
        "The bonus cannot be withdrawn under any circumstances.",
        "Profits generated from trading with the bonus can be withdrawn, subject to GTCFX’s standard withdrawal procedures."
      ]
    },
    {
      title: "Withdrawal Conditions",
      details: [
        "Any withdrawal of funds from the client's real trading account will result in the removal of the bonus proportionally to the percentage of the requested amount of the withdrawal from the respective Eligible Client’s real Account with GTCFX."
      ]
    },
    {
      title: "Leverage Terms",
      details: [
        "Leverage will be 1:100. Bonus is FTD."
      ]
    },
    {
      title: "Additional Conditions",
      details: [
        "GTC FX reserves the right to amend, alter, or terminate this promotion at any time without prior notice.",
        "This bonus scheme is subject to GTC FX's general terms and conditions and the terms of service of the trading platform.",
        "Any indication of abuse or manipulation of the bonus scheme may result in the disqualification of the client from the promotion and removal of the bonus."
      ]
    }
  ];

  return (
    <div className="container mx-auto text-center py-12">
      <h1 className="text-center animate-text bg-gradient-to-b from-primary via-primary to-secondary bg-clip-text text-transparent text-xl md:text-3xl font-normal mb-4">GTCFX 100% Tradeable Bonus Scheme - Detailed Terms and Conditions</h1>
      <p className='text mb-10'>100% Credit bonus is Tradeable & Loseable, upon withdrawal of funds, Credit will he removed ratio to withdrawal amount.</p>
      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleSection(index)}
            className="w-full flex justify-between items-center px-4 py-4 bg-gradient-to-b from-[#24358b] via-[#242c75] to-[#141b43] border-y border-gray-200 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <span>{section.title}</span>
            {activeSection === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
          <div className={`transition-height duration-500 ease-in-out overflow-hidden ${activeSection === index ? 'max-h-screen' : 'max-h-0'}`}>
            <ul className="list-disc p-10 text-primary border border-gray-200 shadow-2xl text-left">
              {section.details.map((detail, idx) => (
                <li key={idx} className="pb-1">{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewTermsCredit