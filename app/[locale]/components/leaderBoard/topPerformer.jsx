import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./style.scss";
import { Autoplay, Pagination } from "swiper/modules";
import { FaAngleRight } from "react-icons/fa";
import Charts from "./component/graph";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const TopPerformer = () => {
   const t = useTranslations("prime-tech.socialTranding.leaderBoard")
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter()
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_LEADER_URL}rating/1?%24top=100&widget_key=social_platform_ratings`
      )
      .then((res) => {
        setData(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log({ err });
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-2xl font-medium">{t('topPer')}</h2>
      {loading ? (
        <div className=" flex justify-center text-center min-h-44">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1160: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1260: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="leaderboard mt-4"
        >
          {data?.items?.map((single, index) => {
            if (single?.maxProfit < 50) return null

            const countryCode = single?.account?.countryCode?.toLowerCase();
            return (
              <SwiperSlide key={index} className=" h-full"

              >
                <div className="w-full min-h-40  cursor-pointer"
                  onClick={() => {
                    router.push(`/leaderboard/${single?.profileId}`)
                  }}
                >
                  <div className="p-3 pb-0 flex justify-between items-center">
                    <div className="relative">
                      <img
                        className=" w-12 h-12 rounded-full"
                        src={single?.public?.avatarPath || "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/avatar.webp"}
                        alt=""
                      />
                      <div className=" absolute h-6 w-6 rounded-full top-0 -right-2">
                        {countryCode?.length > 3 || countryCode == "" ?

                          <img className=' w-full h-full object-cover rounded-full' src={"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/avatar.webp"} alt="" />
                          :
                          <img className=' w-full h-full object-cover rounded-full' src={`https://flagcdn.com/96x72/${single?.account?.countryCode?.toLowerCase()}.webp` || "/uz.svg"} alt="" />
                        }
                      </div>
                    </div>
                    <div>
                      <button className="text-sm border-2 border-secondary cursor-pointer rounded-[25px] py-1 px-2"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(`https://gtccopy.com/portal/registration/subscription?provider=${single?.accountId}&backLink=true&backUrl=https%3A%2F%2Fratings.gtccopy.com%2Fwidgets%2Fratings%3FwidgetKey=social_platform_ratings&lang=en&wlid=2b9e7678-160f-48f5-9a5f-5f5bef2d9d26&widgetKey=social_platform_ratings`, "_blank")
                        }}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 px-3">
                    <h4 className="text-base text-secondary font-semibold">
                      {single?.accountName}
                    </h4>
                    {/*   <p className="text-[#8B96B6] text-sm min-h-[22px]">
                      {single?.public?.alternativeName || ""}
                    </p>
              */ }
                  </div>
                  <Charts item={single} height={150} width={"100%"} />
                  <div className="mt-2 px-3 pb-3 flex justify-between items-center">
                    <div>
                      <h5 className="text-[10px]">Max Profit</h5>
                      <p className="text-sm font-semibold">
                        {single?.maxProfit}%
                      </p>
                    </div>
                    <FaAngleRight className="text-secondary" />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}
    </div>
  );
};

export default TopPerformer;
