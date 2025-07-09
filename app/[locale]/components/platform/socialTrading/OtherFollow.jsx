import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';



const OtherFollow = () => {
  const t = useTranslations("prime-tech.socialTranding.otherFollow")
  const listItems = [
    { id: 1, text: t('list.one')},
    { id: 2, text: t('list.two')},
    { id: 3, text: t('list.three')},
    { id: 4, text: t('list.four')},
  ];
  return (
    <section className='pt-8 md:pt:10 2xl:pt-8 pb-10 md:pb-10'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
          <div className='hidden md:block relative w-full h-64 md:h-[400px]'>
            <Image
              src="/copy-master.webp"
              fill
              alt="Social Trading"
            />
          </div>
          <div className='content text-left md:max-w-lg'>
            <h3 className='HeadingH2 ltr:text-left rtl:text-right font-semibold'>{t("heading")}</h3>
            <p className='text ltr:text-left rtl:text-right'>
            {t("paragraph")}
            </p>
            <ul className='mt-5 space-y-3'>
              {listItems.map(item => (
                <li key={item.id} className='border-b py-2 font-medium'>{item.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtherFollow;
