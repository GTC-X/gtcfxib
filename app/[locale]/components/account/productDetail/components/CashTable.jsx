import { useLocale, useTranslations } from "next-intl";
import DataTable from "../../../DataTable";
import {  enProductData } from "../constent/enData";
import { arProductData } from "../constent/arData";
import { zhProductData } from "../constent/zhData";

const CashTable = () => {
  const t = useTranslations("Instruments");
  const locale = useLocale();
  const getHeader = () => {
    switch (locale) {
      case "en":
        return enProductData?.cashTable?.header;
      case "ar":
        return arProductData?.cashTable?.header;
      case "zh-hans":
        return zhProductData?.cashTable?.header;
      default:
        return [];
    }
  };

  const getData = () => {
    switch (locale) {
      case "en":
        return enProductData?.cashTable?.data;
      case "ar":
        return arProductData?.cashTable?.data;
      case "zh-hans":
        return zhProductData?.cashTable?.data;
      default:
        return [];
    }
  };
  return (
    <div className="tab-content">
      <h2 className="text-xl md:text-2xl font-semibold text-primary py-5">
        {t("productDetail.listTradingInstruments.cashCFD")}
      </h2>
      <div className=" overflow-auto">
        <DataTable
          className="bg-white"
          data={getData() || []}
          columns={getHeader() || []}
          width="w-full"
          fileName="cash"
        />
      </div>
      <p className="text-base text-primary font-normal pt-3">
        {t("productDetail.listTradingInstruments.cashCFDCaption")}
      </p>
    </div>
  );
};
export default CashTable;
