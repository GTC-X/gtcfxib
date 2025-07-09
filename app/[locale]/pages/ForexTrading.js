import React from "react";
import ForexHero from "../components/compaign/forex/ForexHero";
import IconBoxes from "../components/compaign/forex/IconBoxes";
import Uncover from "../components/compaign/forex/Uncover";
const ForexTradingPage = () => {
  return (
    <>
      <ForexHero
        title="MASTER"
        subTitle={
          <span>
            <span className="text-3xl text-secondary font-black">FOREX </span>
            TRADING WITH PRECISION
          </span>
        }
        mainTitle={
          <>
            <span className="text-secondary text-3xl md:text-6xl font-black">
              ZERO COMMISSION &{" "}
            </span>
            <span className="text-white text-2xl md:text-5xl font-black">
              LOWEST SPREADS
            </span>
          </>
        }
        mainTitleHighlight={<></>}
        terms={
          <span>
            {" "}
            STARTING FROM $ 0.01{" "}
            <span className="text-base px-3 py-1 border-l-4 border-secondary">
              T&C APPLY
            </span>
          </span>
        }
        imageSrc="/compaign/forex/forex.webp"
        imageAlt="Forex Trading"
        footerText="Trading in financial markets carries risks and can result in loss of capital."
      />
      <IconBoxes />
      <Uncover />
    </>
  );
};

export default ForexTradingPage;
