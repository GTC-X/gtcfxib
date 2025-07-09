'use client'
import { useTranslations } from "next-intl";
import Image from "next/image";
import CampaignRules from "./CampaignRules";


const IBProgramSection = () => {
  const t = useTranslations("partner.IBProgram.other")
  
const rewards = [
  {
    "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/reward_10.webp",
    "text":t("option.nine"),
    "des": '1,000,000',
  },
  {
    "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/reward_1.webp",
    "text":t("option.one"),
    "des": '500,000',
  },
  {
    "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/reward_2.webp",
    "text":t("option.two"),
    "des": "250,000"
  },
  {
    "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/reward_8.webp",
    "text":t("option.eight"),
    "des": "125,000"
  },
  {
    "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/reward_9.webp",
    "text":t("option.ten"),
    "des": '75,000',
  },
  {
    "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/reward_3.webp",
    "text":t("option.three"),
    "des": "30,000"
  },

  {
    "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/reward_4.webp",
    "text":t("option.four"),
    "des": "15,000"
  },
  {
    "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/reward_7.webp",
    "text":t("option.seven"),
    "des": " 5,000"
  },
  {
    "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/reward_6.webp",
    "text":t("option.six"),
    "des": " 2,500"
  },
  {
    "imgSRC":"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/reward_5.webp",
    "text":t("option.five"),
    "des": " 1,500"
  },
]
  return (
    <section className='py-12 3xl:py-20 5xl:py-24 bg-primary'>
        <div className='container text-center'>
         <h2 className='HeadingH2 2xl:text-4xl font-[500] bg-gradient-to-r from-secondary via-[#ffffffc8] to-secondary inline-block text-transparent bg-clip-text text-center md:max-w-3xl mx-auto'>{t("heading")}</h2>
         <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 pt-12 gap-2 md:gap-8 ">
          {rewards.map((reward,index)=>(
            <div key={index} className="flex flex-col text-center justify-center items-center bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90% px-2 py-3 border border-gray-300">
            <Image width={250} height={100} src={reward.imgSRC} className="md:w-fit w-36"/>
            <p className="text-sm capitalize text-secondary">{reward.text}</p>
            <p className="textcapitalize text-white text-xs">{t("lots")}: {reward.des}</p>
          </div>
          ))}
         </div>
         <CampaignRules />
        </div>
    </section>
  )
}

export default IBProgramSection;




function BackOfCard({ title, icon, benefits  }) {
    return (
      <div className="flip-card  border-primary  h-72">
        <div className="flip-card-inner ">
          <div className="flip-card-front bg-white border rounded-none p-6 bg-cover bg-top bg-[url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/overlay-bg.webp')]">
            <div className="text-accent flex flex-col h-full justify-center items-center">
              <div className="relative w-full h-24">
                  <Image src={icon} fill alt={title} className="object-contain" />
              </div>
     
              <h1 className="text-secondary text-base xl:text-lg 3xl:text-xl my-4">{title}</h1>
              <p className="underline text-sm md:text-base">Click to View More</p>
            </div>
          </div>
          <div className="flip-card-back p-6 bg-secondary ltr:text-left rtl:text-right">
          <h3 className="text-white flex flex-col justify-start items-start text-base">
            {title}
            </h3>
            <ul className="leading-6 text-white list-disc pl-5 pt-2 text-sm">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }