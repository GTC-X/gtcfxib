import React, { useState, useEffect } from 'react';
import { useLocale } from "next-intl";


const ForexTable = ({ category }) => {
  const [categoryData, setCategoryData] = useState([]);
  const locale = useLocale(); // Automatically determines the current locale

  useEffect(() => {
    fetch(`https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/leverage/${locale}.json`)
      .then(response => response.json())
      .then(data => {
        setCategoryData(data[category] || []);
      })
      .catch(error => console.error(`Failed to load ${category} data`, error));
  }, [category]);

  const renderTable = (tableData, title) => {
    if (!tableData.data || tableData.data.length === 0) {
      return null;
    }

    // Extract headers from the first row of the data
    const headers = Object.keys(tableData.data[0]);

    return (
      <div className="min-w-0 flex-1 mb-4  text-left">
        <h3 className="text-lg leading-6 font-medium bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text my-2">{title}</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-l from-secondary via-[#29255bbe] to-[#d9dceb88]">
              <tr>
                {headers.map((header, idx) => (
                  <th key={idx} className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    {tableData.data[0][header]} {/* Display header names from the first data row */}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-primary divide-y divide-gray-50">
              {tableData.data.slice(1).map((item, index) => ( // Skip the first row for table body
                <tr key={index}>
                  {headers.map((header, idx) => (
                    <td key={idx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                      {item[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className='mt-12'>
      <div className="flex flex-wrap -mx-4">
        {categoryData.map((table, index) => (
          <div
            key={index}
            className={`px-4 mb-4 ${categoryData.length % 2 !== 0 && index === categoryData.length - 1 ? "w-full" : "w-full md:w-1/2"}`}
          >
            {renderTable(table, table?.title)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForexTable;
