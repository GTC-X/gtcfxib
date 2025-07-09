'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const WhatWeOffer = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const changeTab = (tabId) => {
        setActiveTab(tabId);
    };
    const t = useTranslations("prime-tech.liquidity.offerTitle")
    const tabs = [
        {
          id: 'tab1',
          title: t("liquidity.title"),
          content:  t("liquidity.desc"),
          imageSrc: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/prime/prime-3.png',
          learnMoreLink: '#'
        },
        {
          id: 'tab2',
          title: t("connectivity.title"),
          content:  t("connectivity.desc"),
          imageSrc: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/prime/prime-2.png',
          learnMoreLink: '#'
        }
      ];
    return (
        <section className='md:py-16 2xl:py-20 3xl:py-24 py-8 border-t border-b border-gray-300 bg-primary'>
        <div className='container'>
            <h1 className='HeadingH2 text-white'>{t("heading")}</h1>
            <div className='flex flex-wrap justify-center py-8'>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-[33%] border border-gray-300 px-6 py-2 ${activeTab === tab.id ? 'bg-secondary border border-secondary text-white' : 'bg-white'}`}
                    >
                        <span className='text-lg'>{tab.title}</span>
                    </button>
                ))}
            </div>
            <div className='container mx-auto'>
                {tabs.map(tab => (
                    <TabContent key={tab.id} id={tab.id} activeTab={activeTab}>
                        <div className='flex justify-center items-center gap-10'>
                            <img className='w-[40%]' src={tab.imageSrc} alt={tab.title}/>
                            <div>
                                <p className='text ltr:text-left rtl:text-right pb-8 text-white'>{tab.content}</p>
                            
                            </div>
                        </div>
                    </TabContent>
                ))}
            </div>
        </div>
    </section>
    );
};

const TabContent = ({ id, activeTab, children }) => {
    return (
        <div className={id === activeTab ? 'block' : 'hidden'}>
            {children}
        </div>
    );
};

export default WhatWeOffer;
