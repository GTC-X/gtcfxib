"use client";
import React from "react";
import Hero from "../components/event/seminar/Hero";
import WhoAttend from "../components/event/seminar/Attend";
import SessionTheme from "../components/event/seminar/SessionTheme";
import PartnerShip from "../components/event/seminar/Partnership";
import MeetExport from "../components/event/seminar/Export";
import HowToAttendEvent from "../components/event/seminar/HowAttendEvent";
import Banner from "../components/event/seminar/Banner";
import AboutGTCFX from "../components/event/seminar/AboutGTCFX";
import Registration from "../components/event/seminar/Registration";
import { useEffect } from "react";
import Aos from "aos";

const SeminarPage = () => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <>
      <Hero />
      <WhoAttend />
      <Registration />
      {/* <SessionTheme /> */}
      <div data-aos="fade-up" data-aos-duration="1500">
        <PartnerShip />
        <MeetExport />
      </div>
      <HowToAttendEvent />
      <div>
        <Banner />
        <div className="bg-gradient-to-b from-gray-200 via-slate-50 to-white">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-2xl lg:text-[2.5rem] font-[400] 2xl:text-[30px] 3xl:text-[35px] capitalize leading-normal xl:leading-[3rem] 3xl:leading-[4rem] mb-5">About GTCFX</h2>
        </div>
          <AboutGTCFX />
        </div>
      </div>
    </>
  );
};

export default SeminarPage;
