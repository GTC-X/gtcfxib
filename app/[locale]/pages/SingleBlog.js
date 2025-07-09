"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SocialBanner from "../components/common/SocialBanner";
import MorePosts from "../components/common/MorePosts";
import AOS from "aos";
import FallbackLoader from "../components/LoadingSpinner";
import { fetchAPI } from "../components/utilities/fetch-api";
import NotFound from "../[404]/page";

const SingleBlog = ({ url }) => {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);
  const params = useParams();
  const [data, setData] = useState(null);
  const [recentData, setRecentData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [recentLoading, setRecentLoading] = useState(false);
  const getCategory = () => {
    switch (url) {
      case "highlights":
        return 2;
      case "latest-news":
        return 1;
      case "company-news":
        return 7;
      case "market-overview":
        return 5;
      case "blogs":
        return 6;
    }
  };
  const fetchData = useCallback(async () => {
    setLoading(true);
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/blogs`;
    const urlParamsObject = {
      sort: { createdAt: "desc" },
      populate: {
        imageUrl: { populate: ["url"] },
        category: { populate: "*" },
        author: {
          populate: "*",
        },
      },
      filters: {
        category: getCategory(),
        slug: decodeURIComponent(params?.slug),
      },
      locale: params?.locale == "zh-hans" ? "zh-Hans" : params?.locale,
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    fetchAPI(path, urlParamsObject, options)
      .then((res) => {
        setLoading(false);
        if (res?.data?.length == 0) {
          setNotFound(true);
        }
        setData(res?.data?.[0] || null);
      })
      .catch((err) => {
        setLoading(false);
        setData(null);
      });
  }, []);

  const fetchRecentData = useCallback(async (start, limit) => {
    setRecentLoading(true);
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/blogs`;
    const urlParamsObject = {
      sort: { createdAt: "desc" },
      populate: {
        imageUrl: { populate: ["url"] },
        category: { populate: "*" },
        author: {
          populate: "*",
        },
      },
      filters: {
        category: getCategory(),
      },
      pagination: {
        start: start,
        limit: limit,
      },
      locale: params?.locale == "zh-hans" ? "zh-Hans" : params?.locale,
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    fetchAPI(path, urlParamsObject, options)
      .then((res) => {
        setRecentLoading(false);
        setRecentData(res?.data?.filter((x) => x?.id != decodeURIComponent(params?.slug)));
      })
      .catch((err) => {
        setRecentLoading(false);
        setRecentData([]);
      });
  }, []);

  useEffect(() => {
    fetchData();
    fetchRecentData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, []);


  return (
    <>
      {notFound ? (
        <NotFound />
      ) : (
        <>
          {isLoading ? (
            <FallbackLoader />
          ) : (
            <section className="bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] border-y border-gray-200 py-10">
              <div className="container">
                <h2
                  className="bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text text-xl xl:text-2xl 2xl:text-[30px] capitalize font-medium mb-0 md:mb-0 leading-10"
                >
                  {data?.attributes?.title}
                </h2>
              </div>
            </section>
          )}
          <section className="flex flex-col md:flex-row container py-12 gap-10">
            <div className="flex-[70%]">
              <h2
                className="text-primary md:text-[25px] leading-[1.5em] font-medium capitalize mb-4"
              >
                {data?.attributes?.title}
              </h2>

              <div
                className="single-blog-descreption text ltr:text-left rtl:text-right text-primary"
                dangerouslySetInnerHTML={{
                  __html: data?.attributes?.descreption,
                }}
              />
            </div>

            <div
              className="flex-[30%]"
            >
              <div className=" bg-gray-100 p-5 shadow-2xl border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Share: </h3>
                <SocialBanner />
                {!isLoading && recentLoading ? (
                  <FallbackLoader />
                ) : (
                  <MorePosts recentData={recentData} />
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default SingleBlog;
