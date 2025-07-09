'use client'
import { useTranslations } from "next-intl";
import Image from "next/image";

const LiquidityOffer = () => {
  const t=useTranslations("lp.offers")

  return (
    <section className="md:py-16 py-8">
      <div
          className="absolute inset-0 z-10 bg-cover md:bg-cover 2xl:bg-contain bg-center opacity-100 top-[100%] md:top-[100%] 3xl:top-[60%] md:h-[800px] 2xl:h[300px] bg-no-repeat"
          style={{ backgroundImage: `url('/202.webp')` }}
        />
      <div className="container content-side z-20 relative">
          <div className="text-center">
            <h2 className="HeadingH2 2xl:text-4xl w-72 md:w-full font-[500] bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-center">
            {t("heading")}
            </h2>
            <p className='text text-primary pb-5'>{t("subHeading")}</p>
          </div>
          <div className="relative w-full h-[250px] md:h-[400px]">
              <Image src='/sdsf.webp' fill className="object-contain" alt="" />
          </div>
    
          </div>
    </section>
  );
};

export default LiquidityOffer;
