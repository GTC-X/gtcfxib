import { useTranslations } from 'next-intl';
import React from 'react';
import { usePathname } from 'next/navigation';

const AccountBox = ({ icon, title, subtitle }) => {
 const path= usePathname();
 const isAr = path.includes('/ar');
  return(
  <div className={`flex flex-col justify-center items-center hover:bg-white hover:shadow-2xl border py-6 ${isAr ? 'border-r-primary last:border-l-0 border-r-transparent':'border-r-white last:border-r-0 border-l-transparent'}`}>
    <img className="w-[30%] md:w-[15%] text-red" src={icon} alt="icon" />
    <p className={` text-primary font-semibold text-center pt-3 ${isAr ? 'md:text-base text-sm':'md:text-[1.2em] text-sm'}`}>{title}</p>
    <p className="text-primary md:text-[1.2em] text-[0.8em] leading-tight text-center pt-2">{subtitle}</p>
  </div>
);
}

const DemoAccountBoxes = () => {
  const t = useTranslations("accounts")
    const boxData = [
        {
          icon: '/demo-icon-1.webp',
          title: t("demoAccount.demoBoxes.one.title"),
          subtitle: t("demoAccount.demoBoxes.one.subtitle"),
        },
        {
          icon: '/demo-icon-2.webp',
          title: t("demoAccount.demoBoxes.two.title"),
          subtitle: t("demoAccount.demoBoxes.two.subtitle"),
        },
        {
          icon: '/demo-icon-3.webp',
          title: t("demoAccount.demoBoxes.three.title"),
          subtitle: t("demoAccount.demoBoxes.three.subtitle"),
        },
      ];
  return (
    <div className="detailboxes py-10 md:py-14 xl:py-16 3xl:py-20 5xl:py-28">
      <div className="container bg-gray-100 rounded-[15px] grid grid-cols-3 shadow-lg">
        {boxData.map((box, index) => (
          <AccountBox key={index} {...box} />
        ))}
      </div>
    </div>
  );
};

export default DemoAccountBoxes; 
