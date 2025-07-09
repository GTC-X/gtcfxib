import React, { useMemo, useRef } from "react";
import { useTable, usePagination } from "react-table";
import { CSVLink } from "react-csv";
import { useReactToPrint } from "react-to-print";
import { BiSearch } from "react-icons/bi";
import { useTranslations } from "next-intl";

const DataTable = ({ data, columns, width, selectedFilter, fileName }) => {
  const t = useTranslations("Instruments");

  const componentRef = useRef();
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 0, pageSize: data?.length },
      },
      usePagination
    );

  const handlePrint = useReactToPrint({
    bodyClass: "p-6 text-primary",
    content: () => componentRef.current,
    documentTitle: "title",
  });

  const tableStyle = {
    boxShadow: "none",
    borderRadius: "15px",
  };

  return (
    <div>
      {/* <div className="border border-b-0 border-gray-300 text-center px-4 py-4 ">
        <div className="join flex-wrap bg-secondary  border-none border-secondary py-0">
          <CSVLink data={data || []} filename={fileName}>
            <button className="btn  join-item bg-secondary border-none hover:bg-secondary  text-primary  capitalize">
              {t("productDetail.btnDownload")}
            </button>
          </CSVLink>
          <button
            className="btn join-item bg-primary border-none hover:bg-primary hover:text-white text-white capitalize border border-secondary"
            onClick={handlePrint}
          >
            {t("productDetail.btnPrint")}
          </button>
          <button
            className="btn join-item bg-primary border-none hover:bg-primary hover:text-white text-white capitalize border border-secondary"
            onClick={handlePrint}
          >
            {t("productDetail.btnPrint")}
          </button>
        </div>

      </div> */}
      <table
        {...getTableProps()}
        style={tableStyle}
        className={`${width} bg-white hover:shadow-md`}
        ref={componentRef}
      >
        <thead className=" rounded-lg bg-gray-50 border border-gray-300">
          {headerGroups?.map((headerGroup) => (
            <tr {...headerGroup?.getHeaderGroupProps()}>
              {headerGroup?.headers.map((column) => (
                <th
                  {...column?.getHeaderProps()}
                  className={`bg-transparent rounded-tl-lg text-primary rounded-tr-lg text-left px-2.5 py-2.5 `}
                >
                  {column?.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page?.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border border-gray-300">
                {row?.cells?.map((cell) => (
                  <td
                    {...cell?.getCellProps()}
                    className={` text-primary text-left px-2.5 py-2.5 `}
                  >
                    {cell?.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Pagination */}
      {/* <div className="pagination-container flex items-center justify-center">
        <button
          className="bg-transparent hover:bg-[#5538C8] text-[#BDBDBD] font-soraregular hover:text-white border border-[#BDBDBD] hover:border-transparent rounded"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M5.3195 7.82992C5.24102 7.75154 5.19687 7.64519 5.19678 7.53427V7.3223C5.19806 7.21162 5.24203 7.10571 5.3195 7.02665L8.18671 4.16502C8.23908 4.11222 8.31037 4.08252 8.38474 4.08252C8.4591 4.08252 8.53039 4.11222 8.58276 4.16502L8.97882 4.56108C9.03129 4.61249 9.06086 4.68285 9.06086 4.75631C9.06086 4.82977 9.03129 4.90014 8.97882 4.95155L6.49651 7.42829L8.97882 9.90502C9.03162 9.95739 9.06132 10.0287 9.06132 10.103C9.06132 10.1774 9.03162 10.2487 8.97882 10.3011L8.58276 10.6916C8.53039 10.7444 8.4591 10.7741 8.38474 10.7741C8.31037 10.7741 8.23908 10.7444 8.18671 10.6916L5.3195 7.82992Z"
              fill="#BCBCBC"
            />
          </svg>
        </button>{" "}
        <span className="m-2">
          {pageNumbers?.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => gotoPage(pageNumber)}
              className={`m-2 bg-transparent hover:bg-[#5538C8] text-[#BDBDBD] font-soraregular text-sm hover:text-white py-1 px-3 border border-[#BDBDBD] hover:border-transparent rounded  ${
                pageIndex === pageNumber ? "active" : ""
              }`}
            >
              {pageNumber + 1}
            </button>
          ))}
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="mbg-transparent hover:bg-[#5538C8] text-[#BDBDBD] font-soraregular hover:text-white border border-[#BDBDBD] hover:border-transparent rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M9.68001 7.82992C9.75849 7.75154 9.80264 7.64519 9.80273 7.53427V7.3223C9.80145 7.21162 9.75749 7.10571 9.68001 7.02665L6.8128 4.16502C6.76043 4.11222 6.68914 4.08252 6.61478 4.08252C6.54041 4.08252 6.46912 4.11222 6.41675 4.16502L6.02069 4.56108C5.96822 4.61249 5.93865 4.68285 5.93865 4.75631C5.93865 4.82977 5.96822 4.90014 6.02069 4.95155L8.50301 7.42829L6.02069 9.90502C5.96789 9.95739 5.93819 10.0287 5.93819 10.103C5.93819 10.1774 5.96789 10.2487 6.02069 10.3011L6.41675 10.6916C6.46912 10.7444 6.54041 10.7741 6.61478 10.7741C6.68914 10.7741 6.76043 10.7444 6.8128 10.6916L9.68001 7.82992Z"
              fill="#BCBCBC"
            />
          </svg>
        </button>{" "}
      </div> */}
    </div>
  );
};

export default DataTable;
