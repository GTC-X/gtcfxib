import Link from "next/link";
import React from "react";
import MTAccountLink from "../common/MTAccountLink";
import { useTranslations } from "next-intl";

const AccountsFeatures = () => {
  const t = useTranslations("datacontent")
  const people = [
    {
      name: t("standard.features.option2.one.label"),
      title: t("standard.features.option2.one.data1"),
      detail: t("standard.features.option2.one.data2"),
    },
    {
      name: t("standard.features.option2.two.label"),
      title: t("standard.features.option2.two.data1"),
      detail: t("standard.features.option2.two.data2"),
    },
    {
      name: t("standard.features.option2.three.label"),
      title: t("standard.features.option2.three.data1"),
      detail: t("standard.features.option2.three.data2"),
    },
    {
      name: t("standard.features.option2.four.label"),
      title: t("standard.features.option2.four.data1"),
      detail: t("standard.features.option2.four.data2"),
    },
    {
      name: t("standard.features.option2.five.label"),
      title: t("standard.features.option2.five.data1"),
      detail: t("standard.features.option2.five.data2"),
    },
    {
      name: t("standard.features.option2.six.label"),
      title: t("standard.features.option2.six.data1"),
      detail: t("standard.features.option2.six.data2"),
    },
    {
      name: t("standard.features.option2.seven.label"),
      title: t("standard.features.option2.seven.data1"),
      detail: t("standard.features.option2.seven.data2"),
    },
    {
      name: t("standard.features.option2.eight.label"),
      title: t("standard.features.option2.eight.data1"),
      detail: t("standard.features.option2.eight.data2"),
    },
    {
      name: t("standard.features.option2.nine.label"),
      title: t("standard.features.option2.nine.data1"),
      detail: t("standard.features.option2.nine.data2"),
    },
    {
      name: t("standard.features.option2.ten.label"),
      title: t("standard.features.option2.ten.data1"),
      detail: t("standard.features.option2.ten.data2"),
    },
    {
      name: t("standard.features.option2.one1.label"),
      title: t("standard.features.option2.one1.data1"),
      detail: t("standard.features.option2.one1.data2"),
    },
    {
      name: t("standard.features.option2.one2.label"),
      title: t("standard.features.option2.one2.data1"),
      detail: t("standard.features.option2.one2.data2"),
    },
    {
      name: t("standard.features.option2.one3.label"),
      title: t("standard.features.option2.one3.data1"),
      detail: t("standard.features.option2.one3.data2"),
    },

    // More people...
  ];

  return (
    <div className="mt-3 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-300 border-b border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 border-none bg-white"
                  ></th>
                  <th
                    scope="col"
                    className="bg-secondary border-l-4 border-r-4 border-white rounded-tl-lg rounded-tr-lg text-center px-3 py-3.5 text-sm font-semibold text-primary"
                  >
                     {t("standard.features.label1")}
                  </th>
                  <th
                    scope="col"
                    className="bg-secondary rounded-tl-lg rounded-tr-lg text-center px-3 py-3.5 text-sm font-semibold text-primary"
                  >
                    {t("standard.features.label2")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr
                    key={person.email}
                    className="even:bg-gray-50 border-l border-gray-300 border-r"
                  >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-primary sm:pl-6">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <MTAccountLink />
    </div>
  );
};

export default AccountsFeatures;
