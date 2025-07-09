'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const LpAwardCarusal = () => {

  const awardsList = [
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
  ];

  return (
    <section className="md:py-12 3xl:py-16 py-8 ib-award">
      <div className="container">
        <h1 className="HeadingH2 2xl:text-4xl font-[600] text-primary  pb-6 md:pb-12">GTCFX Awards</h1>
        <Swiper
          slidesPerView={4} // Display 4 items at a time
          spaceBetween={20} // Space between slides
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }} // Pagination with circle bullets
          modules={[Autoplay, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile: 1 item
            768: { slidesPerView: 2, spaceBetween: 15 }, // Tablets: 2 items
            1024: { slidesPerView: 3, spaceBetween: 20 }, // Small screens: 3 items
            1440: { slidesPerView: 4, spaceBetween: 20 }, // Large screens: 4 items
          }}
          className="mySwiper"
        >
          {awardsList.map((award, index) => (
            <SwiperSlide key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-row px-2 py-8 border-[5px] border-[#F1F1F1] items-center cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[100%]">
                <div className="relative w-full h-20 md:h-24">
                  <Image className="object-contain" fill src={award.imgSRC} alt={`${award.name} Image`} />
                </div>
                <div className="flex flex-col justify-start w-[380px] ">
                <h4 className="text pt-5">{award.name}</h4>
                <p className="text-[9px] md:text-[13px] text-center">{award.desc}</p>
                </div>
               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination flex justify-center mt-4"></div>
      </div>
    </section>
  );
};

export default LpAwardCarusal;

