import { useTranslations } from "next-intl";
import CashTable from "./components/CashTable";
import CommoditiesTable from "./components/CommoditiesTable";
import HolidaysAndTrading from "./components/Holidays";
import Instructions from "./components/Instructions";
import FourPercentTable from "./components/MinFourPercentTable";
import OnePercentTable from "./components/MinOnePercentTable";
import TenPercentTable from "./components/MinTenPercentTable";
import TwoPercentTable from "./components/MinTwoPercentTable";
import SpotMetalTable from "./components/SpotMetalTable";
import TradingSession from "./components/TradingSession";

const TrendingDetail = () => {
  const t = useTranslations("Instruments")

  return (
    <div className="tab-content">
      <h2 className="mainHeading text-left ">{t("productDetail.listTradingInstruments.heading1")}</h2>
      <p className="text-base text-primary font-normal pb-5">
       {t("productDetail.listTradingInstruments.heading2")}
      </p>
      <h2 className="HeadingH3 text-left ">{t("productDetail.listTradingInstruments.heading3")}</h2>
      <OnePercentTable />
      <TwoPercentTable />
      <FourPercentTable />
      <TenPercentTable />
      <Instructions />
      <SpotMetalTable />
      <CommoditiesTable />
      <CashTable />
      <TradingSession />
      <HolidaysAndTrading />
    </div>
  );
};
export default TrendingDetail;
