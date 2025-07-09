'use client'
import React from "react";
import icon1 from '../../../../public/15-deposit/icons-02.png'
import { FaDollarSign } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";
// import { DollarSign, Headphones, BarChart2 } from "lucide-react"; // Using Lucide icons

const ValueOffers = () => {
    const t = useTranslations("callback.offers")

    const offers = [
        {
            icon: "/15-deposit/icons-02.png",
            title: t("card1"),
        },
        {
            icon: "/15-deposit/icons-03.png",
            title: t("card2"),
        },
        {
            icon: "/15-deposit/icons-04.png",
            title: t("card3"),
        },
    ];

    return (
        <section className="w-full py-14 bg-[#f4f5f9] text-center">
            <div className="container mx-auto">
                <div className=" max-w-5xl mx-auto">
                    <h2 className="text-lg md:text-2xl font-bold text-secondary uppercase">
                        {t("title")}
                    </h2>
                    <p className=" mt-2">
                        {t("para")}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        {offers.map((offer, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="mb-3">
                                    <Image src={offer.icon} alt="Icon" width={80} height={80} />
                                </div>
                                <p className="text-sm md:text-base"
                                    dangerouslySetInnerHTML={{ __html: offer.title }}

                                >
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueOffers;
