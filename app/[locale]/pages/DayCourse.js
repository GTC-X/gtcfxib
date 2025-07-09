'use client'
import React from 'react'
import Hero from '../components/event/webinar/Hero'
import { FaCircleDollarToSlot, FaHandHoldingDollar } from "react-icons/fa6";
import { BsSliders2Vertical } from "react-icons/bs";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import WhoShoudAttend from '../components/event/webinar/WhoShouldAttend'
import WhoAttend from '../components/event/webinar/WhyAttendWebinar'
import Registration from '../components/event/seminar/Registration'
import HowToAttendEvent from '../components/event/seminar/HowAttendEvent'
import AboutGTCFX from '../components/event/seminar/AboutGTCFX'
import { useTranslations } from 'next-intl';



const DayCourse = () => {
    const t = useTranslations("compaign.dayCourse");


  const cards = [
    {
      icon: <FaCircleDollarToSlot size={60} />,
      title: t("FindOut.cards.0.title"),
      paragraph: t("FindOut.cards.0.paragraph"),
    },
    {
      icon: <BsSliders2Vertical size={60} />,
      title: t("FindOut.cards.1.title"),
      paragraph: t("FindOut.cards.1.paragraph"),
    },
    {
      icon: <FaHandHoldingDollar size={60} />,
      title: t("FindOut.cards.2.title"),
      paragraph: t("FindOut.cards.2.paragraph"),
    },
    {
      icon: <HiMiniComputerDesktop size={60} />,
      title: t("FindOut.cards.3.title"),
      paragraph: t("FindOut.cards.3.paragraph"),
    },
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
       <Registration
      platform={t("registation.platform")}
      date={t("registation.date")}
      time={t("registation.time")}
      note=   {t("registation.note")}
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

export default DayCourse