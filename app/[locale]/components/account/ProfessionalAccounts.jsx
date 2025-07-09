import React from "react";
import Link from "next/link";
import MTAccountLink from "../common/MTAccountLink";
import { useTranslations } from "next-intl";

const ProfessionalAccounts = () => {
  const t = useTranslations("datacontent")
  const people = [
    {
      name: t("professional.features.option2.one.label"),
      title: t("professional.features.option2.one.data1"),
      detail: t("professional.features.option2.one.data2"),
      detail2: t("professional.features.option2.one.data3"),
    },
    {
      name: t("professional.features.option2.two.label"),
      title: t("professional.features.option2.two.data1"),
      detail: t("professional.features.option2.two.data2"),
      detail2: t("professional.features.option2.two.data3"),
    },
    {
      name: t("professional.features.option2.three.label"),
      title: t("professional.features.option2.three.data1"),
      detail: t("professional.features.option2.three.data2"),
      detail2: t("professional.features.option2.three.data3"),
    },
    {
      name: t("professional.features.option2.four.label"),
      title: t("professional.features.option2.four.data1"),
      detail: t("professional.features.option2.four.data2"),
      detail2: t("professional.features.option2.four.data3"),
    },
    {
      name: t("professional.features.option2.five.label"),
      title: t("professional.features.option2.five.data1"),
      detail: t("professional.features.option2.five.data2"),
      detail2: t("professional.features.option2.five.data3"),
    },
    {
      name: t("professional.features.option2.six.label"),
      title: t("professional.features.option2.six.data1"),
      detail: t("professional.features.option2.six.data2"),
      detail2: t("professional.features.option2.six.data3"),
    },
    {
      name: t("professional.features.option2.seven.label"),
      title: t("professional.features.option2.seven.data1"),
      detail: t("professional.features.option2.seven.data2"),
      detail2: t("professional.features.option2.seven.data3"),
    },
    {
      name: t("professional.features.option2.eight.label"),
      title: t("professional.features.option2.eight.data1"),
      detail: t("professional.features.option2.eight.data2"),
      detail2: t("professional.features.option2.eight.data3"),
    },
    {
      name: t("professional.features.option2.nine.label"),
      title: t("professional.features.option2.nine.data1"),
      detail: t("professional.features.option2.nine.data2"),
      detail2: t("professional.features.option2.nine.data3"),
    },
    {
      name: t("professional.features.option2.ten.label"),
      title: t("professional.features.option2.ten.data1"),
      detail: t("professional.features.option2.ten.data2"),
      detail2: t("professional.features.option2.ten.data3"),
    },
    {
      name: t("professional.features.option2.one1.label"),
      title: t("professional.features.option2.one1.data1"),
      detail: t("professional.features.option2.one1.data2"),
      detail2: t("professional.features.option2.one1.data3"),
    },
    {
      name: t("professional.features.option2.one2.label"),
      title: t("professional.features.option2.one2.data1"),
      detail: t("professional.features.option2.one2.data2"),
      detail2: t("professional.features.option2.one2.data3"),
    },
    {
      name: t("professional.features.option2.one3.label"),
      title: t("professional.features.option2.one3.data1"),
      detail: t("professional.features.option2.one3.data2"),
      detail2: t("professional.features.option2.one3.data3"),
    },

    // More people...
  ];

  return (
    <div className="mt-3 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-300">
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
                     {t("professional.features.label1")}
                  </th>
                  <th
                    scope="col"
                    className="bg-secondary border-l-4 border-r-4 border-white rounded-tl-lg rounded-tr-lg text-center px-3 py-3.5 text-sm font-semibold text-primary"
                  >
                    {t("professional.features.label2")}
                  </th>
                  <th
                    scope="col"
                    className="bg-secondary rounded-tl-lg rounded-tr-lg text-center px-3 py-3.5 text-sm font-semibold text-primary"
                  >
                   {t("professional.features.label3")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr
                    key={person.email}
                    className="even:bg-gray-50 border-l border-gray-300 border-r"
                  >
                    <td className="py-4 pl-4 pr-3 text-sm font-semibold text-primary sm:pl-6">
                      {person.name}
                    </td>
                    <td className=" px-3 py-4 text-sm text-gray-500">
                      {person.title}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {person.detail}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {person.detail2}
                    </td>
                  </tr>
                ))}
                <tr className="pt-3">
                  <td></td>
                  <td><MTAccountLink /> </td>
                  <td><MTAccountLink /> </td>
                  <td><MTAccountLink /> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalAccounts;
