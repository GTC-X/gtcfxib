"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import { TiTick } from "react-icons/ti";
import { GrAchievement } from "react-icons/gr";
import { GrAction } from "react-icons/gr";
import { PiHandshakeLight } from "react-icons/pi";
import { FaHandHoldingHand } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";


const WhyGtcGroupLp = () => {
    const list1 = [
        { icon: <TiTick color="#29a643" size={30} />, text: "Tightest Spread In The Market Spreads Starting From 0.0* Pips" },
        { icon: <TiTick color="#29a643" size={30} />, text: "Most Stable Trading Platforms" },
        { icon: <TiTick color="#29a643" size={30} />, text: "Competitive Rebates & Commissions In The Industry For Our IB’s." },
        { icon: <TiTick color="#29a643" size={30} />, text: "Secure, Instant And Fast Execution" },
        { icon: <TiTick color="#29a643" size={30} />, text: "MT4/MT5 Trading Platform" },
        { icon: <TiTick color="#29a643" size={30} />, text: "Dedicated Relationship Manager" },
        { icon: <TiTick color="#29a643" size={30} />, text: "Various Funding Methods Including: Credit Card, Wire Transfer, Cryptocurrency" },
    ];
    const list2 = [
        { icon: <TiTick color="#29a643" size={30} />, text: "Access To 7 Markets With Over 27,000 Trading Instruments" },
        { icon: <TiTick color="#29a643" size={30} />, text: "Leverage Up To 1:2000" },
        { icon: <TiTick color="#29a643" size={30} />, text: "Negative Balance Protection" },
        { icon: <TiTick color="#29a643" size={30} />, text: "No Trading Restrictions On EA." },
        { icon: <TiTick color="#29a643" size={30} />, text: "No Price Slippage." },
        { icon: <TiTick color="#29a643" size={30} />, text: "No Commissions." },
        { icon: <TiTick color="#29a643" size={30} />, text: "No Requotes." },
        { icon: <TiTick color="#29a643" size={30} />, text: "No Rejections." },
    ];
    const list3 = [
        { icon: <TiTick color="#29a643" size={30} />, text: "ECN Accounts With Direct Access To Top Tier Banks." },
        { icon: <TiTick color="#29a643" size={30} />, text: "Direct Access To Top Tier Banks." },
        { icon: <TiTick color="#29a643" size={30} />, text: "No Dealing Desk Intervention." },
        { icon: <TiTick color="#29a643" size={30} />, text: "Tier 1 Liquidity Pricing." },
        { icon: <TiTick color="#29a643" size={30} />, text: "Instant And Fast Execution." },
    ];
    const list4 = [
        { icon: <TiTick color="#29a643" size={30} />, text: "PAMM & MAM Accounts" },
        { icon: <TiTick color="#29a643" size={30} />, text: "Signal Centre Tool." },
        { icon: <TiTick color="#29a643" size={30} />, text: "VPS." },
        { icon: <TiTick color="#29a643" size={30} />, text: "Expert Analysis." },
        { icon: <TiTick color="#29a643" size={30} />, text: "Autochartist" },
        { icon: <TiTick color="#29a643" size={30} />, text: "Acuity Trading Tool." },
    ];

    const boxContents = [
        {
            icon: <GrAchievement />,
            title: "No Compromises, Only Excellence:",
            description: "We never compromise on factors that impact client performance. That's why we offer tight spreads and ensure the best execution.",
            number: 1,
        },
        {
            icon: <GrAction />,
            title: "ADVANCED TRADING PLATFORMS:",
            description: "GTC offers cutting-edge trading platforms tailored to meet the requirements of a diverse global clientele.",
            number: 2,
        },
        {
            icon: <FaHandHoldingHand />,
            title: "EXPERTISE BACKED BY EXPERIENCE:",
            description: "Our extensive experience and in-depth knowledge of global financial markets are the cornerstones of our expertise.",
            number: 3,
        },
        {
            icon: <GrServices />,
            title: "SUPERIOR SERVICES:",
            description: "We are committed to delivering top-tier services in currency trading, as well as CFDs, equity indices, precious metals, and energies.",
            number: 4,
        },
    ];

    useEffect(() => {
        Aos.init({ disable: "mobile" });
    }, []);
    return (
        <div className="max-w-6xl text-left mx-auto py-10 ">
            <section className="md:pb-0 pb-4">
                <div className="container md:pt-16 pt-8">
                    <div className="flex flex-row items-center justify-start gap-2 md:mb-6">
                        <p className="text-secondary text-4xl md:text-5xl"><PiHandshakeLight /></p>
                        <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 text-left mb-0">Why Choose GTC?
                        </h2>
                    </div>
                    <div className="text text-left">
                        <p>Unlocking Profitable Opportunities: Your Best Investment Journey Begins with Us</p>
                        <p className="my-4">Trading with us offers the optimal avenue for investing your money wisely and profitably. Our trading platform provides a secure and efficient environment, ensuring that your investment endeavors are backed by cutting-edge technology and expert support.</p>
                        <p>With a commitment to delivering the best trading experience, we empower you to navigate financial markets seamlessly, making informed decisions that can lead to lucrative returns on your investments. Join us and unlock the potential for financial growth and success in your trading journey.</p>
                    </div>

                </div>
            </section>

            <section className="max-w-7xl mx-auto px-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 xl:gap-12 2xl:gap-20">
                    <div className="md:w-[50%]">
                        <h3 className="HeadingH2 text-base md:text-2xl text-left md:mt-12 md:mb-4 ">
                            Trade With The {" "}
                            <span className="text-secondary">Best Broker</span>
                        </h3>
                        <div className="flex-col">
                            {list1.map((el, index) => (
                                <div key={index} className="flex items-end space-y-3 max-w-xl">
                                    {el.icon}
                                    <p className="text-primary md:text-[17px] text-[16px]">
                                        {el.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-[50%]">
                        <h3 className="HeadingH2 text-base md:text-2xl text-left md:mb-4 ">
                            Customize your{" "}
                            <span className="text-secondary">Trading Strategies</span>
                        </h3>
                        <div className="flex-col">
                            {list2.map((el, index) => (
                                <div key={index} className="flex items-end space-y-3">
                                    {el.icon}
                                    <p className="text-primary md:text-[17px] text-[16px]">
                                        {el.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute top-[40%] left-0 w-full h-[600px] opacity-10 bg-center bg-contain bg-no-repeat bg-[url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/bg-about.webp')]" />
            </section>

            <section className="max-w-7xl mx-auto  px-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between  gap-4 md:gap-8 xl:gap-12 2xl:gap-20">
                    <div className="md:w-[50%]">
                        <h3 className="HeadingH2 text-base md:text-2xl text-left md:mt-12  mt-6 md:mb-4 ">
                            Empowering Success with{" "}
                            <span className="text-secondary">Cutting-Edge</span>{" "}
                            Technology{" "}
                        </h3>
                        <div className="flex-col">
                            {list3.map((el, index) => (
                                <div key={index} className="flex items-end space-y-3">
                                    {el.icon}
                                    <p className="text text-left">{el.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-[50%]">
                        <h3 className="HeadingH2  text-base md:text-2xl text-left md:mt-12 md:mb-4">
                            Utilizing{" "}
                            <span className="text-secondary">Top Tools </span>{" "}
                            for Success{" "}
                        </h3>
                        <div className="flex-col">
                            {list4.map((el, index) => (
                                <div key={index} className="flex items-end space-y-3">
                                    {el.icon}
                                    <p className="text text-left">{el.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            <section className="box-why relative z-30 my-10">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {boxContents.map((box, index) => (
                            <div
                                key={index}
                                className="box-setting border border-gray-300 p-4 bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] shadow-2xl"
                            >
                                <div className="flex flex-row items-center justify-between border-b border-gray-300 pb-5 mb-5">
                                    <div className="flex flex-row items-center justify-start gap-4">
                                        <p className="text-secondary text-3xl">{box.icon}</p>
                                        <h3 className="text-xl md:text-lg 2xl:text-xl text-white uppercase">
                                            {box.title}
                                        </h3>
                                    </div>
                                    <h2 className="text-4xl text-secondary">{box.number}</h2>
                                </div>
                                <p className="text text-left text-white">{box.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyGtcGroupLp;
