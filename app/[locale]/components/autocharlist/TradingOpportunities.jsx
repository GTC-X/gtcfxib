"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
const TradingOpportunities = () => {
  const t = useTranslations("tradingTools.technicalTool.autoCharlist.TradingOpportunities");
  return (
    <section className="container pt-6 bg-gradient rounded-[20px] mb-48 md:mb-32 w-[90%] md:w-[100%]">
      <h1 className="text-secondary text-center font-bold text-[2rem]">
      {t("title")}
      </h1>
      <p className="text-white w-[80%] mx-auto text-center">
      {t("desc")}
      </p>
      <div className="md:flex items-center justify-around gap-6 relative">
        <Link href='/free-demo-account' className="py-2 px-3 mx-auto md:mx-0 block  bg-secondary rounded-[5px] mt-5 font-semibold hover:bg-white shadow">
        {t("demo")}
        </Link>
        <figure className="absolute md:w-[250px] w-[300px] md:top-10 top-[150px] right-0 left-0 mx-auto">
          <img src="/laptop.png" alt="laptop" />
        </figure>
        <Link href='https://my.gtcfx.com/getview?view=register' target="_blank" className="py-2 px-3 mx-auto md:mx-0 block  bg-secondary rounded-[5px] mt-5 font-semibold hover:bg-white shadow">
        {t("live")}
        </Link>
      </div>
    </section>
  );
};
export default TradingOpportunities;
