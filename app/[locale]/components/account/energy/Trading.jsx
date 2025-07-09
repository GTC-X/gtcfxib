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
    <div className="  min-w-full align-middle mb-2">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50 border-gray-300 border-b">
            <tr>
              <th
                scope="col"
                className=" py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-primary bg-white"
              >
                {t("energy.tradingHour.header1")}
              </th>
              <th
                scope="col"
                className=" py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-primary bg-white"
              >
                {t("energy.tradingHour.header2")}
              </th>
              <th
                scope="col"
                className=" py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-primary bg-white"
              >
                {t("energy.tradingHour.header3")}
              </th>
            </tr>
          </thead>
          <tbody className=" bg-white">
            <tr className="-gray-50 border-gray-300 ">
              <td
                className="border-gray-300 md:min-w-[300px] align-top border-b py-4 pl-4 pr-3 text-sm text-primary sm:pl-6"
                rowSpan={2}
              >
                USOIL, XNGUSD
              </td>
              <td className=" px-4 border-gray-300 border-b py-4 text-sm text-primary">
                <p> {t("energy.tradingHour.sunday")}</p>
                <p>23:10</p>
              </td>
              <td className=" px-4 border-gray-300 border-b py-4 text-sm text-primary">
                <p> {t("energy.tradingHour.friday")}</p>
                <p>21:45</p>
              </td>
            </tr>
            <tr className="-gray-50 border-gray-300 ">
              <td
                className=" px-4 border-gray-300 border-b py-4 text-sm text-primary"
                colSpan={3}
              >
                <p> {t("energy.tradingHour.break")} 21:45-23:10</p>
              </td>
            </tr>
            <tr className="-gray-50 border-gray-300 ">
              <td
                className="border-gray-300 md:min-w-[300px] align-top border-b py-4 pl-4 pr-3 text-sm text-primary sm:pl-6"
                rowSpan={2}
              >
                UKOIL
              </td>
              <td className=" px-4 border-gray-300 border-b py-4 text-sm text-primary">
                <p> {t("energy.tradingHour.monday")}</p>
                <p>01:10</p>
              </td>
              <td className=" px-4 border-gray-300 border-b py-4 text-sm text-primary">
                <p> {t("energy.tradingHour.friday")}</p>
                <p>21:55</p>
              </td>
            </tr>
            <tr className="-gray-50 border-gray-300 ">
              <td
                className=" px-4 border-gray-300 border-b py-4 text-sm text-primary"
                colSpan={3}
              >
                <p> {t("energy.tradingHour.break")} 21:55-01:10</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="py-4 text-sm text-primary">
          {t("energy.tradingHour.caption")}
        </p>
      </div>
    </div>
  );
};

const TrendingDetailEnergy = () => {
  const t = useTranslations("Instruments");

  return (
    <div className="tab-content md:px-6 pt-10 py-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-semibold text-2xl text-primary pb-3">
            {t("energy.tradingHour.title")}
          </h2>
          <TableTrending />
          <TitleDetail
            title={t("energy.spread.title")}
            descreption={t("energy.spread.para")}
          />
          <TitleDetail
            title={t("energy.margin.title")}
            descreption={t("energy.margin.para")}
          />
          <ul className="list-disc pl-4 md:pl-8">
            <li className="text-base text-primary font-normal">
              {t("energy.margin.listItem1")}
            </li>
            <li className="text-base text-primary font-normal">
              {t("energy.margin.listItem2")}
            </li>
          </ul>
          <p className="py-2 text-base text-primary font-normal">
            {t("energy.margin.caption")}
          </p>
        </div>
        <div>
          <TitleDetail
            title={t("energy.stopLevel.title")}
            descreption={t("energy.stopLevel.para")}
          />
          <h2 className="font-semibold text-2xl text-primary pb-3">
            {t("energy.swap.title")}
          </h2>
          <p className="text-base text-primary font-normal pb-3">
            {t("energy.swap.para1")}
          </p>
          <p className="text-base text-primary font-normal pb-3">
            {t("energy.swap.para2")}
          </p>
          <p className="text-base text-primary font-normal pb-3">
            {t("energy.swap.para3")}
          </p>
          <p className="text-base text-primary font-normal pb-3">
            {t("energy.swap.para4")}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TrendingDetailEnergy;
