import React from "react";
import { useTranslations } from "next-intl";
function PricingCard({
  title,
  cpu,
  ram,
  storage,
  free,
  price,
  index,
  btnText,
  caption,
  month,
}) {
  return (
    <div
      className="border bg-white border-gray-300 "
      key={index}
    >
      <div className="  rounded-[25px] p-6">
        <h2 className="text-secondary text-center text-xl mb-6">
          {title}
        </h2>
        <p className="text ltr:text-left rtl:text-right text-base py-2  border-gray-300 border-b">
          {cpu}
        </p>
        <p className="text ltr:text-left rtl:text-right text-base py-2 border-gray-300 border-b">
          {ram}
        </p>
        <p className="text ltr:text-left rtl:text-right text-base py-2 border-gray-300 border-b">
          {storage}
        </p>
        <p className="text ltr:text-left rtl:text-right text-base py-2">{free}</p>
        <p className="text-secondary text-center text-base pt-8">from</p>
        <h2 className="text text-center md:text-3xl text-2xl pt-4">
          {price}
        </h2>
        <p className="text-center text-base pt-4">/{month}</p>
        <div className="text-center pt-4">
          <button
  className="bg-secondary text-white px-5 py-3 hover:bg-primary"
  onClick={() => {
    const banner = document.getElementById("top-banner");
    if (banner) {
      banner.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  {btnText}
</button>
        </div>
        <p className="text text-center uppercase text-xs pt-2">
          {caption}
        </p>
      </div>
    </div>
  );
}
const VpsPricing = () => {
  const t = useTranslations("prime-tech");
  const pricingData = [
    {
      title: t("vpsHosting.vpsPricing.bronze.title"),
      cpu: t("vpsHosting.vpsPricing.bronze.option1"),
      ram: t("vpsHosting.vpsPricing.bronze.option2"),
      storage: t("vpsHosting.vpsPricing.bronze.option3"),
      free: t("vpsHosting.vpsPricing.bronze.option4"),
      price: t("vpsHosting.vpsPricing.bronze.amount"),
      month: t("vpsHosting.vpsPricing.bronze.month"),
      btnText: t("vpsHosting.vpsPricing.bronze.buttonText"),
      caption: t("vpsHosting.vpsPricing.bronze.caption"),
    },
    {
      title: t("vpsHosting.vpsPricing.silver.title"),
      cpu: t("vpsHosting.vpsPricing.silver.option1"),
      ram: t("vpsHosting.vpsPricing.silver.option2"),
      storage: t("vpsHosting.vpsPricing.silver.option3"),
      free: t("vpsHosting.vpsPricing.silver.option4"),
      price: t("vpsHosting.vpsPricing.silver.amount"),
      month: t("vpsHosting.vpsPricing.silver.month"),
      btnText: t("vpsHosting.vpsPricing.silver.buttonText"),
      caption: t("vpsHosting.vpsPricing.silver.caption"),
    },
    {
      title: t("vpsHosting.vpsPricing.gold.title"),
      cpu: t("vpsHosting.vpsPricing.gold.option1"),
      ram: t("vpsHosting.vpsPricing.gold.option2"),
      storage: t("vpsHosting.vpsPricing.gold.option3"),
      free: t("vpsHosting.vpsPricing.gold.option4"),
      price: t("vpsHosting.vpsPricing.gold.amount"),
      month: t("vpsHosting.vpsPricing.gold.month"),
      btnText: t("vpsHosting.vpsPricing.gold.buttonText"),
      caption: t("vpsHosting.vpsPricing.gold.caption"),
    },
  ];
  return (
    <div className=" md:py-16 3xl:py-28 py-8">
      <div className="container text-center">
        <h2 className="HeadingH2 mb-8 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-center">
          {t("vpsHosting.vpsPricing.title")}
        </h2>
        <p className="text pb-6">
          {t("vpsHosting.vpsPricing.para")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricingData?.map((single, index) => (
            <PricingCard
              title={single?.title}
              index={index}
              cpu={single?.cpu}
              ram={single?.ram}
              storage={single?.storage}
              free={single?.free}
              price={single?.price}
              month={single?.month}
              btnText={single?.btnText}
              caption={single?.caption}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VpsPricing;
