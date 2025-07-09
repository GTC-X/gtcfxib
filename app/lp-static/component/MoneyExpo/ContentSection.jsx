"use client";
import React from "react";
import LocationContextProvider from "@/context/location-context";
import ClientRegistrationForm from "../common/ClientRegistrationForm";

const ContentSection = ({ title, description, subSections }) => {
  return (
    <LocationContextProvider>
      <section className="py-10 md:py-12 xl:py-16 2xl:py-20" id="new1">
        <div className="container">
          <div className="relative text-center mb-10">
            <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl xl:text-[30px] 2xl:text-[32px] capitalize max-w-2xl leading-tight font-bold">
              {title}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="content-side-portion text-left">
              {subSections.map((section, index) => (
                <div key={index}>
                  <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-[600] xl:text-[25px] 2xl:text-[25px] capitalize max-w-3xl leading-tight">
                    {section.title}
                  </h2>
                  <p className="max-w-4xl mt-5">
                    We’re excited to invite you to visit GTCFX at <b className="text-secondary">Booth #30 </b> during the Forex Expo Dubai where we are proud to be a Regional Sponsor. This is your opportunity to:
                  </p>
                  <ul className="list-disc pl-5 mt-4">
                    <li>Connect with industry experts</li>
                    <li>Explore our cutting-edge trading solutions</li>
                    <li>Discover how GTCFX can elevate your trading experience</li>
                  </ul>
                  <h3 className="font-semibold text-lg mt-6">Exclusive Offers for You!</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      <b className="text-secondary">Lucky Draw Spinning Wheel:</b> Test your luck and win exciting prizes! Register now to participate.
                    </li>
                    <li>
                      <b className="text-secondary">Free Trading Account:</b> Scan the code at <b className="text-secondary">Booth #30 </b>to claim a trading account with up to <b className="text-secondary">5,000 USC.</b>
                    </li>
                  </ul>
                  <p className="mt-6">Don’t miss out on this fantastic opportunity to network, learn, and win!</p>
                  
                  <h3 className="font-semibold text-lg mt-6">Event Details:</h3>
                  <ul className="list-none pl-0 mt-2">
                    <li><b>Date:</b> 7th & 8th October 2024</li>
                    <li><b>Location:</b> World Trade Center, Dubai</li>
                  </ul>

                  <p className="mt-3">
                    Register now with GTCFX to secure your spot for the Lucky Draw Spinning Wheel.
                  </p>
                  <p className="mt-3">
                    Join us at <b className="text-secondary">Booth #30 </b> for a rewarding trading journey with GTCFX!
                  </p>
                  
                  <p className="mt-3 font-semibold uppercase text-secondary">
                    TRADE, INVEST & PARTNER with a Globally Trusted and Multi-Regulated Company.
                  </p>
                </div>
              ))}
 
            </div>
            <div className="mt-8 md:mt-0">
              <ClientRegistrationForm showCountryField={true} />
            </div>
          </div>
        </div>
      </section>
    </LocationContextProvider>
  );
};

export default ContentSection;
