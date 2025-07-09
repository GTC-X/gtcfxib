"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ContactFrom from "../components/contactUs/ContactFrom";
import { SiLivechat } from "react-icons/si";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import Link from "next/link";
import ToolFreeContact from "../components/contactUs/ToolFree";
import { BsWhatsapp } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";



const ContactUsPage = () => {
  const t = useTranslations("about.contact-us"); 

  return (
    <>
      <section className="main-content pt-12 pb-5">
        <div className="container relative z-30">
          <div className="max-w-6xl mx-auto text text-left">
            <div className="flex flex-row items-center justify-start gap-2">
              <p className="text-secondary text-4xl md:text-5xl">
                <MdOutlineContactPhone />
              </p>
              <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 text-left mb-0">
                {t("title")}
              </h2>
            </div>

            <p className="py-3 ltr:text-left rtl:text-right">
              {t("sub_title1_1")}{" "}
            </p>
            <p className="py-3 ltr:text-left rtl:text-right">
              {t("sub_title1_2")}
            </p>

          
          </div>
        </div>
      </section>
      <section className="main-content pb-8 md:pb-10 2xl:pb-10">
      <div className="container relative z-30">
          <div className="max-w-6xl mx-auto text">
      
                    <ContactFrom />
          </div>
        </div>
      </section>

      <ToolFreeContact />

     
    </>
  );
};

export default ContactUsPage;
