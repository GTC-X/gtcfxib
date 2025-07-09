import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const HowTradeWork = () => {
  const t = useTranslations("compaign.tradeWin.wavessec");
  const path = usePathname();
  const isCh = path.includes("/zh-hans");

  const pdfpath = isCh
    ? "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/promotion/option2-ch.webp"
    : "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/promotion/option2.webp";

  const boxes = [
    {
      imageURL: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/promotion/option1.webp",
      title: t("cards.card1.title"),
      subTitle: t("cards.card1.name"),
      desc: t("cards.card1.deposit"),
      trade: t("cards.card1.trade")
    },
    {
      imageURL: pdfpath,
      title: t("cards.card2.title"),
      subTitle: t("cards.card2.name"),
      desc: t("cards.card2.deposit"),
      trade: t("cards.card2.trade")
    },
    {
      imageURL: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/promotion/option3.webp",
      title: t("cards.card3.title"),
      subTitle: t("cards.card3.name"),
      desc: t("cards.card3.deposit"),
      trade: t("cards.card3.trade")
    }
  ];

  return (
    <section className="py-12 md:py-16 xl:py-20 3xl:py-24 relative">
      <div className="relative z-30 px-6">
        <h1 className="HeadingH2 font-semibold mb-0">{t("title")}</h1>
        <p className="text md:text-xl">{t("subTitle")}</p>
      </div>
      <div className="content-part">
        <div className="absolute top-0 left-0 w-full h-[1080px] opacity-10 bg-center bg-[url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/promotion/bg-box.webp')]"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 place-content-center gap-8 pt-12 container relative z-30">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 py-2 bg-[#eef0f1] rounded-3xl shadow-xl shadow-gray-400 relative"
            >
              <Image
                src={box.imageURL}
                width={600}
                height={300}
                className="my-10"
                alt="product_image"
              />
              <h2 className="md:text-md text-xl text-secondary font-semibold py-12">{box.title}</h2>
              <h3 className="text-primary font-semibold text-md md:text-lg pb-6 text-center">
                {box.subTitle}
              </h3>
              <p className="text-primary text-sm md:text-lg text-center pb-16">
                {box.desc} | {box.trade}
              </p>
              <div className="border-b-4 border-b-black absolute h-2 w-[80%] bottom-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowTradeWork;
