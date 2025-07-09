import { createTranslator } from "next-intl";
import React from "react";
import SwapUpdatePage from "../pages/SwapUpdate";
import GenericTradingHours from "../pages/GenericTradingHours";

export async function generateMetadata({ params: { locale } }) {
    const messages = (await import(`../../../messages/${locale}.json`)).default;
    const t = createTranslator({ locale, messages });
    const url =
        locale != "en"
            ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/generic-trading-hours`
            : `${process.env.NEXT_PUBLIC_BASE_URL}/generic-trading-hours`;

    return {
        title: "Forex & CFD Trading Hours | Market Opening Times - GTCFX",
        description:
          "Check the latest trading hours for Forex, Metals, Commodities, and other financial instruments. Plan your trades with GTCFX's up-to-date market session times.",
        alternates: {
            canonical: url,
        },
    };
}

const page = () => {
    return <GenericTradingHours />
}

export default page;