import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
const SimpleDataTable = ({ data, columns, width, selectedFilter }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    state: { pageIndex, pageSize },
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageCount,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
  );
  const filterData = (data, selectedFilter) => {
    switch (selectedFilter) {
      case "Last Week":
        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
        return data?.filter((item) => new Date(item.date) >= lastWeek);
      case "This Month":
        const thisMonth = new Date();
        thisMonth.setDate(1);
        return data?.filter(
          (item) =>
            new Date(item.date) >= thisMonth &&
            new Date(item.date) <= new Date()
        );
      // Add cases for other filter options as needed
      default:
        // If no specific filter is selected, return the original data
        return data;
    }
  };

  // Use the filterData function to filter the data based on the selectedFilter
  const filteredData = useMemo(
    () => filterData(data, selectedFilter),
    [data, selectedFilter]
  );
  const pageNumbers = useMemo(() => {
    const numbers = [];
    for (let i = 0; i < pageCount; i++) {
      numbers.push(i);
    }
    return numbers;
  }, [pageCount]);
  const tableStyle = {
    boxShadow: "none",
    borderRadius: "15px",
  };

  return (
    <div>
      <table
        {...getTableProps()}
        style={tableStyle}
        className={`${width} bg-white hover:shadow-md`}
      >
        <thead className=" rounded-lg bg-gray-50 border border-gray-300">
          {headerGroups?.map((headerGroup) => (
            <tr {...headerGroup?.getHeaderGroupProps()}>
              {headerGroup?.headers.map((column) => (
                <th
                  {...column?.getHeaderProps()}
                  className={`bg-transparent rounded-tl-lg text-primary rounded-tr-lg text-left px-3 py-3.5 `}
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
              <tr {...row.getRowProps()} >
                {row?.cells?.map((cell) => (
                  <td
                    {...cell?.getCellProps()}
                    className={` text-primary text-left px-3 py-3.5 border border-gray-300`}
                  >
                    {cell?.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleDataTable;
