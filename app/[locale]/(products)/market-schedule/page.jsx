"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ProductsBanner from "@/app/[locale]/components/account/forex/ProductsBanner";
import ForexTradingAdv from "@/app/[locale]/components/account/forex/ForexTradingAdv";
import ForexSpreadTable from "@/app/[locale]/components/account/forex/ForexSpreadTable";
import ProductsFAQ from "@/app/[locale]/components/account/forex/ProductsFAQ";
import ProductsImageContent from "@/app/[locale]/components/account/forex/ForexImageContent";

const MarketSchedulePage = () => {
    const t = useTranslations("Instruments.forex");
    const ContentData = [
        {
            image: {
                src: "/account/forex/currencies-image.webp",
                width: "500",
                height: "450",
                alt: "Forex"
            },
            title: "What is Forex Trading",
            description: `Forex trading, short for foreign exchange (FX) trading, is the
      process of buying and selling currencies in the foreign exchange
      market with the aim of profiting from fluctuations in currency
      exchange rates. The forex market is one of the largest and most
      liquid financial markets in the world, where participants can
      trade a wide range of currency pairs, such as EUR/USD (Euro/US
      Dollar) or USD/JPY (US Dollar/Japanese Yen). <br />
      <br />
      In forex trading, traders speculate on the future direction of
      exchange rates. They can go long, which means buying a currency
      pair with the expectation that its value will increase, or they
      can go short, selling a currency pair with the expectation that
      its value will decrease. The profit or loss in forex trading is
      determined by the difference between the purchase price (bid)
      and the selling price (ask) of the currency pair.`,
        },
        {
            image: {
                src: "/account/forex/mobiles.webp",
                width: "500",
                height: "450",
                alt: "Forex"
            },
            title: "How to Trade Forex?",
            description:
                "Forex traders use various analysis methods, including technical analysis, which involves studying price charts and patterns, and fundamental analysis, which considers economic, political, and financial factors that influence currency movements. Risk management is crucial in forex trading, as it can be highly volatile and leveraged, meaning traders can control a larger position size with a relatively small amount of capital, but this also increases the potential for both gains and losses. Successful forex trading requires a solid understanding of the market, trading strategies, and risk management techniques",
        },
        {
            image: {
                src: "/account/forex/laptop.webp",
                width: "500",
                height: "450",
            },
            title: "Forex Trading With Us",
            description: `Engaging in Forex trading through our broker. we provide clients with immediate access to live forex market prices. They are presented with buying and selling rates for a variety of financial instruments via an online trading platform.<br/><br/> Clients enjoy the flexibility to choose their preferred purchase or sale prices and can execute transactions at their discretion.
      Forex trading is conducted 24 hours a day, five days a week, due to the international nature of the market. The primary goal of forex trading is to profit from the fluctuations in exchange rates between different currency pairs`,
        },
    ];
    const faqs = [
        {
            title: "What are Forex symbol in MT4/MT5?",
            paragraphs: [
                "In MetaTrader 4 (MT4) and MetaTrader 5 (MT5), Forex symbols are representations of different currency pairs that traders can trade on the platform. These symbols are typically composed of a three-letter abbreviation for the base currency and a three-letter abbreviation for the quote currency.",
                `For example, in the symbol "EUR/USD," "EUR" represents the Euro (base currency), and "USD" represents the US Dollar (quote currency). The Forex symbols are used to identify and track the value of one currency relative to another.`,
                `Here are a few examples of Forex symbols:<br />
        EUR/USD - Euro/US Dollar
        USD/JPY - US Dollar/Japanese Yen
        GBP/USD - British Pound/US Dollar
        AUD/JPY - Australian Dollar/Japanese Yen
        NZD/USD - New Zealand Dollar/US Dollar`,
            ],
        },
    ];
    const advData = [
        {
            title: t("adv1_11"),
            subtitle: "Starting from 0.0* Pips111",
            image: {
                src: "/account/forex/spread.webp",
                width: "245",
                height: "245",
            },
        },
        {
            title: "Leverage",
            subtitle: "Up to 1000:1",
            image: {
                src: "/account/forex/leverage.webp",
                width: "245",
                height: "245",
            },
        },
        {
            title: "Instant and",
            subtitle: "Fast Execution",
            image: {
                src: "/account/forex/execution.webp",
                width: "245",
                height: "245",
            },
        },
        {
            title: "Negative",
            subtitle: "Balance Protection",
            image: {
                src: "/account/forex/protection.webp",
                width: "245",
                height: "245",
            },
        },
        {
            title: "No Trading",
            subtitle: "Restrictions",
            image: {
                src: "/account/forex/candles.webp",
                width: "245",
                height: "245",
            },
        },
        {
            title: "No Requotes",
            subtitle: "and Rejections",
            image: {
                src: "/account/forex/thumbs-up.webp",
                width: "245",
                height: "245",
            },
        },
    ];
    return (
        <>
            <ProductsBanner title={'Trade Forex'} subtitle={'With a Tightest Spread Starting from 0 Pips Offering Leverage up to 1000:1 & No restriction'} image={{ src:'/account/forex/currencies-image.webp', alt:'Forex Banner', width:500, height: 360 }} className={"mt-9"}/>
            <ForexTradingAdv className={"mt-10 lg:mt-20"} data={advData}/>
                <ForexSpreadTable className={"mt-10 lg:mt-20"} data={advData}/>
            <ProductsImageContent className={"mt-10 lg:mt-20"} data={ContentData}/>
            <ProductsFAQ className={"mt-10 lg:mt-20"} faqs={faqs}/>
        </>
    );
};

export default MarketSchedulePage;
