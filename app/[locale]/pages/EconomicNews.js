'use client'
import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname } from "next/navigation";

const EconomicNewspage = () => {
    const path= usePathname();
  const isAr = path.includes("/ar-AE");
  const isCh = path.includes("/zh-hans");

    const t = useTranslations("tradingTools.ecoNews.content")

    let pathUrl;

  if (isAr) {
    pathUrl = "https://component.autochartist.com/news/stock-news?broker_id=843&account_type=LIVE&user=GTCFX&expire=1727647200&token=21e717739b02d6702364d5afd432d844&locale=ar&css=https:%2F%2Fbroker-resources.autochartist.com%2Fcss%2Fcomponents%2F843-news-feeds-app-dark.css";
  } else if (isCh) {
    pathUrl = "https://component.autochartist.com/news/stock-news?broker_id=843&account_type=LIVE&user=GTCFX&expire=1727647200&token=21e717739b02d6702364d5afd432d844&locale=en&css=https:%2F%2Fbroker-resources.autochartist.com%2Fcss%2Fcomponents%2F843-news-feeds-app-dark.css"; // Assuming you have a zh-2.webp for Chinese
  } else {
    pathUrl = "https://component.autochartist.com/news/stock-news?broker_id=843&account_type=LIVE&user=GTCFX&expire=1727647200&token=21e717739b02d6702364d5afd432d844&locale=en&css=https:%2F%2Fbroker-resources.autochartist.com%2Fcss%2Fcomponents%2F843-news-feeds-app-dark.css"; // Default image
  }
    return ( 
        <div className="bg-gradient">
            <div className='p-2 lg:p-0 flex flex-col justify-center items-center lg:pb-12'>
                <div  className='relative w-full h-64 md:h-[350px]'>
                    <Image src="/phone.webp" fill alt='Economic News' className='object-contain' />
                </div>
                <h2 className='HeadingH2 text-secondary'>{t("heading")}</h2>
            </div>
            <iframe
                src={pathUrl}
                width="100%"
                height='600px'
                style={{ border: 'unset' }} // Use an object for inline styles
                className="border-none" // Add Tailwind class for border-none
            ></iframe>
        </div>
    );
}

export default EconomicNewspage;    