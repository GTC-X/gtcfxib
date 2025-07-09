import React from "react";
import Image from "next/image";
import Link from "next/link";


const DemoBanner = () => {

  return (
    <div className="bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] py-10 lg:py-14 3xl:py-16 5xl:py-20 hero-section relative z-10">
      <div className="container pb-12">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
          <div className={`content-side text-center  md:pb-16 z-40`}>
            <h2 className={`pb-2 font-semibold text-center text-[2rem] w-full mx-auto  md:text-[3.5em] bg-gradient-to-l from-white to-secondary inline-block text-transparent bg-clip-text md:leading-[4rem]`}>
            Trade, Practice Learn, Repeat
            </h2>
            <p className="text-white text-[1.25rem] pb-6">
            Until Ready to Conquer The Markets
           </p> 
            <div>
                <Link href='https://web.mygtc.app/login/register?code=2544249&scope=1' target="_blank" className="bg-gradient-to-b from-[#0a0a0a] from-10% to-secondary to-90% text-white text-sm 3xl:text-xl px-8 py-3 text-center rounded-md md:w-auto w-[300px] md:m-0 mx-auto transition-colors duration-900 hover:bg-gradient-to-b hover:from-secondary hover:to-[#000] duration-500">Open Live Account</Link>
            </div>
          </div>
          {/* <div className="flex justify-end">
            <div className="relative w-full h-64 md:h-[400px] z-40">
              <Image src='/account/live-account-mobile.webp' fill alt="Banner Image" className="object-contain" />
            </div>
          </div> */}
        </div>
      </div>
      {<svg
        className="absolute bottom-[-1px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path fill="#FFFFFF" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
      </svg> }
    </div>
  );
};

export default DemoBanner