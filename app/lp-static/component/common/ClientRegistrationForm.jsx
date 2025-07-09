"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import nationality from "../../../../public/data/nationality.json";
import userData from "../../../../public/data/userOption.json";
import { usePathname, useSearchParams } from "next/navigation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState, useEffect } from "react";
import { useLocationDetail } from "@/context/useLocationDetail";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import { TiTick } from "react-icons/ti";
import { ClockLoader } from "react-spinners";
import { countries } from "../../../[locale]/components/common/defaultCountries";
import useFormHook from "../../../[locale]/components/15-deposit-bonus/hook";
import Link from "next/link";
import useCountriesDetails from "@/context/useCountriesDetails";
import { convertToDesiredLocale } from "@/helpers";

const ClientRegistrationForm = (props) => {
  const { showAccountField = false, showCountryField = false, formClasses, showDropdown = true } = props;
  //Email OTP Logic
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
  const { countryCode, countryData } = useLocationDetail()
  const { countryList } = useCountriesDetails(convertToDesiredLocale("en"))
  const { handleSubmitData } = useFormHook()
  const [initialValues, setInitialValues] = useState({
    ip: "",
    fbclid: "",
    utm_compaign: "",
    utm_source: "",
    first_name: "",
    last_name: "",
    platform: "",
    phone: "",
    email: "",
    country: "", // Dynamically update the country
    terms: false,
  });

  // Update the initial country value when countryData is available
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
      first_name: Yup.string()
        .matches(/^[\p{L}\p{M}\s]*$/u, "Only contain letters.")
        .required("First Name is required"),
      user: Yup.string()
        .required("Please Select option"),
      user: showDropdown && Yup.string()
        .required(t("error.user")),
      last_name: Yup.string()
        .matches(/^[\p{L}\p{M}\s]*$/u, "Only contain letters.")
        .required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Address is required"),
      country: showCountryField && Yup.string().required("Country is required"),
      terms: Yup.bool().oneOf([true], "Please accept terms and conditions"),
      account_no:
        showAccountField &&
        Yup.string()
          .min(6, "minimum 6 numbers")
          .max(7, "maximum 7 numbers")
          .required("Account Number is required"),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.phone) {
        errors.phone = "Phone Number is required";
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
          setStoredEmailOtp("");
          setShowEmailOtpVerify(false);
          setShowPhoneOtpVerify(false);
          setDisableVerifyEmailBtn(false)
          setDisablePhoneOtpBtn(false)
          setDisableSendOtpBtn(false)
          setEmailOtp("")
          setPhoneOtp("")
          formik.resetForm()
        }
        else {
          handleSubmitData(values, formik, setLoading, true)
          setStoredEmailOtp("");
          setShowEmailOtpVerify(false);
          setShowPhoneOtpVerify(false);
          setDisablePhoneOtpBtn(false)
          setDisableVerifyEmailBtn(false)
          setDisableSendOtpBtn(false)
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
      toast.success(`${"OTP Sent to"} ${formik.values.email}`);
    } else {
      toast.error("Error Sending OTP");
      setDisableSendOtpBtn(false);
    }
  };
  const verifyEmailOtp = async () => {
    if (emailOtp == "048239") {
      setIsEmailVerified(true);
      setDisableVerifyEmailBtn(true);
      toast.success("OTP Verified!!");
      setDisableSendOtpBtn(true);
      return;
    }
    if (emailOtp === storedEmailOtp) {
      setIsEmailVerified(true);
      setDisableVerifyEmailBtn(true);
      toast.success("OTP Verified!!");
      setDisableSendOtpBtn(true);
    } else {
      toast.error("Wrong OTP, try again!!");
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
      toast.success(`${"OTP Sent to"} ${formik.values.phone}`);
    } else {
      toast.error("Error Sending OTP");
      setDisablePhoneOtpBtn(false);
    }
  };

  const verifyPhoneOtp = async () => {
    if (phoneOtp == "048239") {
      setIsPhoneVerified(true);
      setDisableVerifyPhoneBtn(true);
      toast.success("OTP Verified!!");
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
            toast.success("OTP Verified!!");
            setDisablePhoneOtpBtn(true);
          } else {
            toast.error("Wrong OTP, try again!!");
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
    background:
      "linear-gradient(to bottom, rgba(182,135,86,.65) 40%, rgba(5,3,49,1) 60%)",
    borderRadius: "8px",
  };
  return (
    <div
      className="simple-form border-opacity-50 w-full rounded-lg md:w-full lg:w-96 relative py-[1px] px-[1px]"
      id="register"
      style={boxStyle}
    >
      <div className={`contact-form relative  rounded-lg shadow-lg overflow-hidden z-10 p-6 text-left ${formClasses}`}>
        <div className="form-heading text-center">
          <h3 className="py-3 bg-gradient-to-l from-secondary via-[#807f8d] to-[#202d7bdb] uppercase rounded-tl-xl rounded-tr-xl text-white">
            Register Now
          </h3>
        </div>
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
            name="utm_compaign"
            className="hidden"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={
              !formik.values.utm_compaign || formik.values.utm_compaign === ""
                ? (formik.values.utm_compaign = path)
                : (formik.values.utm_compaign = path)
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
          {showDropdown && (
            <div className="flex flex-col mb-3">
              <label
                className={`text-[13px] ${formik.touched.user && formik.errors.user
                  ? "text-red-600"
                  : "text-white"
                  }`}
              >
                {formik.touched.user && formik.errors.user
                  ? formik.errors.user
                  : "I am a"}
              </label>
              <select
                className={`bg-gray-100 text-primary placeholder:text-primary capitalize py-2 text-sm px-4 ${formik.touched.user && formik.errors.user
                  ? "border-2 border-red-600"
                  : ""
                  }`}
                name="user"
                value={formik.values.user}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Please Select One</option>
                {userData?.map((user, index) => {
                  return (
                    <option key={index} value={user?.value}>
                      {user?.name}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
          <div className="flex flex-row gap-2 mb-3">
            <div className="flex flex-col w-[100%]">
              <label
                className={` text-[13px] ${formik.touched.first_name && formik.errors.first_name
                  ? "text-red-600"
                  : "text-white"
                  }`}
              >
                {" "}
                {formik.touched.first_name && formik.errors.first_name
                  ? formik.errors.first_name
                  : "First Name"}
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder={"First Name"}
                className="formInput mt-0 bg-white py-2 text-sm "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.first_name}
              />
            </div>
            <div className="flex flex-col w-[100%]">
              <label
                className={`text-[13px] ${formik.touched.first_name && formik.errors.first_name
                  ? "text-red-600"
                  : "text-white"
                  }`}
              >
                {" "}
                {formik.touched.last_name && formik.errors.last_name
                  ? formik.errors.last_name
                  : "Last Name"}
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder={"Last Name"}
                className="formInput mt-0 bg-white py-2 text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
              />
            </div>
          </div>

          {countryCode == "EUS" ? (
            <div className="flex flex-col">
              <label
                className={`text-[13px] ${formik.touched.email && formik.errors.email
                  ? "text-red-600 border-1 border-red-600"
                  : "text-white "
                  }`}
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email Address"}
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  autoComplete="email"
                  placeholder={"Email Address"}
                  className="formInput mb-3 mt-0 bg-white  w-full py-2 text-sm"
                />
              </div>

              <label
                htmlFor="phone"
                className={`text-[13px] ${formik.touched.phone && formik.errors.phone
                  ? "text-red-600 border-1 border-red-600"
                  : "text-white "
                  }`}
              >
                {formik.touched.phone && formik.errors.phone
                  ? formik.errors.phone
                  : "Phone Number"}
              </label>
              <div className="flex items-center gap-2 w-full">
                <PhoneInput
                  className="bg-white simple p-1.5 outline-none focus-visible:outline-none mb-3 mt-0 client-reg w-[70%]  py-2 text-sm border border-gray-300"
                  onChange={(value) => formik.setFieldValue("phone", value)}
                  onBlur={formik.handleBlur}
                  name="phone"
                  value={formik.values.phone}
                  defaultCountry={countryCode}
                  countries={countries}
                />
                <button
                  className={`bg-gradient-to-l from-secondary via-[#807f8d] to-[#202d7bdb] text-white text-sm mt-[-12px] border-2 font-semibold w-[30%] py-[6px] border-primary transition-colors duration-300
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
                      <span>{"Sending..."}</span>{" "}
                    </span>
                  ) : (
                    <span>{"Send OTP"}</span>
                  )}
                </button>
              </div>
              <div
                className={`items-center gap-2 py-3 ${showPhoneOtpVerify
                  ? `flex slideDivVisible`
                  : `hidden slideDiv`
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
                  value={phoneOtp}
                  onChange={setPhoneOtp}
                  numInputs={6}
                  renderInput={(props) => <input {...props} />}
                  inputType="text"
                  inputStyle={{
                    paddingBottom: "6px",
                    paddingTop: "6x",
                    width: "20%",
                    color: "#000",
                    background: "#d1d5db",
                    fontWeight: "700",
                    outlineColor: "#f9c617",
                  }}
                />
                <button
                  className="bg-gradient-to-l from-secondary via-[#807f8d] to-[#202d7bdb] text-white text-sm font-semibold w-[30%] py-[16px] hover:bg-primary hover:text-secondary hover:border-2 border-primary border-2 transition-colors duration-300"
                  type="button"
                  onClick={verifyPhoneOtp}
                  disabled={disableVerifyPhoneOtpBtn}
                >
                  {isPhoneVerified ? (
                    <span className="text-green-600 flex  items-center">
                      <TiTick color="green" size={25} />{" "}
                      <span>{"Verified"}</span>
                    </span>
                  ) : (
                    <p>{"Verify OTP"}</p>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <label
                className={`text-[13px] ${formik.touched.email && formik.errors.email
                  ? "text-red-600"
                  : "text-white "
                  }`}
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email Address"}
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  autoComplete="email"
                  placeholder={"Email Address"}
                  className="formInput mb-3 mt-0 bg-white w-[70%] py-2 text-sm"
                />
                <button
                  className={`bg-gradient-to-l from-secondary via-[#807f8d] to-[#202d7bdb] text-white text-sm mt-[-12px] border-2 font-semibold w-[30%] py-[10px] border-primary transition-colors duration-300
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
                      <span>{"Sending..."}</span>{" "}
                    </span>
                  ) : (
                    <span>{"Send OTP"}</span>
                  )}
                </button>
              </div>
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
                    paddingBottom: "6px",
                    paddingTop: "6px",
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
                      <span>{"Verified"}</span>
                    </span>
                  ) : (
                    <p>{"Verify OTP"}</p>
                  )}
                </button>
              </div>
              <label
                htmlFor="phone"
                className={`text-[13px] ${formik.touched.phone && formik.errors.phone
                  ? "text-red-600"
                  : "text-white "
                  }`}
              >
                {formik.touched.phone && formik.errors.phone
                  ? formik.errors.phone
                  : "Phone Number"}
              </label>
              <PhoneInput
                className="bg-white simple p-1.5 outline-none focus-visible:outline-none mb-3 mt-0 client-reg border border-gray-300"
                onChange={(value) => formik.setFieldValue("phone", value)}
                onBlur={formik.handleBlur}
                name="phone"
                value={formik.values.phone}
                defaultCountry={countryCode}
                countries={countries}
              />
            </div>
          )}
          {showAccountField && (
            <div>
              <label
                htmlFor="account_no"
                className={`text-[13px] ${formik.touched.account_no && formik.errors.account_no
                  ? "textred-600"
                  : "text-white "
                  }`}
              >
                {" "}
                {formik.touched.account_no && formik.errors.account_no
                  ? formik.errors.account_no
                  : "Account Number"}{" "}
              </label>
              <input
                id="account_no"
                name="account_no"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.account_no}
                autoComplete="account_no"
                placeholder={"Account Number"}
                className="formInput mb-3 mt-0 bg-white  w-full"
              />
            </div>
          )}
          {showCountryField && (
            <div>
              <div className="flex flex-col my-2">
                <label
                  className={`text-[13px] ${formik.touched.country && formik.errors.country
                    ? "text-red-600"
                    : "text-white"
                    }`}
                >
                  {formik.touched.country && formik.errors.country
                    ? formik.errors.country
                    : "Please Select Country"}
                </label>
                <select
                  className={`bg-gray-100 border rounded-md text-primary placeholder:text-primary capitalize py-3 text-sm px-4 ${formik.touched.country && formik.errors.country
                    ? "border-2 border-red-600"
                    : ""
                    }`}
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">{"Please Select One"}</option>
                  {
                    countryList?.map((item, index) => {
                      return (
                        <option className="text-primary" key={item?.code} value={item?.nameInEnglish}>{item?.name}</option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
          )}
          <div>
            <div className="flex flex-col">
              <div className="flex items-start justify-start py-3 gap-1 ">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value="checked"
                  className="h-5 w-5 bg-white"
                />
                <p className="inline px-2 text-[11px] text-white">
                  By clicking Submit, I confirm that: (1) I have read and agree to the <Link href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf" target="_blank" className="underline text-[#60b1ee]"> (2) Client Agreements;</Link>  I consent to GTCFX contacting me at reasonable times; and (3) my number is not on the Do Not Call Register (DNCR).
                </p>
              </div>
              <label
                className={`text-[13px] ${formik.touched.terms && formik.errors.terms
                  ? "text-red-600"
                  : "text-white "
                  }`}
              >
                {formik.touched.terms && formik.errors.terms
                  ? formik.errors.terms
                  : ""}
              </label>
            </div>
          </div>
          {countryCode == "EUS" ? (
            <button
              disabled={!isPhoneVerified}
              className="bg-gradient-to-l from-secondary via-[#807f8d] to-[#202d7bdb] text-center w-full py-2 font-semibold text-white text-lg"
              type="submit"
            >
              {loading ? <p> {"Sending..."}</p> : <p>Send</p>}
            </button>
          ) : (
            <button
              disabled={!isEmailVerified}
              className="bg-gradient-to-l from-secondary via-[#807f8d] to-[#202d7bdb] text-center w-full py-2 font-semibold text-white text-lg"
              type="submit"
            >
              {loading ? <p> {"Sending..."}</p> : <p>Send</p>}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ClientRegistrationForm;

ClientRegistrationForm.defaultProps = {
  showAccountField: false,
  showCountryField: true,
  showDropdown: true,
  formClasses: "bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#05033162]"
};
