"use client";

import { useTranslations } from "next-intl";
import ClientRegistrationForm from "../common/ClientRegistrationForm";
import LocationContextProvider from "@/context/location-context";
import VPSPakFrom from "../common/VPSPakFrom";
import LiveAccountButton from "../liveAccountButton";

const JashnAzadi = ({ title, subTitle, dateTime, finalTagline,validOff }) => {
  const t = useTranslations("compaign.100BonusPro.bannerText");

  return (
    <LocationContextProvider>
      <section className="bg-[#ECF3FD] border-y border-gray-200 relative py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="content-side text-center md:text-left basis-full md:basis-9/12">
              <p className="text-sm md:text-[28px] pt-5 font-medium text-secondary pb-2">
                {title || t("title")}
              </p>
              <h1 className="animate-text bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent text-2xl md:text-5xl xl:text-4xl 2xl:text-[55px] capitalize font-medium mb-0 md:mb-0 line-height-setting w-72 mx-auto md:ml-0 md:w-[530px] py-2">
              {subTitle || t("finalTagline")}
              </h1>
              <h4 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-lg xl:text-2xl font-[500] w-96 md:w-full">
              
              {dateTime || t("finalTagline")}
              </h4>
              <p className="text-primary text-lg pt-2 font-medium">
                {finalTagline || t("finalTagline")}
              </p>

              <p className="text-primary text-lg font-medium">
              {validOff || t("validOff")}
              </p>
              <p className="mt-10">
                <LiveAccountButton hoverStyle="text-white" />
              </p>
            </div>
            <VPSPakFrom/>
          </div>
        </div>
      </section>
    </LocationContextProvider>
  );
};

export default JashnAzadi