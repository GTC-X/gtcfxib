"use client";

import Aos from "aos";
import { useEffect } from "react";
import { BiTime } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";

export default function TimeBanner() {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <div id="register" className="w-full" data-aos="fade-up" data-aos-duration="1500">
      <div className="bg-secondary container grid grid-col-2 md:grid-cols-4">
        <div className="flex flex-col items-center p-6">
          <FaCalendarAlt size={30} />
          <h2 className="text-primary text-center text-xl font-semibold md:text-2xl">
            Day
          </h2>
        </div>
        <div className="p-6">
          <h2 className="text-primary border-l-primary border-l-2 text-center text-xl md:text-2xl">
            Every <b>Monday</b> <br />& <b>Thursday</b>
          </h2>
        </div>
        <div className=" rounded-l-[25px] shadow-lg bg-primary p-6 flex flex-col items-center">
          <BiTime size={30} color="#facf48" />
          <h2 className="text-secondary text-center text-xl font-semibold md:text-2xl">
            Time
          </h2>
        </div>
        <div className=" p-6 bg-primary">
          <h2 className="text-secondary text-center border-l-secondary border-l-2 text-xl md:text-2xl">
            <b>04:00 PM - 04:30 PM</b>
            <br />
            (GMT +4)
          </h2>
        </div>
      </div>

      <div className="container pt-10">
        <h2 className="text-primary  font-semibold text-xl md:text-2xl pb-4">
          Thursday Webinar | 7th December 2023
        </h2>
        <ul className="list-disc  ml-5">
          <li>
            <p className="text-primary text-base pb-2">
              Introducing Moving Averages and why they are such a popular tool
              in Technical Analysis
            </p>
          </li>
          <li>
            <p className="text-primary text-base pb-2">
              Taking a look at a number of different assets and what Moving
              Averages suggest about their next possible direction
            </p>
          </li>
          <li>
            <p className="text-primary text-base pb-2">
              Recapping what we learned in our previous chapter on Technical
              Analysis, focusing on the RSI indicator
            </p>
          </li>
          <li>
            <p className="text-primary text-base pb-6">
              A quick overview using other Technical Analysis tools, aiming to
              suggest the potential direction in which global assets might
              fluctuate next
            </p>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 700 10"
          preserveAspectRatio="none"
          className="rotate-180	"
        >
          <path
            className="elementor-shape-fill "
            d="M350,10L340,0h20L350,10z"
            fill="rgb(236, 236, 236)"
          ></path>
        </svg>
      </div>
    </div>
  );
}
