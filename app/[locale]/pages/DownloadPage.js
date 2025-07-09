"use client";
import React from "react";
import { CiMobile2 } from "react-icons/ci";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { AiFillWindows } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { IoIosTabletPortrait, IoIosPhonePortrait } from "react-icons/io";
import { TiVendorAndroid } from "react-icons/ti";
import { useTranslations } from "next-intl";
import Image from "next/image";
import WhyChooseIcon from "../components/about/WhyChooseIcon";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";


const DownloadPage = () => {
  const t = useTranslations("platform");
  const downloadMacOptions = [
    { link: 'https://download.mql5.com/cdn/web/gtc.global.trade/mt4/gtcglobaltrade4setup.exe', icon: AiFillWindows, textKey: 'downloadApp.mac.mt4pc' },
    { link: 'https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe', icon: AiFillWindows, textKey: 'downloadApp.mac.mt4mac', },
    { link: 'https://webtrade.gtcup.com/terminal', icon: CgWebsite, textKey: 'downloadApp.mac.live1', },
    { link: 'https://webtrade.gtcup.com/terminal', icon: CgWebsite, textKey: 'downloadApp.mac.live2', },
  ];

  const downloadSmartphoneOptions = [
    { link: 'https://download.mql5.com/cdn/mobile/mt4/android?server=GTCGlobalTrade-Server', icon: TiVendorAndroid, textKey: 'downloadApp.smartPhone.mt4andriod' },
    { link: 'https://apps.apple.com/us/app/metatrader-4/id496212596', icon: FaApple, textKey: 'downloadApp.smartPhone.mt4iphone' },
    { link: 'https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server', icon: TiVendorAndroid, textKey: 'downloadApp.smartPhone.mt5andriod' },
    { link: 'https://download.mql5.com/cdn/mobile/mt5/ios?server=GTCGlobalTrade-Server', icon: FaApple, textKey: 'downloadApp.smartPhone.mt5iphone' },
    
  ];
  const downloadOptions = [
    { link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/app-files/metatrader4.apk', icon: TiVendorAndroid, text: t('downloadApp.tablets.mt4andriod') },
    { link: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/app-files/metatrader5.apk', icon: FaApple, text: t('downloadApp.tablets.mt4ipad') },
  
  ];

  return (
    <>
    <section className="py-8 md:py-12 3xl:py-16">
      <div className="container">
        <div className="content-inner">
          <h2 className="HeadingH2 mb-8">{t('downloadApp.heading')}</h2>
          <p className="text max-w-5xl mx-auto mb-5">
          {t('downloadApp.para')}
          </p>
          <p className="text max-w-5xl mx-auto mb-5">
          {t('downloadApp.para1')}
          </p>  <p className="text max-w-6xl mx-auto">
          {t('downloadApp.para2')}
          </p>
          
        </div>
      </div>
    </section>
    <section className="bg-primary py-8 cm:py-12 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28">
        <div className="container">
            <div className="content-out">
            <div className="flex flex-col md:flex-row items-start">
            <div className="app-side md:basis-1/4 bg-secondary bg-opacity-40 p-5 border-secondary">
              <h4 className="text-lg ltr:text-left rtl:text-right flex flex-row gap-2 items-center text-white">
                <p className="text-secondary"><CiMobile2 size={40} /></p>
                {t('downloadApp.GTCAPP.title')}
              </h4>
              <div className="inside-content py-3">
                <h3 className="text-lg text-secondary leading-9">
                {t('downloadApp.GTCAPP.downloadnow')}
                </h3>
                <p className="text-xs  text-white">{t('downloadApp.GTCAPP.para1')}</p>
                <div className="download-description py-4 text-white">
                  <p className="text-sm ltr:text-left rtl:text-right">
                  {t('downloadApp.GTCAPP.para2')}
                  </p>
                </div>
                <div className="flex flex-row item-center justify-start gap-2">
                  <div className="relative w-full h-12">
                    <Image
                      src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/app.webp"
                      alt="Icon"
                      fill
                      className="object-contain bg-white rounded-md"
                    />
                  </div>
                  <div className="relative w-full h-12">
                    <Image
                      src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/google.webp"
                      alt="Icon"
                      fill
                      className="object-contain bg-white rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-side md:basis-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="ltr:pl-5 rtl:pr-5 pt-5">
    <h4 className="text-lg text-left flex flex-row gap-2 items-center text-white">
      <p className="text-secondary"><MdOutlineDesktopWindows size={40} /></p>
      {t('downloadApp.mac.title')}
    </h4>
    <div className="inside-content py-3">
      <ul className="leading-7 text-sm gap-4">
        {downloadMacOptions.map((option, index) => (
          <li key={index} className="border-b border-secondary border-opacity-50 text text-left text-white">
            <Link className="flex flex-row gap-3 items-center py-3" href={option.link}>
              <p className="text-secondary"><option.icon size={30} /></p>
              {t(option.textKey)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
  <div className="pl-5 md:pl-0 py-5  border-opacity-35">
    <h4 className="text-lg text-left flex flex-row gap-2 items-center text-white">
      <p className="text-secondary"><IoIosPhonePortrait size={40} /></p>
      {t('downloadApp.smartPhone.title')}
    </h4>
    <div className="inside-content py-3">
      <ul className="leading-7 text-sm gap-4">
        {downloadSmartphoneOptions.map((option, index) => (
          <li key={index} className="border-b border-secondary border-opacity-50 text text-left text-white">
            <Link className="flex flex-row gap-3 items-center py-3" href={option.link}>
              <p className="text-secondary"><option.icon size={30} /></p>
              {t(option.textKey)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
  <div className="pl-5 md:pl-0 py-5">
    <h4 className="text-lg text-left flex flex-row gap-2 items-center text-white">
      <p className="text-secondary"><IoIosTabletPortrait size={40} /></p>
      {t('downloadApp.tablets.title')}
    </h4>
    <div className="inside-content py-3">
      <ul className="leading-7 text-sm gap-4">
        {downloadOptions.map((option, index) => (
          <li key={index} className="border-b border-secondary border-opacity-50 text text-left text-white">
            <Link className="flex flex-row gap-3 items-center py-3" href={option.link}>
              <p className="text-secondary"><option.icon size={30} /></p>
              {option.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

            </div>
          </div>
            </div>
        </div>
    </section>
    <section className="top-content py-8 sm:py-14 2xl:py-16 3xl:py-20 relative z-30">
        <div className="container">
          <WhyChooseIcon />
        </div>
      </section>
    </>
  );
};

export default DownloadPage;
