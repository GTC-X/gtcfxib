"use client";

import { useState } from "react"
import ChartDetail from "../../component/singleChart"
import ReturnCard from "../cards"
import useGraphDetails from "./useGraphDetails"
import ColumnChart from "../../../chart"

const ReturnLeader = ({ data, id }) => {
    const [date, setDate] = useState("all")
    const {
        quarterlyGraphData,
    } = useGraphDetails({
        data,
        id
    });

    return (
        <div className="max-w-5xl mx-auto mt-3">
            <h2 className="text-center text-xl font-medium mb-3">RETURN/PERIOD</h2>
            <p className="text-center text-xs text-[#8B96B6]">Information about the account's return changes over time</p>
            <div className=" grid grid-cols-7 mt-8 gap-6">
                <ReturnCard
                    value={data?.returnAllTime}
                    name="All time"
                    percent={"%"}
                />
                <ReturnCard
                    name="Year"
                    value={data?.returnYear}
                />
                <ReturnCard
                    value={data?.returnHalfYear}
                    name="Half Year"
                />
                <ReturnCard
                    value={data?.returnQuarter}
                    name="Quarter"
                />
                <ReturnCard
                    value={data?.returnMonth}
                    name="Month"
                />
                <ReturnCard
                    value={data?.returnWeek}
                    name="Week"
                />
                <ReturnCard
                    value={data?.returnDay}
                    name="Day"
                />
            </div>

            <div className=" flex justify-center gap-6 mt-8">
                <button className={`text-xs font-normal rounded-[25px] py-2 px-3 border ${date == "all" ? " bg-secondary text-white" : ""}`}
                    onClick={() => setDate("all")}
                >All time</button>
                <button className={`text-xs font-normal rounded-[25px] py-2 px-3 border ${date == "3months" ? " bg-secondary text-white" : ""}`}
                    onClick={() => setDate("3months")}
                >3 Months</button>
                <button className={`text-xs font-normal rounded-[25px] py-2 px-3 border ${date == "1months" ? " bg-secondary text-white" : ""}`}
                    onClick={() => setDate("1months")}
                >1 Months</button>
                <button className={`text-xs font-normal rounded-[25px] py-2 px-3 border ${date == "week" ? " bg-secondary text-white" : ""}`}
                    onClick={() => setDate("week")}
                >Week</button>
            </div>
            <div className='mt-6 flex justify-between items-end'>
                <ChartDetail item={data} height={360} width={"100%"}
                    date={date}
                    label="Return"
                    grid={true}
                />
            </div>
            <div className="mt-20 mb-20">
                <h2 className="text-center text-base font-medium">MONTHLY</h2>
                <p className="text-center text-xs text-[#8B96B6]">Returns of account by month</p>
                <div className=" flex justify-center mx-auto mt-8 gap-6">
                    <ReturnCard
                        value={data?.geometricAverageReturnWeekly}
                        name="Average return (Weekly)"
                        percent={"%"}
                    />
                    <ReturnCard
                        name="Average return (Monthly)"
                        value={data?.geometricAverageReturnMonthly}
                        percent={"%"}
                    />
                    <ReturnCard
                        value={data?.geometricStandardDeviation}
                        name="Return deviation (Daily)"
                        percent={"%"}
                    />
                    <ReturnCard
                        value={data?.geometricStandardDeviationMonth}
                        name="Return deviation (Monthly)"
                        percent={"%"}
                    />
                    <ReturnCard
                        value={data?.geometricStandardDeviationYear}
                        name="Return deviation (Yearly)"
                        percent={"%"}
                    />
                </div>
                <div className='mt-8 flex justify-between items-end'>
                    <ColumnChart
                        height={360}
                        width={"100%"}
                        seriesData={quarterlyGraphData}
                        showAxis={true}
                        label={"Monthly"}
                        strokeWidth={[0]}
                        grid={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default ReturnLeader