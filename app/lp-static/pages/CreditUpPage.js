'use client'
import React from 'react'
import PaymentOption from '../component/PaymentOption'
import DepositRules from '../component/DepositRules'
import CreditHero from '../component/CreditBonus/CreditHero'
import NewTermsCredit from '../component/CreditBonus/NewTermsCredit'

const CreditUpPage = () => {
  return (
   <>
    <CreditHero />
    <PaymentOption />
    <DepositRules />
    <NewTermsCredit />
 
   </>
  )
}
export default CreditUpPage