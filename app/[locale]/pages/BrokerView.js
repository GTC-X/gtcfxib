import React from 'react';
import MoneyHero from '../components/MoneyExpo/Hero';
import ContentSection2 from '../components/MoneyExpo/ContentSection2';
import TradeInvest from '../components/MoneyExpo/TradeInvest';
import ExpoTeam from '../components/MoneyExpo/ExpoTeam';
import AwardCarousel from '../components/partner/ibBroker/AwardCarousel';

const BrokerView = () => {
  const moneyHeroContent = {
    title:
      "Unlock new trading opportunities with GTC FX at BrokersView Expo Abu Dhabi 2024 . Engage with industry experts, explore cutting-edge trading tools, and gain exclusive insights to elevate your forex trading strategy. Don’t miss out on this chance to meet our team and discover how we can help you trade smarter.",
    subTitle: "BrokersView Expo Abu Dhabi 2024 – Join GTC FX at Booth #6",
    location: "Conrad Abu Dhabi, Abu Dhabi, UAE",
    time: "10:00 am – 06:00 pm",
    date: "11 & 12 Oct 2024",
  };

 

  return (
    <>
      <MoneyHero
        title={moneyHeroContent.title}
        subTitle={moneyHeroContent.subTitle}
        location={moneyHeroContent.location}
        time={moneyHeroContent.time}
        date={moneyHeroContent.date}
      />
      {/* Pass contentSectionData to ContentSection */}
      <ContentSection2/>
      <TradeInvest />
      <AwardCarousel />
    </>
  );
};

export default BrokerView;
