import { GiChart } from "react-icons/gi";
import { SlSpeedometer } from "react-icons/sl";
import { LiaCoinsSolid } from "react-icons/lia";
import { TbArrowBigUpLineFilled } from "react-icons/tb";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaPeopleRobbery } from "react-icons/fa6";

const LiquidityFeature = [
    {
      "text": "Low spreads & Commissions",
      "icon": <GiChart size={30} />
    },
    {
      "text": "Ultra Fast Execution",
      "icon": <SlSpeedometer size={30} />
    },
    {
      "text": "Up to 10 levels of market Depth",
      "icon": <LiaCoinsSolid size={30} />
    },
    {
      "text": "Quick Integration",
      "icon": <TbArrowBigUpLineFilled size={30} />
    },
    {
      "text": "Ultra Fast Price Feeds",
      "icon": <BsSpeedometer2 size={30} />
    },
    {
      "text": "Fast onboarding Procedure",
      "icon": <FaPeopleRobbery size={30} />
    }
  ];

const DirectAccess = () => {
  return (
    <section className="md:py-12 3xl:py-16 py-8 container border-b border-b-gray-300 ">
    <h2 className="HeadingH2 mb-8">
      Direct Access  to Top Tier Liquidity Provider
    </h2>
    <p className="text-accent md:text-base text-sm 2xl:text-[17px] text-center max-w-4xl mx-auto">GTC GROUP provides market access to prominent Tier-1 FX Liquidity platforms,
      equipping your enterprise with cutting-edge technology, an extensive Liquidity reservoir, lightning-fast execution, and expert support. we uphold full transparency and trading anonymity while offering ultra-competetive trading costs
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-6 md:gap-8 pt-12" >
      {
        tradingBenefits.map((benefit, index) => (
          <div key={index} className="flex bg-gray-100 items-center gap-2 px-3 md:px-12 py-2 md:py-4 group hover:bg-secondary rounded-3xl hover:rounded-3xl hover:cursor-pointer transition-all duration-300 hover:shadow-xl">
            <span className="group-hover:text-[#FFF]">{benefit.icon}</span>
            <span className="text-primary group-hover:text-[#FFF] text-sm 2xl:text-[17px]">{benefit.text}</span>
          </div>
        ))
      }
    </div>
  </section>
  )
}

export default LiquidityFeature
