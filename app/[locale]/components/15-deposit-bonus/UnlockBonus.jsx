"use client";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const UnlockBonus = () => {
  const path= usePathname();
  const isAr = path.includes("/ar");
  const t = useTranslations("compaign.15-deposit-bonus.unlock_bonus");
  return (
    <section className="bg-gray-100 py-12">
      <div className="container max-w-5xl">
        <h1 className={`text-secondary font-[800] pb-6 text-center  text-[1.3rem] ${isAr ? 'md:text-[2rem]':'md:text-[2.5rem]'}`}>
          {t("title")}
        </h1>
        <p className={`text-center text-[1.3rem] font-[400] text-primary ${isAr ? 'md:text-[1.6rem]':'md:text-[1.8rem]'}`}>
          {t("para")}
        </p>
      </div>
    </section>
  );
};

export default UnlockBonus;
