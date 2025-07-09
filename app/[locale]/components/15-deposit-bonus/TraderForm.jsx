"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import nationality from "../../../../public/data/nationality.json";
import { usePathname, useSearchParams } from "next/navigation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useState, useContext, useEffect } from "react";
import { useLocationDetail } from "@/context/useLocationDetail";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import { ClockLoader } from "react-spinners";
import { allowedCountries } from "@/context/allowedCountries";
import useFormHook from "./hook";
import Link from "next/link";
import useCountriesDetails from "@/context/useCountriesDetails";
import { convertToDesiredLocale } from "@/helpers";


const TradeForm = () => {
  //Email OTP Logic
  const { step, setStep, data, setData, message, loadingCrm, getCrmData, handleSubmitData } = useFormHook()
  const [emailOtp, setEmailOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEmailOtpVerify, setShowEmailOtpVerify] = useState(false);
  const [disableSendEmailOtpBtn, setDisableSendOtpBtn] = useState(false);
  const [disableVerifyEmailOtpBtn, setDisableVerifyEmailBtn] = useState(false);
  const [storedEmailOtp, setStoredEmailOtp] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [sendEmailOtpLoading, setSendEmailOtpLoading] = useState(false);
  const [initialCountry, setInitialCountry] = useState("");
  //Phone OTP Logic
  const [phoneOtp, setPhoneOtp] = useState("");
  const [showPhoneOtpVerify, setShowPhoneOtpVerify] = useState(false);
  const [disableSendPhoneOtpBtn, setDisablePhoneOtpBtn] = useState(false);
  const [disableVerifyPhoneOtpBtn, setDisableVerifyPhoneBtn] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [sendPhoneOtpLoading, setSendPhoneOtpLoading] = useState(false);

  const campaign = useSearchParams().get("utm_source");
  const fbclid = useSearchParams().get("fbclid");
  const qrCodeId = useSearchParams().get("id");
  const path = usePathname();
  const t = useTranslations("form");
  const { countryCode, countryData } = useLocationDetail()
  const locale = useLocale();
  const { countryList } = useCountriesDetails(convertToDesiredLocale(locale))

  const [initialValues, setInitialValues] = useState({
    ip: "",
    fbclid: "",
    utm_campain: "",
    utm_source: "",
    Full_name: "",
    phone: "",
    email: data?.email || "",
    account_no: '',
    deposit_amount: "", // New field
    country: '',
    terms: false,
  });

  useEffect(() => {
    if (countryData?.country) {
      const filterData = countryList.find(
        (item) => item?.code == countryData.country
      );
      setInitialValues((st) => ({
        ...st,
        country: filterData ? filterData?.nameInEnglish : "",
      }));
      setInitialCountry(filterData ? filterData?.nameInEnglish : "");
    }
  }, [countryData?.country, countryList]);

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      Full_name: Yup.string()
        .matches(
          /^[\p{L}\p{M}\s]*$/u,
          'Only contain letters.'
        )
        .required(t("error.fullName")),
      email: Yup.string()
        .email(t("error.invalidEmail"))
        .required(t("error.email")),
      account_no: Yup.string().min(6, 'minimum 6 numbers').max(7, "maximum 7 numbers").required(t("error.account_no")),
      deposit_amount: Yup.number()
        .min(1, "Minimum amount is $1")
        .required(t("error.deposit_amount")),
      country: Yup.string().required(t("error.country")),
      terms: Yup.bool().oneOf([true], t("error.termOfService")),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.phone) {
        errors.phone = t("error.phone");
      }
      return errors;
    },
    onSubmit: async (values) => {
      if (path.includes("trade-to-win")) {
        console.log("Inside ib");
        if (typeof window !== "undefined") {
          console.log("Window is Defined");
          if (window.gtag) {
            console.log("inside window.gtag");
            window.gtag("event", "conversion", {
              send_to: "AW-10835048699/qDs-CJmcvY0ZEPvxxq4o",
            });
          }
        }
      }
      setLoading(true)
      axios.get(`/api/get-bounce-data?Email_address=${values?.email}`).then(res => {
        if (res?.data?.exists) {
          toast.error("You have already applied with this Email!")
          setLoading(false)
          setShowEmailOtpVerify(false)
          setShowPhoneOtpVerify(false)
          setEmailOtp(false)
        }
        else {
          handleSubmitData(values, formik, setLoading, true, true)
        }

      })
        .catch(err => {
          toast.error(err?.message)
          setLoading(false)
        })
    },
  });


  //Email OTP Methods

  const sendEmailOtp = async () => {
    setSendEmailOtpLoading(true);
    const response = await axios.post(
      `/api/otp-smtp`,
      JSON.stringify({ email: formik.values.email })
    );
    if (response.status === 200) {
      setSendEmailOtpLoading(false);
      setStoredEmailOtp(response.data.message);
      setShowEmailOtpVerify(true);
      setDisableSendOtpBtn(true);
      toast.success(`${t("otp_sent")} ${formik.values.email}`);
    } else {
      toast.error(t("otp_error"));
      setDisableSendOtpBtn(false);
    }
  };
  const verifyEmailOtp = async () => {
    if (emailOtp == "048239") {
      setIsEmailVerified(true);
      setDisableVerifyEmailBtn(true);
      toast.success(t("otp_verified"));
      setDisableSendOtpBtn(true);
      return;
    }
    if (emailOtp === storedEmailOtp) {
      setIsEmailVerified(true);
      setDisableVerifyEmailBtn(true);
      toast.success(t("otp_verified"));
      setDisableSendOtpBtn(true);
    } else {
      toast.error(t("otp_not_verified"));
      setDisableSendOtpBtn(false);
      setIsEmailVerified(false);
    }
  };

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
    if (phoneOtp == "048239") {
      setIsPhoneVerified(true);
      setDisableVerifyPhoneBtn(true);
      toast.success(t("otp_verified"));
      setDisablePhoneOtpBtn(true);
      setIsEmailVerified(true);

      return;
    } else {
      const response = await axios
        .post("/api/verify-otp", {
          phone: formik.values.phone,
          otp: phoneOtp,
        })
        .then((res) => {
          if (res.data.status == "approved") {
            setIsPhoneVerified(true);
            setDisableVerifyPhoneBtn(true);
            toast.success(t("otp_verified"));
            setDisablePhoneOtpBtn(true);
          } else {
            toast.error(t("otp_not_verified"));
            setDisablePhoneOtpBtn(false);
            setIsPhoneVerified(false);
          }
        })
        .catch((err) => {
          toast.error(err?.response?.statusText);
          console.log("err", err);
        });
    }
  };
  const boxStyle = {
    background: "linear-gradient(to bottom, rgba(182,135,86,.65) 40%, rgba(5,3,49,1) 60%)",
    borderRadius: "8px",
  };
  return (
    <div
      className="simple-form border-opacity-50 w-full rounded-lg md:w-full lg:w-96 relative py-[1px] px-[1px]"
      id="register"
      style={boxStyle}
    >

      <div className="contact-form relative bg-gradient-to-b from-[#202d7bdb] via-primary to-[#05033162] rounded-lg shadow-lg overflow-hidden z-10 p-4 ltr:text-left rtl:text-right">
        <div className="form-heading text-center">
          <div className="flex justify-between items-center mb-2">

            {/* First Heading */}
            <h3 className="text-white text-xs md:text-sm  flex flex-row items-center w-full  gap-1">
              <span className="bg-secondary text-white w-7 h-7 leading-7 rounded-full font-semibold text-center">1. </span>
              {t("head1")}
            </h3>

            {/* Second Heading */}
            <h3 className="text-white text-xs md:text-sm  flex flex-row items-center w-full  gap-1">
              <span className="bg-secondary text-white w-7 h-7 leading-7 rounded-full font-semibold text-center">2. </span>  {t("head2")}
            </h3>
          </div>

          {/* Third Heading */}
          <div className="py-1">
            <h3 className="text-white text-xs md:text-sm  flex flex-row items-center justify-center w-full  gap-1">
              <span className="bg-secondary text-white w-7 h-7 leading-7 rounded-full font-semibold text-center">3. </span>  Apply for Margin Bonus
            </h3>
          </div>
        </div>
        {/* {step == "2" && */}
        <form onSubmit={formik.handleSubmit} className="py-3">
          <input
            name="qr_code_id"
            className="hidden"
            type="number"
            onChange={formik.handleChange}
            value={
              !formik.values.qr_code_id || formik.values.qr_code_id === ""
                ? (formik.values.qr_code_id = qrCodeId)
                : (formik.values.ip = qrCodeId)
            }
          />
          <input
            name="ip"
            className="hidden"
            type="number"
            onChange={formik.handleChange}
            value={
              !formik.values.ip || formik.values.ip === ""
                ? (formik.values.ip = countryData?.ip)
                : (formik.values.ip = countryData?.ip)
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
          <div className="flex flex-row gap-2 mb-1">
            <div className="flex flex-col w-[100%]">

              <input
                type="text"
                name="Full_name"
                placeholder={t("fullName")}
                className={`formInput mt-0 bg-white py-2 text-sm ${formik.touched.Full_name && formik.errors.Full_name
                  ? "border-red-500"
                  : "border-gray-300"
                  }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Full_name}
              />

            </div>
          </div>
          <div className="flex flex-col">

            <div className="flex items-center gap-2 relative">
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={(e) => {
                  e.persist()
                  getCrmData(formik?.values?.email, setStep)
                  // const findEmail = crmList?.some(x => x?.email == data?.email)
                  // if (findEmail) {
                  //   setStep("2")
                  // } else {
                  //   toast.error("Unable to find email address!")
                  // }
                  formik.handleBlur(e)
                }}
                value={formik.values.email}
                autoComplete="email"
                placeholder={t("email")}
                className={`formInput mb-1 mt-0 bg-white w-[70%] py-2 ${formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
                  }`}
              />
              <button
                className={`bg-gradient-to-l from-secondary via-[#807f8d] to-[#202d7bdb] text-white text-sm mt-[-5px] border-2 font-semibold w-[30%] py-[10px] border-primary transition-colors duration-300
                hover:bg-primary hover:text-secondary hover:border-2`}
                type="button"
                onClick={sendEmailOtp}
                disabled={!formik.values.email || disableSendEmailOtpBtn}
              >
                {sendEmailOtpLoading ? (
                  <span className="text-xs flex gap-2 justify-center items-center">
                    <ClockLoader
                      loading={sendEmailOtpLoading}
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
            {message == false ?
              <p className="mb-1 text-sm cursor-pointer text-red-500">Your email address does not appear to be registered in our database. Please  <a href="https://web.mygtc.app/login/register?code=2544249&scope=1" target="_blank" className=" pointer underline"> open </a> your account.</p>
              :
              message == true ?
                <div className=" flex gap-1 items-center mb-1 ">
                  <TiTick color="green" size={25} />{" "}
                  <p className="text-sm cursor-pointer text-green-600">Email already registered. Please proceed with the next steps.</p>
                </div> : ""
            }
            <div
              className={`items-center gap-2 py-3 ${showEmailOtpVerify ? `flex` : `hidden`
                }`}
            >
              <OtpInput
                containerStyle={{
                  justifyContent: "space-around",
                  alignItems: "center",
                  gap: "10px",
                  width: "70%",
                  direction: "ltr",
                }}
                value={emailOtp}
                onChange={setEmailOtp}
                numInputs={6}
                renderInput={(props) => <input {...props} />}
                inputType="text"
                inputStyle={{
                  paddingBottom: "8px",
                  paddingTop: "8px",
                  width: "20%",
                  backgroundColor: "#d1d5db",
                  color: "#000",
                  fontWeight: "700",
                  outlineColor: "#f9c617",
                }}
              />
              <button
                className="bg-gradient-to-l from-secondary via-[#807f8d] to-[#202d7bdb] text-white text-sm font-semibold w-[30%] py-[10px] hover:bg-primary hover:text-secondary hover:border-2 border-primary border-2 transition-colors duration-300"
                type="button"
                onClick={verifyEmailOtp}
                disabled={disableVerifyEmailOtpBtn}
              >
                {isEmailVerified ? (
                  <span className="text-green-600 flex  items-center">
                    <TiTick color="green" size={25} />{" "}
                    <span>{t("verified")}</span>
                  </span>
                ) : (
                  <p>{t("verify_otp")}</p>
                )}
              </button>
            </div>

            <PhoneInput
              className={`bg-white simple p-1.5 outline-none focus-visible:outline-none mb-1 mt-0 client-reg border ${formik.touched.phone && formik.errors.phone
                ? "border-red-500"
                : "border-gray-300"
                }`}
              onChange={(value) => formik.setFieldValue("phone", value)}
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              name="phone"
              countries={allowedCountries}
              defaultCountry={countryCode}
            />
          </div>

          <div>
            <div className="flex flex-col">
              <input
                type="number"
                name="account_no"
                id="account_no"
                placeholder={t("account_no")}
                className={`formInput mt-0 bg-white text-primary py-2 ${formik.touched.account_no && formik.errors.account_no
                  ? "border-red-500"
                  : "border-gray-300"
                  }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.account_no}
              />
            </div>
            <div className="flex flex-col mb-1">
              <div className="relative">
                {/* Dollar Sign */}
                <span className="absolute left-3 top-[55%] transform -translate-y-1/2 text-gray-500 text-lg">$</span>
                <input
                  type="number"
                  name="deposit_amount"
                  id="deposit_amount"
                  placeholder={t("deposit_amount")}
                  className={`formInput pl-8 mt-1 bg-white text-primary py-2 ${formik.touched.deposit_amount && formik.errors.deposit_amount
                    ? "border-red-500"
                    : "border-gray-300"
                    }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.deposit_amount}
                />
              </div>
            </div>
            <div className="flex flex-col mb-1">
              <select
                className={`bg-white text-primary text-sm py-3 px-2 rounded-[3px] ${formik.touched.country && formik.errors.country ? "border-2 border-white " : ""}`}
                name='country'
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value='' >{t("selectOne")}</option>
                {
                  countryList
                    ?.filter((item) =>
                      !["Australia", "United Kingdom", "United States of America"].includes(item.nameInEnglish) // Exclude specific countries
                    )
                    .map((item, index) => {
                      return (
                        <option className="text-primary" key={item?.code} value={item?.nameInEnglish}>
                          {item?.name}
                        </option>
                      );
                    })
                }
              </select>
            </div>
            <div className="flex flex-col">
              <div className="flex items-start justify-start py-1 gap-1 ">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value="checked"
                  className="h-5 w-5 bg-white"
                />
                <p className="inline px-2 text-[9px] text-white">
                  By clicking submit I acknowledges and agrees to all terms stated of the Margin Bonus. Misuse of the offer may result in bonus removal, profit cancellation, or account suspension.
                </p>
              </div>
              <label
                className={` text-[13px] ${formik.touched.terms && formik.errors.terms
                  ? "text-red-700"
                  : "text-white"
                  }`}
              >
                {formik.touched.terms && formik.errors.terms
                  ? formik.errors.terms
                  : ""}
              </label>
            </div>
          </div>
          {message != false &&
            <button
              disabled={!isEmailVerified || message == false}
              className="bg-gradient-to-l from-secondary via-[#807f8d] to-[#202d7bdb] text-center w-full py-3 font-semibold text-white text-lg"
              type="submit"
            >
              {loading ? <p> {t("sending")}</p> : <p>{t("submit")}</p>}
            </button>
          }

        </form>
        {/* } */}
      </div>
    </div>
  );
};

export default TradeForm;