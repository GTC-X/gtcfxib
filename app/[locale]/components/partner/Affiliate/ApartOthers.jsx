import React from "react";
import { useTranslations } from "next-intl";
import { FaCaretRight } from "react-icons/fa";
import Image from "next/image";

const ApartOthers = () => {
  const t = useTranslations("partner");
  const listItems = [
    {
      text: t("affiliateProgram.content.ApartOthers.one"),
    },
    {
      text: t("affiliateProgram.content.ApartOthers.two"),
    },
    {
      text: t("affiliateProgram.content.ApartOthers.three"),
    },
    {
      text: t("affiliateProgram.content.ApartOthers.four"),
    },
    {
      text: t("affiliateProgram.content.ApartOthers.five"),
    },
  ];
  return (
    <div className="container flex flex-col-reverse md:flex-row items-center justify-around py-12 md:gap-0 gap-8">
      <div className="md:basis-1/2 flex flex-col gap-5">
        <h2 className="HeadingH2 ltr:text-left rtl:text-right">
          {t("affiliateProgram.content.ApartOthers.heading")}
        </h2>
        <ul className="flex flex-col gap-3 text ltr:text-left rtl:text-right">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="inline-block text-secondary text-3xl">
                <FaCaretRight />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:basis-1/2 relative w-full h-56 md:h-[400px]">
        <Image
          src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/AF/Af2.webp"
          alt="CPA"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ApartOthers;
