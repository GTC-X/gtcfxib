"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Table = () => {
  const t = useTranslations("regulation");
  const people = [
    {
      name: t("data1.entity"),
      lic: t("data1.lic"),
      detail1: t("data1.Detail1"),
    },

    {
      name: t("data3.entity"),
      lic: t("data3.lic"),
      detail1: t("data3.Detail1"),
    },
    {
      name: t("data4.entity"),
      lic: t("data4.lic"),
      detail1: t("data4.Detail1"),
    },

    // More people...
  ];
  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg item">
      <table className="divide-y divide-gray-300">
        <thead className="text-secondary bg-gradient">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3  text-base font-semibold text-secondary sm:pl-6 border-r"
            >
              {t("tableHeading.entry")}
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 min-w-[200px] text-base font-semibold text-secondary border-r"
            >
              {t("tableHeading.licNum")}
            </th>
            <th
              scope="col"
              className="px-3 py-3.5  text-base font-semibold text-secondary "
            >
              {t("tableHeading.detatils")}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {people.map((person) => (
            <tr key={person.email} className="even:bg-gray-50">
              <td className="py-4 pl-4 min-w-[250px] pr-3 text-sm w-40 font-semibold text-primary sm:pl-6 border-r">
                {person.name}
              </td>
              <td className="px-3 py-4 text-sm text-primary border-r">
                {person.lic}
              </td>
              <td className="px-3 py-4 text-sm text-primary">
                {person.detail1} <Link href=""> {person.link}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
