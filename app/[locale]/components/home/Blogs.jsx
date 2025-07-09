import { useLocale, useTranslations } from "next-intl";
import React, { useCallback, useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { usePathname } from "next/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { fetchAPI } from "../utilities/fetch-api";
import { useRouter } from "next-intl/client";
import FallbackLoader from "../LoadingSpinner";

const Blogs = () => {
  const t = useTranslations("home");
  const path = usePathname();
  const router = useRouter();
  const isAr = path.includes("/ar");
  const locale = useLocale();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(async (start, limit) => {
    setLoading(true);
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/blogs`;
      const urlParamsObject = {
        sort: { createdAt: "desc" },
        populate: {
          imageUrl: { populate: ["url"] },
          category: {
            only: ["name"],
          },
          author: {
            populate: "*",
          },
        },
        locale: locale == "zh-hans" ? "zh-Hans" : locale,
        filters: {
          category: 2,
        },
        pagination: {
          start: start,
          limit: limit,
        },
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);

      if (start === 0) {
        setData(responseData.data);
      } else {
        setData((prevData) => [...prevData, ...responseData.data]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, []);

  const handleNavigate = (blog) => {
    router.push(
      `/${blog?.attributes?.category?.data?.attributes?.slug}/${blog?.attributes?.slug}`,
      { locale: locale }
    );
  };

  return (
    <>
      <div className="max-w-4xl mx-auto mt-8 mb-20 border-4 bg-transparent border-secondary rounded-xl md py-5 px-4 md:px-0">
        <div className=" md:h-[300px]">
          {isLoading ? (
            <FallbackLoader />
          ) : (
            <Swiper
              direction={"vertical"}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                360: {
                  direction: "horizontal",
                },
                640: {
                  direction: "horizontal",
                },
                768: {
                  direction: "vertical",
                },
                1024: {
                  direction: "vertical",
                },
              }}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper-blogs h-full md:!overflow-visible md:!overflow-y-clip"
            >
              {data?.slice(0.4)?.map((blog, index) => (
                <SwiperSlide key={blog?.id || index}>
                  <div className="flex flex-wrap md:flex-row items-start">
                    <div className="basis-full md:basis-7/12">
                      <div
                        className="relative h-52 md:h-72 w-full cursor-pointer"
                        onClick={() => {
                          handleNavigate(blog);
                        }}
                      >
                        <img
                          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${blog?.attributes?.imageUrl?.data?.attributes?.url}`}
                          fill="true"
                          alt="Elian Douad"
                          className={`object-contain h-full w-full ${
                            isAr ? "lg:mr-[-50px]" : "lg:ml-[-50px]"
                          }   rounded-2xl`}
                        />
                      </div>
                    </div>
                    <div className="basis-full md:basis-5/12">
                      <div
                        className="card-body cursor-pointer text-white pl-2"
                        onClick={() => {
                          handleNavigate(blog);
                        }}
                      >
                        <p className="font-medium text-base text-secondary flex justify-start items-center gap-2">
                          <FaRegCalendarAlt size={18} />{" "}
                          {blog?.attributes?.createdAt?.slice(0, 10)}
                        </p>
                        <h2 className=" text-xl font-medium">
                          {blog?.attributes?.title || ""}
                        </h2>
                        <p className="text-base mt-2 line-clamp-3">
                          {blog?.attributes?.short_descreption || ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;
