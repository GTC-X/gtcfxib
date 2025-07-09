import { useTranslations } from 'next-intl'
import React from 'react'

const Table = () => {
  const t = useTranslations("partner.IBProgram.tableIB")

  // Define a mapping object for the table data
  const tableData = [
    { key: "one", amount: t("amount.one"), lots: t("lots.two"), extra: "10%" },
    { key: "two", amount: t("amount.two"), lots: t("lots.two"), extra: "15%" },
    { key: "three", amount: t("amount.three"), lots: t("lots.three"), extra: "25%" },
  ];

  return (
    <section className='md:py-16 3xl:py-28 py-8 bg-[#020125]'>
      <div className='container'>
        <h2 className='HeadingH2 mb-10 text-white'>{t("lable")}</h2>
        <table className='w-full text-center border border-gray-300 shadow-xl'>
          <thead>
            <tr className='text-[18px]'>
              <th className='py-4 px-8 font-[600] text-white'>{t("depositAm")}</th>
              <th className='py-4 px-4 font-[600] text-white'>{t("minLot")}</th>
              <th className='py-4 px-4 font-[600] text-white'>{t("extraReb")}</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.key} className={item.key === "one" || item.key === "three" ? 'bg-secondary' : ''}>
                <td className='py-4 px-8 text-white'>{item.amount}</td>
                <td className='py-4 px-4 text-white'>{item.lots}</td>
                <td className='py-4 px-4 text-white'>{item.extra}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Table
