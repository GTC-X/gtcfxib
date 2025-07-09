import { useTranslations } from "next-intl";

const TitleDetail = ({ title, descreption }) => (
  <div className="reason-content pb-6">
    <h2 className="font-semibold text-2xl text-primary pb-3">{title} </h2>
    <p className="text-base text-primary font-normal">{descreption}</p>
  </div>
);

const TrendingDetail = () => {
  const t = useTranslations("Instruments");

  return (
    <div className="tab-content md:px-6 pt-10 py-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-semibold text-2xl text-primary pb-3">
            {t("stock.tradingHour.title")}
          </h2>
          <p className="text-base text-primary font-normal pb-3">
            {t("stock.tradingHour.para1")}
          </p>
          <p className="text-base text-primary font-normal pb-3">
            {t("stock.tradingHour.para2")}
          </p>
          <p className="text-base text-primary font-normal pb-3">
            {t("stock.tradingHour.para3")}
          </p>
          <p className="text-base text-primary font-normal pb-6">
            {t("stock.tradingHour.para4")}
          </p>
          <TitleDetail
            title={t("stock.spread.title")}
            descreption={t("stock.spread.para")}
          />
          <TitleDetail
            title={t("stock.swap.title")}
            descreption={t("stock.swap.para")}
          />
        </div>
        <div>
          <TitleDetail
            title={t("stock.stopLevel.title")}
            descreption={t("stock.stopLevel.para")}
          />
          <TitleDetail
            title={t("stock.margin.title")}
            descreption={t("stock.margin.para")}
          />
          <h2 className="font-semibold text-2xl text-primary pb-3">
            {t("stock.company.title")}
          </h2>
          <p className="text-base text-primary font-normal pb-3">
            {t("stock.company.para")}
          </p>
          <p className="text-base text-primary font-normal pb-3">
            {t("stock.company.para2")}
          </p>

          <TitleDetail
            title={t("stock.break.title")}
            descreption={t("stock.break.para")}
          />
        </div>
      </div>
    </div>
  );
};
export default TrendingDetail;
