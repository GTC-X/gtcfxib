"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Team member data
const teamMembers = [
  {
    name: "Elian Daoud", 
    title: "Chief Operating Officer",
    image: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/social/elian.webp",
    description:
      "Elian, with over 15 years of experience in the FX & CFDs industry, currently serving as the Chief operating officer at GTCFX. With a strong background in Process engineering and a focus on driving digital transformation and operational excellence.",
  },
  {
    name: "Ali Afzaal",
    title: "Business Development Director",
    image:"/Ali.webp",
    description:
      "Ali brings extensive expertise in strategic partnerships, offering GTCFX partners tailored growth strategies and revenue-maximizing solutions. His approach to fostering collaboration ensures a mutually beneficial relationship for all stakeholders.",
  },
  {
    name: "Jameel Ahmad",
    title: "Chief Markets Analyst",
    image: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/social/jameel3.webp",
    description:
      "A highly respected authority in international finance, Jameel specializes in global currencies, commodities, and major stocks. With over a decade of experience, his expert commentary is regularly featured in top media outlets like Bloomberg, CNBC, and Reuters.",
  },
];

// Reusable component for each team member
const TeamMember = ({ name, title, image, description }) => (
  <div
  className="relative py-[1px] px-[1px]"
  style={{
    background:
      "linear-gradient(to bottom, rgba(182,135,86,.65) 40%, rgba(5,3,49,1) 60%)",
    borderRadius: "8px",
  }}
>
  <div className="flex flex-col items-center bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#202d7bdb] text-white rounded-md text-center">
    <div className="relative h-52 lg:h-[480px] w-full ">
      <Image src={image} alt={name} fill className="object-contain" />
    </div>
    <div className="content px-5">
    <h2 className="bg-gradient-to-b from-white to-secondary inline-block text-transparent bg-clip-text text-base md:text-[17px] mt-4 font-medium text-center">
      {name} – {title}
    </h2>
    <p className="text-white text-sm text-center my-4">{description}</p>
    </div>
  </div>
  </div>
);

const MeetExport = () => {
  return (
    <div className="bg-gradient-to-b from-[#050331] via-[#202766] to-[#050331] py-5">
      <div className="max-w-7xl mx-auto py-16 md:py-20 xl:py-24 px-5">

        {/* Grid layout for team members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 items-start ">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              image={member.image}
              description={member.description}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-10">
          <Link
            href="/"
            onClick={(e) => {
              let section = document.getElementById("register");
              e.preventDefault();
              section && section.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="bg-[#29a643] rounded-lg shadow-lg overflow-hidden text-white 3xl:text-xl px-8 py-3 text-cente md:m-0 mx-auto transition-colors duration-900 hover:bg-gradient-to-b hover:from-[#050331] hover:to-[#05033162] duration-500 hover:text-white"
          >
            Register Now
          </Link>
          <h2 className="text-white font-semibold text-normal md:text-xl mt-8">
            Limited Seats! Secure Your Spot Now!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MeetExport;
