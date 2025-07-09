import Image from 'next/image'
import Aos from "aos";
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

const LiveAccountNew = () => {
    const t = useTranslations('accounts.live-account')
    useEffect(() => {
        Aos.init({ disable: "mobile" });
      }, []);
  return (
    <section>
        <div 
        className='container mx-auto bg-[#000031] flex flex-col justify-center items-center h-64 my-24 relative'
        data-aos="fade-down"
        data-aos-duration="1500">
            {/* <div className="absolute inset-0 opacity-80 bg-no-repeat bg-center  h-full  bg-contain bg-[url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/live_account_bg2.webp')]"/> */}
            <h1 className='md:text-3xl text-xl text-secondary font-[700] text-center md:pb-0 pb-3'>{t("title")}</h1>
            <p className='text text-white text-md'>{t("sub_title")}</p>
        </div>
        <div 
        className='container flex flex-col-reverse md:flex-row mb-20'
        >
            <div 
            className='w-full md:w-[70%] border border-secondary shadow-xl'
            data-aos="fade-right"
            data-aos-duration="1500"
            >
            <div className="absolute inset-0 opacity-80 bg-no-repeat bg-center h-full  bg-contain bg-[url('/live_account_bg.png')]"/>
            </div>
            <div 
            className='w-full md:w-[35%] flex flex-col items-center'
            data-aos="fade-left"
            data-aos-duration="1500"
            >
                <p className='text text-[18px]'>{t("title")}</p>
                <h1 className='HeadingH2 text-[24px]'>{t("fast")}</h1>
                <h1 className='HeadingH2 md:leading-3 text-[24px] leading-4'>{t("instant")}</h1>
                <Image src='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/live_account_banner_bg.webp' width={400} height={500} alt='banner background'/>
                {/* <p className='text md:py-1 py-2 '>Forex CFD Provider Covering <b>7 Asset</b></p>
                <p className='text md:p-0 pb-8'>classes & <b>+27,000</b> trading instruments</p> */}
            </div>
        </div>
    </section>
  )
}

export default LiveAccountNew;