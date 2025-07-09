import { useTranslations } from "next-intl";
import React from "react";

const TradeBanner = () => {
  const t = useTranslations("compaign.tradeWin.banner")
  return (
    <section className="bg-[url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/promotion/bg-new.webp')] bg-center bg-cover py-14 md:py-0">
      <div className="container">
        <div className="flex flex-col items-center justify-center lg:h-[600px] 3xl:h-[650px] 4xl:h[720px] 5xl:h-[900px] text-center relative z-30">
              <h4 className="bg-gradient-to-r from-[#d7a43b] to-[#f2ed93] inline-block text-transparent bg-clip-text mb-0 uppercase ltr:text-xl rtl:text-base ltr:lg:text-3xl rtl:lg:text-xl ltr:3xl:text-5xl rtl:3xl:text-xl">{t("para1")}</h4>
              <h2 className="bg-gradient-to-r from-[#d7a43b] to-[#f2ed93] inline-block text-transparent bg-clip-text text-4xl  lg:text-7xl ltr:3xl:text-9xl rtl:3xl:text-8xl font-black mb-0 uppercase md:py-4">{t("para2")}</h2>
              <p className="text-white text-sm lg:text-xl 5xl:text-3xl text-center py-8 lg:py-10 5xl:md:py-14 uppercase">{t("new")}</p>
              <button 
                   onClick={(e)=>{
                    let section = document.getElementById('register');
                    e.preventDefault();
                    section && section.scrollIntoView({ behavior: "smooth", block: "start"});
                }}
              className="bg-white py-3 text px-6 hover:bg-secondary hover:text-white uppercase text-sm md:text-xl">{t("liveAccount")}</button>
        </div>
      </div>
    </section>
  );
};

export default TradeBanner;
