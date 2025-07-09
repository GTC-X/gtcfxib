import React from "react";

const AccountTable = ({ header, data }) => {
  return (
    <div className="mt-3 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-300 border-b border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  {header?.map((row, index) => (
                    <th
                      key={index}
                      scope="col"
                      className={` bg-${
                        index == 0 ? "transparent" : "secondary"
                      } border-l-4 border-r-4 border-white rounded-tl-lg rounded-tr-lg px-3 py-3.5 text-center `}
                    >
                      <p className="text-sm font-semibold text-primary">
                        {row?.title || ""}
                      </p>
                      <p className="text-primary text-sm font-normal">
                        {row?.subTitle || ""}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data?.map((person) => (
                  <tr
                    key={person.email}
                    className="even:bg-gray-50 border-l border-gray-300 border-r"
                  >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 border border-[#80808080]">
                      <p className="text-sm font-semibold text-primary">
                        {person?.title}
                      </p>
                      <p className="text-sm font-normal text-gray-400 ">
                        {person?.subTitle}
                      </p>
                      <p className="text-sm font-normal text-[#008050] ">
                        {person?.descreption}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-primary border border-[#80808080]">
                      {person.spread}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-primary border border-[#80808080]">
                      {person.commision}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-primary border border-[#80808080]">
                      {person.margin}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-primary border border-[#80808080]">
                      {person.longSwap}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-primary border border-[#80808080]">
                      {person.shortSwap}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-primary border border-[#80808080]">
                      {person.stopLevel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTable;
