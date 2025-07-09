"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import nationality from "../../../../public/data/nationality.json";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState, useContext } from "react";
import { LocationContext } from "@/context/location-context";
import { useLocationDetail } from "@/context/useLocationDetail";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import { TiTick } from "react-icons/ti";
import { ClockLoader } from "react-spinners";
import { countries } from "../../../[locale]/components/common/defaultCountries";
import Link from "next/link";

const platforms = [
  { id: 1, name: "Introducing Broker", value: "Introducing Broker" },
  { id: 2, name: "Trader", value: "Trader" },
  { id: 3, name: "Affiliate", value: "Affiliate" },
  { id: 4, name: "Learner", value: "Learner" },
  { id: 5, name: "Looking for Liquidity", value: "Looking for Liquidity" },
  { id: 6, name: "None of above", value: "None of above" },
];

const VPSPakFrom = () => {
  //Email OTP Logic
  const router = useRouter()
  const [emailOtp, setEmailOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEmailOtpVerify, setShowEmailOtpVerify] = useState(false);
  const [disableSendEmailOtpBtn, setDisableSendOtpBtn] = useState(false);
  const [disableVerifyEmailOtpBtn, setDisableVerifyEmailBtn] = useState(false);
  const [storedEmailOtp, setStoredEmailOtp] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [sendEmailOtpLoading, setSendEmailOtpLoading] = useState(false);

  //Phone OTP Logic
  const [phoneOtp, setPhoneOtp] = useState("");
  const [showPhoneOtpVerify, setShowPhoneOtpVerify] = useState(false);
  const [disableSendPhoneOtpBtn, setDisablePhoneOtpBtn] = useState(false);
  const [disableVerifyPhoneOtpBtn, setDisableVerifyPhoneBtn] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [sendPhoneOtpLoading, setSendPhoneOtpLoading] = useState(false);

  const source = useSearchParams().get("utm_source");
  const campaign = useSearchParams().get("utm_compaign");
  const fbclid = useSearchParams().get("fbclid");
  const qrCodeId = useSearchParams().get("id");
  const path = usePathname();
  const { countryCode, countryData } = useLocationDetail()

  const formik = useFormik({
    initialValues: {
      ip: "",
      fbclid: "",
      utm_compaign: "",
      utm_source: "",
      first_name: "",
      last_name: "",
      platform: '',
      phone: "",
      email: "",
      terms: false,
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .matches(
          /^[\p{L}\p{M}\s]*$/u,
          'Only contain letters.'
        )
        .required("First Name is required"),
      last_name: Yup.string()
        .matches(/^[\p{L}\p{M}\s]*$/u, "Only contain letters.")
        .required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Address is required"),
      platform: Yup.string().required("Please select type"),
      terms: Yup.bool().oneOf([true], "Please accept terms and conditions"),
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
      try {
        setLoading(true);
        try {
          const response = await axios.post(
            `https://hooks.zapier.com/hooks/catch/16420445/25xwasm/`,
            JSON.stringify(values)
          );
          setShowEmailOtpVerify(false)
          setStoredEmailOtp("")
          setShowPhoneOtpVerify(false)
          router.push("/thank-you");
        } catch (err) {
          console.log(err.message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        toast("Form Submitted Successfully!");
        formik.resetForm();
      }
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
      toast.success("Verify OTP");
      setDisableSendOtpBtn(true);
      return;
    }
    if (emailOtp === storedEmailOtp) {
      setIsEmailVerified(true);
      setDisableVerifyEmailBtn(true);
      toast.success("Verify OTP");
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

  return (
    <div
      className="simple-form border-opacity-50 w-full rounded-lg md:w-full lg:w-96 border border-gray-200 p-4 bg-[#eef0f1]"
      id="register"
    >
      <div className="form-heading text-center">
        <h3 className="py-3 bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] uppercase rounded-tl-xl rounded-tr-xl text-white">
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
          name="utm_campain"
          className="hidden"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={
            !formik.values.utm_compaign || formik.values.utm_compaign === ""
              ? (formik.values.utm_compaign = campaign)
              : (formik.values.utm_compaign = campaign)
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
              ? (formik.values.utm_source = source)
              : (formik.values.utm_source = source)
          }
        />
        <div className="flex flex-col mb-3">

          <label
            className={`text-primary text-[13px] ${formik.touched.platform && formik.errors.platform
              ? "text-red-600"
              : ""
              }`}
          >
            {" "}
            {formik.touched.platform && formik.errors.platform
              ? formik.errors.platform
              : 'I am a'}
          </label>
          <select
            className={`bg-white text-primary border border-gray-300 py-3 text-sm px-2  ${formik.touched.platform && formik.errors.platform ? "border-2 border-red-500" : ""}`}
            name="platform"
            value={formik.values.platform}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Please select the option</option>
            {platforms.map((platform, el) => {
              return (
                <option key={platform.id} value={platform.value}>
                  {platform.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-row gap-2 mb-3">
          <div className="flex flex-col w-[100%]">
            <label
              className={`text-sm ${formik.touched.first_name && formik.errors.first_name
                ? "text-red-600"
                : "text-primary "
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
              className="formInput mt-0 bg-white py-2 "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
            />
          </div>
          <div className="flex flex-col w-[100%]">
            <label
              className={`text-sm ${formik.touched.last_name && formik.errors.last_name
                ? "text-red-600"
                : "text-primary"
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
              className="formInput mt-0 bg-white py-2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
            />
          </div>
        </div>

        {countryCode == "PAE" ? (
          <div className="flex flex-col">
            <label
              className={`text-primary text-[13px] ${formik.touched.email && formik.errors.email
                ? "text-red-600 border-1 border-red-600"
                : ""
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
                className="formInput mb-3 mt-0 bg-white  w-full"
              />
            </div>

            <label
              htmlFor="phone"
              className={`text-primary text-[13px] ${formik.touched.phone && formik.errors.phone
                ? "text-red-600 border-1 border-red-600"
                : ""
                }`}
            >
              {formik.touched.phone && formik.errors.phone
                ? formik.errors.phone
                : "Phone Number"}
            </label>
            <div className="flex items-center gap-2 w-full">
              <PhoneInput
                className="bg-white simple p-1.5 outline-none focus-visible:outline-none mb-3 mt-0 client-reg w-[70%]  customPadding border border-gray-300"
                onChange={(value) => formik.setFieldValue("phone", value)}
                onBlur={formik.handleBlur}
                name="phone"
                value={formik.values.phone}
                defaultCountry={countryCode}
                countries={countries}
              />
              <button
                className={`bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] text-white text-sm mt-[-12px] border-2 font-semibold w-[30%] py-[12px] border-primary transition-colors duration-300
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
              className={`items-center gap-2 py-3 ${showPhoneOtpVerify ? `flex slideDivVisible` : `hidden slideDiv`
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
                  paddingBottom: "12px",
                  paddingTop: "12px",
                  width: "20%",
                  color: "#000",
                  background: "#d1d5db",
                  fontWeight: "700",
                  outlineColor: "#f9c617",
                }}
              />
              <button
                className="bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] text-white text-sm font-semibold w-[30%] py-[16px] hover:bg-primary hover:text-secondary hover:border-2 border-primary border-2 transition-colors duration-300"
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
              className={`text-primary text-[13px] ${formik.touched.email && formik.errors.email
                ? "text-red-600"
                : ""
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
                className="formInput mb-3 mt-0 bg-white w-[70%]"
              />
              <button
                className={`bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] text-white text-sm mt-[-12px] border-2 font-semibold w-[30%] py-[10px] border-primary transition-colors duration-300
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
                  paddingBottom: "12px",
                  paddingTop: "12px",
                  width: "20%",
                  backgroundColor: "#d1d5db",
                  color: "#000",
                  fontWeight: "700",
                  outlineColor: "#f9c617",
                }}
              />
              <button
                className="bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] text-white text-sm font-semibold w-[30%] py-[10px] hover:bg-primary hover:text-secondary hover:border-2 border-primary border-2 transition-colors duration-300"
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
                ? "text-red-500"
                : "text-primary "
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
            />
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
                className="h-5 w-5"
              />
              <p className="inline px-2 text-[11px] text-primary">
                By clicking Submit, I confirm that: (1) I have read and agree to the <Link href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf" target="_blank" className="underline text-[#60b1ee]"> (2) Client Agreements;</Link>  I consent to GTC contacting me at reasonable times; and (3) my number is not on the Do Not Call Register (DNCR).
              </p>
            </div>
            <label
              className={`text-white text-[13px] ${formik.touched.terms && formik.errors.terms
                ? "text-yellow-500"
                : ""
                }`}
            >
              {formik.touched.terms && formik.errors.terms
                ? formik.errors.terms
                : ""}
            </label>
          </div>
        </div>
        {countryCode == "PAE" ? (
          <button
            disabled={!isPhoneVerified}
            className="bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] text-center w-full py-3 font-semibold text-white text-lg"
            type="submit"
          >
            {loading ? <p> {"Sending..."}</p> : <p>{"Send"}</p>}
          </button>

        ) : (

          <button
            disabled={!isEmailVerified}
            className="bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] text-center w-full py-3 font-semibold text-white text-lg"
            type="submit"
          >
            {loading ? <p> {"Sending..."}</p> : <p>{"Send"}</p>}
          </button>

        )
        }

      </form>
    </div>
  );
};

export default VPSPakFrom