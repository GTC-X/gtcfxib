// components/TermsAndConditions.js
'use client'
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';



const Terms300Bonus = () => {

  const t = useTranslations("compaign.tradeWin.terms")

  // Suppose this data comes from a JSON file or fetched from an API
const termsData = [
  "The bonus will be calculated as 100% of the initial deposit made by the Client and credited to the Client's trading account.",
    "The maximum bonus amount per customer is up to $300.",
    "The bonus is applicable on first time deposits only. The client is not eligible for the bonus on internal transfers.",
    "The bonus is credited solely as a trading credit and does not constitute a part of the Client’s deposit. The Client does not have the right to withdraw the bonus or consider it as part of their deposited funds.",
    "An internal transfer request from the bonus account will be treated as a withdrawal from that trading account. If the client wishes to do an internal transfer to another trading account, the client needs to maintain the initial deposit amount of equity.",
    "Clients must complete trading requirements within 90 days of receiving the bonus. If the full trading requirements are not met at the time of expiry, clients are only entitled to a percentage of the bonus calculated pro rata.",
    "This bonus cannot be used in combination with any other bonuses.",
    "This bonus only applies to Standard Account and PRO Accounts Only.",
    "Indices, Shares and Crypto trading do not count into trading volume requirements.",
    "GTC reserves the right to correct the trading calculation in the event of any suspected abuse or manipulation of this bonus policy and promotion.",
    "Clients who are trading under a MAM or PAMM are not entitled to any bonus.",
    "If the client's positions are closed due to a stop out before having the bonus added, the client is not eligible for the bonus."
  ];
  return (
    <section className="py-10 md:py-12 xl:py-16 2xl:py-20 bg-gradient-to-b from-slate-100 via-gray-50 to-white" id="register3">
      <div className="container mx-auto px-4 text-center">
        <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-[600] xl:text-[30px] 2xl:text-[32px] capitalize max-w-xl leading-tight">{t("title")}</h2>
        <ul className="list-disc pl-6 space-y-2 ltr:text-left rtl:text-right mt-8">
          {termsData.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
   
      </div>
    </section>
  );
};


export default Terms300Bonus;

