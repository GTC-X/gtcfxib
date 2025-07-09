import { useTranslations } from "next-intl";

export default function ElevateHosting() {
  const t = useTranslations("prime-tech");
  return (
    <div className="bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90%">
      <div className="w-full py-6 container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="pr-2">
            <h2 className="HeadingH2 text-white md:ltr:text-left md:rtl:text-right text-lg md:text-2xl">
              {t("vpsHosting.elevateHosting.title")}
            </h2>
            <p className="text text-white md:ltr:text-left md:rtl:text-right">
              {t("vpsHosting.elevateHosting.para")}
            </p>
          </div>

          <div className="text-center">
            <button className="bg-white text-primary px-5 py-3 hover:bg-secondary hover:text-white  whitespace-pre">
            {t("vpsHosting.elevateHosting.buttonText")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
