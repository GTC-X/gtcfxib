import React from 'react';
import MoneyHero from '../component/MoneyExpo/Hero';
import ContentSection from '../component/MoneyExpo/ContentSection';
import TradeInvest from '../component/MoneyExpo/TradeInvest';
import ExpoTeam from '../component/MoneyExpo/ExpoTeam';

const MoneyExpoPage = () => {
  const moneyHeroContent = {
    title:
      "Unlock new trading opportunities with GTC FX at Forex Expo Dubai 2024. Engage with industry experts, explore cutting-edge trading tools, and gain exclusive insights to elevate your forex trading strategy. Don’t miss out on this chance to meet our team and discover how we can help you trade smarter.",
    subTitle: "Forex Expo Dubai 2024 Join GTC FX at Booth #30",
    location: "World Trade Centre, Dubai, UAE",
    time: "10:00 am – 06:00 pm",
    date: "7 & 8 Oct 2024",
  };

  const contentSectionData = {
    title: "Fill This Form below to Participate in Lucky Draw Spinning Wheel at Booth #30",
    description:
      "Join us at Forex Expo Dubai 2024, the largest trading event, hosted at World Trade Centre, Dubai, UAE. This expo is your opportunity to explore cutting-edge trading solutions, connect with industry leaders, and expand your financial knowledge.",
    subSections: [
      {
        title: "Join GTCFX at Forex Expo Dubai – Booth #30",
        content: [
          {
            heading: "Exclusive Workshops:",
            description:
              "Dive into interactive sessions led by our top experts. Gain practical insights and advanced strategies to elevate your trading and investment skills.",
          },
          {
            heading: "Connect with Industry Leaders:",
            description:
              "Network with influential professionals and stay ahead with the latest market trends and opportunities.",
          },
          {
            heading: "Explore Cutting-Edge Trading Tools:",
            description:
              "Discover our state-of-the-art trading platforms and educational resources crafted to boost your trading expertise and strategies.",
          },
        ],
      },
    ],
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
      <ContentSection
        title={contentSectionData.title}
        description={contentSectionData.description}
        subSections={contentSectionData.subSections}

      />
      <TradeInvest />
      <ExpoTeam />
    </>
  );
};

export default MoneyExpoPage;
