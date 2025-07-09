"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { GoListUnordered } from "react-icons/go";
import { CgMenuGridO } from "react-icons/cg";
import { useState } from "react";

const Filters = (props) => {
    const { pagination, setPagination, setView, view } = props
    const [show, setShow] = useState(false)
    return (
        <div className='container flex justify-between items-center'>
            <div className="flex gap-2  items-center">
                <div className={`rounded-md border cursor-pointer p-1 ${view == "list" ? "border-secondary" : ""}`}
                    onClick={() => { setView("list") }}
                >
                    <GoListUnordered />
                </div>
                <div className={`rounded-md border cursor-pointer p-1 ${view == "grid" ? "border-secondary" : ""}`}
                    onClick={() => { setView("grid") }}
                >
                    <CgMenuGridO />
                </div>
                <div className="dropdown ml-6">
                    <div tabIndex={0} role="button" className="pagination-btn p-2 border text-xs border-secondary rounded-md"
                        onClick={() => setShow(!show)}
                    >Order by: {pagination?.orderBy?.name}</div>
                    {show &&
                        <ul tabIndex={0} className="dropdown-content bg-white menu rounded-box z-[1] w-52 shadow"
                        >
                            <li className="p-2 cursor-pointer rounded-sm hover:bg-[#e9e9e99c] "
                                onClick={() => {
                                    setPagination((st) => ({
                                        ...st, orderBy: {
                                            ...st.orderBy,
                                            name: "Balance",
                                            value: "account/balance asc"
                                        }
                                    }))
                                    setShow(false)
                                }}
                            >
                                Balance
                            </li>
                            <li className="p-2 cursor-pointer rounded-sm hover:bg-[#e9e9e99c] "
                                onClick={() => {
                                    setPagination((st) => ({
                                        ...st, orderBy: {
                                            ...st.orderBy,
                                            name: "Average profit",
                                            value: "averageDailyProfit asc"
                                        }
                                    }))
                                    setShow(false)

                                }}
                            >
                                Average profit
                            </li>
                            <li className="p-2 cursor-pointer rounded-sm hover:bg-[#e9e9e99c] "
                                onClick={() => {
                                    setPagination((st) => ({
                                        ...st, orderBy: {
                                            ...st.orderBy,
                                            name: "Deposits",
                                            value: "grossDepositMonth asc"
                                        }
                                    }))
                                    setShow(false)

                                }}
                            >
                                Deposits
                            </li>
                            <li className="p-2 cursor-pointer rounded-sm hover:bg-[#e9e9e99c] "
                                onClick={() => {
                                    setPagination((st) => ({
                                        ...st, orderBy: {
                                            ...st.orderBy,
                                            name: "Rating",
                                            value: "rank asc"
                                        }
                                    }))
                                    setShow(false)
                                }}
                            >
                                Rating
                            </li>
                        </ul>
                    }
                </div>
            </div>
            <div className='r-pagination flex gap-2 items-center'>
                <button disabled={pagination?.skip == 12} className='pagination-btn p-2 border border-secondary rounded-md'
                    onClick={() => {
                        setPagination(st => ({ ...st, skip: st.skip - 12 }))
                    }}
                >
                    <FaChevronLeft className=" text-secondary" />
                </button>
                <span className=" text-xs">{pagination?.skip} OF {pagination?.total||100}</span>
                <button disabled={pagination?.total == pagination?.skip + 12} className='pagination-btn p-2 border border-secondary rounded-md'
                    onClick={() => {
                        setPagination(st => ({ ...st, skip: st.skip + 12 }))
                    }}
                >
                    <FaChevronRight className=" text-secondary" />
                </button>
            </div>
        </div>
    )
}

export default Filters