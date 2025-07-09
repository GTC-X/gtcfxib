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

export default function WebinarTopic() {
  const t = useTranslations("event");
  let [categories] = useState({
    MT4: [
      {
        id: 1,
        sideImage: "/event/Webinar-Page-09.webp",
        logo: "/event/Webinar-Page-09.webp",
        contentLeft: {
          option1:
            "Gain insights into the key themes impacting the global macro financial landscape and how they are influencing global markets during the trading week.",
        },
      },
    ],
    MT5: [
      {
        id: 2,
        sideImage: "/event/Webinar-Page-09.webp",
        logo: "/nt5.webp",
        contentLeft: {
          option1:
            "Explore key technical levels to monitor across different asset classes, and equip yourself with the knowledge to identify potential opportunities.",
        },
      },
    ],
  });

  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  return (
    <div
      className="max-w-6xl mx-auto px-2 py-12 sm:px-0"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h2 className="mainHeading mb-6">Webinar Topics</h2>

      <Tab.Group>
        <Tab.List className="flex">
          {Object.keys(categories).map((category, index) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  `w-full py-2 md:py-3 text-lg md:text-xl ${
                    index == 0 ? "rounded-l-[25px]" : ""
                  } ${
                    index == 1 ? "rounded-r-[25px]" : ""
                  } font-medium leading-5 border border-gtcPrimary`,
                  "ring-white ring-opacity-0 ring-offset-0 ",
                  selected
                    ? " bg-primary text-secondary border border-primary"
                    : " hover:bg-white text-primary"
                )
              }
            >
              {category == "MT4" ? "Market Fundamentals" : "Technical Analysis"}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-8">
          {Object.keys(categories).map((category, idx) => (
            <Tab.Panel key={category} className="rounded-xl p-3">
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
                          <h3 className="text-base leading-7">{content}</h3>
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
