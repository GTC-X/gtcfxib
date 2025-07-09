"use client";
import React from "react";


const TradeInvest = () => {
  const features = [
    { title: "FCA｜ASIC｜SCA ｜FSCM｜VFSC" },
    { title: "Instant Deposit and Withdrawal" },
    { title: "Multi-layer rebate system" },
    { title: "Highest Rebate and Commissions" },
    { title: "Secure, Instant And Fast Execution" },
    { title: "Direct Access to Top Tier Liquidity Provider" },
  ];

  const boxStyle = {
    background: "linear-gradient(to bottom, rgba(182,135,86,.65) 40%, rgba(5,3,49,1) 60%)",
    borderRadius: "8px",
  };

  return (
    <section className="bg-[#050331] py-12 md:py-16 2xl:py-20">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-xl xl:text-3xl 2xl:text-[32px] text-transparent bg-clip-text bg-gradient-to-t from-white to-secondary capitalize font-normal pb-5">
            What We Offer?
          </h2>
          <p className="text-gray-200 text-sm xl:text-base tracking-wider md:max-w-4xl mx-auto">
          At GTC FX, we've established ourselves as a global leader in the financial derivatives industry. Our pride lies in our extensive experience and unwavering commitment to delivering top-tier financial services. Since 2012, we have maintained a robust presence in the UAE. Explore our range of services including advanced forex trading platforms, comprehensive stock analysis, and robust commodity trading options.
          </p>
          <h2 className="text-xl xl:text-[20px] 2xl:text-[22px] font-medium text-transparent bg-clip-text bg-gradient-to-l from-white to-secondary capitalize pt-10 m-0">
          Globaly Trusted & Multi-Regulated
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative py-[1px] px-[1px]" style={boxStyle}>
              <div className="contact-form relative bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#050331] rounded-lg shadow-lg overflow-hidden z-10 p-6 text-center">
                <h2 className="text-sm xl:text-lg capitalize pb-5 text-transparent bg-clip-text bg-gradient-to-t from-white to-secondary font-medium">
                  {feature.title}
                </h2>
               
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-200 max-w-2xl mx-auto mb-10">Join us on 7 & 8 Oct 2024, at World Trade Centre, Dubai, UAE. Visit us at Booth 30! and discover how GTC FX can help you achieve financial success. </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("new1")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-primary bg-gradient-to-r from-white to-secondary rounded-md px-8 py-3 md:w-auto w-[300px] hover:bg-gradient-to-r hover:from-secondary hover:to-white transition-colors duration-500"
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default TradeInvest;
