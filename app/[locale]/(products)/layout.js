"use client";
import ProductsTabs from "@/app/[locale]/components/products/ProductsTabs";
import { useTranslations } from "next-intl";
import {Suspense} from "react";


export default function ProductsLayout({children, params}) {
    const t = useTranslations("Instruments.commonTabs")
    const {locale} = params;
    const pagesTabs = [
        {
            key: "forex",
            label:t('forex')
        },
        {
            key: "cfd-energy",
            label: t('energy')
        },
        {
            key: "shares",
            label: t('shares')
        },
        {
            key: "stock",
            label: t("stocks")
        },
        {
            key: "commodities",
            label: t("commodities")
        },
        {
            key: "indices",
            label: t('indices')
        },
        {
            key: "precious-metals",
            label: t('metals')
        },

    ]
    return <div className='mt-5 lg:mt-20 container'>
        <div className='container'>
            <Suspense>
                <ProductsTabs pagesTabs={pagesTabs}/>
            </Suspense>
        </div>
        <div>
            {children}
        </div>
    </div>
}