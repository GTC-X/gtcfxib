"use client";

import { useState, useEffect } from "react"
import ChartDetail from "../../component/singleChart"
import ReturnCard from "../cards"
import useGraphDetails from "./useGraphDetails"
import ColumnChart from "../../../chart"

const TradingLeader = ({ data, id }) => {
    const [date, setDate] = useState("all")
    const {
        quarterlyGraphData,
    } = useGraphDetails({
        data,
        id
    });

    return (
        <div className="max-w-5xl mx-auto mt-3">
            <h2 className="text-center text-xl font-medium mb-3">Return & Leverage</h2>
            <p className="text-center text-xs text-[#8B96B6]">Return and leverage comparison chart</p>
            <div className=" flex justify-center mt-8 gap-6">
                <ReturnCard
                    value={data?.dailyReturnVolatility}
                    name="Return Volatility"
                />
                <ReturnCard
                    name="Recovery Factor"
                    value={data?.recoveryFactor}
                />
                <ReturnCard
                    value={data?.absoluteGain}
                    name="Absolute Gain"
                />
                <ReturnCard
                    value={data?.downsideDeviation}
                    name="Downside Deviation"
                />
                <ReturnCard
                    value={data?.sharpeRatio}
                    name="Sharpe Ratio"
                />
                <ReturnCard
                    value={data?.returnVolatility}
                    name="Volatility Ratio"
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
                <div className='mt-8 flex justify-between items-end'>
                    <ColumnChart
                        height={360}
                        width={"100%"}
                        seriesData={quarterlyGraphData}
                        showAxis={true}
                        label={"Leverage"}
                        strokeWidth={[0]}
                        grid={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default TradingLeader