import React from "react";
import LiveAccountButton from "../liveAccountButton";
import { useTranslations } from "next-intl";

const Promotion = () => {
  const t = useTranslations("compaign.tradeWin.how-it-works")

  // Define terms dynamically and filter out empty terms
  const terms = [
    t("step1"),

  ].filter(term => term);

  return (
    <section className="bg-primary py-12 relative z-30">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="content-inner text-white text-xl text-center md:ltr:text-left md:rtl:text-right">
              <p className="text-xl md:w-[500px] pb-2">{t("title")} </p>
              <div className='inner-content'>
            <ul>
              {terms.map((term, index) => (
                <li className='leading-7' key={index}>{term}</li>
              ))}
            </ul>
            
          </div>
          </div>
          <LiveAccountButton hoverStyle="hover:bg-white hover:text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Promotion;
