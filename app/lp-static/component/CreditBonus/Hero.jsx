"use client";
import VPSPakFrom from "../common/VPSPakFrom";
import LocationContextProvider from "@/context/location-context";

const Hero = ({ 
  specialOfferText, 
  mainTitle, 
  offerValidity, 
  offerNote, 
}) => {
  return (
    <>
    <LocationContextProvider>
      <section className="bg-gradient-to-b from-[#fff] via-[#fff] to-[#f7f7f7] border-y border-gray-200 relative py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="content-side text-center md:text-left basis-full md:basis-9/12">
              <p className="text-sm md:text-[28px] pt-5 font-medium text-secondary pb-2">
                {specialOfferText}
              </p>
              <h1 className="animate-text bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent text-2xl md:text-5xl xl:text-4xl 2xl:text-[60px] capitalize font-bold mb-0 md:mb-0 line-height-setting w-72 mx-auto md:ml-0 md:w-[580px] py-2">
                {mainTitle}
              </h1>
              <h4 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-lg xl:text-2xl font-[500] w-96 md:w-full">
                {offerValidity}
              </h4>
              <p className="text-primary text-lg py-2 font-medium">
                {offerNote}
              </p>
            </div>
            <div className="iframe-code w-full basis-full md:basis-3/12 shadow-2xl">
            <VPSPakFrom />
            </div>
          </div>
        </div>  
      </section>
      </LocationContextProvider>
    </>
  );
};

export default Hero;
