import { useLocale, useTranslations } from "next-intl";
import SimpleDataTable from "../../../SimpleDataTable";
import { enProductData } from "../constent/enData";
import { arProductData } from "../constent/arData";
import { zhProductData } from "../constent/zhData";

const HolidaysAndTrading = () => {
  const t = useTranslations("Instruments");
  const locale = useLocale();
  const getHeader = () => {
    switch (locale) {
      case "en":
        return enProductData?.trendingSession?.header;
      case "ar":
        return arProductData?.trendingSession?.header;
      case "zh-hans":
        return zhProductData?.trendingSession?.header;
      default:
        return [];
    }
  };

  const getData = () => {
    switch (locale) {
      case "en":
        return enProductData?.trendingSession?.data;
      case "ar":
        return arProductData?.trendingSession?.data;
      case "zh-hans":
        return zhProductData?.trendingSession?.data;
      default:
        return [];
    }
  };

  return (
    <div className="tab-content">
        {/*  <h2 className="text-xl md:text-2xl font-semibold text-primary pb-3">
        {t("productDetail.treadingSession.holiday.heading")}
      </h2>

  <p className="text-base text-primary font-semibold pb-3">
        {t("productDetail.treadingSession.holiday.para")}
      </p>
      <p className="text-xl md:text-2xl font-semibold text-primary pb-3">
        {t("productDetail.treadingSession.holiday.preciousMetals")}
      </p>
      <div className=" overflow-auto">
        <SimpleDataTable
          className="bg-white"
          data={getData() || []}
          columns={getHeader() || []}
          width="w-full"
        />
      </div>*/}
      <div className="pt-6 md:w-2/4 w-full">
      
        <h2 className="text-xl md:text-2xl font-semibold text-primary pt-8">
          {t("productDetail.treadingSession.attention.heading")}
        </h2>
        <p className="text-base text-primary font-normal py-3">
          {t("productDetail.treadingSession.attention.para1")}
        </p>
        <p className="text-base text-primary font-normal py-3">
          {t("productDetail.treadingSession.attention.para2")}
          {/* Please feel free to{" "}
          <span className="text-[#cc3366]"> contact us </span> with any
          questions or concerns. */}
        </p>

        <p className="text-base text-primary font-semibold pb-3 pt-6">
          {t("productDetail.treadingSession.attention.para3")}
        </p>
        <p className="text-base text-primary font-semibold pb-3 ">
          {t("productDetail.treadingSession.attention.para4")}
        </p>
        <p className="text-base text-primary font-semibold pb-3">
          {t("productDetail.treadingSession.attention.para5")}
        </p>
      </div>
    </div>
  );
};
export default HolidaysAndTrading;
