import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Button from "../common/Button";


const NewHero = () => {
  const t = useTranslations("home.hero")
  const slideContents = [
    {
      title: t("title1"),
      description: t("desc1")
    },
    {
      title: t("title2"),
      description: t("desc2")
    },
    {
      title: t("title3"),
      description: t("desc3")
    }
  ];

  const path = usePathname();
  const isAr = path.includes('/ar');

  return (
    <section className="relative lg:h-[55vh] xl:h-[62vh] 2xl:h-[68vh] 3xl:h-[65vh] py-10 lg:py-16 xl:py-16 2xl:py-20 3xl:pt-40 4xl:pt-48 5xl:py-56">
      {/* Show video only on larger screens */}
      <video
        autoPlay
        loop
        muted
        className="hidden lg:block absolute inset-0 w-full h-full object-cover opacity-25"
      >
        <source src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/gtcfx-new.mp4" type="video/mp4" />
      </video>

      {/* Show image on smaller screens */}
      <div className="lg:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-opacity-20 py-10" style={{ backgroundImage: "url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/mobile-bg.webp')" }}></div>

      <div className="container relative z-10">
        <div className="text-center pb-16 lg:pb-6 xl:pb-12 2xl:pb-28 3xl:pb-36">
          <Swiper
            spaceBetween={30}
            loop
            effect={'fade'}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, EffectFade]}
            autoplay={{
              delay: 4000
            }}
            fadeEffect={{
              crossFade: true,
              duration: 6000
            }}
          >
            {slideContents.map((slide, index) => (
              <SwiperSlide key={index}>
                <h1 className="text-xl xl:text-3xl 2xl:text-6xl ltr:3xl:text-[68px] rtl:3xl:text-[55px] rtl:3xl:leading-[85px]   font-medium md:leading-normal tracking-tight bg-gradient-to-r from-[hsl(227,53%,33%)] via-[#1b2258] to-[#10122d] shine-button inline-block text-transparent bg-clip-text">{slide.title}</h1>
                <p className={`text-accent text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl tracking-wider pt-5 mx-auto ${isAr ? "md:w-[900px]" : "md:w-[800px]" }`}>{slide.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
          <Button />
      </div>
    </section>
  );
};

export default NewHero