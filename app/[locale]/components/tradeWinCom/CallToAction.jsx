"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../common/Button";

const CallToAction = () => {
  const t = useTranslations("compaign.tradeWin.CallToAction"); 
  const path= usePathname();
  const isAr = path.includes("/ar-AE");
  const isCh = path.includes("/zh-hans");

  let pdfpath;

  if (isAr) {
      pdfpath= "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/trade-to-win-ar.pdf";
  } else if (isCh) {
       pdfpath= "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Trade-to-Win-chinese.pdf"
  } else {
      pdfpath= "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Trade-to-Win.pdf"
  }
  return (
    <section className="py-12">
      <h1 className={`text-center text-primary font-[400] text-[1.3rem] mb-6 md:mb-5 ${isAr ? ' md:text-[1.2rem]':' md:text-[2rem]'} `}>
        {t("para1")}
        <Link href={pdfpath} target="_blank" className="text-secondary font-[800] mx-1 ">{t("para2")}</Link>
        {t("para3")}
      </h1>
      <div className="bg-gradient-to-b from-[#366392] via-[#102d49] to-[#09223a] rounded-xl px-5 py-4 max-w-7xl flex flex-col lg:flex-row justify-center md:gap-20 items-center mt-0 lg:mt-5 md:mx-auto mx-3">
        <p className={`text-white uppercase text-[1.3rem] font-black mb-5 lg:mb-0 md:py-4 leading-10  text-center ${isAr ? 'md:text-[1.2rem]':' md:text-[2.5rem]'}`}>
          {t("para4")}{" "}
          <span className="text-secondary font-semibold">{t("para5")}</span>{" "}
          {t("para6")}{" "}
        </p>
        <Button />
      </div>
    </section>
  );
};

export default CallToAction;
