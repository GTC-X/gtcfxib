"use client"
import { useLocale, useTranslations } from "next-intl";

import DataTable from "../components/DataTable";
import data from "./data";
import { useState } from "react";

const FourPercentTable = () => {
    const t = useTranslations("Instruments");
    const [tabs, setTabs] = useState(1)

    const tabData = [
        {
            title: "Sheet 1",
            id: 1
        },
        {
            title: "Sheet 2",
            id: 2
        },
        {
            title: "Sheet 3",
            id: 3
        }
    ]
    const locale = useLocale();

    const getHeader = () => {
        switch (tabs) {
            case 1:
                return data?.Sheet1?.header;

            default:
                return [];
        }
    };

    const getData = () => {
        switch (tabs) {
            case 1:
                return data?.Sheet1?.data;

            default:
                return [];
        }
    };

    return (
        <div className="tab-content container">
            <h3 className="text-xl md:text-2xl text-primary py-5">
                Contract Specification Requirment
            </h3>
            <div className="flex justify-center mb-5">
                <div className="join flex-wrap bg-secondary  border-none border-secondary py-0">
                    {tabData?.map(single =>
                        <button
                            key={single?.id}
                            className={`btn join-item ${single?.id == tabs ? " bg-secondary" : " bg-gray-400"} border-none hover:bg-secondary hover:text-white text-white capitalize border border-secondary`}
                            onClick={() => {
                                setTabs(single?.id)
                            }}
                        >
                            {single?.title}
                        </button>
                    )}

                </div>
            </div>
            <div className=" overflow-auto">
                <DataTable
                    className="bg-white"
                    data={getData() || []}
                    columns={getHeader() || []}
                    width="w-full"
                    fileName="Pairs Minimum Margin Requirement Is 4%"
                />
            </div>
        </div >
    );
};
export default FourPercentTable;
