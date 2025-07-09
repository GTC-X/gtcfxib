"use client";
import VPSPakFrom from "../common/VPSPakFrom";
import LocationContextProvider from "@/context/location-context";

const ArabicHero = ({ 
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
              {/* Set order-last on small screens, order-first on medium and up */}
              <div className="iframe-code w-full basis-full md:basis-3/12 shadow-2xl order-last md:order-first">
                <VPSPakFrom showCountryField={false} />
              </div>

              {/* Set order-first on small screens, order-last on medium and up */}
              <div className="content-side text-center md:text-right basis-full md:basis-9/12 order-first md:order-last">
                <p className="text-sm md:text-[28px] pt-5 font-medium text-secondary pb-2">
                  {specialOfferText}
                </p>
                <h1 className="animate-text text-2xl md:text-5xl xl:text-4xl 2xl:text-[80px] md:leading-[100px] capitalize font-bold mb-0 md:mb-0 line-height-setting2 w-72 mx-auto md:mr-0 md:w-[530px] py-2">
                  {mainTitle}
                </h1>
                <h4 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-lg xl:text-2xl font-[500] w-96 md:w-full ">
                  {offerValidity}
                </h4>
                <p className="text-primary text-lg py-2 font-medium">
                  {offerNote}
                </p>
              </div>
            </div>
          </div>  
        </section>
      </LocationContextProvider>
    </>
  );
};

export default ArabicHero;
