import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Script from "next/script";

const LeaderBoard = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.iFrameResize) {
        window.iFrameResize({ heightCalculationMethod: 'max', checkOrigin: false }, '#widgetFrame');
      }
    };

    window.addEventListener('load', handleResize);
    return () => window.removeEventListener('load', handleResize);
  }, []);

  const cardViewSrc = "https://ratings.gtccopy.com/widgets/ratings?widgetKey=social_platform_ratings&theme=light&lang=en";
  const tableViewSrc = "https://ratings.gtccopy.com/widgets/ratings?widgetKey=copy032&theme=light&lang=en";

  return (
    <div className="container mt-12 md:mt-16">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          <Tab
            className={({ selected }) =>
              `w-full py-2.5 text-sm leading-5  rounded-lg
              ${selected ? 'bg-primary shadow text-white' : 'text-primary bg-white'}`
            }
          >
            Grid View
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full py-2.5 text-sm leading-5  rounded-lg
              ${selected ? 'bg-primary shadow text-white' : 'text-primary bg-white'}`
            }
          >
            List View
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <iframe
              id="widgetFrameGrid"
              style={{ minWidth: "100%" }}
              src={cardViewSrc}
              onLoad={() => {
                if (window.iFrameResize) {
                  window.iFrameResize({ heightCalculationMethod: 'max', checkOrigin: false }, '#widgetFrameGrid');
                }
              }}
            ></iframe>
          </Tab.Panel>
          <Tab.Panel>
            <iframe
              id="widgetFrameTable"
              style={{ minWidth: "100%" }}
              src={tableViewSrc}
              onLoad={() => {
                if (window.iFrameResize) {
                  window.iFrameResize({ heightCalculationMethod: 'max', checkOrigin: false }, '#widgetFrameTable');
                }
              }}
            ></iframe>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <Script src="https://ratings.gtccopy.com/widgets/assets/js/iframeResizer.js" />
    </div>
  );
};

export default LeaderBoard;