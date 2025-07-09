import { useTranslations } from "next-intl";
import { BsAward, BsFillPersonLinesFill  } from "react-icons/bs";
import { TbSettingsPin } from "react-icons/tb";
import { MdOutlineVideoSettings } from "react-icons/md";
import { FaUsersCog, FaUserLock  } from "react-icons/fa";






export function BackOfCard({ title, icon, paragraph }) {
  return (
    <div className="flip-card  border-primary  h-72">
      <div className="flip-card-inner ">
        <div className="flip-card-front bg-white border border-secondary border-opacity-25 p-6">
          <div className="text-primary flex flex-col h-full justify-center items-center text-7xl">
            {icon}
            <h1 className="text-secondary text-base xl:text-lg 3xl:text-xl my-4">{title}</h1>
           
          </div>
        </div>
        <div className="flip-card-back p-6 bg-white">
          <p className="text-primary flex flex-col h-full justify-center items-center text-sm">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
}
export default function WhyVPSHosting() {
  const t = useTranslations("prime-tech");
  const productData = [
    {
      icon: <BsAward />,
      title: t("vpsHosting.whyVpsHosting.cards.cardOneTitle"),
      paragraph: t("vpsHosting.whyVpsHosting.cards.cardOnePara"),
      link: "",
    },
    {
      icon: <TbSettingsPin />,
      title: t("vpsHosting.whyVpsHosting.cards.cardTwoTitle"),
      paragraph: t("vpsHosting.whyVpsHosting.cards.cardTwoPara"),
      link: "",
    },
    {
      icon: <MdOutlineVideoSettings />,
      title: t("vpsHosting.whyVpsHosting.cards.cardThreeTitle"),
      paragraph: t("vpsHosting.whyVpsHosting.cards.cardThreePara"),
      link: "",
    },
    {
      icon: <FaUsersCog />,
      title: t("vpsHosting.whyVpsHosting.cards.cardFourTitle"),
      paragraph: t("vpsHosting.whyVpsHosting.cards.cardFourPara"),
      link: "",
    },
    {
      icon: <FaUserLock />,
      title: t("vpsHosting.whyVpsHosting.cards.cardFiveTitle"),
      paragraph: t("vpsHosting.whyVpsHosting.cards.cardFivePara"),
      link: "",
    },
    {
      icon: <BsFillPersonLinesFill />,
      title: t("vpsHosting.whyVpsHosting.cards.cardSixTitle"),
      paragraph: t("vpsHosting.whyVpsHosting.cards.cardSixPara"), 
      link: "",
    },
  ];
  return (
    <section className="bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90% md:py-16 3xl:py-28 py-8">
    <div className="container">
      <div className="text-center">
      <h2 className="HeadingH2 mb-8 bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text text-center">
        {t("vpsHosting.whyVpsHosting.title")}
      </h2>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productData?.map((item) => (
          <BackOfCard
            title={item?.title}
            icon={item?.icon}
            paragraph={item?.paragraph}
          />
        ))}
      </div>
    </div>
    </section>
  );
}
