'use client'
import { useLocationDetail } from "@/context/useLocationDetail";
import ClientRegistrationForm from "../common/ClientRegistrationForm";
import Image from "next/image";




const IBHero = () => {


  return (
    <useLocationDetail>
      <section className="relative hero-banner py-12 md:py-14 lg:py-16 2xl:py-20 bg-gradient-to-t from-[#24358b] via-[#202766] to-[#141b43]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-0"
          style={{ backgroundImage: `url('/banner-IB.webp')` }}
        />
        {/* Content */}
        <div className="relative z-10 container flex flex-col md:flex-row justify-between items-center h-full">
          <div className="basis-full md:basis-1/2 content-side text-center md:text-left pb-16 md:pb-0">
            <h4 className="text-white text-base md:text-2xl pb-2">
              Grow Your Clients Network With Us
            </h4>
            <h2 className="bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text text-xl font-[600] xl:text-[30px] 2xl:text-[40px] uppercase max-w-xl  leading-tight md:max-w-2xl">
              Become an Introductory Broker and Unlock Unlimited Earning Potential
            </h2>
            <p className="text-white text-sm max-w-xl md:text-lg py-2">
              Power up your business expansion and client network while maximizing the advantages of our IB program.
            </p>

          </div>
          <div className="images-setting flex flex-row items-center justify-end">
            <ClientRegistrationForm showCountryField={true} showDropdown={false} />
            <div className="relative w-full h-[500px] hidden md:flex">
              <Image src="/IB-pic.webp" width={132} height={500} alt="IB" className="object-contain" />
            </div>
          </div>

        </div>
        <div id="register2"></div>
      </section>


    </useLocationDetail>
  );
};

export default IBHero