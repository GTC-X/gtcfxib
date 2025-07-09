"use client";
import { useState } from "react"
import useGraphDetails from "./useGraphDetails"
import PieChart from "../../../chart/pieChart"

const TableRow = ({ text, value, classes }) => {
    return (
        <>
            <div className={`p-4 border-b text-xs ${classes}`}>{text}</div>
            <div className={`p-4 border-b text-right text-xs font-semibold ${classes}`}>{value}</div>
        </>
    )
}

const InstrumentLeader = ({ data, id }) => {
    const [filter, setFilter] = useState("count")
    const {
        quarterlyGraphData,
        tableData
    } = useGraphDetails({
        data,
        filter,
        id
    });

    return (
        <div className="max-w-5xl mx-auto mt-3">
            <h2 className="text-center text-xl font-medium mb-3">Instruments</h2>
            <p className="text-center text-xs text-[#8B96B6]">Account's exposure history per symbol</p>

            <div className=" flex justify-center gap-6 mt-8">
                <button className={`text-xs font-normal rounded-[25px] py-2 px-3 border ${filter == "count" ? " bg-secondary text-white" : ""}`}
                    onClick={() => setFilter("count")}
                >Count</button>
                <button className={`text-xs font-normal rounded-[25px] py-2 px-3 border ${filter == "volume" ? " bg-secondary text-white" : ""}`}
                    onClick={() => setFilter("volume")}
                >Volume</button>
            </div>
            <div className='my-8 flex justify-center items-end'>
                <PieChart
                    height={360}
                    width={"100%"}
                    seriesData={quarterlyGraphData}
                    showAxis={true}
                    label={"Leverage"}
                    strokeWidth={[0]}
                    grid={true}
                />
            </div>
            <div className="my-8">
                <h2 className="text-center text-base font-medium">Trade Statistics</h2>
                <p className="text-center text-xs text-[#8B96B6]">Analysis of trading operations</p>
                <div className="mt-6 grid grid-cols-2 border rounded-lg">
                    <TableRow text="Best trade" classes="bg-[#eff3fa75]" value={`$${tableData?.best?.profit}`}/>
                    <TableRow text="Worst trade" value={`$${tableData?.worst?.profit}`}/>
                    <TableRow text="Largest trade" classes="bg-[#eff3fa75]" value={`${tableData?.largest?.volume}`}/>
                    <TableRow text="Trades won" value={`${tableData?.won?.count}`}/>
                    <TableRow text="Trades lost" classes="bg-[#eff3fa75]" value={`${tableData?.lost?.count}`}/>
                    <TableRow text="Total profit" value={`$${tableData?.total?.profit}`}/>
                    <TableRow text="Average trade size" classes="bg-[#eff3fa75]" value={`${tableData?.total?.averageTradeSize}`}/>
                    <TableRow text="Average profit/win trade" value={`$${tableData?.won?.averageProfitPerTrade}`}/>
                    <TableRow text="Average loss/lost trade" classes="bg-[#eff3fa75]" value={`$${tableData?.lost?.averageProfitPerTrade}`}/>
                    <TableRow text="Average PnL/trade" value={`$${tableData?.total?.averageProfitPerTrade}`}/>
                    <TableRow text="Average PnL/lot" classes="bg-[#eff3fa75]" value={`$${tableData?.total?.averageProfitPerLot}`}/>
                    <TableRow text="Average trade duration" classes="bg-[#eff3fa75]" value={`${tableData?.averageDuration}`}/>

                </div>
            </div>
        </div>
    )
}

export default InstrumentLeader