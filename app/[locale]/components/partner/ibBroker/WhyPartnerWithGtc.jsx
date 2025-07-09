'use client'
import Image from "next/image";

const WhyPartnerWithGtc = ({ title, reasons, subHeading }) => {

  return (
    <section className="md:py-16 py-8">
    
      <div className="container content-side z-30 relative">
          <div className="text-center">
            <h2 className="HeadingH2 2xl:text-4xl w-72 md:w-full font-[500] bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-center">
              {title}
            </h2>
            <p className='text text-primary pb-5'>{subHeading}</p>
          </div>
          <div className="relative w-full h-[300px] md:h-[500px] 3xl:h-[700px]">
              <Image src={reasons} fill className="object-contain" alt="" />
          </div>
    
          </div>
    </section>
  );
};

export default WhyPartnerWithGtc;
