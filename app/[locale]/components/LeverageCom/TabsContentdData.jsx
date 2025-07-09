import React, { useState, useEffect } from 'react';
import ForexTable from './ForexTable';
import { useLocale } from "next-intl";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const TabsContentData = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const locale = useLocale(); // Automatically determines the current locale

  useEffect(() => {
    fetch(`https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/leverage/${locale}.json`)
      .then(response => response.json())
      .then(data => {
        const loadedTabs = Object.keys(data).map(key => ({
          name: key,
          current: key === 'Forex'
        }));
        setTabs(loadedTabs);
        setActiveTab('Forex');
      })
      .catch(error => console.error('Failed to load data', error));
  }, []);

  const handleTabClick = (tabName) => {
    setTabs(tabs.map(tab => ({
      ...tab,
      current: tab.name === tabName
    })));
    setActiveTab(tabName);
  };

  const renderTableForActiveTab = () => {
    switch (activeTab) {
      case 'Forex':
        return <ForexTable category="Forex" />;
      case 'Metals':
        return <ForexTable category="Metals" />;
      case 'Energies':
        return <ForexTable category="Energies" />;
      case 'Cash Index':
        return <ForexTable category="Cash Index" />;
      case 'Future Index':
        return <ForexTable category="Future Index" />;
      case 'Crypto':
        return <ForexTable category="Crypto" />;
      default:
        return <div>Select a category to view the table.</div>;
    }
  };

  return (
    <div className='mt-12'>
      {tabs.length > 0 && (
        <div>
          {/* Tabs Navigation */}
          <div className="block sm:hidden">
            <div className="space-y-2">
              {tabs.map((tab, tabIdx) => (
                <button
                  key={tab.name}
                  onClick={() => handleTabClick(tab.name)}
                  aria-current={tab.current ? 'page' : undefined}
                  className={classNames(
                    tab.current ? 'text-white bg-gradient-to-l from-[#202d7bdb] via-[#050331] to-[#050331]' : 'text-white bg-gradient-to-l from-secondary via-[#807f8d] to-[#202d7bdb]',
                    'w-full rounded-lg px-4 py-2 text-center text-sm font-medium hover:bg-gray-50 focus:z-10',
                    'block'
                  )}
                >
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tabs Content */}
          <div className="hidden sm:block">
            <nav aria-label="Tabs" className="isolate flex divide-x divide-gray-200 rounded-lg shadow">
              {tabs.map((tab, tabIdx) => (
                <button
                  key={tab.name}
                  onClick={() => handleTabClick(tab.name)}
                  aria-current={tab.current ? 'page' : undefined}
                  className={classNames(
                    tab.current ? 'text-white bg-gradient-to-l from-[#202d7bdb] via-[#050331] to-[#050331]' : 'text-white bg-gradient-to-l from-secondary via-[#807f8d] to-[#202d7bdb]',
                    tabIdx === 0 ? 'rounded-l-lg' : '',
                    tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                    'group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10',
                  )}
                >
                  <span>{tab.name}</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      tab.current ? 'bg-[#29a643]' : 'bg-transparent',
                      'absolute inset-x-0 bottom-0 h-0.5',
                    )}
                  />
                </button>
              ))}
            </nav>
          </div>

          {renderTableForActiveTab()}
        </div>
      )}
    </div>
  );
};

export default TabsContentData;
