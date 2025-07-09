import { useTranslations } from "next-intl";
import React from "react";
import { FaStar } from "react-icons/fa";
import NoteNew from "./stock/NoteNew";

const AccountTypesTable = () => {
  const t = useTranslations("accounts.account_types");
  const accountTypes = [
    {
      name: t("standard_account.title"),
      details: [
        t("standard_account.point1"),
        t("standard_account.point2"),
        t("standard_account.point3"),
        t("standard_account.point4"),
        t("standard_account.point5"),
        t("standard_account.point6"),
        t("standard_account.point7"),
        t("standard_account.point8"),
        t("standard_account.point9"),
        t("standard_account.point10"),
        t("standard_account.point11"),
        t("standard_account.point12"),
        t("standard_account.point13"),
        t("standard_account.point14"),
        t("standard_account.point15"),
        ,
        ,
        ,
        ,
    
      ],
      color: "#272727",
    },
    {
      name: t("pro_account.title"),
      details: [
        t("pro_account.point1"),
        t("pro_account.point2"),
        t("pro_account.point3"),
        t("pro_account.point4"),
        t("pro_account.point5"),
        t("pro_account.point6"),
        t("pro_account.point7"),
        t("pro_account.point8"),
        t("pro_account.point9"),
        t("pro_account.point10"),
        t("pro_account.point11"),
        t("pro_account.point12"),
        t("pro_account.point16"),
        t("pro_account.point17"),
        t("pro_account.point14"),
        t("pro_account.point15"),
        t("pro_account.point13"),
        ,
        ,
      
      ],
      color: "silver",
    },
    {
      name: t("ecn_account.title"),
      details: [
        t("ecn_account.point1"),
        t("ecn_account.point2"),
        t("ecn_account.point3"),
        t("ecn_account.point5"),
        t("ecn_account.point6"),
        t("ecn_account.point4"),
        t("ecn_account.point8"),
        t("ecn_account.point9"),
        t("ecn_account.point10"),
        t("ecn_account.point11"),
        t("ecn_account.point12"),
        t("ecn_account.point13"),
        t("ecn_account.point14"),
        t("ecn_account.point15"),
        t("ecn_account.point18"),
        t("ecn_account.point7"),
        t("ecn_account.point16"),
        t("ecn_account.point19"),
        t("ecn_account.point20"),
      ],
      color: "#b68756",
    },
  ];

  // Find the account with the maximum number of details for proper row generation
  const maxDetailsLength = Math.max(
    ...accountTypes.map((type) => type.details.length)
  );

  return (
    <section className="md:pt-12 3xl:pt-16 pt-8">
      <h2 className="HeadingH2">{t("title")}</h2>
      <p className="text max-w-4xl mx-auto">{t("subtitle")}</p>
      <div className="container py-8">
        <table className="w-full border border-[#DDD] overflow-x-scroll">
          <thead className="text-center border-b border-[#DDD]">
            <tr>
              {accountTypes.map((account, idx) => (
                <th
                  key={idx}
                  className="px-4 py-4 border-r border-[#DDD] shadow-lg"
                  style={{
                    width: `${100 / accountTypes.length}%`,
                    backgroundColor: idx % 2 === 0 ? "#f5f5f5" : "none",
                  }}
                >
                  <div className="flex flex-row justify-center items-center gap-2">
                    <FaStar color={account.color} size={25} />
                    <p>{account.name}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center">
            {Array.from({ length: maxDetailsLength }).map((_, index) => (
              <tr key={index}>
                {accountTypes.map((account, idx) => (
                  <td
                    key={idx}
                    className="px-4 py-4 border-b border-[#DDD]"
                    style={{
                      backgroundColor: idx % 2 === 0 ? "#f5f5f5" : "none",
                    }}
                  >
                    {account.details[index] || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="note text-sm pt-5">{t("note")} </p>
        <p className="note text-sm pt-1">{t("subNote")}</p>
        <NoteNew />
      </div>
    </section>
  );
};

export default AccountTypesTable;
