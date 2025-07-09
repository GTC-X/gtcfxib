"use client"
import React from "react";
import SocialIcon from "./SocialIcon";
import Image from "next/image";

const LpFooter = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#273386] via-[#252e76] to-[#151c46] py-10 md:py-14">
        <div className="container">
    
          <div className="max-width md:flex  items-center justify-center px-2 ">
          <div className="md:basis-3/12 md:flex flex-wrap justify-center md:pr-10">
            
              <Image
                src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/footer-logo.webp"
                width="150"
                height="53"
                alt="GTCFX"
                className="mx-auto md:m-0"
              />
           
            <SocialIcon />
            <div className="flex flex-row py-5 justify-center">
                <Image src='/footer/iso9001_icon.png' className="h-22 w-22"  width={80} height={100} alt="iso icon"/>
                <Image src='/footer/iso26000_icon.png' className="h-22 w-22" width={80} height={100} alt="iso icon" />
            </div>
          </div>
          <div className="md:basis-9/12 text-xs text-white text-opacity-70 space-y-3 leading-5">
          <p>
                <span className="text-secondary">Important Notice: </span> Engaging in trading activities involves substantial risks and may not be appropriate for every individual. Using leverage can heighten both potential gains and losses. Before participating in trading, it is crucial to evaluate your financial goals, experience level, and comfort with risk. Only invest money that you can afford to lose. We highly recommend that you seek to understand the potential risks involved and consult with a qualified financial or tax advisor if you have any inquiries.
              </p>
           
              <p><span className="text-secondary">GTC Global Ltd</span> is incorporated in Mauritius and licensed to operate as an investment dealer.</p>
              <p><span className="text-secondary">GTC Global Pty Ltd</span> is an Australian company regulated by the Australian Securities & Investments Commission (ASIC).</p>
              <p><span className="text-secondary">GTC Global Trade Capital Co., Limited</span> is a finance brokerage registered in Vanuatu.</p>
              <p><b className="text-secondary">Disclaimer: </b> These entities do not provide services in certain jurisdictions where such services would be contrary to local laws.</p>
          </div>

        </div>
        </div>
      </div>
      <div className="bg-secondary  to-[#151c46] py-2 text-center text-white">
        <p>© COPYRIGHT 2024 GTC - ALL RIGHTS RESERVED</p>
      </div>
    </>
  );
};

export default LpFooter;
