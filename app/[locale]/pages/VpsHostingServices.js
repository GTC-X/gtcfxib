"use client";
import React from "react";
import Hero from "../components/trendingTools/vpsHostingServices/Hero";
import UnderStandingHosting from "../components/trendingTools/vpsHostingServices/UnderStandingHosting";
import WhyVPSHosting from "../components/trendingTools/vpsHostingServices/whyVpsHosting";
import VpsPricing from "../components/trendingTools/vpsHostingServices/VpsPricing";
import ElevateHosting from "../components/trendingTools/vpsHostingServices/elevateHosting";
import HostingFaq from "../components/trendingTools/vpsHostingServices/faq";
import UnderStandingHostingReal from "../components/trendingTools/vpsHostingServices/UnderStandingHostingReal";


const VPSHostingPage = () => {

  return (
    <>
      <Hero />
      <UnderStandingHostingReal />

      <WhyVPSHosting />
      <VpsPricing />
      <ElevateHosting />
      <HostingFaq />
    </>
  );
};

export default VPSHostingPage;
