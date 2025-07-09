"use client";
import React, { useEffect, useState } from "react";
import TopPerformer from "../components/leaderBoard/topPerformer";
import LeaderCard from "../components/leaderBoard/LeaderCard";
import Filters from "../components/leaderBoard/Filter";
import axios from "axios";

const LeaderBoard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({ total: 0, orderBy: { value: "rank asc", name: "Rating" }, skip: 12 })
    const [view, setView] = useState("grid")
    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_LEADER_URL}rating/1?$top=12&widget_key=social_platform_ratings&$count=true&$orderby=${pagination?.orderBy?.value}&$skip=${pagination?.skip}`
            )
            .then((res) => {
                setData(res?.data);
                setLoading(false);
                setPagination(st => ({
                    ...st,
                    total: res?.data?.count
                }))
            })
            .catch((err) => {
                console.log({ err });
                setLoading(false);
            });
    }, [pagination?.skip, pagination?.orderBy]);
    return (
        <>

            <div className="bg-gray-100 py-8 md:py-16 2xl:py-20" >
                <TopPerformer />
            </div >
            <div className="bg-white py-12 md:py-16 2xl:py-20" >
                <Filters
                    pagination={pagination}
                    setPagination={setPagination}
                    view={view}
                    setView={setView}
                />
                <LeaderCard
                    data={data}
                    view={view}
                />
            </div >
        </>
    );
};

export default LeaderBoard;
