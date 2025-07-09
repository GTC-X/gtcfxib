import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import TradingPlatform from "./TradingPlatform";
import { usePathname } from "next/navigation";

export default function Markets() {
  const widgetRef = useRef(null);
  const t = useTranslations("home.markets_ct");
  const path= usePathname();
  const isAr = path.includes("/ar-AE");
  const isCh = path.includes("/zh-hans");

  useEffect(() => {
    if (widgetRef.current) {
      const existingScript = widgetRef.current.querySelector("script[src='https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js']");
      if (existingScript) {
        console.log("Script already exists, not appending again.");
        return;
      }

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: "light",
        dateRange: "12M",
        showChart: true,
        locale: "en",
        largeChartUrl: "https://web.mygtc.app/login/register?code=2544249&scope=1&_gl=1*19bpo5s*_gcl_au*MzQyNTMwNDY3LjE3MjMyMjM2MTE.",
        isTransparent: false, // Ensures the background color is applied
        backgroundColor: "black", // ✅ Add this line
        showSymbolLogo: true,
        showFloatingTooltip: true,
        width: "100%",
        height: "100%",
        plotLineColorGrowing: "rgba(246, 178, 107, 1)",
        plotLineColorFalling: "rgba(246, 178, 107, 1)",
        gridLineColor: "rgba(240, 243, 250, 0)",
        scaleFontColor: "rgba(28, 69, 135, 1)",
        belowLineFillColorGrowing: "rgba(28, 69, 135, 0.12)",
        belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorGrowingBottom: "rgba(28, 69, 135, 0)",
        belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
        symbolActiveColor: "rgba(41, 98, 255, 0.12)",
        tabs: [
          {
            title: "Most Traded",
            symbols: [
              { s: "FX:EURUSD" },
              { s: "FX:USDJPY" },
              { s: "FX:GBPUSD" },
              { s: "OANDA:USDCAD" },
              { s: "NASDAQ:AAPL" },
              { s: "NASDAQ:NVDA" },
              { s: "NYSE:BABA" },
              { s: "NASDAQ:MSFT" },
              { s: "OANDA:XAUUSD" },
              { s: "OANDA:XAGUSD" },
              { s: "EASYMARKETS:OILUSD" },
              { s: "VANTAGE:SP500" },
              { s: "FOREXCOM:CHINA50" },
              { s: "CITYINDEX:HONGKONG50CFD" },
            ],
          },
          {
            title: "Forex",
            symbols: [
              { s: "FX:EURUSD", d: "EUR to USD" },
              { s: "FX:GBPUSD", d: "GBP to USD" },
              { s: "FX:USDJPY", d: "USD to JPY" },
              { s: "FX:USDCHF", d: "USD to CHF" },
              { s: "FX:AUDUSD", d: "AUD to USD" },
              { s: "FX:USDCAD", d: "USD to CAD" },
            ],
            originalTitle: "Forex",
          },
          {
            title: "Commodities",
            symbols: [
              { s: "OANDA:XAUUSD" },
              { s: "OANDA:XAGUSD" },
              { s: "EASYMARKETS:OILUSD" },
              { s: "TVC:UKOIL" },
            ],
          },
          {
            title: "Indices",
            symbols: [
              { s: "FOREXCOM:DJI", d: "Dow Jones Industrial Average Index" },
              { s: "INDEX:NKY", d: "Nikkei 225" },
              { s: "PEPPERSTONE:CN50" },
              { s: "SPREADEX:FTSE" },
              { s: "SP:SPX" },
            ],
            originalTitle: "Indices",
          },
        ],
      });
      console.log("Appending script to widgetRef");
      widgetRef.current.appendChild(script);
    }
  }, []); 

  const iframeContainerStyle = {
    position: 'relative',
    height: '622px',
    borderRadius: '6px'

  };

  const iframeOverlayStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40px',
    backgroundColor: 'white', // Or match your page background color
    zIndex: 10,
  };
  let pathUrl;

  if (isAr) {
    pathUrl = "https://www.tradays.com/ar/economic-calendar/widget?mode=2&utm_source=mountaxis.com";
  } else if (isCh) {
    pathUrl = "https://www.tradays.com/zh/economic-calendar/widget?mode=2&utm_source=mountaxis.com"; // Assuming you have a zh-2.webp for Chinese
  } else {
    pathUrl = "https://www.tradays.com/en/economic-calendar/widget?mode=2&utm_source=mountaxis.com"; // Default image
  }

  return (
    <>
      <section className="pt-10 lg:py-[70px] bg-primary">
      <div className="container">
      <div className="text-center">
        <h2 className="HeadingH2 md:mb-3 bg-gradient-to-r from-secondary via-[#dcc8b2]  from-10% to-secondary to-90% inline-block text-transparent bg-clip-text font-medium">
          {t("title")}
        </h2>
        <p className="text-white md:text-base text-sm 2xl:text-[17px] max-w-6xl mx-auto mb-5">{t("sub_title")}
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start"> 
       
        <div style={iframeContainerStyle}>
     
     <div className="tradingview-widget-container" ref={widgetRef}>
       <div className="tradingview-widget-container__widget"></div>
       <div className="tradingview-widget-copyright">
         <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
           <span className="blue-text"></span>
         </a>
       </div>
     </div>
     {/* Add this div to cover the bottom 30px */}
     <div style={iframeOverlayStyle}></div>
   </div>
   <div className="text-left">
   
       
        <iframe
          src={pathUrl}
          width="100%"
          height="620px"
          style={{ border: "unset" }} // Use an object for inline styles
          className="border-none" // Add Tailwind class for border-none
        ></iframe>
        </div>
        </div>
       
        
  
        </div>
        
       
      
      
     
      
    </section>
    </>
   
  );
}
