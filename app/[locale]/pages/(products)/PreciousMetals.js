"use client";
import React, { Suspense } from 'react'
import { useTranslations } from 'next-intl'
import ProductsBanner from "@/app/[locale]/components/account/forex/ProductsBanner";
import ForexTradingAdv from "@/app/[locale]/components/account/forex/ForexTradingAdv";
import ForexSpreadTable from "@/app/[locale]/components/account/forex/ForexSpreadTable";
import ProductsFAQ from "@/app/[locale]/components/account/forex/ProductsFAQ";
import ProductsImageContent from "@/app/[locale]/components/account/forex/ForexImageContent";
import NoteNew from '../../components/account/stock/NoteNew';

const PreciousMetalsPage = () => {
    const t = useTranslations("Instruments.metals");
    const ContentData = [
        {
            image: {
                src: "/products/metals-image.webp",
                width: "500",
                height: "450",
                alt: "Forex"
            },
            title: t("title4"),
            description: t("desc4_1"),
        },
        {
            image: {
                src: "/account/forex/mobiles.webp",
                width: "500",
                height: "450",
                alt: "Forex"
            },
            title: t("title5"),
            description:
                `${t("desc5_1")} <br/>
                 ${t("desc5_2")}<br/>
                 ${t("desc5_3")}   `,
        },
        {
            image: {
                src: "/account/forex/laptop.webp",
                width: "500",
                height: "450",
            },
            title: t("title6"),
            description: `${t("desc6_1")}<br/> 
            ${t("desc6_2")}<br/> ${t("desc6_3")}`,
        },
    ];

    const advData = [
        {
            title: t("adv1_1"),
            subtitle: t("adv1_2"),
            image: {
                src: "/account/forex/spread.webp",
                width: "245",
                height: "245",
            },
        },
        {
            title: t("adv2_1"),
            subtitle: t("adv2_2"),
            image: {
                src: "/account/forex/leverage.webp",
                width: "245",
                height: "245",
            },
        },
        {
            title: t("adv3_1"),
            subtitle: t("adv3_2"),
            image: {
                src: "/account/forex/execution.webp",
                width: "245",
                height: "245",
            },
        },
        {
            title: t("adv4_1"),
            subtitle: t("adv4_2"),
            image: {
                src: "/account/forex/protection.webp",
                width: "245",
                height: "245",
            },
        },
        {
            title: t("adv5_1"),
            subtitle: t("adv5_2"),
            image: {
                src: "/account/forex/candles.webp",
                width: "245",
                height: "245",
            },
        },
        {
            title: t("adv6_1"),
            subtitle: t("adv6_2"),
            image: {
                src: "/account/forex/thumbs-up.webp",
                width: "245",
                height: "245",
            },
        },
    ];
    return (
        <>
            <ProductsBanner title={t("title1")}
                subtitle={t("sub_title1")}
                image={{
                    src: '/products/metals-image.webp',
                    alt: 'Forex Banner',

                }} className={"pt-10"} />
            <ForexTradingAdv className={"mt-8 lg:mt-10 bg-primary rounded-xl p-10"} data={advData} />
            <Suspense>
                {/* <ForexSpreadTable className={"mt-10 lg:mt-20"} data={advData}/> */}
            </Suspense>
            <ProductsImageContent className={"mt-10 lg:my-20"} data={ContentData} />
            <NoteNew />
            
        </>
    )
}

export default PreciousMetalsPage