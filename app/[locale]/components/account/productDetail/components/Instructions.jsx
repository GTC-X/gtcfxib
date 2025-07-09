import { useTranslations } from "next-intl";
import DataTable from "../../../DataTable";

const Instructions = () => {
  const t = useTranslations("Instruments")

  return (
    <div className="tab-content pt-10">
      <p className="text-base text-primary font-normal py-2">
      {t("productDetail.listTradingInstruments.instructions.one")}
      </p>
      <p className="text-base text-primary font-normal py-2">
      {t("productDetail.listTradingInstruments.instructions.two")}
      </p>
      <p className="text-base text-primary font-normal py-2">
      {t("productDetail.listTradingInstruments.instructions.three")}
      </p>
      <p className="text-base text-primary font-normal py-2">
      {t("productDetail.listTradingInstruments.instructions.four")}
      </p>
      <p className="text-base text-primary font-normal py-2">
      {t("productDetail.listTradingInstruments.instructions.five")}
      </p>
    </div>
  );
};
export default Instructions;
