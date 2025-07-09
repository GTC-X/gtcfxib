'use client';
import { Tab } from '@headlessui/react';
import React from 'react';

const SwapTab = ({ data }) => {
  const tabs = Object.keys(data);

  return (
    <div className="tabs-container md:pt-8">
      <Tab.Group>
        {/* Tabs Navigation */}
        <Tab.List className="tabs-header flex overflow-x-auto gap-2 md:gap-4 border-b pb-2 scrollbar-hide">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `px-3 md:px-6 py-2 text-sm md:text-base font-medium rounded-t-lg transition-all whitespace-nowrap ${
                  selected
                    ? 'bg-gradient-to-r from-primary to-[#263B93] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>

        {/* Tab Panels */}
        <Tab.Panels className="tab-content mt-4 border border-gray-300 shadow-lg p-4 rounded-lg">
          {tabs.map((tab) => (
            <Tab.Panel key={tab} className="focus:outline-none">
              {Array.isArray(data[tab]) && data[tab].length > 0 ? (
                <div className="max-h-[400px] overflow-y-auto">
                  <table className="w-full table-auto border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gradient-to-r from-primary to-[#263B93] text-white capitalize text-xs md:text-base">
                        {Object.keys(data[tab][0]).map((column) => (
                          <th
                            key={column}
                            className="border border-gray-300 px-4 py-2 ltr:text-left rtl:text-right text-sm font-medium"
                          >
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data[tab].map((row, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100 hover:bg-gray-50'}
                        >
                          {Object.values(row).map((value, colIndex) => (
                            <td key={colIndex} className="border border-gray-300 px-4 py-2 text-sm">
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">No data available for {tab}.</div>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default SwapTab;
