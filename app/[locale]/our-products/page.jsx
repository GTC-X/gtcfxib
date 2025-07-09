import { createTranslator } from "next-intl";
import React from "react";
import ProductDetailPage from "../pages/ProductDetails";

export async function generateMetadata({ params: { locale } }) {
    const messages = (await import(`../../../messages/${locale}.json`)).default;
    const t = createTranslator({ locale, messages });
    const url =
      locale != "en"
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/mt5-platform`
        : `${process.env.NEXT_PUBLIC_BASE_URL}/mt5-platform`;
  
    return {
      title: "Invest with the World’s Premier Online Trading Platform | GTCFX",
      description: "“Enjoy competitive leverage and the lowest spreads. Trade over 27,000 instruments, including Forex, CFDs, shares, metals, energies, and equity indices, with fast and reliable execution.",
      alternates: {
        canonical: url,
      },
    };
  }

const page = ()=>{
    return <ProductDetailPage/>
} 

export default page;