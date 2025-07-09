"use client";
import React, { useCallback, useEffect, useState } from "react";
import Hero from "../components/common/Hero";
import New from "../components/blog/New";
import { useLocale, useTranslations } from "next-intl";
import { fetchAPI } from "../components/utilities/fetch-api";
import FallbackLoader from "../components/LoadingSpinner";
import dynamic from "next/dynamic";
import InfiniteScroll from "react-infinite-scroll-component";
import MarketOverViewNew from "../components/blog/MarketOverView";
import EmbeddedGoogleSheet from "../components/blog/EmbeddedGoogleSheet";
import GenericTradingHours from "./GenericTradingHours";
import TradingNotes from "../components/trendingTools/TradingNotes";
// const BlogList = dynamic(
//   () => import("../components/trendingTools/latestNews/blogList"),
//   {
//     loading: () => <FallbackLoader />,
//   }
// );

// const SingleMainBlog = dynamic(
//   () => import("../components/trendingTools/latestNews/singleMainBlog"),
//   {
//     loading: () => <FallbackLoader />,
//   }
// );
const MarketOverviewPage = () => {
   const t = useTranslations("tradingTools.marketOverView");
  // const locale = useLocale();
  // const [data, setData] = useState([]);
  // const [start, setStart] = useState(0);
  // const limit = Number(process.env.NEXT_PUBLIC_PAGE_LIMIT);
  // const [loading, setLoading] = useState(false);
  // const [hasMore, setHasMore] = useState(true);

  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  //     const path = `/blogs`;
  //     const urlParamsObject = {
  //       sort: { createdAt: "desc" },
  //       populate: {
  //         imageUrl: { populate: ["url"] },
  //         category: {
  //           only: ["name"],
  //         },
  //         author: {
  //           populate: "*",
  //         },
  //       },
  //       locale: locale == "zh-hans" ? "zh-Hans" : locale,
  //       filters: {
  //         category: 5,
  //       },
  //       pagination: {
  //         start: start,
  //         limit: limit,
  //       },
  //     };
  //     const options = { headers: { Authorization: `Bearer ${token}` } };
  //     const responseData = await fetchAPI(path, urlParamsObject, options);

  //     if (responseData?.meta?.pagination?.total == data?.length) {
  //       setHasMore(false);
  //       setLoading(false);
  //     } else {
  //       setHasMore(true);
  //     }
  //     if (start === 0) {
  //       setData(responseData?.data);
  //     } else {
  //       setData((prevData) => [...prevData, ...responseData.data]);
  //     }
  //     setStart(start + limit); // Update start for next fetch
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(); // Initial fetch
  // }, []);

  // const loadMoreData = () => {
  //   fetchData(); // Load more data on infinite scroll
  // };
  return (
    <>
      <Hero
        imageUrl="/trading/banner/market-overview.webp"
        title={t("bannerText.title")}
        description={t("bannerText.desc")}
      />
     <GenericTradingHours />
      <section className="inner-content mt-10">
        <div className="container">
        <h2 className="HeadingH2">{t("holiday.title")}</h2>
          <p className="text text-center mb-5 text-primary max-w-5xl mx-auto">
          {t("holiday.des")}
          </p>
         <MarketOverViewNew />

          {/* {data?.length > 0 && <SingleMainBlog posts={data?.[0] || []} />}
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
          </div> */}
               <TradingNotes />
        </div>
        
      </section>
       
        
    </>
  );
};

export default MarketOverviewPage;
