"use client";

import React from "react"
import useGraphDetails from "./useGraphDetails"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const HistoryLeader = ({ data, id }) => {
    const {
        pagination,
        setPagination,
        tableData
    } = useGraphDetails({
        data,
        id
    });

    return (
        <div className="max-w-5xl mx-auto">
            <div className="my-8">
                <div className='r-pagination flex gap-2 items-center justify-end'>
                    <button disabled={pagination?.skip == 20} className='pagination-btn p-2 border border-secondary rounded-md'
                        onClick={() => {
                            setPagination(st => ({ ...st, skip: st.skip - 20 }))
                        }}
                    >
                        <FaChevronLeft className=" text-secondary" />
                    </button>
                    <span className=" text-xs">{pagination?.skip} OF {tableData?.count || 100}</span>
                    <button disabled={pagination?.total == pagination?.skip + 20} className='pagination-btn p-2 border border-secondary rounded-md'
                        onClick={() => {
                            setPagination(st => ({ ...st, skip: st.skip + 20 }))
                        }}
                    >
                        <FaChevronRight className=" text-secondary" />
                    </button>
                </div>
                <div className="mt-3 grid grid-cols-6 border rounded-lg">
                    <div className={`p-4 border-b text-xs font-semibold bg-primary text-white `}>Symbol</div>
                    <div className={`p-4 border-b text-xs font-semibold bg-primary text-white`}>Volume</div>
                    <div className={`p-4 border-b text-xs font-semibold bg-primary text-white`}>Open Time</div>
                    <div className={`p-4 border-b text-xs font-semibold bg-primary text-white`}>Close Time</div>
                    <div className={`p-4 border-b text-xs font-semibold bg-primary text-white`}>Prices</div>
                    <div className={`p-4 border-b text-xs font-semibold bg-primary text-white`}>Profit</div>
                    {tableData?.items?.map((single, index) => {
                        const openTime = single?.openTime?.split("T")
                        const closeTime = single?.closeTime?.split("T") 
                        const color = index % 2 == 0 ? "bg-[#eff3fa75]" : ""
                        return (
                            <React.Fragment key={index}>
                                <div className={`p-4 border-b text-xs ${color}`}>{single?.symbol}</div>
                                <div className={`p-4 border-b text-xs ${color}`}>
                                    <p>{single?.volume}</p>
                                    <p>{single?.direction}</p>
                                </div>
                                <div className={`p-4 border-b text-xs ${color}`}>{openTime?.[0]} {openTime?.[1]}</div>
                                <div className={`p-4 border-b text-xs ${color}`}>{closeTime?.[0]} {closeTime?.[1]}</div>
                                <div className={`p-4 border-b text-xs ${color}`}>
                                    <p>Open Price: {single?.openPrice}</p>
                                    <p>Close Price: {single?.closePrice}</p>
                                </div>
                                <div className={`p-4 border-b text-xs ${color}`}>
                                    <p>${single?.profit}</p>
                                    <p>{single?.profitPoints} points</p>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HistoryLeader