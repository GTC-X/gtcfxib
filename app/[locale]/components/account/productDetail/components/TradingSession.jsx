import { useTranslations } from "next-intl";

const ListItems = ({ index, title, des, listItem }) => (
  <div className="py-6" key={index}>
    <h2 className="text-xl md:text-2xl font-semibold text-primary ">{title}</h2>
    <p className="text-base text-primary font-normal py-3">{des}</p>
    <ul className="list-disc pl-4 md:pl-8 ">
      {listItem?.map((item, index) => (
        <li className="text-base text-primary font-normal" key={index}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const TradingSession = () => {
  const t = useTranslations("Instruments");

  const data = [
    {
      title: t("productDetail.treadingSession.instrument.heading"),
      des: t("productDetail.treadingSession.instrument.para"),
      items: [
        t("productDetail.treadingSession.instrument.one"),
        t("productDetail.treadingSession.instrument.two"),
        t("productDetail.treadingSession.instrument.three"),
      ],
    },
    {
      title: t("productDetail.treadingSession.spotMetal.heading"),
      des: t("productDetail.treadingSession.spotMetal.para"),
      items: [
        t("productDetail.treadingSession.spotMetal.one"),
        t("productDetail.treadingSession.spotMetal.two"),
      ],
    },
    {
      title: t("productDetail.treadingSession.commodities.heading"),
      des: t("productDetail.treadingSession.commodities.para"),
      items: [
        t("productDetail.treadingSession.commodities.one"),
        t("productDetail.treadingSession.commodities.two"),
      ],
    },
  ];
  return (
    <div className="tab-content pt-10">
      <h2 className="text-xl md:text-2xl font-semibold text-primary ">
        {t("productDetail.treadingSession.heading")}
      </h2>

      <p className="text-base text-primary font-normal pt-2">
        {t("productDetail.treadingSession.para")}
      </p>
      {data?.map((single, index) => (
        <ListItems
          index={index}
          title={single?.title}
          des={single?.des}
          listItem={single?.items}
        />
      ))}
    </div>
  );
};
export default TradingSession;
