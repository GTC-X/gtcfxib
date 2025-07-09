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
import OtpInput from "react-otp-input";
import { TiTick } from "react-icons/ti";
import { ClockLoader } from "react-spinners";
import nationality from "../../../../public/data/nationality.json";

const programList = [
  { id: 1, name: "IB", value: "ib" },
  { id: 2, name: "Affiliate", value: "affiliate" },
  { id: 3, name: "Prime of Prime", value: "prime_of_prime" },
];

const PartnerForm = ({ title, subtitle, program }) => {
  const [loading, setLoading] = useState(false);
  const { country: originCountry, ip: originIp } = useContext(LocationContext);
  const t = useTranslations("form");
  const campaign = useSearchParams().get("utm_source");
  const fbclid = useSearchParams().get("fbclid");
  const path = usePathname();

  //Phone OTP Logic
  const [phoneOtp, setPhoneOtp] = useState("");
  const [showPhoneOtpVerify, setShowPhoneOtpVerify] = useState(false);
  const [disableSendPhoneOtpBtn, setDisablePhoneOtpBtn] = useState(false);
  const [disableVerifyPhoneOtpBtn, setDisableVerifyPhoneBtn] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [sendPhoneOtpLoading, setSendPhoneOtpLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      partner_type: "",
      full_name: "",
      email: "",
      phone: "",
      country: "",
      ip: "",
      fbclid: "",
      utm_campain: "",
      utm_source: "",
    },
    validationSchema:Yup.object({
      full_name: Yup.string().matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            'Only contain letters.'
        ).required(t("error.full_name")),
      email: Yup.string().email(t("error.invalidEmail")).required(t("error.email")),
      country: Yup.string().required(t("error.country")),
      partner_type:Yup.string()
    }),
    validate: values => {
      const errors = {};
      if (!values.phone) {
        errors.phone = t('error.phone');
      }
      return errors;
    },
    onSubmit: async (values) => {
      if (path.includes('introductory-broker')) {
        console.log("Inside ib");
        if (typeof window !== 'undefined') {
          console.log('Window is Defined');
          if (window.gtag) {
            console.log('inside window.gtag');
            window.gtag('event', 'conversion', { 'send_to': 'AW-10835048699/qDs-CJmcvY0ZEPvxxq4o' });
          }
        }
      }
      try {
        setLoading(true);
        try {
          const response = await axios.post(`https://hooks.zapier.com/hooks/catch/16420445/3kq25sj/`, JSON.stringify(values));
        } catch (err) {
          console.log(err.message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        toast(t("submitted_success"))
        formik.resetForm();
      }
    }
  });
  const sendPhoneOtp = async () => {
    const response = await axios.post("/api/send-otp", {
      phone: formik.values.phone,
    });
    if (response.status === 200) {
      setSendPhoneOtpLoading(false);
      setShowPhoneOtpVerify(true);
      setDisablePhoneOtpBtn(true);
      toast.success(`${t("otp_sent")} ${formik.values.phone}`);
    } else {
      toast.error(t("otp_error"));
      setDisablePhoneOtpBtn(false);
    }
  };

  const verifyPhoneOtp = async () => {
    const response = await axios.post("/api/verify-otp", {
      phone: formik.values.phone,
      otp: phoneOtp,
    });
    if (response.data.status == "approved") {
      setIsPhoneVerified(true);
      setDisableVerifyPhoneBtn(true);
      toast.success(t("otp_verified"));
      setDisablePhoneOtpBtn(true);
    } else {
      toast.error(t("otp_not_verified"));
      setDisablePhoneOtpBtn(false);
      setIsPhoneVerified(false);
    }
  };
  
  return (
    <div
      className="simple-form bg-[#f2f2f2] border border-gray-300 border-opacity-50 p-5 w-full shadow-2xl"
      id="register"
    >
      <div className="form-heading text-center">
        <h2 className="HeadingH2 md:text-2xl  pb-1">{title}</h2>
        <p className="text-primary md:text-[16px] text-[16px] text-center font-[400] lg:max-w-lg">
          {subtitle}
        </p>
      </div>
      <form onSubmit={formik.handleSubmit} className="py-3" id="parnter_form">
        <input
          name="ip"
          className="hidden"
          type="number"
          onChange={formik.handleChange}
          value={
            !formik.values.ip || formik.values.ip === ""
              ? (formik.values.ip = originIp)
              : (formik.values.ip = originIp)
          }
        />
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
        <div className="flex flex-row gap-2 mb-3">
          <input
            type="text"
            name="full_name"
            id="full_name"
            placeholder="Full Name"
            className="formInput mt-0 bg-white"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.full_name}
          />

          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            autoComplete="email"
            placeholder={t("email")}
            className="formInput mt-0 bg-white"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 w-full">
            <PhoneInput
              className="bg-white simple py-3 px-3 outline-none focus-visible:outline-none mb-3 mt-0 custom-style w-[70%]"
              onChange={(value) => formik.setFieldValue("phone", value)}
              onBlur={formik.handleBlur}
              name="phone"
              value={formik.values.phone}
              defaultCountry={originCountry}
            />
            <button
              className={`bg-secondary text-primary text-sm mt-[-12px] border-2  w-[30%] py-3 border-secondary transition-colors duration-300
                hover:bg-primary hover:text-secondary hover:border-2`}
              type="button"
              onClick={sendPhoneOtp}
              disabled={!formik.values.phone || disableSendPhoneOtpBtn}
            >
              {sendPhoneOtpLoading ? (
                <span className="text-xs flex gap-2 justify-center items-center">
                  <ClockLoader
                    loading={sendPhoneOtpLoading}
                    color="#2C6390"
                    size={20}
                    cssOverride={true}
                  />{" "}
                  <span>{t("sending")}</span>{" "}
                </span>
              ) : (
                <span>{t("send_otp")}</span>
              )}
            </button>
          </div>
          <div
            className={`items-center gap-2 py-3 ${showPhoneOtpVerify ? `flex slideDivVisible` : `hidden slideDiv`}`}
          >
            <OtpInput
              containerStyle={{
                justifyContent: "space-around",
                alignItems: "center",
                gap: "10px",
                width: "70%",
                direction: "ltr",
              }}
              value={phoneOtp}
              onChange={setPhoneOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              inputType="text"
              inputStyle={{
                paddingBottom: "5px",
                paddingTop: "5px",
                width: "20%",
                backgroundColor: "#FFF",
                color: "#000",
                fontWeight: "700",
                outlineColor: "#f9c617",
              }}
            />
            <button
              className="bg-secondary text-primary text-sm w-[30%] py-[5px] hover:bg-primary hover:text-secondary hover:border-2 border-secondary border-2 transition-colors duration-300"
              type="button"
              onClick={verifyPhoneOtp}
              disabled={disableVerifyPhoneOtpBtn}
            >
              {isPhoneVerified ? (
                <span className="text-green-600 flex  items-center">
                  <TiTick color="green" size={25} />{" "}
                  <span>{t("verified")}</span>
                </span>
              ) : (
                <p>{t("verify_otp")}</p>
              )}
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <select
              className={`bg-white w-[50%] text-primary py-3 px-3 ${formik.touched.country && formik.errors.country ? "border-2 border-yellow-500" : ""}`}
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
            <select
              className={`bg-white w-[50%] text-primary py-3 px-3 ${formik.touched.country && formik.errors.country ? "border-2 border-yellow-500" : ""}`}
              name="partner_type"
              value={formik.values.partner_type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">{t("selectProgram")}</option>
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
        <div>
          <div className="flex flex-col">
            <div className="flex items-center justify-start py-3 gap-1 ">
              <p className="text-center inline px-3 text-[13px] text-secondary">
                {t("terms")}
              </p>
            </div>
            <label
              className={`text-white text-[13px] ${formik.touched.terms && formik.errors.terms ? "text-yellow-500" : ""}`}
            >
              {formik.touched.terms && formik.errors.terms
                ? formik.errors.terms
                : ""}
            </label>
          </div>
        </div>
        <button
          disabled={!isPhoneVerified}
          className="bg-secondary text-center w-full py-3 font-semibold text-primary text-lg rounded-md"
          type="submit"
        >
          {loading ? <p> {t("sending")}</p> : <p>{t("submit")}</p>}
        </button>
      </form>
    </div>
  );
};

export default PartnerForm;
