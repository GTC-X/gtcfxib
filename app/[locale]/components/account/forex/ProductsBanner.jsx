import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LiveAccountButton from "../../liveAccountButton";

const ProductsBanner = ({ title, subtitle, image, className }) => {
  const t  = useTranslations('common');
  return (
    <section className={cn("", className)}>
      <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-3 lg:gap-5">
        <div className="md:basis-4/6 flex flex-col gap-7 text-lg lg:text-3xl justify-center text-center ltr:md:text-left rtl:md:text-right">
          <div className="flex flex-col gap-2">
            <h2 className="HeadingH2 ltr:text-left rtl:text-right">{title}</h2>
            <p className='text ltr:text-left rtl:text-right'>{subtitle}</p>
          </div>
          <div className="flex">
          <LiveAccountButton  hoverStyle="text-white bg-[#000]" />
          </div>
        </div>
        <div className="md:basis-2/6 relative w-full h-36 md:h-64">
        <Image
          src={"/account/forex/forex-banner.webp"}
          alt={"Forex Banner"}
          fill
          className={"object-contain"}
          {...image}
        />
        </div>
       
      </div>
    </section>
  );
};

export default ProductsBanner;
