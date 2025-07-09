import React from 'react';
import { MdOutlinePayments } from 'react-icons/md';
import { LuWallet2 } from 'react-icons/lu';
import { BsBank } from 'react-icons/bs';
import { useTranslations } from 'next-intl';

const PaymentOption = () => {
  const t = useTranslations("accounts.deposit.paymentMethod");
  const paymentMethods = [
    {
      icon: <MdOutlinePayments />,
      title: t("option1.title"),
      description: t("option1.des"),
    },
    {
      icon: <LuWallet2 />,
      title: t("option2.title"),
      description: t("option2.des"),
    },
    {
      icon: <BsBank />,
      title: t("option3.title"),
      description: t("option3.des"),
    },
  ];

  return (
    <div className="last-portion py-10 md:py-12 xl:py-16 2xl:py-20 3xl:py-24">
      <div className="container">
      <div className="top-content mb-10">
      <h2 className="HeadingH2  capitalize">{t("title")}</h2>
          <p className="text ">{t("sub-title")}</p>
        </div>
        <div className="content-part">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 md:justify-center">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex flex-col justify-center items-center gap-4 border rounded-lg p-10 bg-gradient-to-t from-[#24358b] via-[#242c75] to-[#141b43] text-white">
                <div className="text-center text-6xl">{method.icon}</div>
                <h3 className="HeadingH2 text-2xl text-secondary mb-0">{method.title}</h3>
                <p className="text text-white">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOption;
