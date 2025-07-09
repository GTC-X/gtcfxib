"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ContactFrom from "../contactUs/ContactFrom";

const imagePaths = [
  "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/images/media/media-slide1.jpg",
  "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/images/media/media-slide2.jpg",
  "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/images/media/media-slide3.jpg",
  "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/images/media/media-slide4.jpg",
  "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/images/media/media-slide5.jpg",
  "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/images/media/media-slide6.jpg",
];

const Company = () => {
  const displayedItems = imagePaths;
  const t = useTranslations("footerPage");

  return (
    <div className="container md:py-16 py-8 ">
      <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-8 lg:gap-14">
        <div>
          <p className="text-base text-primary font-normal pb-4">
            {t("media.content.heading")}
          </p>
          <h2 className="text-2xl lg:text-4xl font-semibold text-primary pb-4">
            {t("media.content.prHeading")}
          </h2>

          <p className="text-base text-primary font-normal pb-4">
            {t("media.content.para")}
          </p>
          <p className="text-base text-primary font-normal pb-3">
            {t("media.content.para1")}
          </p>
          <ContactFrom />
        </div>
        <div>
          <div className=" rounded-box gap-8 text-center">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={true}
              pagination={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="my-swipper-media"
            >
              {displayedItems.map((path, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-60 lg:h-96 w-full">
                    <Image
                      src={path}
                      alt={`alt ${index}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
