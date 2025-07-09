"use client";
import React from "react";
import Hero from "../components/account/productDetail/Hero";
import WhyPartnerWithGtc from "../components/partner/ibBroker/WhyPartnerWithGtc";
import WhyGTC from "../components/home/WhyGTC";
import DirectAccess from "../components/home/DirectAccess";
import { useTranslations } from "next-intl";
import WhyBoss from "../components/about/WhyBoss";

const ProductDetailPage = () => {
  const t = useTranslations("Instruments")

  return (
    <>
      <Hero
      title="OUR PRODUCTS"
      subtitle="Maximize Your Profits Effectively!"
      description="Enjoy competitive leverage and the lowest spreads. Trade over 27,000 instruments, including Forex, CFDs, shares, metals, energies, and equity indices, with fast and reliable execution."
      backgroundImage="/overlay.webp"
      imageSrc="/IB-pic.webp"
      showForm={true}
    />
      <WhyPartnerWithGtc title="Invest with the World’s Premier Online Trading Platform" subHeading="Trade 27,000 financial products with the most stable platform, our Meta Trader Platform offers favorable spreads.
" reasons={"/Products-099.webp"}/>
<WhyGTC/>
<DirectAccess />
<WhyBoss />
    </>
  );
};

export default ProductDetailPage;
