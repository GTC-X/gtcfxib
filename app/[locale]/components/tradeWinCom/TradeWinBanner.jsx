import { usePathname } from "next/navigation";
import Image from "next/image";
import FlipCountdown from "@rumess/react-flip-countdown";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";
import DepositForm from "../15-deposit-bonus/15DepositForm";
import LocationContextProvider from "@/context/location-context";

const TradeWinBanner = () => {
  const path = usePathname();
  const isAr = path.includes("/ar");
  const t = useTranslations("compaign.tradeWin");
  const router = useRouter();
  const locale = useLocale();
  return (
    <>
    <LocationContextProvider>
      <div
        className="bg-gradient-to-r from-[#335580] from-10% via-[#152c49] via-50% to-[#0c1c3d] to-70% pt-10 pb-10 md:pb-8"
        id="register"
      >
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div
            className={`flex flex-col justify-center mb-8 text-center max-w-xl ${
              isAr ? "md:text-right" : "md:text-left"
            }`}
          >
            <h1
              className={`text-secondary uppercase  font-black text-4xl md:w-[560px] ${
                isAr
                  ? "leading-relaxed py-5"
                  : "lg:text-7xl md:pt-0 leading-normal"
              }`}
            >
              {t("banner.para1")}
              
              <span
                className={`text-4xl  leading-relaxed text-white ${
                  isAr ? "md:text-6xl" : "md:text-8xl"
                } `}
              >
                {" "}
                {t("banner.para2")}{" "}
              </span>
            </h1>
            <p className="text-white text-lg ">{t("banner.new")}</p>
            <div
            className={`relative w-full h-64 md:h-[320px]  ${
              isAr ? "md:mr-10" : "md:ml-10"
            }`}
          	>
            <Image
              src="/compaign/tradeWin/win.webp"
              alt="Affiliate Program"
              fill
              className="object-contain"
            />
            </div>
            <p
              className={`text-[11px] text-white md:w-[540px] leading-5 ${
                isAr ? "md:text-xs" : " md:text-[15px] md:whitespace-nowrap"
              }`}
            >
              {t("banner.para3")}
              <span className="text-secondary block">
                {t("banner.para4")}
              </span>
            </p>
          </div>
         <DepositForm/>
        </div>
      </div>
      <div className="bg-secondary py-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
            <div className="flex flex-col items-center md:flex-row justify-center">
              <h3 className="text-primary text-2xl font-bold md:text-left text-center block md:pb-0 pb-5">
                {t("banner.para5")}
              </h3>
              <FlipCountdown
                endAt={"2024-03-31 12:00:00"}
                size="small"
                theme="dark"
                titlePosition="bottom"
                hideYear={true}
                monthTitle={t("banner.months")}
                dayTitle={t("banner.days")}
                hourTitle={t("banner.hours")}
                minuteTitle={t("banner.minutes")}
                secondTitle={t("banner.seconds")}
                endAtZero
              />
            </div>
          </div>
        </div>
      </div>
      </LocationContextProvider>
    </>
  );
};

export default TradeWinBanner;
