"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableHeader,
  TableRow,
  TableCell,
  TableHead,
  TableFooter,
} from "../../common/Table";
import {
  getFilteredRowModel,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { arraysOfObjectsEqual, cn } from "@/lib/utils";
import Separator from "@/app/[locale]/components/common/Separator";
import { useTranslations } from "next-intl";

const ForexSpreadTable = ({ className }) => {
  const t = useTranslations("Instruments.forex");

  const data = {
    majors: [
      {
        instrument: "AUDUSD",
        bid: "0.66098",
        ask: "0.66098",
        spread: "0.0",
      },
      {
        instrument: "EURUSD",
        bid: "1.09773",
        ask: "1.09775",
        spread: "0.1",
      },
      {
        instrument: "GBPUSD",
        bid: "1.27400",
        ask: "1.27543",
        spread: "0.2",
      },
      {
        instrument: "EURUSD",
        bid: "1.09773",
        ask: "1.09775",
        spread: "0.1",
      },
      {
        instrument: "GBPUSD",
        bid: "1.27400",
        ask: "1.27543",
        spread: "0.2",
      },
    ],
    minors: [
      {
        instrument: "NZDCHF",
        bid: "0.66098",
        ask: "0.66098",
        spread: "0.0",
      },
      {
        instrument: "CHFUSK",
        bid: "1.09773",
        ask: "1.09775",
        spread: "0.1",
      },
      {
        instrument: "CHFUSK",
        bid: "1.27400",
        ask: "1.27543",
        spread: "0.2",
      },
      {
        instrument: "CHFUSK",
        bid: "1.09773",
        ask: "1.09775",
        spread: "0.1",
      },
      {
        instrument: "CHFUSK",
        bid: "1.27400",
        ask: "1.27543",
        spread: "0.2",
      },
    ],
  };
  const columns = [
    {
      accessorKey: "instrument",
      header: t("instruments"),
    },
    {
      accessorKey: "bid",
      header: t("bid_price"),
    },
    {
      accessorKey: "ask",
      header: t("ask_price"),
    },
    {
      accessorKey: "spread",
      header: t("spread"),
    },
  ];
  const [tableData, setTableData] = useState(data["majors"]);
  const isMajor = arraysOfObjectsEqual(tableData, data["majors"]);
  const [columnFilters, setColumnFilters] = useState([]);
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });
  return (
    <section className={className}>
      <div className="container">
        <h4 className={"HeadingH2"}>{t("title3")}</h4>
        <div className="p-5 mt-5 border border-black/40">
          <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
            <div className="flex flex-row text-sm lg:text-lg items-center gap-7">
              <span className="font-bold text-neutral/80">
                {t("filter_by")}
              </span>
              <div className="flex flex-row gap-3 font-bold"> 
                <button
                  className={cn(
                    "px-2 py-2 border border-secondary text-neutral",
                    isMajor && "text-white border-primary bg-primary"
                  )}
                  onClick={() => setTableData(data["majors"])}
                >
                  {t("forex_majors")}
                </button>
                <button
                  className={cn(
                    "px-2 py-2 border border-secondary text-neutral",
                    !isMajor && "text-white border-primary bg-primary"
                  )}
                  onClick={() => setTableData(data["minors"])}
                >
                  {t("cross_pairs")}
                </button> 
              </div>
            </div>
        
          </div>
          <Separator className={"mt-5 mb-3"} />
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={index % 2 == 0 ? "bg-gray-200" : ""}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="text-neutral/80 lg:text-md font-medium"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow className="bg-primary">
                <TableCell
                  colSpan={4}
                  className="font-bold text-white md:text-lg"
                >
                  <span className="text-secondary">{t("tableNote.trading")}</span>{" "}
                  {t("tableNote.timeNote")}
                  <span className="float-right text-sm font-light">
                  {t("tableNote.apply")}
                  </span>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ForexSpreadTable;
