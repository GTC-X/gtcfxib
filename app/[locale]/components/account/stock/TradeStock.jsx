import Aos from "aos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";

const TradeStock = () => {
  const t = useTranslations("Instruments");
  const paraGtcfx = t("stock.GTCFX.para")
    .replace(/\[b\]/g, "<b>")
    .replace(/\[\/b\]/g, "</b>");
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="pt-10 bg-[url('/Copy-Trading-13.JPG')] bg-auto bg-no-repeat bg-center"
      style={{ backgroundImage: `` }}
    >
      <div className=" container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
                {t("stock.GTCFX.heading")}
              </h2>
            </div>
            <h2 className="font-extrabold text-5xl text-primary pb-8">
              {t("stock.GTCFX.subHeading")}
              <span className=" text-secondary">{t("stock.GTCFX.subHeadingYellow")}</span>
            </h2>
            <p
              className="text-xl text-primary font-normal pb-3"
              dangerouslySetInnerHTML={{ __html: paraGtcfx }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TradeStock;
