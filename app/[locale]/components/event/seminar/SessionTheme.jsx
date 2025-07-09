"use client";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { BiCheck } from "react-icons/bi";
import { useEffect } from "react";
import Aos from "aos";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SessionTheme() {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  const t = useTranslations("event");
  let [categories] = useState({
    MT4: [
      {
        id: 1,
        sideImage: "/event/whoWe-1.webp",
        logo: "/event/whoWe-1.webp",
        contentLeft: {
          option1: t("seminarPage.sessionTheme.WhoWeAre.point1"),
          option2: t("seminarPage.sessionTheme.WhoWeAre.point2"),
          option3: t("seminarPage.sessionTheme.WhoWeAre.point3"),
          option4: t("seminarPage.sessionTheme.WhoWeAre.point4"),
          option5: t("seminarPage.sessionTheme.WhoWeAre.point5"),
        },
      },
    ],
    MT5: [
      {
        id: 2,
        sideImage: "/event/second-1.webp",
        logo: "/nt5.webp",
        contentLeft: {
          option1: t("seminarPage.sessionTheme.whatWeOffer.point1"),
          option2: t("seminarPage.sessionTheme.whatWeOffer.point2"),
          option3: t("seminarPage.sessionTheme.whatWeOffer.point3"),
          option4: t("seminarPage.sessionTheme.whatWeOffer.point4"),
          option5: t("seminarPage.sessionTheme.whatWeOffer.point5"),
        },
      },
    ],
    cTrader: [
      {
        id: 3,
        sideImage: "/event/whyChooose-2.webp",
        logo: "/ctrader-logo.webp",
        contentLeft: {
          option1: t("seminarPage.sessionTheme.WhyChoose.point1"),
          option2: t("seminarPage.sessionTheme.WhyChoose.point2"),
          option3: t("seminarPage.sessionTheme.WhyChoose.point3"),
          option4: t("seminarPage.sessionTheme.WhyChoose.point4"),
          option5: t("seminarPage.sessionTheme.WhyChoose.point5"),
        },
      },
    ],
  });

  return (
    <div
      className="max-w-6xl mx-auto px-2 py-12 sm:px-0"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h2 className="mainHeading mb-6">Session Themes</h2>

      <Tab.Group>
        <Tab.List className="flex bg-white">
          {Object.keys(categories).map((category, index) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  `w-full py-2 md:py-3 text-lg md:text-xl ${
                    index == 0 ? "rounded-l-[25px]" : ""
                  } ${
                    index == 2 ? "rounded-r-[25px]" : ""
                  } font-medium leading-5 border border-gtcPrimary`,
                  "ring-white ring-opacity-0 ring-offset-0 ",
                  selected
                    ? " bg-primary text-secondary border border-primary"
                    : " hover:bg-whitetext-primary"
                )
              }
            >
              {category == "MT4"
                ? "Who We Are?"
                : categories == "MT5"
                ? "What We Offer?"
                : "Why Choose GTCFX?"}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-8">
          {Object.keys(categories).map((category, idx) => (
            <Tab.Panel
              key={category}
              className="rounded-xl bg-white p-3 ring-white"
            >
              {categories[category].map((platform) => (
                <div
                  key={platform.id}
                  className="flex flex-wrap justify-center text-left items-center"
                >
                  <div className="basis-full md:basis-5/12">
                    <div className="relative h-64">
                      <Image
                        src={platform.sideImage}
                        fill
                        alt={category}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="basis-full md:basis-5/12">
                    <ul>
                      {Object.values(platform.contentLeft).map((content, i) => (
                        <li
                          key={i}
                          className="relative py-1 flex justify-start items-start gap-2"
                        >
                          <BiCheck size={18} />
                          <h3 className="text-base leading-5">{content}</h3>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
