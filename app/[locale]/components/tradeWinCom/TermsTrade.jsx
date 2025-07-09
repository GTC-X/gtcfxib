import React from 'react';
import { useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';

const TermsTrade = () => {
  const t = useTranslations("compaign.tradeWin.terms");
  
  // Define terms dynamically and filter out empty terms
  const terms = [
    t("term1"),
    t("term2"),
    t("term3"),
    t("term4"),
    t("term5"),
    t("term6"),
    t("term7"),
    t("term8"),
    t("term9"),
    t("term10"),
    t("term11"),
    t("term12"),
    t("term13"),
  ].filter(term => term);

  const path = usePathname();
  const isAr = path.includes('/ar');

  return (
    <section className='pb-10'>
      <div className='container bg-secondary p-8 md:p-16 shadow-2xl'>
        <div className='content-terms text-white'>
          <h2 className='font-bold text-xl md:text-2xl pb-4 text-white uppercase'>{ t("title")}</h2>
          <div className='inner-content'>
            <ul className={`list-disc ${isAr ? 'md:mr-7' : 'md:ml-7'}`}>
              {terms.map((term, index) => (
                <li className='leading-7' key={index}>{term}</li>
              ))}
            </ul>
            <p className='text text-white ltr:text-left rtl:text-right pt-10'>{ t("note")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsTrade;
