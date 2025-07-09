import { createTranslator } from "next-intl";
import React from "react";
import TradeGoldPage from "../pages/TradeGold";

export async function generateMetadata({ params: { locale } }) {
    const messages = (await import(`../../../messages/${locale}.json`)).default;
    const t = createTranslator({ locale, messages });
    const url =
      locale != "en"
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/trade-in-gold`
        : `${process.env.NEXT_PUBLIC_BASE_URL}/trade-in-gold`;
  
    return {
      title: "Trade Gold with GTCFX | Your Trusted Gold Trading Platform",
      description: "Trade gold effortlessly with GTCFX, the premier gold trading platform. Access live gold prices, secure transactions, and expert support. Start trading gold today and secure your financial future!",
      alternates: {
        canonical: url,
      },
    };
  }

const page = ()=>{
    return <TradeGoldPage/>
} 

export default page;