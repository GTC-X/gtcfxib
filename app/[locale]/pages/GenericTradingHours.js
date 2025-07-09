'use client'
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';


const sampleData = {
  FX: [
    { category: 'Majors', Mon: '00:01 - 23:59', Tue: '00:01 - 23:59', Wed: '00:01 - 23:59', Thu: '00:01 - 23:59', Fri: '00:01 - 23:59' },
    { category: 'Cross & Exotics', Mon: '00:01 - 23:59', Tue: '00:01 - 23:59', Wed: '00:01 - 23:59', Thu: '00:01 - 23:59', Fri: '00:01 - 23:55' },
    { category: 'JPY Symbols', Mon: '00:08 - 23:55', Tue: '00:05 - 23:55', Wed: '00:05 - 23:55', Thu: '00:05 - 23:55', Fri: '00:05 - 23:55' },
  ],
  'Gold & Silver': [
    { category: 'GOLD', Mon: '01:05 - 23:59', Tue: '01:01 - 23:59', Wed: '01:01 - 23:59', Thu: '01:01 - 23:59', Fri: '01:01 - 23:55' },
    { category: 'SILVER', Mon: '01:01 - 23:59', Tue: '01:01 - 23:59', Wed: '01:01 - 23:59', Thu: '01:01 - 23:59', Fri: '01:01 - 23:59' },
  ],
  'Crude Oil': [
    { category: 'BRNUSD', Mon: '01:05 - 23:59', Tue: '03:01 - 23:59', Wed: '03:01 - 23:59', Thu: '03:01 - 23:59', Fri: '03:01 - 23:59' },
    { category: 'WTIUSD', Mon: '01:05 - 23:59', Tue: '01:01 - 23:55', Wed: '01:01 - 23:55', Thu: '01:01 - 23:55', Fri: '01:01 - 23:59' },
  ],
  Crypto: [
    { category: 'Cryptocurrencies', Mon: '00:01 - 24:00', Tue: '00:01 - 24:00', Wed: '00:01 - 24:00', Thu: '00:01 - 24:00', Fri: '00:01 - 24:00' },
  ],
  'Cash Indices': [
    { category: 'AUS200c', Mon: '02:51 - 09:30,10:11 - 23:57', Tue: '02:51 - 09:30,10:11 - 23:57', Wed: '02:51 - 09:30,10:11 - 23:57', Thu: '02:51 - 09:30,10:11 - 23:57', Fri: '00:51 - 08:30,09:11 - 22:57' },
    { category: 'CN50c', Mon: '04:02 - 11:30,12:00 - 23:43', Tue: '04:00 - 11:30,12:00 - 23:45', Wed: '04:02 - 11:30,12:00 - 23:43', Thu: '04:02 - 11:30,12:00 - 23:43', Fri: '04:02 - 11:30,12:00 - 23:43' },
    { category: 'EU50c', Mon: '03:16 - 23:56', Tue: '03:16 - 23:56', Wed: '03:16 - 23:56', Thu: '03:16 - 23:56', Fri: '03:16 - 23:56' },
    { category: 'GER40c', Mon: '01:01 - 23:58', Tue: '01:01 - 23:58', Wed: '01:01 - 23:58', Thu: '01:01 - 23:58', Fri: '01:01 - 23:58' },
    { category: 'HK50c', Mon: '04:18 - 07:00,08:00 - 11:30,12:15 - 21:59', Tue: '04:18 - 07:00,08:00 - 11:30,12:15 - 21:59', Wed: '04:18 - 07:00,08:00 - 11:30,12:15 - 21:59', Thu: '04:18 - 07:00,08:00 - 11:30,12:15 - 21:59', Fri: '04:18 - 07:00,08:00 - 11:30,12:15 - 21:56' },
    { category: 'JPN225c', Mon: '01:01 - 23:58', Tue: '01:01 - 23:58', Wed: '01:01 - 23:58', Thu: '01:01 - 23:58', Fri: '01:01 - 23:56' },
    { category: 'UK100c', Mon: '01:01 - 23:58', Tue: '01:01 - 23:58', Wed: '01:01 - 23:58', Thu: '01:01 - 23:58', Fri: '01:01 - 23:57' },
    { category: 'US30c', Mon: '01:01 - 23:59', Tue: '01:01 - 23:59', Wed: '01:01 - 23:59', Thu: '01:01 - 23:59', Fri: '01:01 - 23:56' },
    { category: 'US500c', Mon: '01:01 - 23:58', Tue: '01:01 - 23:58', Wed: '01:01 - 23:58', Thu: '01:01 - 23:58', Fri: '01:01 - 23:56' },
    { category: 'USTECHc', Mon: '01:01 - 23:58', Tue: '01:01 - 23:58', Wed: '01:01 - 23:58', Thu: '01:01 - 23:58', Fri: '01:01 - 23:56' },
  ],
  Stocks: [
    { category: 'US Stocks', Mon: '16:31 - 23:00', Tue: '16:31 - 23:00', Wed: '16:31 - 23:00', Thu: '16:31 - 23:00', Fri: '16:31 - 22:59' },
    { category: 'EU Stocks', Mon: '10:01 - 19:29', Tue: '10:01 - 19:29', Wed: '10:01 - 19:29', Thu: '10:01 - 19:29', Fri: '10:01 - 19:29' },
    { category: 'Asia Stocks', Mon: '03:30 - 07:00, 08:00 - 11:00', Tue: '03:30 - 07:00, 08:00 - 11:00', Wed: '03:30 - 07:00, 08:00 - 11:00', Thu: '03:30 - 07:00, 08:00 - 11:00', Fri: '03:30 - 07:00, 08:00 - 11:00' },
  ],
};

