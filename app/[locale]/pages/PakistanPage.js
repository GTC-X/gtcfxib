'use client'
import React from 'react'
import PaymentOption from '../components/account/PaymentOption'
import DepositRules from '../components/account/DepositRules'
import Terms300Bonus from '../components/CreditBonus/Terms300Bonus'
import { useTranslations } from "next-intl";

const PakistanPage = () => {

  const t = useTranslations("compaign.100BonusPro.bannerText");

  return (
   <>
   
    <PaymentOption />
    <DepositRules />
    <Terms300Bonus />
   </>
  )
}



export default PakistanPage