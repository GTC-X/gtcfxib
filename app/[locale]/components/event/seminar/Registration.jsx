"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import LocationContextProvider from "@/context/location-context";
import ClientRegistrationForm from "../../common/ClientRegistrationForm";
import VPSPakFrom from "../../common/VPSPakFrom";
import SimpleForm from "../../common/SimpleForm";

const Registration = ({ platform, date, time, note}) => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  return (
    <LocationContextProvider>
      <div id="register" className="bg-white py-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="content-section text-left gap-4 py-6 rounded-md">
              <div className="bg-gradient-to-t from-[#202d7bdb] via-[#050331] to-[#050331] rounded-t-lg p-5 flex justify-start md:justify-center items-center gap-5">
                <IoLocationSharp size={35} color="#fff" />
                <p className="text-white text-lg md:text-2xl font-[700]">{platform}</p>
              </div>
              <div className="border border-solid border-primary p-5 flex justify-start md:justify-center items-center gap-5">
                <FaCalendarAlt size={35} color="#2C6390" />
                <p className="text-primary text-lg md:text-2xl font-[700]">{date}</p>
              </div>
              <div className="border border-solid border-primary rounded-b-lg p-5 flex justify-start md:justify-center items-center gap-5">
                <MdWatchLater size={35} color="#2C6390" />
                <p className="text-primary text-lg md:text-2xl font-[700]">{time}</p>
              </div>
            </div>

            <VPSPakFrom />
          </div>

          <div className="md:w-1/3 mx-auto w-full mt-6 mb-4"></div>

          {note && (
            <p className="text-primary text-lg font-[700] text-center">
              {note}
            </p>
          )}
        </div>
      </div>
    </LocationContextProvider>
  );
};

export default Registration;
