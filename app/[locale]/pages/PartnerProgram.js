"use client";
import VpsStepsImages from "../components/trendingTools/vpsHostingServices/stepsVps";
import { useTranslations } from "next-intl";
import { BackOfCard } from "../components/trendingTools/vpsHostingServices/whyVpsHosting";
import Accordion from "../components/common/Accordion";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaSackDollar, FaRankingStar } from "react-icons/fa6";
import Banner from "../components/partner/program/Banner";
import WhyPartner from "../components/partner/program/WhyPartner";
import OfferPartner from "../components/partner/program/OfferPartner";
import JoinPPP from "../components/partner/program/JoinPPP";
import HowToBecomeIB from "../components/partner/ibBroker/HowToBecomeIB";

const PremiumPartnerPage = () => {
  const t = useTranslations("partner");
  const steps = [
    {
      imageSrc: "/common/step1-1.webp",
      alt: "Step 1",
      stepText: "",
      id: 1,
      stepDescription: t("premiumPartner.content.howWork.option1.heading"),
      aosDuration: 300,
      aosDelay: 0,
    },
    {
      imageSrc: "/common/step1-2.webp",
      alt: "Step 2",
      stepText: "",
      id: 2,
      stepDescription: t("premiumPartner.content.howWork.option2.heading"),
      aosDuration: 400,
      aosDelay: 100,
    },
    {
      imageSrc: "/common/step1-3.webp",
      alt: "Step 3",
      stepText: "",
      id: 3,
      stepDescription: t("premiumPartner.content.howWork.option3.heading"),
      aosDuration: 500,
      aosDelay: 200,
    },
    {
      imageSrc: "/common/step1-4.webp",
      alt: "Step 4",
      stepText: "",
      id: 4,
      stepDescription: t("premiumPartner.content.howWork.option4.heading"),
      aosDuration: 500,
      aosDelay: 200,
    },
  ];
  const cardsData = [
    {
      icon: <BsCurrencyExchange size={60} />,
      title: t("premiumPartner.content.cardflipper.one.heading"),
      paragraph:t("premiumPartner.content.cardflipper.one.para"),
      link: "",
    },
    {
      icon: <FaSackDollar size={60} />,
      title: t("premiumPartner.content.cardflipper.two.heading"),
      paragraph:t("premiumPartner.content.cardflipper.two.para"),
      link: "",
    },
    {
      icon: <FaRankingStar size={60} />,
      title: t("premiumPartner.content.cardflipper.three.heading"),
      paragraph:t("premiumPartner.content.cardflipper.three.para"),
      link: "",
    },
  ];
  const faqList = [
    {
      title: t("premiumPartner.content.faq.one.ques"),
      desc: t("premiumPartner.content.faq.one.ans"),
    },
    {
      title:t("premiumPartner.content.faq.two.ques"),
      desc: t("premiumPartner.content.faq.two.ans"),
    },
    {
      title:t("premiumPartner.content.faq.three.ques"),
      desc: t("premiumPartner.content.faq.three.ans"),
    },
  ];
  const joinSteps = [
    {
        "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/1.webp",
        "text": t("premiumPartner.content.howWork.option1.heading")
    },
    {
        "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/2.webp",
        "text": t("premiumPartner.content.howWork.option2.heading")
    },
    {
        "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/3.webp",
        "text": t("premiumPartner.content.howWork.option3.heading")
    },
    {
        "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/4.webp",
        "text": t("premiumPartner.content.howWork.option4.heading")
    }
];
  return (
    <>
      <Banner />
      <HowToBecomeIB
      title={t("premiumPartner.content.howWork.heading")}
      subtitle={t("premiumPartner.content.howWork.descr")}
      steps={joinSteps}
      gridCols="lg:grid-cols-4" // for 3 columns on large screens
      bgColor="pb-12" // for white background
    />
      <OfferPartner />

      <section className="container py-12">
        <h2 className="HeadingH2 pb-6">
        {t("premiumPartner.content.other.whyChoose")}
          <span className="text-secondary bg-primary px-4 rounded-[6px] ml-2">
          {t("premiumPartner.content.other.premiumPartner")}
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cardsData?.map((item) => (
            <BackOfCard
              title={item?.title}
              icon={item?.icon}
              paragraph={item?.paragraph}
            />
          ))}
        </div>
      </section>
      <WhyPartner />
      <JoinPPP />
      <section className="py-12">
        <h2 className="HeadingH2 pb-10">
        {t("premiumPartner.content.faq.heading")}
        </h2>
        <div className="container">
          <Accordion accordionData={faqList} theme="blue" textColor="yellow" />
        </div>
      </section>
    </>
  );
};

export default PremiumPartnerPage;
