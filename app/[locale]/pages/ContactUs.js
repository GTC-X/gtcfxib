"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ContactFrom from "../components/contactUs/ContactFrom";
import { MdOutlineContactPhone } from "react-icons/md";
import ToolFreeContact from "../components/contactUs/ToolFree";
import SimpleForm from "../components/common/SimpleForm";
import VPSPakFrom from "../components/common/VPSPakFrom";

const ContactUsPage = () => {
  const t = useTranslations("about.contact-us");

  return (
    <section className="main-content pt-12 pb-5">
      <div className="container relative z-30">
        {/* 70/30 grid: 1 col on mobile, 3 cols on md+; content spans 2, form spans 1 */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* LEFT: Content (70%) */}
          <div className="md:col-span-2 md:max-w-xl">
            <div className="flex items-center gap-2">
              <p className="text-secondary text-4xl md:text-5xl">
                <MdOutlineContactPhone />
              </p>
              <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 mb-0">
                {t("title")}
              </h2>
            </div>

            <p className="py-3 ltr:text-left rtl:text-right">
              {t("sub_title1_1")}
            </p>
            <p className="py-3 ltr:text-left rtl:text-right">
              {t("sub_title1_2")}
            </p>

            <ToolFreeContact />
          </div>

          {/* RIGHT: Form (30%) */}
          <aside className="md:col-span-1">
            {/* Sticky on desktop for better UX; remove 'md:sticky' if not desired */}
            <div className="md:sticky md:top-24">
              <div className="rounded-2xl border border-gray-200/70 shadow-sm p-4 md:p-5 bg-gray">
                <ContactFrom />
                
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
