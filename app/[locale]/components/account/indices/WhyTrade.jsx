import { useLocale, useTranslations } from "next-intl";

const WhyTradeIndices = () => {
  const t = useTranslations("Instruments");
  const locale = useLocale();

  return (
    <div className="py-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl text-primary pb-6">
          {t("indices.whyTradeTitleNormal")}<strong>{t("indices.whyTradeTitleBold")}</strong>
        </h2>
        <div className="relative">
          <img
            className="w-full"
            src={locale=='en'?"/why-trade.png":"/why-trade-fr.webp"}
            fill={true}
            alt="why trade"
          />
        </div>
      </div>
    </div>
  );
};
export default WhyTradeIndices;
