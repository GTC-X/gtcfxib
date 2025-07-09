'use client'
import Hero from "./components/home/Hero";
import { useTranslations } from "next-intl";
import WhyGTC from "./components/home/WhyGTC";
import Markets from "./components/home/Markets";
import SecurityFund from "./components/home/SecurityFund";
import StatCounter from "./components/home/StatCounter";
import AOS from "aos";
import "aos/dist/aos.css";
import LocationContextProvider from "../../context/location-context";
import AssesAsset from "./components/home/AssesAsset";
import { useParams } from "next/navigation";
import ClientsNetwork from "./components/home/ClientsNetwork";
import ClientPayments from "./components/home/ClientPayments";
import LiquiditySolutions from "./components/home/LiquiditySolutions";
import TradingPlatform from "./components/home/TradingPlatform";
 
export default function HomePage() {
  const t = useTranslations("home"); 

  const router = useParams();
  const { locale } = router;

  // Dynamically handle value based on locale
  const dynamicValue = locale === "zh-hans" || locale === "zh-TW" ? 1350 : 135;
  

  const statsOne = [
    { value: 985000, description: t("hero.fact_desc1"), prepend: "+" },
    { value: 27000, description: t("hero.fact_desc2"), symbol: "", prepend: "+", },
    { value: 20, description: t("hero.fact_desc3"), prepend: "+", },
    {
      value: dynamicValue, // Dynamically set based on locale
      description: t("hero.fact_desc4"),
      bold: t("hero.fact_no4"),
      symbol: t("hero.fact_syn1"),
      prepend: true,
    },

  ];


  return (
    <>
   
      <LocationContextProvider>
        <Hero />
        <StatCounter stats={statsOne} />
        <WhyGTC />
        <LiquiditySolutions />
        <TradingPlatform />
        <SecurityFund />
        <Markets /> 
        <ClientsNetwork />
        <ClientPayments />
        {/* <CompanyNews/> */}
      </LocationContextProvider>
    </>
  );
}
