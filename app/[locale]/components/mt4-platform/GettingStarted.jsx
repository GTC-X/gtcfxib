'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import { useTranslations } from 'next-intl';
import AppIcon from './AppIcon';

const VpsStepsImages = ({
    imageSrc,
    alt,
    stepText,
    stepDescription,
    aosDuration,
    aosDelay,
    color,
    aosFade,
    id,
}) => {

    return (
        <div
            className={`flex flex-col overflow-hidden items-center  firstStep text-center z-50 relative`}
            data-aos-duration={aosDuration}
            data-aos-delay={aosDelay}
            data-aos-easing="ease-in-sine"
            data-aos="fade-right"
        >
            <Image
                src={imageSrc}
                alt={alt}
                width={152}
                height={100}
                className="w-20 md:w-40 h-16 md:h-32"
            />
            <div className="content-step pt-5">
                <p className={`text-xs w-32 md:w-72 md:text-base text-${color}`}>{stepText}</p>
            </div>
        </div>
    );
};

const GettingStarted = () => {
    const t = useTranslations("platform.mt4PlatformPage.gettingStarted");
    useEffect(() => {
        Aos.init({ disable: "mobile" });
    }, []);
    const steps = [
        {
            imageSrc: "/mt5-platform/fx1.webp",
            alt: "Step 1",
            stepText: t("step1"),
            stepDescription: t("IBProgram.howWork.option1.heading"),
            aosDuration: 300,
            aosDelay: 0,
        },
        {
            imageSrc: "/mt5-platform/fx2.webp",
            alt: "Step 2",
            stepText: t("step2"),
            stepDescription: t("IBProgram.howWork.option2.heading"),
            aosDuration: 400,
            aosDelay: 100,
        },
        {
            imageSrc: "/mt5-platform/fx3.webp",
            alt: "Step 3",
            stepText: t("step3"),
            stepDescription: t("IBProgram.howWork.option3.heading"),
            aosDuration: 500,
            aosDelay: 200,
        },
    ];

    return (
        <section className="bg-gradient">
            <div className="container pt-10">
                <h2 className="text-center uppercase text-secondary md:text-3xl font-bold mb-5">{t("title")}</h2>
                <p className="text-white text-center">
                    {t("subTitle")}
                </p>
                <div className="relative max-w-6xl  mx-auto pt-4 md:py-12">
                    <div className="trade-win flex flex-row justify-between items-center">
                        {steps.map((step, index) => (
                            <VpsStepsImages key={index} {...step} color="white" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="container space-y-5">
                <p className="text-white text-center md:text-lg">
                    {t("para1")}
                </p>
                <p className="text-white text-center md:text-lg">
                    {t("para2")}
                </p>
                <p className="text-white text-center md:text-lg">
                    {t("para3")}
                </p>
            </div>
            <div className="flex justify-center items-center">

                <AppIcon
                    windowLink={"https://download.mql5.com/cdn/web/gtc.global.trade/mt4/gtcglobaltrade4setup.exe"}
                    appleLink={"https://apps.apple.com/us/app/metatrader-4/id496212596"}
                    globalLink={"https://mt4.gtcup.com/"}
                    apkLink={"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/app-files/metatrader4.apk"}
                    playLink={"https://download.mql5.com/cdn/mobile/mt4/android?server=GTCGlobalTrade-Server"}
                />
            </div>
        </section>
    )
}

export default GettingStarted

