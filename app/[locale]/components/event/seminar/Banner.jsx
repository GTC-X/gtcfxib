"use client";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="w-full container relative -mb-12">
      <div className="bg-secondary  rounded-3xl py-6 px-2">
        <h2 className="text-white text-center text-base font-normal md:text-2xl">
        Don't miss your opportunity to excel in the world of brokerage, 
        <Link href="/"
              onClick={(e)=>{
                let section = document.getElementById('register');
                e.preventDefault();
                section && section.scrollIntoView({ behavior: "smooth", block: "start"});
            }} className="text-primary underline cursor-pointer ml-4 font-medium ">
              RESERVE YOUR SPOT TODAY!
            </Link>
        </h2>
      </div>
    </div>
  );
}
