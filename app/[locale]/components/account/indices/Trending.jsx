import { useTranslations } from "next-intl";

const TitleDetail = ({ title, descreption }) => (
  <div className="reason-content pb-6">
    <h2 className="font-semibold text-2xl text-primary pb-3">{title} </h2>
    <p className="text-base text-primary font-normal">{descreption}</p>
  </div>
);

const TableTrending = () => {
  const t = useTranslations("Instruments");
  return (
    <div className="  min-w-full align-middle mb-6">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50 border-gray-300 border-b">
            <tr>
              <th
                scope="col"
                className=" py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-primary bg-white"
              >
                {t("indices.tradingHour.header1")}
              </th>
              <th
                scope="col"
                className=" py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-primary bg-white"
              >
                {t("indices.tradingHour.header2")}
              </th>
              <th
                scope="col"
                className=" py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-primary bg-white"
              >
                {t("indices.tradingHour.header3")}
              </th>
            </tr>
          </thead>
          <tbody className=" bg-white">
            <tr className="-gray-50 border-gray-300 ">
              <td
                className="border-gray-300 md:min-w-[300px] align-top border-b py-4 pl-4 pr-3 text-sm text-primary sm:pl-6"
                rowSpan={2}
              >
                AUS200
              </td>
              <td className=" px-4 border-gray-300 border-b py-4 text-sm text-primary">
                <p>{t("indices.tradingHour.sunday")}</p>
                <p>22:50</p>
              </td>
              <td className=" px-4 border-gray-300 border-b py-4 text-sm text-primary">
                <p>{t("indices.tradingHour.friday")}</p>
                <p>20:00</p>
              </td>
            </tr>
            <tr className="-gray-50 border-gray-300 ">
              <td
                className=" px-4 border-gray-300 border-b py-4 text-sm text-primary"
                colSpan={3}
              >
                <p>{t("indices.tradingHour.break")} 5:30-6:10, 20:00-22:50</p>
              </td>
            </tr>
            <tr className="-gray-50 border-gray-300 ">
              <td
                className="border-gray-300 md:min-w-[300px] align-top border-b py-4 pl-4 pr-3 text-sm text-primary sm:pl-6"
                rowSpan={2}
              >
                US30, FR40, DE30, USTEC, US500, STOXX50, UK100
              </td>
              <td className=" px-4 border-gray-300 border-b py-4 text-sm text-primary">
                <p>{t("indices.tradingHour.sunday")}</p>
                <p>23:30</p>
              </td>
              <td className=" px-4 border-gray-300 border-b py-4 text-sm text-primary">
                <p>{t("indices.tradingHour.friday")}</p>
                <p>21:00</p>
              </td>
            </tr>
            <tr className="-gray-50 border-gray-300 ">
              <td
                className=" px-4 border-gray-300 border-b py-4 text-sm text-primary"
                colSpan={3}
              >
                <p>{t("indices.tradingHour.break")} 21:00-23:30</p>
              </td>
            </tr>
            <tr className="-gray-50 border-gray-300 ">
              <td
                className="border-gray-300 md:min-w-[300px] align-top border-b py-4 pl-4 pr-3 text-sm text-primary sm:pl-6"
                rowSpan={2}
              >
                HK50, JP225
              </td>
              <td className=" px-4 border-gray-300 border-b py-4 text-sm text-primary">
                <p>{t("indices.tradingHour.monday")}</p>
                <p>00:00</p>
              </td>
              <td className=" px-4 border-gray-300 border-b py-4 text-sm text-primary">
                <p>{t("indices.tradingHour.friday")}</p>
                <p>21:00</p>
              </td>
            </tr>
            <tr className="-gray-50 border-gray-300 ">
              <td
                className=" px-4 border-gray-300 border-b py-4 text-sm text-primary"
                colSpan={3}
              >
                <p>{t("indices.tradingHour.break")} 21:00-00:00</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="py-4 text-sm text-primary">
          {t("indices.tradingHour.caption")}
        </p>
      </div>
    </div>
  );
};

const TrendingDetail = () => {
  const t = useTranslations("Instruments");

  return (
    <div className="tab-content md:px-6 pt-10 py-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-semibold text-2xl text-primary pb-3">
            {t("indices.tradingHour.title")}
          </h2>
          <TableTrending />
          <TitleDetail
            title={t("indices.spread.title")}
            descreption={t("indices.spread.para")}
          />
          <TitleDetail
            title={t("indices.dividends.title")}
            descreption={t("indices.dividends.para")}
          />
        </div>
        <div>
          <h2 className="font-semibold text-2xl text-primary pb-3">
            {t("indices.swaps.title")}
          </h2>
          <p className="text-base text-primary font-normal pb-3">
            {t("indices.swaps.para1")}
          </p>
          <p className="text-base text-primary font-normal pb-3">
            {t("indices.swaps.para2")}
          </p>
          <p className="text-base text-primary font-normal pb-6">
            {t("indices.swaps.para3")}
          </p>
          <TitleDetail
            title={t("indices.stopLevel.title")}
            descreption={t("indices.stopLevel.para")}
          />
          <TitleDetail
            title={t("indices.fixedMargin.title")}
            descreption={t("indices.fixedMargin.para")}
          />
          <TitleDetail
            title={t("indices.dailyBreak.title")}
            descreption={t("indices.dailyBreak.para")}
          />
        </div>
      </div>
    </div>
  );
};
export default TrendingDetail;
