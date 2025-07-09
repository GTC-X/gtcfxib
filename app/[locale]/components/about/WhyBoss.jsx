import React from 'react'
import { useTranslations } from "next-intl";
import { GrAchievement } from "react-icons/gr";
import { GrAction } from "react-icons/gr";

import { FaHandHoldingHand } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";

const WhyBoss = () => {

    const t = useTranslations("about.why-gtc-group");

      const boxContents = [
        {
          icon: <GrAchievement />,
          title: t("note_title1"),
          description: t("note_desc1"),
          number: 1,
        },
        {
          icon: <GrAction />,
          title: t("note_title2"),
          description: t("note_desc2"),
          number: 2,
        },
        {
          icon: <FaHandHoldingHand />,
          title: t("note_title3"),
          description: t("note_desc3"),
          number: 3,
        },
        {
          icon: <GrServices />,
          title: t("note_title4"),
          description: t("note_desc4"),
          number: 4,
        },
      ];
  return (
    <>
          <section className="box-why relative z-30 my-10 pb-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boxContents.map((box, index) => (
              <div
                key={index}
                className="box-setting border border-gray-300 p-4 bg-opacity-40 bg-[#ECF3FD]"
              >
                <div className="flex flex-row items-center justify-between border-b border-gray-300 pb-5 mb-5">
                  <div className="flex flex-row items-center justify-start gap-4">
                    <p className="text-secondary text-3xl">{box.icon}</p>
                    <h3 className="text-xl md:text-lg text-primary uppercase font-medium">
                      {box.title}
                    </h3>
                  </div>
                  <h2 className="text-3xl text-secondary">{box.number}</h2>
                </div>
                <p className="text ltr:text-left rtl:text-right">{box.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyBoss