import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";

const BridgeCarousel = () => {

 const t= useTranslations("home.liquidity_provider.tab.bridge")
  const slides = [
    { title: t("p1"), description: t("d1") },
    { title: t("p2"), description: t("d2") },
    { title: t("p3"), description: t("d3") },
    { title: t("p4"), description: t("d4") }
  ];

  return (
    <div>
      <Swiper
        spaceBetween={20}
        loop
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 }
        }}
        
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
             <div className="p-6 border shadow-md bg-white text-center h-[250px] flex flex-col justify-center items-center">
              <h3 className="text-lg font-bold text-gray-800">{slide.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BridgeCarousel