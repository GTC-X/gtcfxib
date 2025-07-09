import { useLocale, useTranslations } from "next-intl";
import DataTable from "../../../DataTable";
import { enProductData } from "../constent/enData";
import { arProductData } from "../constent/arData";
import { zhProductData } from "../constent/zhData";

const FourPercentTable = () => {
  const t = useTranslations("Instruments");
  const locale = useLocale();

  const getHeader = () => {
    switch (locale) {
      case "en":
        return enProductData?.header;
      case "ar":
        return arProductData?.header;
      case "zh-hans":
        return zhProductData?.header;
      default:
        return [];
    }
  };

  const getData = () => {
    switch (locale) {
      case "en":
        return enProductData?.pairMinimum4?.data;
      case "ar":
        return arProductData?.pairMinimum4?.data;
      case "zh-hans":
        return zhProductData?.pairMinimum4?.data;
      default:
        return [];
    }
  };

  return (
    <div className="tab-content">
      <h3 className="text-xl md:text-2xl text-primary py-5">
        {t("productDetail.listTradingInstruments.pairMinimum4")}
      </h3>
      <div className=" overflow-auto">
        <DataTable
          className="bg-white"
          data={getData() || []}
          columns={getHeader() || []}
          width="w-full"
          fileName="Pairs Minimum Margin Requirement Is 4%"
        />
      </div>
    </div>
  );
};
export default FourPercentTable;
