import React from "react";
import Image from "next/image";
import Link from "next/link";

const JoinForm = () => {
  return (
    <div className="bg-gradient ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
              onClick={(e)=>{
                let section = document.getElementById('register');
                e.preventDefault();
                section && section.scrollIntoView({ behavior: "smooth", block: "start"});
            }}  className="h-80 w-full relative cursor-pointer">
            <Image
              src="/compaign/tradeWin/trade4.webp"
              fill
              alt="Join"
              className="object-contain"
            />
          </div>
          <div className="h-56 md:h-96 w-full relative">
            <Image
              src="/compaign/tradeWin/side-bar.webp"
              fill
              alt="Join"
              className="object-contain"
            />
          </div>
        </div>
        <div className="text-center">
          <Link
            href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Trade-to-Win.pdf"
            target="_blank"
            className="bg-secondary text-primary capitalize text-lg px-5 py-3 rounded-full font-bold hover:bg-white"
          >
            download brochure
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinForm;
