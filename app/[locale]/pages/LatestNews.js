"use client";
import React, { useCallback, useEffect, useState } from "react";
import Hero from "../components/common/Hero";
import { fetchAPI } from "../components/utilities/fetch-api";
import { useLocale } from "next-intl";
import dynamic from "next/dynamic";
import FallbackLoader from "../components/LoadingSpinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslations } from "next-intl";
const BlogList = dynamic(
  () => import("../components/trendingTools/latestNews/blogList"),
  {
    loading: () => <FallbackLoader />,
  }
);
const SingleMainBlog = dynamic(
  () => import("../components/trendingTools/latestNews/singleMainBlog"),
  {
    loading: () => <FallbackLoader />,
  }
);
const LatestNewsPage = () => {
  const locale = useLocale();
  const [data, setData] = useState([]);
  const [start, setStart] = useState(0);
  const limit = Number(process.env.NEXT_PUBLIC_PAGE_LIMIT);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
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
          category: 1,
        },
        pagination: {
          start: start,
          limit: limit,
        },
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);

      if (responseData?.meta?.pagination?.total == data?.length) {
        setHasMore(false);
        setLoading(false);
      } else {
        setHasMore(true);
      }
      if (start === 0) {
        setData(responseData?.data);
      } else {
        setData((prevData) => [...prevData, ...responseData.data]);
      }
      setStart(start + limit); // Update start for next fetch
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch
  }, []);

  const loadMoreData = () => {
    fetchData(); // Load more data on infinite scroll
  };

  const t = useTranslations("tradingTools.latestNews.bannerText")

  return (
    <>
      <Hero
        imageUrl="/trading/banner/latest-news.webp"
        title={t("heading")}
        description={t("description")}
      />
      <div className="bg-white py-10">
        <div className="container">
        
          {data?.length > 0 && <SingleMainBlog posts={data?.[0] || []} />}
          <div className="h-full pt-8" id="scrollableDiv">
            <InfiniteScroll
              dataLength={data.length}
              scrollThreshold={0.7}
              next={loadMoreData}
              hasMore={hasMore}
              loader={<FallbackLoader />}
              endMessage={<p className="pt-5">No more items</p>}
            >
              <BlogList posts={data || []} index={1} />
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNewsPage;
