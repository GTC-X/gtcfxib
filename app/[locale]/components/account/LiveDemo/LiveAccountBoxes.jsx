import { useTranslations } from 'next-intl';
import React from 'react';
import { usePathname } from 'next/navigation';

const LiveAccountBox = ({ label, value }) => {
  const path = usePathname();
  const isAr = path.includes('/ar');
  return (
  <div className={`flex flex-col justify-center items-center border py-6 ${isAr ? 'border-r-primary last:border-l-0 border-r-transparent':'border-r-white last:border-r-0 border-l-transparent'}`}>
    <p className="text-[0.6em] md:text-[1.2em] text-primary text-center">{label}</p>
    <h1 className="text-primary text-[1.5em] md:text-[4em] font-semibold leading-tight">{value}</h1>
  </div>
);
  }

const LiveAccountBoxes = () => {
    const t = useTranslations("accounts");
    const boxData = [
        {
          label: t("liveAccount.liveBoxes.one.subtitle"),
          value: t("liveAccount.liveBoxes.one.title"),
        },
        {
            label: t("liveAccount.liveBoxes.two.subtitle"),
            value: t("liveAccount.liveBoxes.two.title"),
        },
        {
            label: t("liveAccount.liveBoxes.three.subtitle"),
            value: t("liveAccount.liveBoxes.three.title"),
        },
        {
            label: t("liveAccount.liveBoxes.four.subtitle"),
            value: t("liveAccount.liveBoxes.four.title"),
        },
      ];
  return (
    <section className="py-10">
      <div className="container bg-secondary rounded-[15px] grid grid-cols-4 shadow-lg">
        {boxData.map((box, index) => (
          <LiveAccountBox key={index} {...box} />
        ))}
      </div>
    </section>
  );
};

export default LiveAccountBoxes;
