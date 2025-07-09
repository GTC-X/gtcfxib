'use client'
import React from 'react'
import PaymentOption from '../components/account/PaymentOption'
import DepositRules from '../components/account/DepositRules'
import TermsCredit from '../components/CreditBonus/TermsCredit'
import { useTranslations } from "next-intl";

const HundredCreditBonus = () => {

  const t = useTranslations("compaign.100BonusPro.bannerText");

  return (
   <>

    <PaymentOption />
    <DepositRules />
    <TermsCredit />
   </>
  )
}

export default HundredCreditBonus