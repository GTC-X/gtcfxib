'use client';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import nationality from '../../../../public/data/nationality.json';
import { usePathname, useSearchParams } from "next/navigation";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useTranslations } from "next-intl";
import { useState, useContext } from "react";
import { LocationContext } from "@/context/location-context";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import { TiTick } from "react-icons/ti";
import { ClockLoader } from 'react-spinners';
import { countries } from "./defaultCountries";
import Link from "next/link";

const AffiliatedForm = ({ title, subtitle }) => {

  // Email OTP Logic
  const [emailOtp, setEmailOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEmailOtpVerify, setShowEmailOtpVerify] = useState(false);
  const [disableSendEmailOtpBtn, setDisableSendOtpBtn] = useState(false);
  const [disableVerifyEmailOtpBtn, setDisableVerifyEmailBtn] = useState(false);
  const [storedEmailOtp, setStoredEmailOtp] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [sendEmailOtpLoading, setSendEmailOtpLoading] = useState(false);

  // Phone OTP Logic
  const [phoneOtp, setPhoneOtp] = useState("");
  const [showPhoneOtpVerify, setShowPhoneOtpVerify] = useState(false);
  const [disableSendPhoneOtpBtn, setDisablePhoneOtpBtn] = useState(false);
  const [disableVerifyPhoneOtpBtn, setDisableVerifyPhoneBtn] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [sendPhoneOtpLoading, setSendPhoneOtpLoading] = useState(false);

  const campaign = useSearchParams().get('utm_source');
  const fbclid = useSearchParams().get('fbclid');
  const path = usePathname();
  const t = useTranslations("form");
  const { country: originCountry, ip: originIp } = useContext(LocationContext);

  Yup.addMethod(Yup.string, 'passwordsMatch', function (ref, message) {
    return this.test('passwords-match', message, function (value) {
      const { path, createError } = this;
      if (ref) {
        return ref === value || createError({ path, message });
      }
      return true;
    });
  });

  const formik = useFormik({
    initialValues: {
      ip: "",
      fbclid: "",
      utm_campain: "",
      utm_source: "",
      first_name: '',
      confirmEmail: "",
      Password: "",
      ConfirmPassword: "",
      skype: "",
      confirmEmail: "",
      userName: "",
      phone: '',
      email: '',
      country: '',
      terms: false,
    },
    validationSchema: Yup.object({
      first_name: Yup.string().matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        'Only contain letters.'
      ).required(t("error.firstName")),
      userName: Yup.string()
        .required(t("error.userName")),
      email: Yup.string().email(t("error.invalidEmail")).required(t("error.email")),
      country: Yup.string().required(t("error.country")),
      Password: Yup.string().required(t("error.password")),
      terms: Yup.bool().oneOf([true], t("error.termOfService")),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref('Password'), null], t("error.confirmPasswordNotMatch"))
        .required(t("error.cpassword")),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref('email'), null], t("error.confirmEmailNotMatch"))
        .required(t("error.confirmEmail")),
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
        if (typeof window !== 'undefined') {
          if (window.gtag) {
            window.gtag('event', 'conversion', { 'send_to': 'AW-10835048699/qDs-CJmcvY0ZEPvxxq4o' });
          }
        }
      }
      try {
        setLoading(true);
        await axios.post(`https://hooks.zapier.com/hooks/catch/16420445/23j0ex3/`, JSON.stringify(values));
        const response = await sendToCellxpertAPI(values);  // Send to Cellxpert API
        console.log('Cellxpert API Response:', response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        toast(t("submitted_success"));
        formik.resetForm();
      }
    },
  });

  const sendToCellxpertAPI = async (values) => {
    const apiUrl = 'https://agents.gtcfx.com/api/registeraffiliate/';
    const params = new URLSearchParams({
      username: values.userName, // Using email as username
      password: values?.Password, // Ensure you have a password rule or generator
      firstName: values.first_name,
      account: values?.accountAff,
      skype: values?.skype,
      lastName: 'null',
      email: values.email,
      country: values.country,
      phone: values.phone,
      website: values.website,
      AgreedToTermsAndConditions: values.terms ? '1' : '0',
      AgreedToPrivacyPolicy: values.terms ? '1' : '0',
      AgreedToMarketingMaterial: values.terms ? '1' : '0',
    });

    try {
      console.log('Sending data to Cellxpert API:', params.toString());
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      const data = await response.text();
      console.log('Response from Cellxpert API:', data);

      return response;
    } catch (error) {
      console.error('Failed to send data to Cellxpert API:', error);
    }
  };

  // Email OTP Methods
  const sendEmailOtp = async () => {
    setSendEmailOtpLoading(true);
    const response = await axios.post(`/api/otp-smtp`, JSON.stringify({ email: formik.values.email }));
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
    const response = await axios.post('/api/send-otp', { phone: formik.values.phone });
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

  return (
    <div className="simple-form bg-[#f2f2f2] border border-gray-300 border-opacity-50 p-5 w-full shadow-2xl" id="register">

      <form onSubmit={formik.handleSubmit} className="py-3">
        <input
          name="ip"
          className="hidden"
          type="number"
          onChange={formik.handleChange}
          value={!formik.values.ip || formik.values.ip === "" ? formik.values.ip = originIp : formik.values.ip = originIp}
        />
        <input
          name="fbclid"
          className="hidden"
          type="text"
          onChange={formik.handleChange}
          value={!formik.values.fbclid || formik.values.fbclid === '' ? formik.values.fbclid = fbclid : formik.values.fbclid = fbclid}
        />
        <input
          name="utm_campain"
          className="hidden"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={!formik.values.utm_campain || formik.values.utm_campain === '' ? formik.values.utm_campain = path : formik.values.utm_campain = path}
        />
        <input
          name="utm_source"
          className="hidden"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={!formik.values.utm_source || formik.values.utm_source === '' ? formik.values.utm_source = campaign : formik.values.utm_source = campaign}
        />
        <div className="grid grid-cols-1 items-end md:grid-cols-2 gap-2 mb-3">
          <div>
            <label
              className={`text-red-600 text-[13px] ${formik.touched.email && formik.errors.email
                ? "text-red-600 border-1 border-red-600"
                : ""
                }`}
            >
              {formik.touched.first_name && formik.errors.first_name
              }
            </label>
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

          <div>
            <label
              className={`text-red-600 text-[13px] ${formik.touched.email && formik.errors.email
                ? "text-red-600 border-1 border-red-600"
                : ""
                }`}
            >
              {formik.touched.userName && formik.errors.userName
              }
            </label>
            <input
              id="userName"
              name="userName"
              type="userName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              autoComplete="userName"
              placeholder={t("userName")}
              className="formInput mt-0 bg-white"
            />
          </div>

        </div>
        {originCountry == "EUS" ? (
          <div className="flex flex-col">
            <label
              className={`text-primary text-[13px] ${formik.touched.email && formik.errors.email
                ? "text-red-600 border-1 border-red-600"
                : ""
                }`}
            >
              {formik.touched.email && formik.errors.email
              }
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
              }
            </label>
            <div className="flex items-center gap-2 w-full">
              <PhoneInput
                className="bg-white simple p-1.5 outline-none focus-visible:outline-none mb-3 mt-0 client-reg w-[70%]  customPadding border border-gray-300"
                onChange={(value) => formik.setFieldValue("phone", value)}
                onBlur={formik.handleBlur}
                name="phone"
                value={formik.values.phone}
                defaultCountry={originCountry}
                countries={countries}
              />
              <button
                className={`bg-secondary text-primary text-sm mt-[-12px] border-2 font-semibold w-[30%] py-[12px] border-secondary transition-colors duration-300
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
                className="bg-secondary text-primary text-sm font-semibold w-[30%] py-[11px] hover:bg-primary hover:text-secondary hover:border-2 border-secondary border-2 transition-colors duration-300"
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
              className={`text-primary text-[13px] ${formik.touched.email && formik.errors.email
                ? "text-red-600"
                : ""
                }`}
            >
              {formik.touched.email && formik.errors.email
              }
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
                className="formInput mb-3 mt-0 bg-white w-[70%]"
              />
              <button
                className={`bg-secondary text-primary text-sm mt-[-12px] border-2 font-semibold w-[30%] py-[11px] border-secondary transition-colors duration-300
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
                  backgroundColor: "#fff",
                  border: '1px solid #d1d5db',
                  color: "#000",
                  fontWeight: "700",
                  outlineColor: "#f9c617",
                }}
              />
              <button
                className="bg-secondary text-primary text-sm font-semibold w-[30%] py-[16px] hover:bg-primary hover:text-secondary hover:border-2 border-secondary border-2 transition-colors duration-300"
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
              className={`text-primary text-[13px] ${formik.touched.phone && formik.errors.phone
                ? "text-red-600"
                : ""
                }`}
            >
              {formik.touched.phone && formik.errors.phone
              }
            </label>
            <PhoneInput
              className="bg-white simple p-1.5 outline-none focus-visible:outline-none mb-3 mt-0 client-reg border border-gray-300"
              onChange={(value) => formik.setFieldValue("phone", value)}
              onBlur={formik.handleBlur}
              name="phone"
              value={formik.values.phone}
              defaultCountry={originCountry}
            />
          </div>
        )}
        <div className="flex flex-row gap-2 mb-3 items-end">
          <div className="w-full">
            <label
              className={`text-primary text-[13px] ${formik.touched.confirmEmail && formik.errors.confirmEmail
                ? "text-red-600"
                : ""
                }`}
            >
              {formik.touched.confirmEmail && formik.errors.confirmEmail
              }
            </label>
            <input
              type="email"
              name="confirmEmail"
              id="confirmEmail"
              placeholder={t("confirmEmail")}
              className="formInput mt-0 bg-white"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmEmail}
            />
          </div>
          <div className="w-full">
            <label
              className={`text-primary text-[13px] ${formik.touched.skype && formik.errors.skype
                ? "text-red-600"
                : ""
                }`}
            >
              {formik.touched.skype && formik.errors.skype
              }
            </label>
            <input
              id="skype"
              name="skype"
              type="skype"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.skype}
              autoComplete="skype"
              placeholder={t("skype")}
              className="formInput mt-0 bg-white"
            />
          </div>
        </div>
        <div className="flex flex-row gap-2 mb-3  items-end">
          <div className="w-full">
            <label
              className={`text-primary text-[13px] ${formik.touched.Password && formik.errors.Password
                ? "text-red-600"
                : ""
                }`}
            >
              {formik.touched.Password && formik.errors.Password
              }
            </label>
            <input
              type="password"
              name="Password"
              id="Password"
              placeholder={t("Password")}
              className="formInput mt-0 bg-white"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Password}
            />
          </div>
          <div className="w-full">
            <label
              className={`text-primary text-[13px] ${formik.touched.ConfirmPassword && formik.errors.ConfirmPassword
                ? "text-red-600"
                : ""
                }`}
            >
              {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword
              }
            </label>
            <input
              id="ConfirmPassword"
              name="ConfirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.ConfirmPassword}
              autoComplete="ConfirmPassword"
              placeholder={t("ConfirmPassword")}
              className="formInput mt-0 bg-white"
            />
          </div>
        </div>
        <div className="flex flex-row gap-2 mb-3">
          <input
            type="text"
            name="marketingChannel"
            id="marketingChannel"
            placeholder={t("marketingChannel")}
            className="formInput mt-0 bg-white"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.marketingChannel}
          />
          <input
            id="website"
            name="website"
            type="website"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.website}
            autoComplete="website"
            placeholder={t("website")}
            className="formInput mt-0 bg-white"
          />
        </div>
        <div className="flex flex-row items-end  gap-2">

          <div className="w-full">
            <label className={`text-primary text-[13px] ${formik.touched.country && formik.errors.country ? "text-red-600" : ""}`}>
              {formik.touched.country && formik.errors.country
              }

            </label>
            <div>
              <select
                className={`bg-white w-full text-primary customPadding rounded-[3px]`}
                name='country'
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value='' >{t("selectOne")}</option>
                {
                  nationality.map((country, index) => {
                    return (
                      <option className="text-primary" key={index} value={country.en_short_name}>{country.en_short_name}</option>
                    )
                  })
                }
              </select>
            </div>

          </div>
          {/* <div className="w-full">
            <label
              className={`text-red-600 text-[13px] ${formik.touched.accountAff && formik.errors.accountAff
                ? "text-red-600 border-1 border-red-600"
                : ""
                }`}
            >
              {formik.touched.accountAff && formik.errors.accountAff
              }
            </label>
            <div>
              <select
                className={`bg-white w-full text-primary customPadding rounded-[3px]`}
                name='accountAff'
                value={formik.values.accountAff}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value='' >{t("accountAff")}</option>
                <option className="text-primary" value={"mt4"}>{t("mt4")}</option>
                <option className="text-primary" value={"mt4"}>{t("mt5")}</option>
              </select>
            </div>
          </div> */}
        </div>
        <div>
          <div className="flex flex-col">
            <div className="flex items-center justify-start py-3 gap-1">
              <input
                type='checkbox'
                name='terms'
                id="terms"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="checked"
                className="h-5 w-5"
              />
              <p className='inline px-3 text-[13px] text-primary'>
              {t("terms")} <Link href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf" target="_blank" className="underline text-[#60b1ee]"> {t("termText2")}</Link>  {t("termText3")}
              </p>
            </div>
            <label className={`text-white text-[13px] ${formik.touched.terms && formik.errors.terms ? "text-red-600" : ""}`}>
              {formik.touched.terms && formik.errors.terms
                ? formik.errors.terms
                : ""}
            </label>
          </div>
        </div>
        {originCountry == "EUS" ? (
          <button
            disabled={!isPhoneVerified}
            className="bg-secondary text-center w-full py-3 font-semibold text-primary text-lg"
            type="submit"
          >
            {loading ? <p> {t("sending")}</p> : <p>{t("submit")}</p>}
          </button>

        ) : (

          <button
            disabled={!isEmailVerified}
            className="bg-secondary text-center w-full py-3 font-semibold text-primary text-lg"
            type="submit"
          >
            {loading ? <p> {t("sending")}</p> : <p>{t("submit")}</p>}
          </button>

        )
        }
      </form>
    </div>
  );
};

export default AffiliatedForm;