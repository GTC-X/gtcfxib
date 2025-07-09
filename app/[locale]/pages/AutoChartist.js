"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import Hero from "../components/autocharlist/Hero";
import GtcClientAdvantage from "../components/autocharlist/GtcClientAdvantage";
import AutochartistTypes from "../components/autocharlist/AutochartistTypes";
import AutoCharlistApps from "../components/autocharlist/AutoCharlistApps";
import { useTranslations } from "next-intl";
import WhyCTrader from "../components/ctrader/WhyCTrader";
import { FiSliders, FiShuffle, FiAirplay, FiLayers  } from "react-icons/fi";
import { BiVector } from "react-icons/bi";
import { RxRocket } from "react-icons/rx";


const AutoChartist = () => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  const t = useTranslations("prime-tech.technicalTool")

const boxContents = [
  {
    icon: <FiSliders />,
    description: t("autoCharlist.BetterTradingDecisions.title1"),
    number: 1,
  },
  {
    icon: <RxRocket />,
    description:t("autoCharlist.BetterTradingDecisions.title2"),
    number: 2,
  },
  {
    icon: <BiVector />,
    description: t("autoCharlist.BetterTradingDecisions.title3"),
    number: 3,
  },
  {
    icon: <FiShuffle />,
    description: t("autoCharlist.BetterTradingDecisions.title4"),
    number: 4,
  },
  {
    icon: <FiLayers />,
    description: t("autoCharlist.BetterTradingDecisions.title5"),
    number: 5,
  },
  {
    icon: <FiAirplay />,
    description: t("autoCharlist.BetterTradingDecisions.title6"),
    number: 6,
  },
];


  return (
    <>
      <Hero />
      <GtcClientAdvantage />
        <WhyCTrader
      title={t("autoCharlist.BetterTradingDecisions.heading")}
      boxContents={boxContents}
      boxStyle="custom-box-style" // Add your custom box style classes here
      numberStyle="custom-number-style" // Add your custom number style classes here
      iconSize="custom-icon-size" // Add your custom icon size classes here
      numColumns={3} // Specify the number of columns dynamically
    />
      <AutochartistTypes />

      <AutoCharlistApps />
      
 
    </>
  );
};
export default AutoChartist;
