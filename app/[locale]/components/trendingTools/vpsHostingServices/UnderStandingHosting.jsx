import Aos from "aos";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import PricingPakistan from "./PricingPakistan";
import VPSBoxing from "./VPSBoxing";
import VPSBoxingPak from "./VPSBoxingPak";

export default function UnderStandingHosting() {
  const t = useTranslations("prime-tech");
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  return (
    <div
      className="w-full py-10 2xl:py16 3xl:py-20 container"
    >
    
      <div className="flex flex-col md:flex-row items-start justify-start gap-4">
       
        <div className="basis-full md:basis-1/3">
        <PricingPakistan />
        </div>
        <div className="basis-full md:basis-2/3">
        <h2 className="HeadingH2 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-left">
      Slow Internet Speeds Costing You Lucrative Trading Opportunities.
      </h2>
      <p className="text-lg max-w-5xl mx-auto mb-8">
      Accelerate with VPS (Limited Time Offer), For FREE
      </p>
        <VPSBoxingPak />
        </div>
      </div>
     
      
    </div>
  );
}
