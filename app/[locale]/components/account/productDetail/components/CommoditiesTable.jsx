import { useLocale, useTranslations } from "next-intl";
import DataTable from "../../../DataTable";
import {  enProductData } from "../constent/enData";
import { arProductData } from "../constent/arData";
import { zhProductData } from "../constent/zhData";

const CommoditiesTable = () => {
  const t = useTranslations("Instruments");
  const locale = useLocale();

  const getHeader = () => {
    switch (locale) {
      case "en":
        return enProductData?.commodities?.header;
      case "ar":
        return arProductData?.commodities?.header;
      case "zh-hans":
        return zhProductData?.commodities?.header;
      default:
        return [];
    }
  };

  const getData = () => {
    switch (locale) {
      case "en":
        return enProductData?.commodities?.data;
      case "ar":
        return arProductData?.commodities?.data;
      case "zh-hans":
        return zhProductData?.commodities?.data;
      default:
        return [];
    }
  };

  return (
    <div className="tab-content">
      <h2 className="text-xl md:text-2xl font-semibold text-primary py-5">
        {t("productDetail.listTradingInstruments.commodities")}
      </h2>
      <div className=" overflow-auto">
        <DataTable
          className="bg-white"
          data={getData() || []}
          columns={getHeader() || []}
          width="w-full"
          fileName="Commodities"
        />
      </div>
    </div>
  );
};
export default CommoditiesTable;
