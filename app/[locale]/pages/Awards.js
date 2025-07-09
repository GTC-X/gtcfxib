'use client'
import Image from "next/image";
import { useTranslations } from "next-intl";

const Awards = () => {

    const t = useTranslations("metaData.awards");

    const awardsList = [
        {
            "name":"SmartVision Expo ",
            "desc":"Best Liquidity Provider Globally",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/oman-award.jpg",
            "by": "Awarded by SmartVision Expo Oman - 2025"
        },
        {
            "name":"QFEX",
            "desc":"Best Liquidity Provider",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/qatar-award.png",
            "by": "Awarded by Qatar Financial Expo and Awards Doha - 2025"
        },
        {
            "name":"WIKI Expo",
            "desc":"Best Forex Introducing Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/wiki.png",
            "by": "Awarded by WIKI Expo Dubai Award 2024"
        },
        {
            "name":"Forex Expo",
            "desc":"Worldwide Leading Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/ForexExpo+Dubai.png",
            "by": "Awarded by Forex Expo Dubai, UAE Award 2024"
        },
        {
            "name":"BrokerView Expo",
            "desc":"Most Trusted Forex Broker!",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/BrokersViewAUH.png",
            "by": "Awarded by BrokerView Expo Abu Dhabi Award 2024"
        },
        {
            "name":"Money Expo",
            "desc":"Top Liquidity Provider",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/Money+Expo+India-01.png", 
            "by": "Awarded by Money Expo India Award 2024"
        },
        {
            "name":"Jordan Financial Expo",
            "desc":"Best Affiliate Program ",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/afi.png",
            "by": "Awarded by Jordan Financial Expo Award 2024"
        },
        {
            "name":"BrokerView Expo",
            "desc":"Most Trusted Forex Broker ",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/BrokersView+Vietnam.png",
            "by": "Awarded by BrokerView Expo Vietnam Award 2024"
        },
        {
            "name":"WikiFX Expo",
            "desc":"Best Forex Trading Platform ",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/wikiFX.webp",
            "by": "Awarded by WikiFX Platform Asia Award 2024"
        },
        {
            "name":"Forex Traders Summit",
            "desc":"Best STP Broker ",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/stp-24.webp",
            "by": "Awarded by Forex Traders Summit Award 2024"
        },
        {
            "name":"BrokersView Expo",
            "desc":"Most Popular Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/broker-view.webp", 
            "by": "Awarded by BrokersView Expo Award 2024"
        },
        {
            "name":"World Finance Forex",
            "desc":"Best FX Customer Service ",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-02.webp",
            "by": "Awarded by World Finance Forex Award 2023"
        },
        {
            "name":"World Finance Forex",
            "desc":"Best FX Broker, Europe ",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-03.webp",
            "by": "Awarded by World Finance Forex Award 2023"
        },
        {
            "name":"World Finance Forex",
            "desc":"Best FX Broker, Australasia",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-04.webp",
            "by": "Awarded by World Finance Forex Award 2023"
        },
        {
            "name":"World Finance Forex",
            "desc":"Best FX Broker, Latin America",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-05.webp",
            "by": "Awarded by World Finance Forex Award 2023"
        },
        {
            "name":"World Finance Forex",
            "desc":"Best FX Broker, Middle East",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-06.webp",
            "by": "Awarded by World Finance Forex  2023"
        },
        {
            "name":"Global Financial Market",
            "desc":"Forex Trader Summit Dubai ",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-07.webp",
            "by": "Awarded by SmartVision Award 2023"
        },
        {
            "name":"FinTech & Crypto Summit",
            "desc":"Best STP Forex Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-09.webp",
            "by": "Awarded by SmartVision Award 2023"
        },
        {
            "name":"(CFI.CO) Magazine",
            "desc":"Most Reliable Broker, Global",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-62.webp",
            "by": "Awarded by Capital Finance International Magazine  2023"
        },
        {
            "name":"Wealth Management Awards",
            "desc":"Best CFD Provider",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-37.webp",
            "by": "Awarded by City of London Wealth Management Awards 2023"
        },
        {
            "name":"(CFI.CO) Magazine",
            "desc":"Most Transparent Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-61.webp",
            "by": "Awarded by Capital Finance International Magazine (CFI.co) 2023"
        },
        {
            "name":"SmartVision Investment Expo",
            "desc":"Best Spreads Broker - Mena",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-08.webp",
            "by": "Awarded by SmartVision Award 2023"
        },
        {
            "name":"World Finance Magazine",
            "desc":"Best FX Broker Europe",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-10.webp",
            "by": "Awarded by World Finance Forex Award 2022"
        },
        {
            "name":"World Finance Magazine",
            "desc":"Best FX Broker Australasia",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-11.webp",
            "by": "Awarded by World Finance Forex Award 2022"
        },
        {
            "name":"World Finance Magazine",
            "desc":"Best FX Broker Latin America",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-12.webp",
            "by": "Awarded by World Finance Forex Award 2022"
        },
        
        {
            "name":"World Finance Magazine",
            "desc":"Best FX Broker Middle East",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-13.webp",
            "by": "Awarded by World Finance Forex Award 2022"
        },
        {
            "name":"Forex Traders Submit",
            "desc":"Best Fintech Company ",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/15.webp",
            "by": "Awarded by SmartVision Award 2022"
        },
        {
            "name":" Global Forex Expo",
            "desc":"Best Forex Trading Support",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-40.webp",
            "by": "Awarded by Global Forex – Retail  Awards 2022 "
        },
        {
            "name":"(CFI.CO) Magazine",
            "desc":"Most Transparent Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-66.webp",
            "by": "Awarded by Capital Finance International Magazine (CFI.co) 2022"
        },
        {
            "name":"Global Forex Expo",
            "desc":"Global Forex Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-64.webp",
            "by": "Awarded by Global Forex – Retail Awards 2022"
        },
        {
            "name":"(CFI.CO) Magazine",
            "desc":"Most Reliable Broker, Global",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-65.webp",
            "by": "Awarded by Capital Finance International Magazine  2022"
        },
        {
            "name":"(CFI.CO) Magazine",
            "desc":"Best FX Service Provider",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-39.webp", 
            "by": "Awarded by Capital Finance International Magazine  2022"
        },
        {
            "name":"Followme Expo",
            "desc":"Top 10 Popular Brokers",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-63.webp", 
            "by": "Awarded by FOLLOWME Trading Community 2022"
        },
        {
            "name":"FiN Expo Egypt",
            "desc":"Best Fintech Company ",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/12.webp",
            "by": "Awarded by SmartVision Award 2022"
        },
        {
            "name":"Forex Traders Submit",
            "desc":"Best Forex Fintech Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/13.webp",
            "by": "Awarded by SmartVision Award 2022"
        },
        {
            "name":"The Burj CEO Award",
            "desc":"Best Fintech Company",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/14.webp",
            "by": "Awarded by Burj CEO Award 2022"
        },
        {
            "name":"Forex Traders Summit Dubai",
            "desc":"Best ECN Brojer",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-14.webp",
            "by": "Awarded by SmartVision Awards 2022"
        },
        {
            "name":"Fazzaco Summit",
            "desc":"Winner of Best Spread Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-15.webp",
            "by": "Awarded by Fazzaco Awards 2022"
        },
        {
            "name":"Money Expo",
            "desc":"Fastest Growing Broker in Mena",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-16.webp",
            "by": "Awarded by Money Expo Award 2022"
        },
        {
            "name":"World Finance Magazine",
            "desc":"Best FX Broker for Europe",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-17.webp",
            "by": "Awarded by World Finance 2021"
        },
        {
            "name":"World Finance Magazine",
            "desc":"Best FX Broker for Australasia",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-18.webp",
            "by": "Awarded by World Finance 2021"
        },
        {
            "name":"Forex Expo Summit",
            "desc":"Most Trusted Forex Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-19.webp",
            "by": "Awarded by ForexExpo Awards 2021"
        },
        {
            "name":"Ultimate Fintech Expo",
            "desc":"Best Trading Experience",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-43.webp", 
            "by": "Awarded by Ultimate Fintech 2021"
        },
        {
            "name":"Followme Expo",
            "desc":"Most Popular Brokers",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-67.webp", 
            "by": "Awarded by FOLLOWME Trading Community 2021"
        },
        {
            "name":"Followme Expo",
            "desc":"Best FX Service Provider",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-44.webp", 
            "by": "Awarded by Wealth Management Awards 2022"
        },
        {
            "name":"Dubai Expo ",
            "desc":"Best FX Educational Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-42.webp", 
            "by": "Awarded by Dubai Expo Awards 2021"
        },
        {
            "name":"(CFI.CO) Magazine",
            "desc":"Best FX Service Provider",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-45.webp", 
            "by": "Awarded by Capital Finance International Magazine  2021"
        },
        {
            "name":"Global Forex Expo",
            "desc":"Best Retail Forex Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-73.webp",
            "by": "Awarded by Global Forex – Retail Awards 2021"
        },
        {
            "name":"Global Forex Expo",
            "desc":"Most Trusted Forex Broker - Global",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-70.webp",
            "by": "Awarded by Global Forex – Retail Awards 2021"
        },
        {
            "name":"World Finance Magazine",
            "desc":"Best FX Broker for Europe",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-20.webp",
            "by": "Awarded by World Finance Forex Award 2020"
        },
        {
            "name":"World Finance Magazine",
            "desc":"Best FX Broker for Australasia",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-21.webp",
            "by": "Awarded by World Finance Forex Award 2020"
        },
        {
            "name":"Followme Expo",
            "desc":"Best FX Service Provider",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-48.webp", 
            "by": "Awarded by Wealth Management Awards 2020"
        },
        {
            "name":"Global Forex Expo",
            "desc":"Global Forex Broker of the Year",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-74.webp",
            "by": "Awarded by Global Forex – Retail Awards 2020"
        },
        {
            "name":"Global Forex Expo",
            "desc":"Best Affiliate Program",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-75.webp",
            "by": "Awarded by Global Forex – Retail Awards 2020"
        },
        {
            "name":"World Finance Magazine",
            "desc":"Best FX Broker for Europe ",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-22.webp",
            "by": "Awarded by World Finance Forex Awards 2019"
        },
        {
            "name":"World Finance Magazine",
            "desc":"Best FX Broker for Australasia",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-23.webp",
            "by": "Awarded by World Finance Forex Award 2019"
        },
        {
            "name":"FinTech Age Expo",
            "desc":"Best Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-81.webp",
            "by": "Awarded by FinTech Age Award 2019"
        },
        {
            "name":"Global Forex Expo",
            "desc":"Most Trusted Asian Forex Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-80.webp",
            "by": "Awarded by Global Forex Awards 2019"
        },
        {
            "name":"Global Forex Expo",
            "desc":"Global Forex Broker of the Year",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-79.webp",
            "by": "Awarded by Global Forex Awards 2019"
        },
        {
            "name":"Followme Expo",
            "desc":"Fatest Growing Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-78.webp",
            "by": "Awarded by FOLLOWME Awards 2019"
        },
        {
            "name":"Magazine (CFI.co)",
            "desc":"Best Market Research & Education",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-51.webp",
            "by": "Awarded by Capital Finance International Magazine (CFI.co) 2019"
        },
        {
            "name":"Magazine (CFI.co)",
            "desc":"Best Customer Service Global",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-50.webp",
            "by": "Awarded by Capital Finance International Magazine (CFI.co) 2019"
        },
        {
            "name":"Shanghai Financial Summit",
            "desc":"Winner of Best Fintech Company",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-24.webp",
            "by": "Awarded by Shanghai Fin Award 2018"
        },
        {
            "name":"World Finance Magazine",
            "desc":"Best FX Broker Europe",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-25.webp",
            "by": "Awarded by World Finance Forex Award 2018"
        },
        {
            "name":"UK Forex Expo",
            "desc":"Best Forex Customer Service",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-52.webp",
            "by": "Awarded by Shares Magazine  UK Forex Awards 2018"
        },
        {
            "name":"Magazine (CFI.co)",
            "desc":"Best Market Research & Education",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-53.webp",
            "by": "Awarded by Capital Finance International Magazine (CFI.co) 2018"
        },
        {
            "name":"World Finance Magazine",
            "desc":"Best FX Broker Europe",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/about/awards/Awards-26.webp",
            "by": "Awarded by World Finance Forex Award 2017"
        },
        {
            "name":"Magazine (CFI.co)",
            "desc":"Best Trading Support",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-54.webp",
            "by": "Awarded by Capital Finance International Magazine (CFI.co) 2017"
        },
        {
            "name":"Magazine (CFI.co)",
            "desc":"Best FX Service Provider",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-55.webp",
            "by": "Awarded by Capital Finance International Magazine (CFI.co) 2017"
        },
        {
            "name":"Industry Selection ",
            "desc":"Best Gold Broker",
            "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/award/new/Awardss-82.webp",
            "by": "Industry Selection of 2016"
        }
    ]

  return (
    <section className='md:pt-12 3xl:pt-16 pt-8' >
        <div className='container'>
            <h1 className='HeadingH2 pb-6 md:pb-12'>{t("title")}</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
        {awardsList.map((award,index)=>(
            <div key={index} className="flex flex-wrap flex-col md:h-[360px] px-4 pt-8 border-[5px] border-[#F1F1F1] between items-center cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <div className="relative w-full h-20 md:h-28">
                    <Image className="object-contain" fill src={award.imgSRC} alt="award pic"/>
                </div>
                
                <h4 className="text pt-5">{award.name}</h4>
                <p className="text-[9px] md:text-[15px] text-center pt-1 md:pt-3">{award.desc}</p>
                <p className="text-[9px] md:text-base text-secondary border-t border-grap-300 mt-4 py-3 text-center ">{award.by}</p>
                    
               
            </div>    
        ))}
        </div>
        </div>
       
    </section>
  )
}

export default Awards;