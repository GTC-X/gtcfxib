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
      className="bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90%"
      key={index}
    >
      <div className="  rounded-[25px] p-6">
        <h2 className="text-secondary text-center text-xl mb-6">
          {title}
        </h2>
        <p className="text text-white ltr:text-left rtl:text-right text-base py-2  border-gray-300 border-b">
          {cpu}
        </p>
        <p className="text text-white ltr:text-left rtl:text-right text-base py-2 border-gray-300 border-b">
          {ram}
        </p>
        <p className="text text-white ltr:text-left rtl:text-right text-base py-2 border-gray-300 border-b">
          {storage}
        </p>
        <p className="text text-white ltr:text-left rtl:text-right text-base py-2">{free}</p>

        <div className="text-center">
        <h2 className="text text-center md:text-3xl text-2xl pt-4 bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text">
        FREE
        </h2>
        </div>
       
        <p className="text-center text-base text-white pt-4">* Min deposit $1000 </p>
        <div className="text-center pt-4">
        <button
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("register1")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-primary bg-gradient-to-r from-white to-secondary rounded-md px-8 py-3 md:w-auto w-[300px] hover:bg-gradient-to-r hover:from-secondary hover:to-white transition-colors duration-500 font-medium"
          >
            REGISTER NOW
          </button>
        </div>
        <p className="text text-white text-center uppercase text-xs pt-2">
          {caption}
        </p>
      </div>
    </div>
  );
}
const PricingPakistan = () => {
  const t = useTranslations("prime-tech");
  const pricingData = [
    {
      title: t("vpsHosting.vpsPricing.bronze.title"),
      cpu: t("vpsHosting.vpsPricing.bronze.option1"),
      ram: t("vpsHosting.vpsPricing.bronze.option2"),
      storage: t("vpsHosting.vpsPricing.bronze.option3"),
      free: 'FREE VPS with $1,000 Trading Balance',
      price: t("vpsHosting.vpsPricing.bronze.amount"),
      month: t("vpsHosting.vpsPricing.bronze.month"),
      btnText: t("vpsHosting.vpsPricing.bronze.buttonText"),
      caption: t("vpsHosting.vpsPricing.bronze.caption"),
    }
  ];
  return (
  
      <div className="container">
        <h2 className="HeadingH2 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
        VPS configuration 
        </h2>
        <p className="text text-left pb-6">
          {t("vpsHosting.vpsPricing.para")}
        </p>
        <div className="test">
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
    
  );
};

export default PricingPakistan