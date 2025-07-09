"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { usePathname, useSearchParams } from "next/navigation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useTranslations } from "next-intl";
import { useState, useContext } from "react";
import { LocationContext } from "@/context/location-context";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
import nationality from "../../../../public/data/nationality.json";

const programList = [
    { id: 1, name: "Whatsapp", value: "Whatsapp" },
    { id: 2, name: "Email", value: "Email" },
    { id: 3, name: "Phone Number", value: "Phone" },
  ];

const SupportForm = () => {
    const [loading, setLoading] = useState(false);
  const t = useTranslations("form");
  const { country: originCountry, ip: originIp } = useContext(LocationContext);
  const path = usePathname();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      country: "",
      partner_type: "",
      message:''
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          "Only contain letters."
        )
        .required(t("error.first_name")),
      last_name: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          "Only contain letters."
        )
        .required(t("error.last_name")),
      email: Yup.string()
        .email(t("error.invalidEmail"))
        .required(t("error.email")),
      country: Yup.string().required(t("error.country")),
      method_of_communication: Yup.string(),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.phone) {
        errors.phone = t("error.phone");
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `https://hooks.zapier.com/hooks/catch/16420445/3jj2cve/`,
          JSON.stringify(values)
        );
      } catch (err) {
        console.log(err.message);
      } finally {
        toast(t("submitted_success"));
        formik.resetForm();
      }
    },
  });
  return  <div
  className="support-form bg-[#f2f2f2] border border-gray-300 border-opacity-50 p-5 w-full shadow-2xl"
  id="register"
>
<form onSubmit={formik.handleSubmit} className="py-3" id="parnter_form">
        <div className="flex flex-col gap-2 mb-3">
          <label className="text-lg">First Name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
            className="formInput mt-0 bg-white w-full py-4"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.first_name}
          />
          <label className="text-lg">Last Name</label>
           <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
            className="formInput mt-0 bg-white  py-4"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.last_name}
          />
          <label className="text-lg">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            autoComplete="email"
            placeholder={t("email")}
            className="formInput mt-0 bg-white  py-4"
          />
        </div>
        <div className="flex flex-col">
        <label className="text-lg">Phone Number</label>
          <div className="flex items-center gap-2 w-full">
            <PhoneInput
              className="bg-white simple  py-4 px-3 outline-none focus-visible:outline-none mb-3 mt-0 custom-style w-[100%]"
              onChange={(value) => formik.setFieldValue("phone", value)}
              onBlur={formik.handleBlur}
              name="phone"
              value={formik.values.phone}
              defaultCountry={originCountry}
            />
          </div>
          <div className="flex flex-col gap-3">
          <label className="text-lg">Country</label>
            <select
              className={`bg-white w-[100%] text-primary  py-4 px-3 ${formik.touched.country && formik.errors.country ? "border-2 border-yellow-500" : ""}`}
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">{t("selectOne")}</option>
              {nationality.map((country, index) => {
                return (
                  <option
                    className="text-primary"
                    key={index}
                    value={country.en_short_name}
                  >
                    {country.en_short_name}
                  </option>
                );
              })}
            </select>
            <label className="text-lg">Preferred Method of Communication</label>
            <select
              className={`bg-white w-[100%] text-primary py-4 px-3 ${formik.touched.country && formik.errors.country ? "border-2 border-yellow-500" : ""}`}
              name="partner_type"
              value={formik.values.partner_type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Please Select One Option</option>
              {programList.map((el) => {
                return (
                  <option 
                  className="text-primary"  
                  key={el.id} 
                  value={el.value}>
                  {el.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="col-span-full mt-2">
        <label className="text-lg">Comment</label>
             <div className="mt-2">
               <textarea
                 id="message"
                 name="message"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.message}
                 rows={3}
                 className={`block w-full border border-gray-200 p-2  placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 ${formik.touched.message && formik.errors.message
                   ? "border-2 border-red-600"
                   : ""
                 }`}
                 placeholder="Write in details"
               />
             </div>
           </div>
        <button
          disabled={!formik.values}
          className="bg-secondary text-center w-full py-4 mt-5 font-semibold text-white text-lg"
          type="submit"
        >
          {loading ? <p> {t("sending")}</p> : <p>{t("submit")}</p>}
        </button>
      </form>

</div>
};

export default SupportForm;
