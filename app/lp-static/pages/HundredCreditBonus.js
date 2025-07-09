'use client'
import React from 'react'
import Hero from '../component/CreditBonus/Hero'
import PaymentOption from '../component/PaymentOption'
import DepositRules from '../component/DepositRules'
import TermsCredit from '../component/CreditBonus/TermsCredit'
import { MdOutlinePayments } from 'react-icons/md';
import { LuWallet2 } from 'react-icons/lu';
import { BsBank } from 'react-icons/bs';

const HundredCreditBonus = () => {
  
  const customPaymentMethods = [
    {
      icon: <MdOutlinePayments />,
      title: "Payment Methods",
      description:"We also accept a range of secure online payment channels that will vary according to your country.",
    },
    {
      icon: <LuWallet2 />,
      title:"Wallet Payment",
      description: "Various funding methods including credit card, apple pay, google pay and other wallets",
    },
    {
      icon: <BsBank />,
      title: "Bank Transfer",
      description: "Wire transfers to our bank are accepted.",
    },
  ];

  const customSteps = [
    {
      title: "1. Login",
      imageSrc: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/part1.webp',
      alt: 'Fund Account',
      description: "Access by logging into your client portal.",
    },
    {
      title: "2. Deposit",
      imageSrc: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/part2.webp',
      alt: 'Fund Account',
      description: "You can either click on the wallet icon or 'DEPOSIT' in the menu on the top left of the screen.",
    },
    {
      title: "3. Select Payment Method",
      imageSrc: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/part3.webp',
      alt: 'Fund Account',
      description: "Browse through the funding categories and click on your preferred payment method.",
    },
  ];

  const termsData = [
    "The bonus will be calculated as 100% of the initial deposit made by the Client and credited to the Client's trading account.",
    "The maximum bonus amount per customer is up to $100.",
    "100% bonus is not applicable to Indonesian customers",
    "The bonus is applicable on first-time deposits only. The client is not eligible for the bonus on internal transfers.",
    "The bonus is credited solely as a trading credit and does not constitute a part of the Client’s deposit. The Client does not have the right to withdraw the bonus or consider it as part of their deposited funds.",
    "An internal transfer request from the bonus account will be treated as a withdrawal from that trading account. If the client wishes to do an internal transfer to another trading account, the client needs to maintain the initial deposit amount of equity.",
    "Clients must complete trading requirements within 90 days of receiving the bonus. If the full trading requirements are not met at the time of expiry, clients are only entitled to a percentage of the bonus calculated pro rata.",
    "This bonus cannot be used in combination with any other bonuses.",
    "This bonus only applies to Standard Account and PRO Accounts Only.",
    "Indices, Shares, and Digital Assets trading do not count into trading volume requirements.",
    "GTC reserves the right to correct the trading calculation in the event of any suspected abuse or manipulation of this bonus policy and promotion.",
    "Clients who are trading under a MAM or PAMM are not entitled to any bonus.",
    "If the client's positions are closed due to a stop-out before having the bonus added, the client is not eligible for the bonus."
  ];

  return (
   <>
     <Hero 
      specialOfferText="Special Offer For Traders"
      mainTitle="Get a Special 100% Bonus of up to $100 on Your Deposit"
      offerValidity="Valid until 31 Dec, 2024"
      offerNote="Hurry, take advantage of this limited-time offer!"
    />
    <PaymentOption
      title="Alternative Payment Options"
      subtitle="Explore additional payment options available for you."
      paymentMethods={customPaymentMethods}
    />
      <DepositRules
      title="Get Started with Our Platform"
      description="Complete these steps to open and fund your account, and start trading."
      steps={customSteps}
    />
    <TermsCredit
        title="Terms and Conditions"
        subtitle=""
        terms={termsData}
      />
   </>
  )
}

export default HundredCreditBonus