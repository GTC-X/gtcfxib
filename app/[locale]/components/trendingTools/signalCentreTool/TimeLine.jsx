"use client";

import Aos from "aos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";

const TimeLineLeftImage = ({ title, para, image }) => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <div class="relative wrap overflow-hidden h-full">
      <div
        class="border-2-2 absolute hidden md:block  border-secondary h-full border"
        style={{ left: "50%" }}
      ></div>
      <div class="mb-8 flex md:flex-row flex-col justify-between items-center w-full right-timeline">
        <div class="order-1 md:w-[48%] w-full">
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
        <div class="z-20 hidden md:flex items-center order-1 ml-3">
          <VscTriangleRight fontSize={32} color="#b68756" />
        </div>
        <div
          class="order-1 md:w-[48%]  w-full px-1 py-1"
        >
          <h2 className="HeadingH2 ltr:text-left rtl:text-right text-secondary">
            {title}
          </h2>
          <p className="text  ltr:text-left rtl:text-right text-white">{para}</p>
        </div>
      </div>
    </div>
  );
};

const TimeLineRightImage = ({ title, para, image }) => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <div class="relative wrap overflow-hidden h-full">
      <div
        class="border-2-2 absolute hidden md:block  border-secondary h-full border"
        style={{ left: "50%" }}
      ></div>
      <div class="mb-8 flex md:flex-row flex-col justify-between items-center w-full right-timeline">
        <div
          class="order-1 md:w-[48%] w-full px-1 py-1"
        >
          <h2 className="HeadingH2 ltr:text-left rtl:text-right text-secondary">
            {title}
          </h2>
          <p className="text ltr:text-left rtl:text-right text-white">{para}</p>
        </div>
        <div class="z-20 hidden md:flex items-center order-1 mr-3">
          <VscTriangleLeft fontSize={32} color="#b68756" />
        </div>
        <div class="order-1 md:w-[48%] w-full">
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
    <div className="bg-primary pt-12">
      <div className="w-full pt-12 container">
        <TimeLineLeftImage
          title={t("socialCentreTool.tradingIdea.timeLine.step1.title")}
          para={t("socialCentreTool.tradingIdea.timeLine.step1.para")}
          image="/trading-tools/timeline1.webp"
        />
        <TimeLineRightImage
          title={t("socialCentreTool.tradingIdea.timeLine.step2.title")}
          para={t("socialCentreTool.tradingIdea.timeLine.step2.para")}
          image="/trading-tools/timeline2.webp"
        />
        <TimeLineLeftImage
          title={t("socialCentreTool.tradingIdea.timeLine.step3.title")}
          para={t("socialCentreTool.tradingIdea.timeLine.step3.para")}
          image="/trading-tools/timeline3.webp"
        />
        <TimeLineRightImage
          title={t("socialCentreTool.tradingIdea.timeLine.step4.title")}
          para={t("socialCentreTool.tradingIdea.timeLine.step4.para")}
          image="/trading-tools/timeline4.webp"
        />
        <TimeLineLeftImage
          title={t("socialCentreTool.tradingIdea.timeLine.step5.title")}
          para={t("socialCentreTool.tradingIdea.timeLine.step5.para")}
          image="/trading-tools/timeline5.webp"
        />
      </div>
      <div className=" relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          height="60px"
          width="100%"
        >
          <path
            class="elementor-shape-fill"
            fill="#b68756"
            d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"
          ></path>
        </svg>
        <div
          className=" absolute top-0 w-full h-20"
        >
          <Image
            src="/arow-vps.png"
            fill
            alt="Social Trading"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
