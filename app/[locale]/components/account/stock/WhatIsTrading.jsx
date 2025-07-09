import Aos from "aos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";

const WhatIsTradingStock = () => {
  const t = useTranslations("Instruments");
  const heading = t("stock.stockTrading.subHeading")
    .replace(/\[c\]/g, "<span class='text-secondary'>")
    .replace(/\[\/c\]/g, "</span>");
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="pt-10 ">
      <div className=" container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div
              className="flex items-center pb-3 "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img
                src={"/arrows.webp"}
                alt={"title"}
                fill
                className="object-contain pr-2 w-16"
              />
              <h2 className="font-extrabold text-3xl text-primary ">
                {t("stock.stockTrading.heading")}
              </h2>
            </div>
            <h2
              className="font-extrabold text-5xl text-primary pb-8"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            <p className="text-base text-primary font-normal pb-3">
              {t("stock.stockTrading.para1")}
            </p>
            <p className="text-base text-primary font-normal pb-3">
              {t("stock.stockTrading.para2")}
            </p>
          </div>
          <div>
            <div className="relative h-60 lg:h-96 w-full">
              <Image
                src={"/Stocks-Page-12.webp"}
                alt={"title"}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatIsTradingStock;
