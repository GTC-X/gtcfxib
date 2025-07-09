'use client'
import React from 'react'
import Hero from '../components/event/webinar/Hero'
import WhoShoudAttend from '../components/event/webinar/WhoShouldAttend'
import WhoAttend from '../components/event/webinar/WhyAttendWebinar'
import { FaChartLine, FaLaptop, FaUniversity, FaGlobe } from "react-icons/fa";
import { BsSliders2Vertical } from "react-icons/bs";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import HowToAttendEvent from '../components/event/seminar/HowAttendEvent'
import AboutGTCFX from '../components/event/seminar/AboutGTCFX'
import { useTranslations } from 'next-intl'




const WebinarAdvPage = () => {
  const t = useTranslations("compaign.webinar");


  const cards = [
    {
      title: "10-Week Technical Analysis Series (English)",
      paragraph:
        "Learn essential trading strategies, chart patterns, and risk management techniques in this structured 10-week program.",
      icon: <FaUniversity size={60} />, 
      registrationLink: "https://zoom.us/meeting/register/tJAqcOqoqD8uH9CWNV0o8ZBWeqy0MzPixd-f",
    },
    {
      title: "Live Market Analysis Sessions (English)",
      paragraph:
        "Join weekly live sessions analyzing Forex, Gold, Bitcoin, and more using Elliott Wave principles.",
      icon: <FaChartLine size={60} />, 
      registrationLink: "https://zoom.us/meeting/register/tJMqcuqprjsoHNxZhAlmiZCQ0fbahLqa7hS8",
    },
    {
      title: "10-Week Technical Analysis Series (Hindi)",
      paragraph:
        "Master technical analysis from basics to advanced concepts, including real-time trading insights.",
      icon: <FaLaptop size={60}  />, 
      registrationLink: "https://zoom.us/meeting/register/tJMld-ivrjgjH9S-0xgQbjI41WYYIxgm6l_y",
    },
    {
      title: "Live Market Analysis Sessions (Hindi)",
      paragraph:
        "Enhance your trading skills with expert-led market analysis and high-potential trade setups.",
      icon: <FaGlobe size={60}/>, 
      registrationLink: "https://zoom.us/meeting/register/g2bMGNvMTAecDrfjT-bTJQ",
    }
  ];

  const stepsData = [
    {
      imageSrc: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/1.webp",
      alt: "Step 1",
      stepText: t("joinUs.steps.0.stepText"),
      stepDescription: t("joinUs.steps.0.stepDescription"),
      color: "primary"
    },
    {
      imageSrc: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/1.webp",
      alt: "Step 2",
      stepText: t("joinUs.steps.1.stepText"),
      stepDescription: t("joinUs.steps.1.stepDescription"),
      color: "primary"
    },
    {
      imageSrc: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/4.webp",
      alt: "Step 3",
      stepText: t("joinUs.steps.2.stepText"),
      stepDescription: t("joinUs.steps.2.stepDescription"),
      color: "primary"
    },
  ];


  return (
    <>
     <Hero
        title=  {t("hero.webinarTitle")}
        subtitle= {t("hero.webinarSubtitle")}
        description= {t("hero.webinarDescription")}
        date= {t("hero.webinarDate")}
        platform={t("hero.webinarPlatform")}
        registerButtonText= {t("hero.registerButton")}
      />
     <WhoShoudAttend />
   
        <WhoAttend
      sectionTitle= {t("FindOut.sectionTitle")}
      description= {t("FindOut.description")}
      cards={cards}
    />
     
      <HowToAttendEvent
      sectionTitle= {t("joinUs.sectionTitle")}
      sectionDescription= {t("joinUs.sectionDescription")}
      steps={stepsData}
      registerButtonText=  {t("joinUs.registerButton")}
       />

<AboutGTCFX
      sectionTitle={t("aboutUs.sectionTitle")}
      description1={t("aboutUs.description1")}
      description2={t("aboutUs.description2")}
      description3={t("aboutUs.description3")}
    />
     
    </>
  )
}

export default WebinarAdvPage