"use client";
import React, {Suspense} from "react";
import { useTranslations } from "next-intl";
import ProductsBanner from "@/app/[locale]/components/account/forex/ProductsBanner";
import ForexTradingAdv from "@/app/[locale]/components/account/forex/ForexTradingAdv";
import ForexSpreadTable from "@/app/[locale]/components/account/forex/ForexSpreadTable";
import ProductsFAQ from "@/app/[locale]/components/account/forex/ProductsFAQ";
import ProductsImageContent from "@/app/[locale]/components/account/forex/ForexImageContent";
import NoteNew from "../../components/account/stock/NoteNew";

const SharesPage = () => {
    const t = useTranslations("Instruments.shares");
    const ContentData = [
        {
            image: {
                src: "/products/energy-image.webp",
                width: "500",
                height: "450",
                alt: "Energy"
            },
            title: t("title4"),
            description: `${t('desc4_1')} <br />
      <br />
      ${t("desc4_2")}<br />
      ${t("desc4_3")}<br />
      ${t("desc4_4")}<br />
      ${t("desc4_5")}<br />
      `,
        },
        {
            image: {
                src: "/account/forex/mobiles.webp",
                width: "500",
                height: "450",
                alt: "Forex"
            },
            title: t("title5"),
            description: ` ${t("desc5_1")} <br><br> ${t("desc5_2")} `,
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
            title:  t("adv2_1"),
            subtitle: t("adv2_2"),
            image: {
                src: "/account/forex/leverage.webp",
                width: "245",
                height: "245",
            },
        },
        {
            title:  t("adv3_1"),
            subtitle: t("adv3_2"),
            image: {
                src: "/account/forex/execution.webp",
                width: "245",
                height: "245",
            },
        },
        {
            title:  t("adv4_1"),
            subtitle: t("adv4_2"),
            image: {
                src: "/account/forex/protection.webp",
                width: "245",
                height: "245",
            },
        },
        {
            title:  t("adv5_1"),
            subtitle: t("adv5_2"),
            image: {
                src: "/account/forex/candles.webp",
                width: "245",
                height: "245",
            },
        },
        {
            title:  t("adv6_1"),
            subtitle: t("adv6_2"),
            image: {
                src: "/account/forex/thumbs-up.webp",
                width: "245",
                height: "245",
            },
        },
    ];
    const faqs = Array.from({ length: 9 }).map((_, index) => {
        return {
          title: t(`faqs.title${index + 1}`),
          paragraphs: [t(`faqs.paragraph${index + 1}`)]
        }
      });
    return (
        <>
            <ProductsBanner title={t("title1")} subtitle={t("sub_title1")} image={{ src:'/products/energy-image.webp', alt:'Forex Banner'}} className={"pt-10"}/>
            <ForexTradingAdv className={"mt-8 lg:mt-10 bg-primary rounded-xl p-10"} data={advData}/>
            <Suspense>
                {/* <ForexSpreadTable className={"mt-10 lg:mt-20"}/> */}
            </Suspense>
            <ProductsImageContent className={"mt-10 lg:my-20"} data={ContentData}/>
            <NoteNew />
            
        </>
    );
};

export default SharesPage;
