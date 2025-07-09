
'use client'
import React from 'react'
import Hero from '../components/CreditBonus/Hero'
import PaymentOption from '../components/account/PaymentOption'
import ClaimYourBonus from '../components/15-deposit-bonus/ClaimYourBonus'
import TradeInvestStep from '../components/15-deposit-bonus/Steps'
import TermsAndConditions from '../components/15-deposit-bonus/Terms'

const HundredCreditBonus = () => {
  return (
    <>
         <Hero />
         <ClaimYourBonus />

    <TradeInvestStep />
    <TermsAndConditions />
    </>
  )
}

export default HundredCreditBonus