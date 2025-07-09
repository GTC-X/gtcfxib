import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import Aos from "aos";
import { HiOutlineUsers } from "react-icons/hi2";
import { CiPalette } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrUserExpert } from "react-icons/gr";


const FreshPress = () => {
  const t = useTranslations("about.about-gtc-group");
  useEffect(() => {
    Aos.init({
      disable: "mobile",
      once: true, // This ensures the animation only happens once
    });
  }, []);
  return (
    <>
      <section className="content">
        <div className="container md:pt-16 pt-8 relative z-30">
          <div className="content-about text-accent text-base">
            <div className="flex flex-row justify-start items-center gap-4 mb-4">
            <p className="text-secondary text-2xl md:text-4xl"><HiOutlineUsers /></p>
            <h2 className="HeadingH2 text-left mb-0 font-medium">
              {t("heading1")}
            </h2>
            </div>
           
            <p className="py-1">{t("desc1_1")}</p>
            <p className="py-1">{t("desc1_2")}</p>
            
          </div>
          <div className="content-about text-accent text-base pt-8">
          <div className="flex flex-row justify-start items-center gap-4 mb-4">
            <p className="text-primary text-2xl md:text-4xl"><GrUserExpert /></p>
            <h2 className="HeadingH2 text-secondary text-left mb-0 font-medium">
              {t("heading2")}
            </h2>
            </div>
            <p className="py-1">{t("desc2_1")}</p>
            <p className="pt-1">{t("desc2_2")}</p> 
          </div>
          <div className="content-about text-accent text-base pt-8">
          <div className="flex flex-row justify-start items-center gap-4 mb-4">
            <p className="text-secondary text-2xl md:text-4xl"><CiPalette /></p>
            <h2 className="HeadingH2 text-left mb-0 font-medium">
              {t("heading3")}
            </h2>
            </div>
            <p className="py-1">{t("desc3")}</p>
          </div>
          <div className="content-about text-accent text-base  pt-8">
          <div className="flex flex-row justify-start items-center gap-4 mb-4">
            <p className="text-primary text-2xl md:text-4xl"><VscWorkspaceTrusted /></p>
            <h2 className="HeadingH2 text-secondary text-left mb-0 font-medium">
              {t("heading4")}
            </h2>
            </div>
            <p className="py-1">{t("desc4")}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreshPress;
