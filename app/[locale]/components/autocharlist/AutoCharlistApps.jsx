"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaPlay,FaApple,FaAndroid } from "react-icons/fa";

const AutoCharlistApps = () => {
  const t = useTranslations("prime-tech.technicalTool.autoCharlist.AutoCharlistApps");
  return (
    <>
    <section className="pt-12">
    <div className='container grid md:grid-cols-2 grid-cols-1 pb-5 '>
    <div>
    <img 
    src='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/prime/2-mobiles.png' 
    className='w-[75%] mx-auto md:mx-0' 
    alt='phones'

    />
    </div>
    <div
   
      className="text-center"
    >
        <h2 className='HeadingH2 ltr:text-left rtl:text-right'>{t("title1")}</h2>
        <p className='text md:text-left py-2'>
        {t("desc1")}
        </p>
        <div className='flex items-center gap-5 pb-5'>
            <FaPlay color='#b68756' /><h3 className='text-lg'>{t("start")}</h3>
        </div>
        <ul className='grid md:grid-cols-2 grid-cols-1 gap-4 text-primary text text-left pb-5'>
            <li><a href='#'>{t("list1")}</a></li>
            <li><a href='#'> {t("list2")}</a></li>
            <li><a href='#'> {t("list3")}</a></li>
        </ul>
        <Link href="https://download.mql5.com/cdn/web/gtc.global.trade/mt4/gtcglobaltrade4setup.exe" target="_blank" className='px-3 py-2 font-semibold text-white bg-secondary hover:text-secondary hover:bg-primary'>{t("button1")}</Link>
    </div>
</div>
</section>
<section className="">
  <div className='container grid md:grid-cols-2 grid-cols-1 items-center py-5'>
    <div 
      className='space-y-6 md:order-1 order-2 text-center' // Change order for mobile
     
    >
        <h2 className='HeadingH2 ltr:text-left rtl:text-right'>{t("title2")}</h2>
        <p className='text pb-4 ltr:text-left rtl:text-right'>
        {t("desc2")}
        </p>
        <Link href="https://ct.gtcfx.com/" target="_blank" className='px-3 py-2 text-white min-w-[300px] bg-secondary hover:text-secondary hover:bg-primary'>{t("button2")}</Link>
    </div>
    <div
      className='md:order-2 order-1' // Change order for mobile
    
    >
        <img 
        src='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/prime/2-mobiles-2.png' 
        className='w-[75%] mx-auto md:mx-0' 
        alt='phones' />
    </div>
  </div>
</section>

{/* Mobile Application */}
<section className="">
<div className='container grid md:grid-cols-2 grid-cols-1 justify-center items-center text-center pb-10'>
  <div 

  >
      <img 
      src='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/prime/2-mobiles-3.png' 
      className='w-[75%] mx-auto md:mx-0' 
      alt='phones' />
  </div>
  <div

  >
      <h2 className='HeadingH2 ltr:text-left rtl:text-right'>{t("title3")}</h2>
      <p className='text pt-4  ltr:text-left rtl:text-right'>
      {t("desc3")}
      </p>
      <p className='text py-4 ltr:text-left rtl:text-right'>
      {t("desc4")}
      </p>
      <div className='flex flex-row gap-2'>
          <Link href="https://itunes.apple.com/us/app/autochartist/id903348229?mt=8" target="_blank" className='flex items-center w-[220px] lg:w-[250px] justify-center gap-2 bg-secondary text-white py-3 px-3 hover:text-white text-[12px] lg:text-[16px]'><FaApple size={22}/> {t("btnTxt1")}</Link>
          <Link href="https://play.google.com/store/apps/details?id=com.autochartist.mobile" target="_blank" className='flex items-center w-[220px] lg:w-[250px] justify-center gap-2  bg-primary text-white py-3 px-3 hover:text-white text-[12px] lg:text-[16px]'><FaAndroid size={22}/> {t("btnTxt2")}</Link>
      </div>
     
  </div>
</div>
</section>
</>
  )
}
export default AutoCharlistApps