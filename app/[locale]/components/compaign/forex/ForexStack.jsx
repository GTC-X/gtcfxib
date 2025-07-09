import React, { useEffect } from 'react';

const ForexStack = () => {
  useEffect(() => {
    const loadTradingViewWidget = (containerId, settings) => {
      const container = document.getElementById(containerId);
      // Clear existing content
      container.innerHTML = '';

      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
      script.async = true;
      script.innerHTML = JSON.stringify(settings);

      container.appendChild(script);
    };

    const settings = [
      {
        containerId: 'tradingview-widget-container-eurusd',
        symbol: "FX:EURUSD",
        "width": 350,
        "height": 220,
        "locale": "en",
        "dateRange": "12M",
        "colorTheme": "dark",
        "isTransparent": false,
        "autosize": false,
        "largeChartUrl": ""
      },
      {
        containerId: 'tradingview-widget-container-gbpusd',
        symbol: "OANDA:GBPUSD",
        "width": 350,
        "height": 220,
        "locale": "en",
        "dateRange": "12M",
        "colorTheme": "dark",
        "isTransparent": false,
        "autosize": false,
        "largeChartUrl": ""
      },
      {
        containerId: 'tradingview-widget-container-usdjpy',
        symbol: "FX:USDJPY",
        "width": 350,
        "height": 220,
        "locale": "en",
        "dateRange": "12M",
        "colorTheme": "dark",
        "isTransparent": false,
        "autosize": false,
        "largeChartUrl": ""
      }
    ];

    settings.forEach(setting => loadTradingViewWidget(setting.containerId, setting));

    // Cleanup function
    return () => {
      settings.forEach(setting => {
        const container = document.getElementById(setting.containerId);
        if (container) {
          container.innerHTML = '';
        }
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div id="tradingview-widget-container-eurusd">
            <div className="tradingview-widget-container__widget"></div>
          </div>
          <div id="tradingview-widget-container-gbpusd">
            <div className="tradingview-widget-container__widget"></div>
          </div>
          <div id="tradingview-widget-container-usdjpy">
            <div className="tradingview-widget-container__widget"></div>
          </div>
     
      </div>
    </>
  );
};

export default ForexStack;
