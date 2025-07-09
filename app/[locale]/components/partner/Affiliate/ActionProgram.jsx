import React from 'react';
import { FaCaretRight } from 'react-icons/fa';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const ActionProgram = () => {
  const t = useTranslations("partner");
  const listItems = [
    t("affiliateProgram.content.program.one"),

    t("affiliateProgram.content.program.three"),

    t("affiliateProgram.content.program.five"),
  ];

  return (
    <div className='container flex flex-col md:flex-row items-center justify-around pt-12 md:gap-0 gap-4'>
      <div className='md:basis-1/2 relative w-full h-64 md:h-[450px]'>
        <Image
          src='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/AF/Af1.webp'
          alt='CPA'
          fill
          className='object-contain'
        />
      </div>
      <div className='md:basis-1/2 flex flex-col gap-5'>
        <h2 className='HeadingH2 ltr:text-left rtl:text-right'>
          {t("affiliateProgram.costAction")}
        </h2>
        <ul className="flex flex-col gap-3 text ltr:text-left rtl:text-right">
          {listItems.map((item, index) => (
             <li key={index} className="flex items-center gap-2">
              <span className='inline-block text-secondary text-3xl'>
                <FaCaretRight />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className='flex flex-col md:flex-row justify-start items-center gap-4'>
          <Link
            href='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Digital-Affiliate-Agreement.pdf'
            target='_blank'
            className=' text-white  text py-2 px-4
                        bg-secondary  hover:bg-primary w-[220px] text-center md:m-0 mx-auto'
          >
            {t("affiliateProgram.content.program.button")}
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default ActionProgram;
