import { useLocale, useTranslations } from "next-intl";
import DataTable from "../../../DataTable";
import { enProductData } from "../constent/enData";
import { arProductData } from "../constent/arData";
import { zhProductData } from "../constent/zhData";

const SpotMetalTable = () => {
  const t = useTranslations("Instruments");
  const locale = useLocale();

  const getHeader = () => {
    switch (locale) {
      case "en":
        return enProductData?.sportMetals?.header;
      case "ar":
        return arProductData?.sportMetals?.header;
      case "zh-hans":
        return zhProductData?.sportMetals?.header;
      default:
        return [];
    }
  };

  const getData = () => {
    switch (locale) {
      case "en":
        return enProductData?.sportMetals?.data;
        case "ar":
          return arProductData?.sportMetals?.data;
        case "zh-hans":
          return zhProductData?.sportMetals?.data;
      default:
        return [];
    }
  };

  return (
    <div className="tab-content">
      <h2 className="text-xl md:text-2xl font-semibold text-primary py-5">
        {t("productDetail.listTradingInstruments.spotMetal")}
      </h2>
      <div className=" overflow-auto">
        <DataTable
          className="bg-white"
          data={getData() || []}
          columns={getHeader() || []}
          width="w-full"
          fileName="Spot Metals"
        />
      </div>
      <p className="text-base text-primary font-normal">
        {t("productDetail.listTradingInstruments.spotMetalCaption")}
      </p>
    </div>
  );
};
export default SpotMetalTable;
