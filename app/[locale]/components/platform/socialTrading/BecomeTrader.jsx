import React from "react";
import { useTranslations } from "next-intl";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { GoGraph } from "react-icons/go";

const BecomeTrader = () => {
    const t = useTranslations("prime-tech.socialTranding");

    // Define the array inside the component to ensure `t` is available
    const joinSteps = [
        {
            "icon": <RiAccountPinCircleLine />,
            "text": t("howWork.option1.heading")
        },
        {
            "icon": <MdOutlineStarBorderPurple500 />,
            "text": t("howWork.option2.heading")
        },
        {
            "icon": <GoGraph />,
            "text": t("howWork.option3.heading")
        }
    ];

    return (
        <section className="bg-white pb-12 md:pb-16 2xl:pb-20">
            <div className="container">
                 <h2 className='HeadingH2 text-center font-semibold text-primary'>{t("howWork.title")}</h2>
                 <p className="text text-primary">{t("howWork.descr")}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center pt-8">
                    {joinSteps.map((step, index) => (
                        <div key={index} className="flex flex-row items-center justify-center gap-4 shadow-2xl border border-gray-200 py-2 bg-gray-100 rounded-full ">
                            <p className="text-white text-2xl bg-secondary p-3 rounded-full">{step.icon}</p>
                            <h4 className="text-xl text-primary">{step.text}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BecomeTrader;
