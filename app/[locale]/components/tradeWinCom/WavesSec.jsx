import Image from "next/image";
import React, { useState } from "react";
import HowTradeWork from "./HowTradeWork";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const BoxContent = ({ product, isActive, onMouseEnter, onMouseLeave }) => {
  const t = useTranslations("compaign.tradeWin.wavessec");
  const path = usePathname();
  const isAr = path.includes("/ar");
  return <div
    className={`box-content p-4 w-4/5 md:w-full relative cursor-pointer transition-transform duration-300 ${isActive ? 'opacity-100 scale-110 z-10 md:max-w-lg ease-in-out h-72' : 'opacity-80 scale-110 md:max-w-[80px] ease-in-out h-24 md:h-72'}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {/* Heading */}
    <div className={`absolute inset-0 border border-gray-100 border-opacity-10 rounded-md flex justify-center items-center mb-5 md:mb-0 md:max-w-[80px] ${isActive ? 'hidden ' : 'block'} transition-opacity duration-500 ease-in-out`}>
      <h4 className="text-secondary tracking-widest text-xl md:rotate-[-90deg] whitespace-nowrap">{product.name}</h4>
    </div>

    {/* Description Box */}
    <div className={`opacity-0 ${isActive ? 'opacity-100  bg-gradient-to-r from-[#335580] from-10% via-[#152c49] via-50% to-[#0c1c3d] to-70% p-5 md:max-w-lg border-secondary border-opacity-70 shadow-2xl' : ' max-w-0'} border  rounded-md absolute inset-0 flex flex-col md:flex-row items-center justify-center transition-all duration-500 ease-in-out`}>
      <div className={`${isAr ? `content pr-5` :'content pl-5'}`}>
        <h2 className="text-2xl text-secondary font-bold mb-5 w-52">{product.name}</h2>
        <ul className="text-white list-disc text-base pl-3 leading-6">
          <li>{t("trading-lots")} {product.totalSlots}</li>
          <li>{t("min-deposit")}{product.depositAmount}</li>
        </ul>
      </div>
      <div className="relative h-80 w-full">
        <Image src={product.img} alt="" fill className="object-contain" />
      </div>
    </div>
  </div>
}
const WavesSec = () => {
  const t = useTranslations("compaign.tradeWin.wavessec");
  const productData = [
    {
      id: 1,
      name: t("cards.card1.name"),
      totalSlots: 75,
      depositAmount: t("cards.card1.amount"),
      img: '/compaign/tradeWin/airpods.webp'
    },
    {
      id: 2,
      name: t("cards.card2.name"),
      totalSlots: 150,
      depositAmount: t("cards.card2.amount"),
      img: '/compaign/tradeWin/watch.webp'
    },
    {
      id: 3,
      name: t("cards.card3.name"),
      totalSlots: 225,
      depositAmount: t("cards.card3.amount"),
      img: '/compaign/tradeWin/ipad.webp'
    },
    {
      id: 4,
      name: t("cards.card4.name"),
      totalSlots: 350,
      depositAmount: t("cards.card4.amount"),
      img: '/compaign/tradeWin/iphone.webp'
    },
    {
      id: 5,
      name: t("cards.card5.name"),
      totalSlots: 400,
      depositAmount: t("cards.card5.amount"),
      img: '/compaign/tradeWin/iphonemax.webp'
    },
    {
      id: 6,
      name: t("cards.card6.name"),
      totalSlots: 500,
      depositAmount: t("cards.card6.amount"),
      img: '/compaign/tradeWin/mac.webp'
    },
    // Add more products as needed
  ];
  const [activeProduct, setActiveProduct] = useState(productData[0].id);
 
  return (
    <>
      <div className="bg-gradient-to-l from-[#335580] via-[#152c49] to-[#0c1c3d] py-10">
        <div className="container mx-auto pb-10">
          <div className="content-inner">
            <h3 className="text-center text-white text-3xl font-bold mb-14">{t("title")}</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2">
              {productData.map((product) => (
                <BoxContent
                  key={product.id}
                  product={product}
                  isActive={activeProduct === product.id}
                  onMouseEnter={() => setActiveProduct(product.id)}
                  onMouseLeave={() => setActiveProduct(product.id)} // Optionally, remove active state on mouse leave
                />
              ))}
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default WavesSec;
