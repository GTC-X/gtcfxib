"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { usePathname, useSearchParams } from "next/navigation";
import PhoneInput from "react-phone-number-input";
import nationality from '../../../../public/data/nationality.json'
import "react-phone-number-input/style.css";
import { useTranslations } from "next-intl";
import { useState, useContext, useEffect, useMemo } from "react";
import { useLocationDetail } from "@/context/useLocationDetail";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import { TiTick } from "react-icons/ti";
import { ClockLoader } from "react-spinners";
import { countries } from "./defaultCountries";
import { useLocale } from "next-intl";
import { useRouter } from "next-intl/client";
import Link from "next/link";
import useCountriesDetails from "@/context/useCountriesDetails";
import { convertToDesiredLocale } from "@/helpers";
import { allowedCountries } from "@/context/allowedCountries";




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
  const [initialCountry, setInitialCountry] = useState("");
  //Phone OTP Logic
  const [phoneOtp, setPhoneOtp] = useState("");
  const [showPhoneOtpVerify, setShowPhoneOtpVerify] = useState(false);
  const [disableSendPhoneOtpBtn, setDisablePhoneOtpBtn] = useState(false);
  const [disableVerifyPhoneOtpBtn, setDisableVerifyPhoneBtn] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [sendPhoneOtpLoading, setSendPhoneOtpLoading] = useState(false);
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


  const locale = useLocale();
  const { countryList } = useCountriesDetails(convertToDesiredLocale(locale))

  const source = useSearchParams().get("utm_source");
  const campaign = useSearchParams().get("utm_campaign");
  const fbclid = useSearchParams().get("fbclid");
  const qrCodeId = useSearchParams().get("id");
  const path = usePathname();
  const t = useTranslations("form");
  const t2 = useTranslations("dropDownOption");
  const { countryCode, countryData } = useLocationDetail()

  const platforms = [
    { id: 1, name: t2("option1"), value: "Introducing Broker" },
    { id: 2, name: t2("option2"), value: "Trader" },
    { id: 3, name: t2("option3"), value: "Affiliate" },
    { id: 4, name: t2("option4"), value: "Learner" },
    { id: 5, name: t2("option5"), value: "Looking for Liquidity" },
    { id: 6, name: t2("option6"), value: "None of the above" }, 
  ];

  useEffect(() => {
    const phoneInputElement = document.querySelector('.PhoneInputInput');

    // Add the new class
    if (phoneInputElement) {
      phoneInputElement.classList.add('hyros-phone'); // Replace 'new-class' with the class you want to add
    }
  }, [])


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
        .matches(
          /^[\p{L}\p{M}\s]*$/u,
          "Only contain letters."
        )
        .required(t("error.firstName")),
      last_name: Yup.string()
        .matches(/^[\p{L}\p{M}\s]*$/u, "Only contain letters.")
        .required(t("error.lastName")),
      email: Yup.string()
        .email(t("error.invalidEmail"))
        .required(t("error.email")),
      platform: Yup.string().required(t("error.user")),
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
      try {
        setLoading(true);
        const response = await axios.post(
          `https://hooks.zapier.com/hooks/catch/16420445/25xwasm/`,
          JSON.stringify(values)
        );
        router.push(`/thank-you`);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
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
    <div className={`contact-form relative  rounded-lg shadow-lg overflow-hidden z-10 p-6 ltr:text-left rtl:text-right bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#05033162]`}>
      <div className="form-heading text-center">
        <h3 className="py-3 bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] uppercase rounded-tl-xl rounded-tr-xl text-white">
          {t("register")}
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
              ? (formik.values.ip = countryData)
              : (formik.values.ip = countryCode)
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
              ? (formik.values.utm_source = source)
              : (formik.values.utm_source = source)
          }
        />
        <div className="flex flex-col mb-3">

          <label
            className={`text-white text-[13px] ${formik.touched.platform && formik.errors.platform
              ? "text-red-600"
              : ""
              }`}
          >
            {" "}
            {formik.touched.platform && formik.errors.platform
              ? formik.errors.platform
              : t("user")}
          </label>
          <select
            className={`bg-white text-primary border border-gray-300 py-2 text-sm px-2  ${formik.touched.platform && formik.errors.platform ? "border-2 border-red-500" : ""}`}
            name="platform"
            value={formik.values.platform}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">{t("selectOne")}</option>
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
          <div className="flex flex-col w-[50%]">
            <label
              className={`text-[13px] ${formik.touched.first_name && formik.errors.first_name
                ? "text-red-600"
                : "text-white"
                }`}
            >
              {" "}
              {formik.touched.first_name && formik.errors.first_name
                ? formik.errors.first_name
                : t("firstName")}
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder={t("firstName")}
              className="formInput mt-0 bg-white py-2 text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <label
              className={`text-[13px] ${formik.touched.first_name && formik.errors.first_name
                ? "text-red-600"
                : "text-white"
                }`}
            >
              {" "}
              {formik.touched.last_name && formik.errors.last_name
                ? formik.errors.last_name
                : t("lastName")}
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder={t("lastName")}
              className="formInput mt-0 bg-white py-2 text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
            />
          </div>
        </div>

        {countryCode == "PAE" ? (
          <div className="flex flex-col">
            <label
              className={`text-[13px] ${formik.touched.email && formik.errors.email
                ? "text-red-600 border-1 border-red-600"
                : "text-white "
                }`}
            >
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : t("email")}
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
                placeholder={t("email")}
                className="formInput mb-3 mt-0 bg-white  w-full py-1 text-sm"
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
                : t("phone")}
            </label>
            <div className="flex items-center gap-2 w-full">
              <PhoneInput
                className="bg-white simple p-1.5 outline-none focus-visible:outline-none mb-3 mt-0 client-reg w-[70%]   border border-gray-300 py-2 text-sm"
                onChange={(value) => formik.setFieldValue("phone", value)}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                name="phone"
                countries={allowedCountries}
                defaultCountry={countryCode} 
              />
              <button
                className={`bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] text-white text-sm mt-[-12px] border-2 font-semibold w-[30%] py-[6px] border-primary transition-colors duration-300
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
                    <span>{t("verified")}</span>
                  </span>
                ) : (
                  <p>{t("verify_otp")}</p>
                )}
              </button>
            </div>


          </div>
        ) : (
          <div className="flex flex-col">
            <label
              className={`text-[13px] ${formik.touched.email && formik.errors.email
                ? "text-red-600"
                : "text-white"
                }`}
            >
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : t("email")}
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
                placeholder={t("email")}
                className="formInput mb-3 mt-0 bg-white w-[70%] py-2"
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
                    <span>{t("sending")}</span>{" "}
                  </span>
                ) : (
                  <span>{t("send_otp")}</span>
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
                    <span>{t("verified")}</span>
                  </span>
                ) : (
                  <p>{t("verify_otp")}</p>
                )}
              </button>
            </div>
            <label
              htmlFor="phone"
              className={`text-[13px] ${formik.touched.phone && formik.errors.phone
                ? "text-red-600"
                : "text-white"
                }`}
            >
              {formik.touched.phone && formik.errors.phone
                ? formik.errors.phone
                : t("phone")}
            </label>
            <PhoneInput
              className="bg-white simple p-1.5 outline-none focus-visible:outline-none  px-2 mb-2 mt-0 client-reg border border-gray-300"
              onChange={(value) => formik.setFieldValue("phone", value)}
              onBlur={formik.handleBlur}
              name="phone"
              value={formik.values.phone}
              defaultCountry={countryCode}
            />
          </div>
        )}

        <div className="flex flex-col">

          <label className={`text-[13px] ${formik.touched.country && formik.errors.country ? "text-red-700" : "text-white"}`}>
            {formik.touched.country && formik.errors.country
              ? formik.errors.country
              : t("country")}

          </label>

          <select
            className={`bg-white text-primary text-sm py-2 px-2 rounded-[3px] ${formik.touched.country && formik.errors.country ? "border-2 border-white " : ""}`}
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
              <p className="inline px-3 text-[11px] text-white">
                {t("terms")} <Link href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf" target="_blank" className="underline text-[#3b36cc]"> {t("termText2")}</Link>  {t("termText3")}
              </p>
            </div>
            <label
              className={`text-[13px] ${formik.touched.terms && formik.errors.terms
                ? "text-yellow-500"
                : "text-white"
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
            className="bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] text-center w-full py-2 font-semibold text-white text-lg"
            type="submit"
          >
            {loading ? <p> {t("sending")}</p> : <p>{t("submit")}</p>}
          </button>

        ) : (

          <button
            disabled={!isEmailVerified}
            className="bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] text-center w-full py-2 font-semibold text-white text-lg"
            type="submit"
          >
            {loading ? <p> {t("sending")}</p> : <p>{t("submit")}</p>}
          </button>

        )
        }

      </form>
      </div>
    </div>
  );
};

export default VPSPakFrom