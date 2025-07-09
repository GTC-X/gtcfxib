"use client";
import Aos from "aos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const TimeLineLeftImage = ({ icon, para, image, btnText, btnLink }) => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <div class="relative wrap overflow-hidden h-full pt-10 md:pt-0">
      <div class="mb-8 flex md:flex-row flex-col justify-between items-center w-full right-timeline">
        <div class="order-1 md:w-[50%] w-full">
          <div 
            className="relative flex justify-center"
          >
            <Image
              src={image}
              width={200}
              height={200}
              alt="GTC Hero"
              className="w-56 md:w-auto h-auto md:h-auto"
            />
          </div>
        </div>

        <div
          class="order-1 md:w-[50%]  w-full p-3"
        >
          <div className="relative w-full">
            <Image
              src={icon}
              alt={"title"}
              width={200}
              height={30}
              className="object-contain"
            />
          </div>
          <p className="text ltr:text-left rtl:text-right leading-7 py-4">
            {para}
          </p>
          <div>
            <Link
              href={btnLink}
              className="yellowButton hover:bg-primary hover:text-white text text-white"
            >
              {btnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeLineRightImage = ({ icon, para, image, btnText, btnLink }) => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <div class="relative wrap overflow-hidden h-full">
      <div class="mb-8 flex md:flex-row flex-col justify-between items-center w-full right-timeline">
        <div
          class="order-1 md:w-[50%] w-full p-3"
        >
          <div className="relative flex justify-end w-full">
            <Image
              src={icon}
              alt={"title"}
              width={200}
              height={30}
              className="object-contain"
            />
          </div>
          <p className="text ltr:text-left rtl:text-right leading-7 py-4">
            {para}
          </p>
          <div
            className="text-start"
          >
            <Link
              href={btnLink}
              className="yellowButton hover:bg-primary hover:text-white text text-white"
            >
              {btnText}
            </Link>
          </div>
        </div>

        <div class="order-1 md:w-[50%] w-full">
          <div
            className="relative flex justify-center"
          >
            <Image
              src={image}
              width={200}
              height={200}
              alt="GTC Hero"
              className="w-56 md:w-auto h-auto md:h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TimeLine() {
  const t = useTranslations("prime-tech");

  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  return (
   
      <div className="w-full md:pt-12 container">
        <TimeLineLeftImage
          icon="/trading-tools/toolstep1.png"
          para={t("technicalTool.timeline.para1")}
          image="/trading-tools/tool1.png"
          btnText={t("technicalTool.timeline.buttonText")} 
          btnLink="/autochartist"
        />
        <TimeLineRightImage
             icon="/trading-tools/toolstep3.png"
             para={t("technicalTool.timeline.para3")}
             image="/trading-tools/tool3.png"
             btnText={t("technicalTool.timeline.buttonText")}
             btnLink="/signal-centre-tool"
        />

      </div>
    
  );
}