function TradingHoursTabs() {
  const [activeTab, setActiveTab] = useState('FX');
     const t = useTranslations("tradingTools.marketOverView.holiday");
  const renderTable = () => {
    const data = sampleData[activeTab];
    if (!data || data.length === 0) return <p className="mt-4 text-gray-600">No data available.</p>;

    return (
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full text-sm border-collapse rounded-lg overflow-hidden shadow-lg">
          <caption className="sr-only">Trading Hours by Category</caption>
          <thead className="bg-primary text-white">
            <tr>
              <th className="p-3 border border-gray-100">Category</th>
              <th className="p-3 border border-gray-100">Mon</th>
              <th className="p-3 border border-gray-100">Tue</th>
              <th className="p-3 border border-gray-100">Wed</th>
              <th className="p-3 border border-gray-100">Thu</th>
              <th className="p-3 border border-gray-100">Fri</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white hover:bg-gray-100 transition-colors'}>
                <td className="p-3 border-b  border-r border-gray-300 text-left font-medium">{row.category}</td>
                <td className="p-3 border-b border-r border-gray-300">{row.Mon}</td>
                <td className="p-3 border-b  border-r border-gray-300">{row.Tue}</td>
                <td className="p-3 border-b  border-r border-gray-300">{row.Wed}</td>
                <td className="p-3 border-b  border-r border-gray-300">{row.Thu}</td>
                <td className="p-3 border-b border-gray-300">{row.Fri}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const tabKeys = Object.keys(sampleData);

  return (
    <section className="pt-10 md:pt-10">
      <div className="container mx-auto max-w-7xl">
              <div className='text-center'>
                        <h2 className="HeadingH2 mb-5 text-center">{t("trading")}</h2>
                        <p className='mb-5'>{t("hours")}</p>
                     
                    </div>
          
    

        <div className="flex flex-wrap justify-center gap-2 mb-5" role="tablist">
          {tabKeys.map((key) => (
            <button
              key={key}
              className={`px-4 py-2 rounded-xs text-white font-medium transition-all duration-200 ${
                activeTab === key
                  ? 'bg-secondary shadow-md'
                  : 'bg-primary hover:bg-black hover:shadow-md'
              } focus:outline-none`}
              onClick={() => setActiveTab(key)}
              role="tab"
              aria-selected={activeTab === key}
            >
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          ))}
        </div>

        {renderTable()}

   
      </div>
    </section>
  );
}

export default TradingHoursTabs;