"use client";
import Aos from "aos";
import Link from "next/link";
import React, { useEffect } from "react";

// Individual card component for reusability
const BackOfCard = ({ title, icon, paragraph, registrationLink = "#" }) => (
  <div className="flip-card border-primary h-72">
    <div className="flip-card-inner">
      {/* Front Side */}
      <div className="flip-card-front border rounded-[25px] p-6 bg-gradient-to-b from-[#ecf3fd] via-[#ecf3fd] to-[#ecf3fd]">
        <div className="text-primary flex flex-col h-full justify-center items-center">
          <p className="text-secondary">{icon}</p>
          <h2 className="text-primary font-medium text-base md:text-xl my-5 capitalize">{title}</h2>
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white py-2 px-5 rounded-full"
          >
            View More
          </a>
        </div>
      </div>

      {/* Back Side */}
      <div className="flip-card-back p-6 bg-gradient-to-t from-[#ecf3fd] via-[#ecf3fd] to-[#ecf3fd] rounded-[25px] border border-secondary border-opacity-70 text-primary flex flex-col items-center justify-center">
        <p className="text-secondary">{icon}</p>
        <h2 className="font-semibold text-medium my-4 text-sm md:text-base">{title}</h2>
        <p className="text-primary text-center text-sm md:text-base max-w-sm mx-auto pb-5">{paragraph}</p>
        <a
          href={registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white py-2 px-5 rounded-full"
        >
          Register Now
        </a>
      </div>
    </div>
  </div>
);

// Main WhoAttend component with props for customization
const WhoAttend = ({ sectionTitle, description, cards }) => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  return (
    <section className="bg-[#fff] pb-8 lg:pb-[80px]" id="register">
      <div className="container">
        <div className="text-center">
          <h2 className="HeadingH2 font-medium">{sectionTitle}</h2>
          <p className="text-primary text-center text-sm md:text-lg w-full mx-auto md:w-3/4">{description}</p>
        </div>

        <div className="w-full pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((item, index) => (
              <BackOfCard
                key={index}
                title={item.title}
                icon={item.icon}
                paragraph={item.paragraph}
                registrationLink={item.registrationLink || "#"} // Ensures no undefined values
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAttend;
