import Image from "next/image";
import Separator from "@/app/[locale]/components/common/Separator";
import { useTranslations } from "next-intl";
const ForexTradingAdv = ({data, className }) => {
  const t=useTranslations("Instruments.forex")

  return (
    <section className={className}>
      <div className="container">
        <h2 className="HeadingH2 text-white mb-5">{t("advTitle")}</h2>
        <div className="grid gap-6 mt-5 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 lg:mt-5">
          {data.map(({ title, subtitle, image }) => (
            <div
              key={title}
              className="flex flex-row items-center lg:justify-center gap-6 p-[2px] transition-all bg-white border group text-white border-black/5 rounded-full hover:shadow-2xl hover:bg-secondary hover:text-primary"
            >
                <div className='flex justify-center'>
              <Image
                {...image}
                className="w-8 h-8 lg:h-10 lg:w-10 transition-all group-hover:brightness-0"
              />
                </div>
              <div className="flex hover:text-white flex-col text-sm lg:text-base text ltr:text-left rtl:text-right text-primary cursor-pointer group-hover:text-primary">
                <h4>{title}</h4>
                <h4>{subtitle}</h4>
              </div>
            </div>
          ))}
        </div>
   
      </div>
    </section>
  );
};

export default ForexTradingAdv;
