import React from 'react'
import TradeBanner from '../components/15-deposit-bonus/Banner'
import ValueOffers from '../cashback-bonus-promotion/more-details/Offers'
import CashbackTable from '../cashback-bonus-promotion/more-details/CashbackTable'
import TermsAndConditionsCashBack from '../cashback-bonus-promotion/more-details/Terms'

const CAshbackBonusPromotionPage = () => {
    return (
        <>
            <TradeBanner promo={true} />
            <ValueOffers />
            <CashbackTable />
            <TermsAndConditionsCashBack />
        </>
    )
}

export default CAshbackBonusPromotionPage