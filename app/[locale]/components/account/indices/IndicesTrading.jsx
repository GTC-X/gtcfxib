import { useTranslations } from "next-intl";
import { BiTime } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";
import { FaClockRotateLeft, FaHandHoldingDollar } from "react-icons/fa6";

const TitleDetail = ({ title, descreption, icon }) => (
  <div className="reason-content flex flex-col md:items-start items-center justify-start md:flex-row p-3 ">
    <div className=" bg-secondary p-3 h-fit rounded-full">{icon}</div>
    <div className="md:pl-3 md:text-left">
      <h2 className="font-semibold text-xl text-primary py-3">{title} </h2>
      <p className="text-base text-primary font-normal">{descreption}</p>
    </div>
  </div>
);
const IndicesTrading = () => {
  const t = useTranslations("Instruments");
  const welcomeMessage = t("indices.treading.title")
    .replace(/\[b\]/g, "<b>")
    .replace(/\[\/b\]/g, "</b>");

  return (
    <div className="container">
      <div className="text-center mb-8">
        <h2
          className="text-3xl text-primary pb-6"
          dangerouslySetInnerHTML={{ __html: welcomeMessage }}
        ></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TitleDetail
            title={t("indices.treading.heading1.title")}
            descreption={t("indices.treading.heading1.para")}
            icon={<FaHandHoldingDollar className="text-primary" size={26} />}
          />
          <TitleDetail
            title={t("indices.treading.heading2.title")}
            descreption={t("indices.treading.heading2.para")}
            icon={<FaClockRotateLeft className="text-primary" size={26} />}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TitleDetail
            title={t("indices.treading.heading3.title")}
            descreption={t("indices.treading.heading3.para")}
            icon={<FaDollarSign className="text-primary" size={26} />}
          />
          <TitleDetail
            title={t("indices.treading.heading4.title")}
            descreption={t("indices.treading.heading4.para")}
            icon={<BiTime className="text-primary" size={26} />}
          />
        </div>
      </div>
    </div>
  );
};
export default IndicesTrading;
