"use client";
import React from "react";
import VPSPakFrom from "../common/VPSPakFrom";
import Link from "next/link";
import LocationContextProvider from "@/context/location-context";


const ClaimYourBonusPK = () => {
  return (
    <LocationContextProvider>
      <section className="py-10 md:py-12 xl:py-16 2xl:py-20">
        <div className="container">
          <div className="relative text-center">
            <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-[600] xl:text-[30px] 2xl:text-[32px] capitalize max-w-xl leading-tight">
              Empowers you to trade Smarter and Achieve Greater Profitability.
            </h2>
          </div>
          <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16 pt-8">
            <div className="order-2 md:order-1 content-side-portion text-left basis-full md:basis-3/4">
              <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-[400] xl:text-[25px] 2xl:text-25px] capitalize max-w-2xl leading-tight">
                Unlock Your Trading Potential
              </h2>
              <p className="textprimarymd:text-[16px] 2xl:text-[17px] text-sm text-left py-2 leading-7">
                At GTC FX, we're committed to providing traders with the resources they need to succeed.
              </p>
              <p className="textprimarymd:text-[16px] 2xl:text-[17px] text-sm text-left py-2 leading-7">  Our latest offer gives you the opportunity to enhance your trading capacity with a significant tradable bonus. Whether you’re a beginner or a seasoned trader, this bonus is designed to help you leverage more substantial positions and increase your trading volume. </p>
              <ul className="textprimarymd:text-[16px] 2xl:text-[17px] text-sm text-left pt-5 leading-10">
                <li>✅ <strong className="text-secondary">Deposit funds to qualify for the tradable bonus:</strong> Enhance your trading capacity with a significant bonus.</li>
                <li>✅ <strong className="text-secondary">Fill the form and sign up for the bonus:</strong> Designed to help you leverage more substantial positions and increase your trading volume.</li>
                <li>✅ <strong className="text-secondary">After verification, bonus will be credited to your account:</strong> Within 24 hours, you'll be ready to trade with your bonus.</li>
              </ul>
              <div className="text-left pt-10">
                <Link
                  href='https://mygtcportal.com/getview?view=register'
                  target="_blank"
                  className={`bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#05033162] rounded-lg shadow-lg overflow-hidden text-white 3xl:text-xl px-8 py-3 text-center md:w-auto w-[300px] md:m-0 mx-auto transition-colors duration-900 hover:bg-gradient-to-b hover:from-secondary hover:to-[#fff] duration-500 hover:text-primary`}
                >
                  Open Live Account
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 basis-full md:basis-1/4">
              <VPSPakFrom />
            </div>
          </div>
        </div>
      </section>
    </LocationContextProvider>
  );
};

export default ClaimYourBonusPK