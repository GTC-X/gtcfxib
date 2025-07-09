"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import * as YUP from 'yup';
import axios from 'axios';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { toast } from "react-toastify";

const Subscriber = () => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations("form");
  const formik = useFormik({
    initialValues:{
      first_name:"",
      email:"",
      phone:""
    },
    validationSchema:YUP.object({
      first_name:YUP.string().required("First name is required"),
      email: YUP.string().email("invalid email address").required(t("error.email")),
    }),
    validate: values => {
      const errors = {};
      if (!values.phone) {
        errors.phone = 'Phone number is required';
      }
      return errors;
    },
    onSubmit:async(values)=>{
      console.log(values);
      try{
        setLoading(true);
        const response = await axios.post(`https://hooks.zapier.com/hooks/catch/16420445/32yd0en/`,JSON.stringify(values));
      }catch(error){
        console.log(error.message);
      }finally{
        setLoading(false);
        toast('Form Submitted Successfully!')
        formik.resetForm();
      }
    }
  })
  return (
    <div className="shadow-2xl p-10">
      <div className="mx-auto max-w-2xl text-center mb-5">
        <h2 className="HeadingH3">
        Get Daily Technical Analysis Signals
        </h2>
      </div> 
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto max-w-xl" 
      >
        <div className="grid grid-cols-1 gap-2">
          <div className="sm:col-span-2">
          <label className={`text-primary text-[13px] ${formik.touched.first_name && formik.errors.first_name ? "text-rose-800" : ""}`}> {formik.touched.first_name && formik.errors.first_name
              ? formik.errors.first_name
              : t("firstName")}</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder={t("firstName")}
              className="formInput mt-0 bg-white"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
            />
          </div>

          <div className="sm:col-span-2">
          <label className={`text-primary text-[13px] ${formik.touched.email && formik.errors.email ? "text-rose-800" : ""}`}>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : t("email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            autoComplete="email"
            placeholder={t("email")}
            className="formInput mb-3 mt-0 bg-white"
          />
          </div>
          <div className="sm:col-span-2">
          <label htmlFor='phone' className={`text-primary text-[13px] ${formik.touched.phone && formik.errors.phone ? "text-rose-800" : ""}`}>
            {formik.touched.phone && formik.errors.phone
              ? formik.errors.phone
              : t("phone")}
          </label>
          <PhoneInput
            className="bg-white p-3 border border-slate-300 mb-3 mt-0 subscriber_form"
            onChange={(value) => formik.setFieldValue('phone', value)}
            onBlur={formik.handleBlur}
            name="phone"
            value={formik.values.phone}
            defaultCountry="AE"
          />
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="block w-full bg-secondary hover:bg-primary hover:text-secondary px-3.5 py-3 text-center text-lg rounded-full font-semibold text-primary" 
          >
         {loading ? <p>Sending...</p>:<p>Subscribe Now</p>}  
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscriber;
