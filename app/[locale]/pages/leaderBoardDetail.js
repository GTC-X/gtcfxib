"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Charts from "../components/leaderBoard/component/graph";
import ChartDetail from "../components/leaderBoard/component/singleChart";
import ReturnCard from "../components/leaderBoard/singleDetail/cards";
import ReturnLeader from "../components/leaderBoard/singleDetail/return";
import TradingLeader from "../components/leaderBoard/singleDetail/trading";
import InstrumentLeader from "../components/leaderBoard/singleDetail/instrument";
import HistoryLeader from "../components/leaderBoard/singleDetail/history";
import { useTranslations } from "next-intl";

const LeaderBoardDetail = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [date, setDate] = useState("all");
  const [tabs, setTabs] = useState(1);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_LEADER_URL}rating/1/profile/${params?.slug}?widget_key=social_platform_ratings`
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
 
  const t = useTranslations("prime-tech.socialTranding.leaderBoard")
  return (
    <>
      <div className="bg-white  py-12 2xl:py-16 text-center container">
        <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 mb-0 text-center font-semibold">
          {t("tradingHis")}
        </h2>
        {loading ? (
          <div className=" flex justify-center text-center min-h-44">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className=" grid grid-cols-1  gap-x-5 gap-y-8 mt-16">
            <div className="card-leader ">
              <div className="w-full p-3 mx-auto  cursor-pointer">
                <div className="">
                  <div className=" flex justify-center -mt-14">
                    <div className=" mx-auto relative">
                      <img
                        className=" w-24 h-24  rounded-full"
                        src={
                          data?.public?.avatarPath ||
                          "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/avatar.webp"
                        }
                        alt=""
                      />
                      <div className=" absolute h-8 w-8 rounded-full top-0 -right-0">
                        {data?.account?.countryCode?.length > 3 ||
                        data?.account?.countryCode == "" ? (
                          <img
                            className=" w-full h-full object-cover rounded-full"
                            src={
                              "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/avatar.webp"
                            }
                            alt=""
                          />
                        ) : (
                          <img
                            className=" w-full h-full object-cover rounded-full"
                            src={
                              `https://flagcdn.com/96x72/${data?.account?.countryCode?.toLowerCase()}.webp` ||
                              "/uz.svg"
                            }
                            alt=""
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 ">
                    <h4 className="text-xl text-center font-semibold text-primary">
                      {data?.accountName}
                    </h4>
                    <p className="text-[#8B96B6] text-center text-base">
                      {data?.account?.country || ""}
                    </p>
                  </div>
                  <div
                    className="text-center mt-2"
                    onClick={() => {
                      window.open(
                        `https://gtccopy.com/portal/registration/subscription?provider=${data?.profileId}&backLink=true&backUrl=https%3A%2F%2Fratings.gtccopy.com%2Fwidgets%2Fratings%3FwidgetKey=social_platform_ratings&lang=en&wlid=2b9e7678-160f-48f5-9a5f-5f5bef2d9d26&widgetKey=social_platform_ratings`,
                        "_blank"
                      );
                    }}
                  >
                    <button className="text-base border-2 text-white bg-secondary rounded-[25px] py-1 px-2 w-28 hover:bg-primary">
                      Copy
                    </button>
                  </div>
                </div>
                <div className="bg-primary py-5 mt-10">
                  <div className=" grid max-w-5xl mx-auto grid-cols-4 gap-6 mt-8 py-8">
                    <ReturnCard
                      value={data?.returnAllTime}
                      name="Return (total)"
                      percent={"%"}
                      classes={"bg-white"}
                    />
                    <ReturnCard
                      name="Return (1D)"
                      value={data?.returnDay}
                      percent={"%"}
                      classes={"bg-white"}
                    />
                    <ReturnCard
                      value={data?.rank}
                      name="Rank"
                      classes={"bg-white"}
                    />
                    <ReturnCard
                      value={data?.age}
                      name="Age (Days)"
                      classes={"bg-white"}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mb-8">
                  <div
                    className={`text-center text-base  p-2 border-b-2 ${tabs == 1 ? "border-secondary text-secondary" : "text-[#8B96B6]"}`}
                    onClick={() => setTabs(1)}
                  >
                    Return
                  </div>
                  <div
                    className={`text-center text-base  p-2 border-b-2 ${tabs == 2 ? "border-secondary text-secondary" : "text-[#8B96B6]"}`}
                    onClick={() => setTabs(2)}
                  >
                    Trading
                  </div>
                  <div
                    className={`text-center text-base  p-2 border-b-2 ${tabs == 3 ? "border-secondary text-secondary" : "text-[#8B96B6]"}`}
                    onClick={() => setTabs(3)}
                  >
                    Instruments
                  </div>
                  <div
                    className={`text-center text-base  p-2 border-b-2 ${tabs == 4 ? "border-secondary text-secondary" : "text-[#8B96B6]"}`}
                    onClick={() => setTabs(4)}
                  >
                    History
                  </div>
                </div>
                {tabs == 1 ? (
                  <ReturnLeader data={data} id={data?.accountId} />
                ) : tabs == 2 ? (
                  <TradingLeader data={data} id={data?.accountId} tabs={tabs} />
                ) : tabs == 3 ? (
                  <InstrumentLeader
                    data={data}
                    id={data?.accountId}
                    tabs={tabs}
                  />
                ) : tabs == 4 ? (
                  <HistoryLeader data={data} id={data?.accountId} tabs={tabs} />
                ) : (
                  ""
                )}
               </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LeaderBoardDetail;
