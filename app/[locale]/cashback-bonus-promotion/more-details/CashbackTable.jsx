"use client"
import { useTranslations } from "next-intl";
import React from "react";

const CashbackTable = () => {
    const t = useTranslations("callback.table")

    const tableData = [
        { deposit: "500 - 1,000", volume: "100 lots", cashback: "$130" },
        { deposit: "1,001 - 5,000", volume: "120 lots", cashback: "$150" },
        { deposit: "5,001 - 10,000", volume: "150 lots", cashback: "$200" },
        { deposit: "10,001 - 15,000", volume: "200 lots", cashback: "$300" },
        { deposit: "15,001 - 20,000", volume: "250 lots", cashback: "$450" },
        { deposit: "Above 20,000", volume: "500 lots", cashback: "$1,000" },
    ];

    return (
        <section className="w-full py-14 bg-white text-center">
            <div className=" container mx-auto">
                <div className="max-w-4xl mx-auto">
                    {/* Heading */}
                    <h2 className="text-lg md:text-xl font-bold uppercase">
                        {t("title1")}
                    </h2>
                    <h3 className="text-lg md:text-xl font-bold uppercase mb-5">
                        {t("title2")}
                    </h3>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-spacing-1 border-separate border-gray-300 text-center">
                            {/* Table Head */}
                            <thead>
                                <tr className="bg-primary text-white uppercase text-sm md:text-base">
                                    <th className="p-3">{t("column1")}</th>
                                    <th className="p-3">{t("column2")}</th>
                                    <th className="p-3">{t("column3")}</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index} className=" odd:bg-gray-200 even:bg-white">
                                        <td className="p-3 border border-gray-100 text-gray-800 font-medium">{row.deposit}</td>
                                        <td className="p-3 border text-gray-800">{row.volume}</td>
                                        <td className="p-3 border font-bold text-red-600">{row.cashback}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CashbackTable;
