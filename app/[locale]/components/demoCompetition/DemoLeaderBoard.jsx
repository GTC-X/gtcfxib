import { useTranslations } from "next-intl";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DemoLeaderBoard = () => {
  const t = useTranslations("partner.demoCompetition.leader")
  const plans = [
    {
      id: 1,
      rank: "1st",
      name: "Omar",
      return: "999.93%",
      back: "-",
      prize: "$3500",
    },
    {
      id: 2,
      rank: "2nd",
      name: "Rameez",
      return: "204.83%",
      back: "765.56%",
      prize: "$3000",
    },
    {
      id: 3,
      rank: "3rd",
      name: "Talha",
      return: "164.43%",
      back: "817.96%",
      prize: "$2500",
    },
    // More plans...
  ];

  const headers = [
    { key: "rank", label: t("TableHeading.one"), classes: "sm:table-cell" },
    { key: "name", label: t("TableHeading.two"), classes: "sm:table-cell" },
    { key: "return", label: t("TableHeading.three"), classes: "hidden sm:table-cell" },
    { key: "back", label: t("TableHeading.four"), classes: "hidden sm:table-cell" },
    { key: "prize", label: t("TableHeading.five"), classes: "sm:table-cell" }
  ];

  return (
    <section className="leaderBoard">
      <div className="container border-t border-gray-200 xl:pt-16 3xl:pt-24 pt-8">
        <h2 className="HeadingH2">{t("title")}</h2>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-secondary text-white text-base md:text-xl font-medium">
                  <tr>
                    {headers.map(header => (
                      <th key={header.key} scope="col" className={`px-6 py-4 border-b-2 border-primary ${header.classes}`}>
                        {header.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {plans.map((plan, planIdx) => (
                    <tr key={plan.id} className={classNames(
                      planIdx % 2 === 0 ? "bg-gray-50" : "bg-white",
                      "hover:bg-gray-100",
                      "border-b"
                    )}>
                      {headers.map(header => (
                        <td key={header.key} className={`px-6 py-4 text-center border-r ${planIdx % 2 === 0 ? "border-r-gray-400" : "border-r-gray-200"} ${header.classes}`}>
                          {plan[header.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoLeaderBoard;
