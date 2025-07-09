"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import nationality from "../../../../../public/data/nationality.json";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"
import React, { useState,useContext,useEffect } from "react";
import { LocationContext } from "@/context/location-context";
import "react-phone-number-input/style.css";
import { useTranslations } from "next-intl";
import { getCountries } from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en";
import Aos from "aos";
import OtpInput from "react-otp-input";
import { MdDone } from "react-icons/md";


const CountrySelect = ({ value, onChange, labels, ...rest }) => (
  <select
    {...rest}
    value={value}
    className="formInput bg-white"
    onChange={(event) => onChange(event.target.value || undefined)}
  >
    <option value="">{labels["ZZ"]}</option>
    {getCountries().map((country) => (
      <option key={country} value={country}>
        {labels[country]}
      </option>
    ))}
  </select>
);
const RegisterNow = () => {
  const [loading, setLoading] = useState(false);
  //OTP Logic
  const [otp, setOtp] = useState("");
  //Verify OTP Button Logic
  const [verified, setVerified] = useState(false);

  //Send OTP Button Logic
  const [otpDisabled, setOtpDisabled] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpCounter, setOtpCounter] = useState(30);
  const t = useTranslations("account");
  const [country, setCountry] = useState("AE");
  const [value, setValue] = useState();
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  const formik = useFormik({
    initialValues:{
      first_name:"",
      last_name:"",
      email:"",
      phone:"",
      country:""
    },
    validationSchema:Yup.object({
      first_name: Yup.string()
      .min(2, t("accountForm.minLimit"))
      .required(t("accountForm.error.firstName")),
    last_name: Yup.string()
      .min(2, t("accountForm.minLimit"))
      .required(t("accountForm.error.lastName")),
    email: Yup.string()
      .email("Invalid email address")
      .required(t("accountForm.error.email")),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.phone) {
        errors.phone = t("accountForm.error.phone");
      }
      return errors;
    },
    onSubmit:async(values)=>{
      console.log(values);
    }
  });
  const handleSendOtp = async () => {
    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: formik.values.phone }),
      });

      if (response.ok) {
        const data = await response.json();
        setOtpDisabled(true); 
        if(verified){
          setOtpDisabled(true);
        }
        startTimer();
        console.log(data);
      } else {
        console.error("Failed to send OTP");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleVerifyOtp = async () => {
    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: otp, phone: formik.values.phone }),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.status === "approved") {
          setVerified(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const startTimer = () => {
    setOtpLoading(true);
    const interval = setInterval(() => {
      setOtpCounter((prevCounter) => prevCounter - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      setOtpDisabled(false);
      setOtpLoading(false);
      setOtpCounter(30);
    }, 30000);
  };
  return (
    <div
      className="webinar-register-form bg-gradient-to-b rounded-b-[50px] from-[#1e446d] via-[#1e446d] to-[#1e446d]"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 700 10"
          preserveAspectRatio="none"
        >
          <path
            className="elementor-shape-fill"
            d="M350,10L340,0h20L350,10z"
            fill="rgb(236, 236, 236)"
          ></path>
        </svg>
        <div className="py-6 md:py-10">
          <h2 className="text-white text-center font-bold text-3xl pb-4">
            Register Now
          </h2>
          <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <div>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.first_name}
                className="formInput m-0 bg-white"
              />
            </div>
            <div>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
                className="formInput m-0 bg-white"
              />
            </div>
            </div>
            <div className="grid grid-cols-1">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="formInput m-0 bg-white"
              />
            </div>
            <div className="flex">
            <PhoneInput
              onChange={(value) => formik.setFieldValue("phone", value)}
              onBlur={formik.handleBlur}
              name="phone"
              value={formik.values.phone}
              defaultCountry='AE'
              className="formInput outline-none border-none webinar_form w-[80%]"
            />
            <div className="flex items-center w-[20%]">
            <button
              disabled={otpDisabled || verified || !formik.values.phone || formik.values.phone.length < 11 || formik.values.phone.length > 13}
              type="button"
              className={`text-secondary font-semibold  py-2 px-4 border text-md border-secondary
              bg-primary hover:text-white w-[100%] h-[45px] mb-[-8px] 
              ${verified ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
              onClick={handleSendOtp}
            >
              {otpDisabled ? (
                <p className="flex items-center gap-2 justify-center">
                 <p>Please wait: {otpCounter} seconds</p>
                  <p className="spinner_otp inline-block"></p>
                </p>
              ) : (
                "Send OTP"
              )}
            </button>
            </div>
            </div>
            <div className="flex flex-row gap-2 mt-3">
            <OtpInput
              containerStyle={{
                justifyContent:'space-around',
                alignItems: "initial",
                gap: "10px",
                width: "80%",
              }}
              
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              inputType="text"
              inputStyle={{
                width: "20%",
                backgroundColor: "#FFF",
                color: "#000",
                fontWeight: "700",
                outlineColor:'#f9c617'
              }}
            />

            <button
              disabled={verified}
              type="button"
              className={`text-secondary transition-all duration-300 font-semibold cursor-pointer 
              py-2 px-4 border border-secondary bg-primary hover:text-white w-[20%] 
              ${verified ? `cursor-not-allowed`:'cursor-pointer'}`}
              onClick={handleVerifyOtp}
            >
              {verified ? (
                <p className="text-green-600 flex items-center justify-center gap-1 text-lg"> Verified <MdDone size={20} /></p>
              ) : (
                <p>Verify OTP</p>
              )}
            </button>
          </div>
          <div className="grid grid-cols-1 mt-5">
              <select
                className={`bg-white text-primary placeholder:text-white capitalize  py-4 px-4 rounded-[3px] outline-[#f9c617] ${
                  formik.touched.country && formik.errors.country
                    ? "border-2 border-red-600"
                    : ""
                }`}
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">{t("accountForm.selectPlaceholder")}</option>
                {nationality.map((country, index) => {
                  return (
                    <option key={index} value={country.en_short_name}>
                      {country.en_short_name}
                    </option>
                  );
                })}
              </select>
           
          </div>
            <div className="col-span-12 mx-auto mt-3">
              <button type="submit" className="bg-secondary mx-auto block text-primary px-5 py-3 font-medium rounded-md hover:bg-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;
