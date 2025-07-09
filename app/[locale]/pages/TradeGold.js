import React from 'react'
import Hero from '../components/account/productDetail/Hero'
import WhyPartnerWithGtc from '../components/partner/ibBroker/WhyPartnerWithGtc'

const TradeGoldPage = () => {
  return (
    <>
    <Hero
      title="TRADE GOLD WITH CONFIDENCE"
      subtitle="Unlock the Potential of Gold Trading!"
      description="Experience secure trading, low spreads, and real-time market insights. Access gold markets 24/7 and diversify your portfolio with the world's most trusted trading platform."
      backgroundImage="/overlay.webp"
      imageSrc="/IB-pic.webp"
      showForm={true}
    />
       <WhyPartnerWithGtc title="Invest with the World’s Premier Online Trading Platform" subHeading="Trade 27,000 financial products with the most stable platform, our Meta Trader Platform offers favorable spreads.
" reasons={"/gold.webp"}/>
    </>
  )
}

export default TradeGoldPage