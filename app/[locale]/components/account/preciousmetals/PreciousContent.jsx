import { useTranslations } from "next-intl";

const TitleDetail = ({ title, descreption }) => (
  <div className="reason-content pb-3">
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
                {t("preciousMetals.tradingHour.header1")}
              </th>
              <th
                scope="col"
                className=" py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-primary bg-white"
              >
                {t("preciousMetals.tradingHour.header2")}
              </th>
              <th
                scope="col"
                className=" py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-primary bg-white"
              >
                {t("preciousMetals.tradingHour.header3")}
              </th>
            </tr>
          </thead>
          <tbody className=" bg-white">
            <tr className="-gray-50 border-gray-300 ">
              <td
                className="border-gray-300 md:min-w-[300px] align-top border-b py-4 pl-4 pr-3 text-sm text-primary sm:pl-6"
                rowSpan={2}
              >
                XAU, XAG
              </td>
              <td className=" px-4 border-gray-300 border-b py-4 text-sm text-primary">
                <p>{t("preciousMetals.tradingHour.sunday")}</p>
                <p>23:05</p>
              </td>
              <td className=" px-4 border-gray-300 border-b py-4 text-sm text-primary">
                <p>{t("preciousMetals.tradingHour.friday")}</p>
                <p>21:59</p>
              </td>
            </tr>
            <tr className="-gray-50 border-gray-300 ">
              <td
                className=" px-4 border-gray-300 border-b py-4 text-sm text-primary"
                colSpan={3}
              >
                <p>{t("preciousMetals.tradingHour.break")} 22:00-23:01</p>
              </td>
            </tr>
            <tr className="-gray-50 border-gray-300 ">
              <td
                className="border-gray-300 md:min-w-[300px] align-top border-b py-4 pl-4 pr-3 text-sm text-primary sm:pl-6"
                rowSpan={2}
              >
                XPDUSD, XPTUSD
              </td>
              <td className=" px-4 border-gray-300 border-b py-4 text-sm text-primary">
                <p>{t("preciousMetals.tradingHour.sunday")}</p>
                <p>01:10</p>
              </td>
              <td className=" px-4 border-gray-300 border-b py-4 text-sm text-primary">
                <p>{t("preciousMetals.tradingHour.friday")}</p>
                <p>23:10</p>
              </td>
            </tr>
            <tr className="-gray-50 border-gray-300 ">
              <td
                className=" px-4 border-gray-300 border-b py-4 text-sm text-primary"
                colSpan={3}
              >
                <p>{t("preciousMetals.tradingHour.break")} 22:00-23:05</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="py-4 text-sm text-primary">
          {t("preciousMetals.tradingHour.caption")}
        </p>
      </div>
    </div>
  );
};

const PreciousContent = () => {
  const t = useTranslations("Instruments");

  const positionData = [
    {
      instrument: "0 – 1",
      openTime: "1:2000",
    },
    {
      instrument: "1 – 5",
      openTime: "1:1000",
    },
    {
      instrument: "5 – 20",
      openTime: "1:500",
    },
    {
      instrument: `20 ${t("preciousMetals.position.more")}`,
      openTime: "	1:100",
    },
  ];
  return (
    <div className="tab-content md:px-6 pt-10 py-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-semibold text-2xl text-primary pb-3">
            {t("preciousMetals.tradingHour.title")}
          </h2>
          <TableTrending />
          <h2 className="font-semibold text-2xl text-primary pb-3">
            {t("preciousMetals.spread.title")}
          </h2>
          <p className="text-base text-primary font-normal pb-3">
            {t("preciousMetals.spread.para1")}
          </p>
          <p className="text-base text-primary font-normal pb-3">
            {t("preciousMetals.spread.para2")}
          </p>
          <h2 className="font-semibold text-2xl text-primary pb-3">
            {t("preciousMetals.swap.title")}
          </h2>
          <p className="text-base text-primary font-normal pb-3">
            {t("preciousMetals.swap.para")}
          </p>
          <h2 className="font-semibold text-2xl text-primary pb-3">
            {t("preciousMetals.stopLevel.title")}
          </h2>
          <p className="text-base text-primary font-normal pb-3">
            {t("preciousMetals.stopLevel.para")}
          </p>
          <h2 className="font-semibold text-2xl text-primary pb-3">
            {t("preciousMetals.margin.title")}
          </h2>
          <p className="text-base text-primary font-normal pb-3">
            {t("preciousMetals.margin.para")}
          </p>
        </div>
        <div>
          <TitleDetail
            title={t("preciousMetals.dynamicMargin.title")}
            descreption={t("preciousMetals.dynamicMargin.para")}
          />
          <div className="trading-hour pb-3">
            <h4 className="HeadingH3">{t("preciousMetals.position.title")}</h4>
            <p className="text-base text-primary leading-6 mb-4">
              {t("preciousMetals.position.para")}
            </p>
            <div className="overflow-x-auto">
              <table className="table border border-gray-200">
                <thead>
                  <tr>
                    <th>{t("preciousMetals.position.header1")}</th>
                    <th>{t("preciousMetals.position.header2")}</th>
                  </tr>
                </thead>
                <tbody>
                  {positionData.map((data, index) => (
                    <tr key={index}>
                      <td className="border-r px-4 py-2">{data.instrument}</td>
                      <td className="border-r px-4 py-2">{data.openTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <h2 className="font-semibold text-2xl text-primary pb-3">
            {t("preciousMetals.news.title")}
          </h2>
          <p className="text-base text-primary font-normal pb-3">
            {t("preciousMetals.news.para1")}
          </p>
          <p className="text-base text-primary font-normal pb-3">
            {t("preciousMetals.news.para2")}
          </p>
          <h2 className="font-semibold text-2xl text-primary pb-3">
            {t("preciousMetals.holiday.title")}
          </h2>
          <p className="text-base text-primary font-normal pb-3">
            {t("preciousMetals.holiday.para1")}
          </p>
          <p className="text-base text-primary font-normal pb-3">
            {t("preciousMetals.holiday.para2")}
          </p>
          <h2 className="font-semibold text-2xl text-primary pb-3">
            {t("preciousMetals.break.title")}
          </h2>
          <p className="text-base text-primary font-normal pb-3">
            {t("preciousMetals.break.para")}
          </p>
        </div>
      </div>
    </div>
  );
};
export default PreciousContent;
