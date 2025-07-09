"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

const ApplyNow = () => {
  const t = useTranslations("about.careers.form");
  
  const [resume, setResume] = useState({
    file: null,
    error: false,
  });

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader?.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(',')[1]; // Extract base64 content after the comma
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
    });
  }
  const campaign = useSearchParams().get("utm_source");
  const fbclid = useSearchParams().get("fbclid");
  const path = usePathname();
  const formik = useFormik({
    initialValues: {
      ip: "",
      fbclid: "",
      utm_campain: "",
      utm_source: "",
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      message: "",
      city: "",
      url: "",
      experience: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(2, "min 3 ")
        .required("First name is required"),
      last_name: Yup.string().min(2, "min 3").required("Last name is required"),
      email: Yup.string().email("invalid email").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      message: Yup.string().required("Message is required"),
      city: Yup.string().required("City is required"),
      url: Yup.string().required("Linkdin is required"),
      experience: Yup.string().required("Experience is required"),
    }),
    onSubmit: async (values) => {
      if (resume?.file == null) {
        return setResume((st) => ({ ...st, error: true }));
      }

      const payload = { ...values };
      payload.resume = resume?.file;
      try {
        // Send the form data as multipart/form-data
        const response = await axios.post(
          `/api/career-form`,
          JSON.stringify(payload)
        )
      } catch (error) {
        console.log(error);
      } finally {
        toast("Form Submitted Successfully!");
        formik.resetForm();
        setResume({
          file: null,
          error: false,
        })
      }
       try {
      const response = await axios.post(
      "https://hooks.zapier.com/hooks/catch/16420445/2yulun6/",
      JSON.stringify(payload)
       );
      } catch (error) {
      console.log(error);
      } finally {
      toast("Form Submitted Successfully!");
       formik.resetForm();
      }
    },
  });


  return (
    <form
      className="container py-10 px-6 mt-8 sm:my-16 md:mt-14 2xl:mt-20 bg-gray-100 border border-gray-300  relative z-30"
      onSubmit={formik.handleSubmit}
    >
      <p className="text-base text-center text-primary font-normal pb-4">
        {t("title")}
      </p>
      <h2 className="text-2xl text-center lg:text-4xl text-primary pb-4">
        {t("sub_title")}
      </h2>
      <div className="grid grid-cols-12 gap-4 mt-3">
        <div className=" md:col-span-3 col-span-12">
  
          <input
            name="fbclid"
            className="hidden"
            type="text"
            onChange={formik.handleChange}
            value={
              !formik.values.fbclid || formik.values.fbclid === ""
                ? (formik.values.fbclid = fbclid)
                : (formik.values.fbclid = fbclid)
            }
          />
          <input
            name="utm_campain"
            className="hidden"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={
              !formik.values.utm_campain || formik.values.utm_campain === ""
                ? (formik.values.utm_campain = path)
                : (formik.values.utm_campain = path)
            }
          />
          <input
            name="utm_source"
            className="hidden"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={
              !formik.values.utm_source || formik.values.utm_source === ""
                ? (formik.values.utm_source = campaign)
                : (formik.values.utm_source = campaign)
            }
          />
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder={t("first_name")}
            className={`formInput m-0 bg-white ${formik.touched.first_name && formik.errors.first_name
              ? "border-1 border-red-600"
              : ""
              }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.first_name}
          />
        </div>
        <div className=" md:col-span-3 col-span-12">
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder={t("last_name")}
            className={`formInput m-0 bg-white ${formik.touched.last_name && formik.errors.last_name
              ? "border-1 border-red-600"
              : ""
              }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.last_name}
          />
        </div>
        <div className=" md:col-span-3 col-span-12">
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t("email")}
            className={`formInput m-0 bg-white ${formik.touched.email && formik.errors.email
              ? "border-1 border-red-600"
              : ""
              }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        <div className=" md:col-span-3 col-span-12">
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder={t("phone")}
            className={`formInput m-0 bg-white ${formik.touched.phone && formik.errors.phone
              ? "border-1 border-red-600"
              : ""
              }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
        </div>
        <div className=" md:col-span-3 col-span-12">
          <input
            type="text"
            name="city"
            id="city"
            placeholder={t("city")}
            className={`formInput m-0 bg-white ${formik.touched.city && formik.errors.city
              ? "border-1 border-red-600"
              : ""
              }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
        </div>
        <div className=" md:col-span-6 col-span-12">
          <input
            type="text"
            name="url"
            id="url"
            placeholder={t("url")}
            className={`formInput m-0 bg-white ${formik.touched.url && formik.errors.url
              ? "border-1 border-red-600"
              : ""
              }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.url}
          />
        </div>
        <div className=" md:col-span-3 col-span-12">
          <select
            id="experience"
            name="experience"
            autoComplete="country-name"
            placeholder={t("note")}
            className={`formInput m-0 bg-white ${formik.touched.experience && formik.errors.experience
              ? "border-1 border-red-600"
              : ""
              }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.experience}
          >
            <option value="">{t("exper.label")}</option>
            <option value="fresher">{t("exper.one")}</option>
            <option value="1-2">{t("exper.sec")}</option>
            <option value="3-5">{t("exper.third")}</option>
            <option value="5-10">{t("exper.fourth")}</option>
            <option value="10">{t("exper.fivth")}</option>
          </select>
        </div>

        <div className="col-span-12">
          <textarea
            placeholder={t("note")}
            className={`formInput m-0 bg-white ${formik.touched.message && formik.errors.message
              ? "border-1 border-red-600"
              : ""
              }`}
            rows="4"
            name="message"
            id="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
        </div>
      </div>
      <div className="mt-4">
        <p>{t("attach")}</p>
        <input
          type="file"
          accept=".doc, .docx,.pdf"
          name="resume"
          id="resume"
          className={` ${resume?.error
            ? "formInput m-0 bg-white border-1 border-red-600"
            : ""
            }`}
          onChange={(e) => {
            let file = e.target.files[0];
            if (file) {
              getBase64(file).then(res => {
                setResume((st) => ({ ...st, file: res, error: false }));
              })
            }
          }}
          value={formik.values.resume}
        />
      </div>
      <div className="mt-2 text-right">
        <button
          type="submit"
          className="yellowButton  inline-flex items-center font-normal rounded-none capitalize hover:bg-primary hover:text-secondary"
        >
          {t("btnText")} <FaLongArrowAltRight className="ml-2" />
        </button>
      </div>
      <p className="text-xs py-2">{t("terms")}</p>
    </form>
  );
};

export default ApplyNow;
