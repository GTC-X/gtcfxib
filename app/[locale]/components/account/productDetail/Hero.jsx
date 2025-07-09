"use client";
import { useTranslations } from "next-intl";
import LocationContextProvider from "@/context/location-context";
import ClientRegistrationForm from "../../common/ClientRegistrationForm";
import Image from "next/image";
import VPSPakFrom from "../../common/VPSPakFrom";
import LiveAccountButton from "../../liveAccountButton";

const Hero = ({
  title,
  subtitle,
  description,
  backgroundImage = "/overlay.webp",
  imageSrc = "/IB-pic.webp",
  showForm = true,
  formComponent: FormComponent = VPSPakFrom,
  
}) => {
  const t = useTranslations("compaign.tradeWin.banner");

  return (
    <LocationContextProvider>
      <section
        className="relative hero-banner py-8 md:py-10 lg:py-12 2xl:py-14 bg-gradient-to-t from-[#24358b] via-[#202766] to-[#141b43] border-y border-gray-200"
      >
        {/* Overlay Image */}
        <div
          className="absolute inset-0 z-0 bg-contain bg-repeat bg-center"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            opacity: 0.5, // Set opacity for a visible overlay effect
          }}
        />

        {/* Content */}
        <div className="relative z-10 container flex flex-col md:flex-row justify-between items-center h-full">
          <div className="content-side text-center md:text-left pb-5 md:pb-0">
            <h4 className="text-white text-base md:text-2xl pb-2 capitalize">
              {subtitle}
            </h4>
            <h2 className="bg-gradient-to-r from-secondary via-[#ffffffd4] to-secondary inline-block text-transparent bg-clip-text font-semibold text-xl xl:text-[30px] 2xl:text-[45px] max-w-xl leading-tight md:max-w-2xl">
              {title}
            </h2>
            <p className="text-white text-sm max-w-2xl md:text-[20px] py-2 leading-8">
              {description}
            </p>
            <div className="mt-5">
              <LiveAccountButton hoverStyle="text-white" />
            </div>
          </div>
          <div className="images-setting flex flex-row items-center justify-end">
            {showForm && FormComponent && <FormComponent />}
            <div className="relative w-full h-[500px] hidden md:flex">
              <Image
                src={imageSrc}
                width={132}
                height={500}
                alt="Hero"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </LocationContextProvider>
  );
};

export default Hero;
