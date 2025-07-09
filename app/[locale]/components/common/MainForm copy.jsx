import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import nationality from "../../../../public/data/nationality.json";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useContext, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import { LocationContext } from "@/context/location-context";
import { convertToDesiredLocale, formatDateTime } from "@/helpers";
import { TiTick } from "react-icons/ti";
import { ClockLoader } from 'react-spinners'
import useCountriesDetails from "@/context/useCountriesDetails";
import { useLocationDetail } from "@/context/useLocationDetail";
import { allowedCountries } from "@/context/allowedCountries";
import { RiLockPasswordLine } from "react-icons/ri";

// import { UserIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { CiMail } from 'react-icons/ci';
import { FiPhoneCall } from "react-icons/fi";
import { GiWorld } from "react-icons/gi";
import { RiUserLocationLine } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";

const platforms = [
  { id: 1, name: "MT4", value: "mt4" },
  { id: 2, name: "MT5", value: "mt5" },
];
const MainForm = () => {
  const t = useTranslations("accounts");
  const t2 = useTranslations("form");
  const { country: originCountry, ip: originIp } = useContext(LocationContext);
  const [loading, setLoading] = useState(false);
  const path = usePathname();
  const currentDateTime = new Date();
  const formatted = formatDateTime(currentDateTime, "dd-MM-yyyy HH:mm:ss");

  const [emailOtp, setEmailOtp] = useState("");
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

  const source = useSearchParams().get('utm_source')
  const campaign = useSearchParams().get('utm_campaign');
  const fbclid = useSearchParams().get('fbclid');
  const lang = path.split('/').at(1);
  const locale = useLocale();
  const { countryCode, countryData } = useLocationDetail()
  const { countryList } = useCountriesDetails(convertToDesiredLocale(locale))

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
      first_name: Yup.string().matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        'first name can only contain letters.'
      )
        .required(t("accountForm.error.firstName")),
      last_name: Yup.string().matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        'last name can only contain letters.'
      )
        .required(t("accountForm.error.lastName")),
      email: Yup.string()
        .email("Invalid email address")
        .required(t("accountForm.error.email")),
      date_of_birth: Yup.date().max(new Date(Date.now() - 567648000000), "You must be at least 18 years").required(t("accountForm.error.dob")),
      platform: Yup.string().required(t("accountForm.error.platform")),
      country: Yup.string().required(t("accountForm.error.country")),
      terms: Yup.bool().oneOf([true], 'Please agree to the terms and conditions to proceed.'),
    }),
    validate: (values) => {
      const errors = {};
      if (!values.phone) {
        errors.phone = t("accountForm.error.phone");
      }
      return errors;
    },
    onSubmit: async (values) => {
      if (path.includes('live-account')) {
        console.log("Inside Live Account");
        if (typeof window !== 'undefined') {
          console.log('Window is Defined');
          if (window.gtag) {
            console.log('inside window.gtag');
            window.gtag('event', 'conversion', { 'send_to': 'AW-10835048699/5-EeCJOg7pIZEPvxxq4o' });
          }
        }
      } else if (path.includes('free-demo-account')) {
        console.log("Inside Demo Account");
        if (typeof window !== 'undefined') {
          console.log('Window is Defined');
          if (window.gtag) {
            console.log('inside window.gtag');
            window.gtag('event', 'conversion', { 'send_to': 'AW-10835048699/r0r_CICo7pIZEPvxxq4o' });
          }
        }
      }
      try {
        setLoading(true);
        try {
          const response = await axios.post(`https://hooks.zapier.com/hooks/catch/16420445/3ajp4wk/`, JSON.stringify(values));
          console.log("Response", response);
          if (values.account_type === "Live Account") {
            window.location.href = "/thank-you?account=live"
          }
          else {
            window.location.href = "/thank-you?account=demo"
          }
        } catch (err) {
          console.log(err.message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
  });
  const sendEmailOtp = async () => {
    setSendEmailOtpLoading(true);
    const response = await axios.post(`/api/otp-smtp`, JSON.stringify({ email: formik.values.email }));
    console.log(response);
    if (response.status === 200) {
      setSendEmailOtpLoading(false);
      setStoredEmailOtp(response.data.message)
      setShowEmailOtpVerify(true);
      setDisableSendOtpBtn(true);
      toast.success(`OTP Sent to ${formik.values.email}`)
    } else {
      toast.error('Error Sending OTP');
      setDisableSendOtpBtn(false);
    }
  }
  const verifyEmailOtp = async () => {
    if (emailOtp === storedEmailOtp) {
      setIsEmailVerified(true);
      setDisableVerifyEmailBtn(true);
      toast.success('OTP Verified!!');
      setDisableSendOtpBtn(true);
    }
    else {
      toast.error("Wrong OTP, try again!!");
      setDisableSendOtpBtn(false);
      setIsEmailVerified(false)
    }
  }
  const sendPhoneOtp = async () => {
    const response = await axios.post('/api/send-otp', { phone: formik.values.phone });
    if (response.status === 200) {
      setSendPhoneOtpLoading(false);
      setShowPhoneOtpVerify(true);
      setDisablePhoneOtpBtn(true);
      toast.success(`${t2("otp_sent")} ${formik.values.phone}`)
    } else {
      toast.error(t2("otp_error"));
      setDisablePhoneOtpBtn(false);
    }
  }
  const verifyPhoneOtp = async () => {
    const response = await axios.post('/api/verify-otp', { phone: formik.values.phone, otp: phoneOtp });
    if (response.data.status == "approved") {
      setIsPhoneVerified(true);
      setDisableVerifyPhoneBtn(true);
      toast.success(t2("otp_verified"));
      setDisablePhoneOtpBtn(true);
    } else {
      toast.error(t2("otp_not_verified"));
      setDisablePhoneOtpBtn(false);
      setIsPhoneVerified(false);
    }
  }

  const [value, setValue] = useState("+971")
  const [formData, setFormData] = useState(null)
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="demo-account">
      <div className="max-w-6xl mx-auto p-10 shadow-2xl">
        <div className=' relative'>
          <form className="bg-white relative text-gray-700 rounded-3xl p-8 mx-auto"
          // onSubmit={handleSubmit}
          >
            {/* <form> */}
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className='relative'>
                <RiUserLocationLine className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                <input
                  type="text"
                  className="w-full px-4 bg-white py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Full Name"
                  name='nickname'
                  value={formData?.firstName || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className=' relative'>
                <CiMail className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                <input
                  type="email"
                  className="w-full px-4 bg-white py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Email"
                  name='email'
                  value={formData?.email || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email & Phone */}


            <div className="grid grid-cols-3 gap-6 mb-6">
              <div
                className="w-full px-4 py-3 bg-white border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="AE"
                  value={value}
                  onChange={(phone) => {
                    setValue(phone)
                  }}
                />
              </div>
              <div className='col-span-2 relative'>
                <FiPhoneCall className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                <input
                  type="number"
                  className="w-full px-4 bg-white py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Phone"
                  name='phone'
                  value={formData?.phone || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className='relative'>
                <RiLockPasswordLine className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                <input
                  type="text"
                  className="w-full px-4 bg-white py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Password"
                  name='password'
                  value={formData?.firstName || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className=' relative'>
                <RiLockPasswordLine className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                <input
                  type="email"
                  className="w-full px-4 bg-white py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Confirm password"
                  name='confirmpassword'

                  required
                />
              </div>
            </div>

            {/* Country & Query */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Country Dropdown */}
              <div className="relative ">
                <MdManageAccounts className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <select
                  name="query"
                  className="w-full bg-white px-4 py-3 pl-9 border rounded-lg text-gray-700"
                  required

                >
                  <option value="">Type</option>
                  <option value="Marketing">MT4</option>
                  <option value="Risk Management">MT5</option>
                  <option value="Technology">Technology </option>
                </select>
              </div>
              <div className="relative ">
                <GiWorld className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <select
                  className="w-full bg-white px-4 py-3 pl-9 border rounded-lg text-gray-700"

                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">{t("accountForm.selectPlaceholder")}</option>
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
            </div>
            {responseMessage && (
              <div className="my-4">
                <p className="text-primary">{responseMessage}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center -mb-12">
              <button
                // onClick={() => { sendEmail() }}
                type="submit"
                className=" bg-secondary text-white font-semibold py-3 px-8 rounded-full text-lg"
              >
                {loading ? "Submitting.." : "Submit"}
              </button>
            </div>
            {/* </form> */}
          </form>

        </div>
        {/* {
          originCountry === 'EUS' ? (
            <form onSubmit={formik.handleSubmit} className="space-y-4 account">
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
                name="account_type"
                className="hidden"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={path.includes('live-account') ?
                  formik.values.account_type = "Live Account" :
                  formik.values.account_type = "Demo Account"
                }
              />
              <input
                name="language"
                className="hidden"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={lang === "ar" ?
                  formik.values.language = "Ar" :
                  lang === "zh-hans" ?
                    formik.values.language = "zh-hans" :
                    formik.values.language = "EN"}
              />
              <input
                name="utm_source"
                className="hidden"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={!formik.values.utm_source || formik.values.utm_source === '' ? formik.values.utm_source = source : formik.values.utm_source = source}
              />
              <input
                name="utm_campaign"
                className="hidden"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={!formik.values.utm_campaign || formik.values.utm_campaign === '' ? formik.values.utm_campaign = campaign : formik.values.utm_campaign = campaign}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                <div className="flex flex-col">
                  <label
                    className={`text-primary text-[13px] ${formik.touched.first_name && formik.errors.first_name
                      ? "text-red-700"
                      : ""
                      }`}
                  >
                    {" "}
                    {formik.touched.first_name && formik.errors.first_name
                      ? formik.errors.first_name
                      : t("accountForm.firstName")}
                  </label>
                  <input
                    className={`bg-gray-100 text-primary placeholder:text-primary py-3 px-4 capitalize ${formik.touched.first_name && formik.errors.first_name
                      ? "border-2 border-red-600"
                      : ""
                      }`}
                    type="text"
                    name="first_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                    placeholder={t("accountForm.firstName")}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className={`text-primary text-[13px] ${formik.touched.last_name && formik.errors.last_name
                      ? "text-red-700"
                      : ""
                      }`}
                  >
                    {formik.touched.last_name && formik.errors.last_name
                      ? formik.errors.last_name
                      : t("accountForm.lastName")}
                  </label>
                  <input
                    className={`bg-gray-100 text-primary placeholder:text-primary capitalize py-3 px-4 ${formik.touched.last_name && formik.errors.last_name
                      ? "border-2 border-red-600"
                      : ""
                      } `}
                    type="text"
                    name="last_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                    placeholder={t("accountForm.lastName")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className={`text-primary text-[13px] ${formik.touched.phone && formik.errors.phone
                      ? "text-red-700"
                      : ""
                      }`}
                  >
                    {formik.touched.phone && formik.errors.phone
                      ? formik.errors.phone
                      : t("accountForm.phone")}
                  </label>
                </div>
                <div className="flex items-center gap-2">
                <PhoneInput
              onChange={(value) => formik.setFieldValue("phone", value)}
              value={formik.values.phone}
              countries={allowedCountries}
              defaultCountry={countryCode}
                    className="w-[70%] demo-account"
                  />
                  <button
                    className={`bg-secondary text-primary text-md mt-[-1px] border-2 font-semibold w-[30%] py-[12px]
                   border-secondary transition-colors duration-300
                   hover:bg-gray-100 hover:text-secondary hover:border-2`}
                    type="button"
                    onClick={sendPhoneOtp}
                    disabled={!formik.values.phone || disableSendPhoneOtpBtn}
                  >{sendPhoneOtpLoading ? <span className="text-xs flex gap-2 justify-center items-center"><ClockLoader loading={sendPhoneOtpLoading} color="#2C6390" size={20} cssOverride={true} /> <span>{t2("sending")}</span> </span> : <span>{t2("send_otp")}</span>}
                  </button>
                </div>
              </div>
              <div className={`items-center gap-2 py-3 ${showPhoneOtpVerify ? `flex` : `hidden`}`}>
                <OtpInput
                  containerStyle={{
                    justifyContent: 'space-around',
                    alignItems: "center",
                    gap: "10px",
                    width: "70%",
                  }}

                  value={phoneOtp}
                  onChange={setPhoneOtp}
                  numInputs={6}
                  renderInput={(props) => <input {...props} />}
                  inputType="text"
                  inputStyle={{
                    borderRadius: '5px',
                    paddingBottom: '8px',
                    paddingTop: "8px",
                    width: "20%",
                    backgroundColor: "#f3f4f6",
                    color: "#000",
                    fontWeight: "700",
                    outlineColor: '#f3f4f6'
                  }}
                />
                <button
                  className="bg-secondary text-primary text-center text-md font-semibold w-[30%] py-[12px] hover:bg-gray-100 hover:text-secondary hover:border-2 border-secondary border-2 transition-colors duration-300"
                  type="button"
                  onClick={verifyPhoneOtp}
                  disabled={disableVerifyPhoneOtpBtn}
                >{isPhoneVerified ? <span className="text-green-600 flex text-center justify-center items-center"><TiTick color="green" size={25} /> <span>{t2("verified")}</span></span> : <p>{t2("verify_otp")}</p>}</button>
              </div>
              <div className="grid grid-cols-1">
                <div className="flex flex-col">
                  <label
                    className={`text-primary text-[13px] ${formik.touched.email && formik.errors.email
                      ? "text-red-700"
                      : ""
                      }`}
                  >
                    {formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : t("accountForm.email")}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      className={`bg-gray-100 text-primary placeholder:text-primary py-3 px-4 w-full ${formik.touched.email && formik.errors.email
                        ? "border-2 border-red-600"
                        : ""
                        }`}
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      placeholder={t("accountForm.email")}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col w-full">
                  <label
                    className={`text-primary text-[13px] ${formik.touched.date_of_birth && formik.errors.date_of_birth
                      ? "text-red-700"
                      : ""
                      }`}
                  >
                    {formik.touched.date_of_birth && formik.errors.date_of_birth
                      ? formik.errors.date_of_birth
                      : t("accountForm.dob")}
                  </label>
                  <input
                    className={`bg-gray-100 w-full text-primary placeholder:text-primary py-3 px-4 custom_appearance ${formik.touched.date_of_birth && formik.errors.date_of_birth
                      ? "border-2 border-red-600"
                      : ""
                      }`}
                    name="date_of_birth"
                    type="date"
                    placeholder="dd/mm/yyyy"
                    value={formik.values.date_of_birth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className={`text-primary text-[13px] ${formik.touched.platform && formik.errors.platform
                      ? "text-red-600"
                      : ""
                      }`}
                  >
                    {formik.touched.platform && formik.errors.platform
                      ? formik.errors.platform
                      : t("accountForm.platform")}
                  </label>
                  <select
                    className={`bg-gray-100 text-primary placeholder:text-primary capitalize pt-[14px] pb-[14px] px-4 ${formik.touched.platform && formik.errors.platform
                      ? "border-2 border-red-600"
                      : ""
                      }`}
                    name="platform"
                    value={formik.values.platform}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">{t("accountForm.selectPlaceholder")}</option>
                    {platforms.map((platform, el) => {
                      return (
                        <option key={platform.id} value={platform.value}>
                          {platform.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="flex flex-col">
                  <label
                    className={`text-primary text-[13px] ${formik.touched.country && formik.errors.country
                      ? "text-red-600"
                      : ""
                      }`}
                  >
                    {formik.touched.country && formik.errors.country
                      ? formik.errors.country
                      : t("accountForm.country")}
                  </label>
                  <select
                    className={`bg-gray-100 text-primary placeholder:text-primary capitalize py-3 px-4 ${formik.touched.country && formik.errors.country
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
              </div>

              <div>
                <label
                  className={`block text-sm pb-2 ${formik.touched.terms && formik.errors.terms
                    ? "text-red-500"
                    : ""
                    }`}
                  htmlFor="terms"
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : t("accountForm.termOfService")}
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value="checked"
                    className="h-5 w-5"
                  />
                  <p className="inline px-3 text-[13px] text-primary">
                    {t("accountForm.termText")}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <button
                  disabled={!isPhoneVerified}
                  type="submit"
                  className="text-secondary font-semibold cursor-pointer py-3 px-4 border border-secondary bg-gray-100 hover:text-primary"
                >
                  <div className="flex gap-1 items-center">{loading && <div className="spinner inline-block"></div>} {loading ? <span className="text-center">{t2("sending")}</span> : <span>{t2("submit")}</span>}</div>
                </button>

              </div>
            </form>) : (
            <form onSubmit={formik.handleSubmit} className="space-y-4 account">
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
                name="account_type"
                className="hidden"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={path.includes('live-account') ?
                  formik.values.account_type = "Live Account" :
                  formik.values.account_type = "Demo Account"
                }
              />
              <input
                name="language"
                className="hidden"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={lang === "ar" ?
                  formik.values.language = "Ar" :
                  lang === "zh-hans" ?
                    formik.values.language = "zh-hans" :
                    formik.values.language = "EN"}
              />
              <input
                name="utm_source"
                className="hidden"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={!formik.values.utm_source || formik.values.utm_source === '' ? formik.values.utm_source = source : formik.values.utm_source = source}
              />
              <input
                name="utm_campaign"
                className="hidden"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={!formik.values.utm_campaign || formik.values.utm_campaign === '' ? formik.values.utm_campaign = campaign : formik.values.utm_campaign = campaign}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                <div className="flex flex-col">
                  <label
                    className={`text-primary text-[13px] ${formik.touched.first_name && formik.errors.first_name
                      ? "text-red-700"
                      : ""
                      }`}
                  >
                    {" "}
                    {formik.touched.first_name && formik.errors.first_name
                      ? formik.errors.first_name
                      : t("accountForm.firstName")}
                  </label>
                  <input
                    className={`bg-gray-100 text-primary placeholder:text-primary py-3 px-4 capitalize ${formik.touched.first_name && formik.errors.first_name
                      ? "border-2 border-red-600"
                      : ""
                      }`}
                    type="text"
                    name="first_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                    placeholder={t("accountForm.firstName")}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className={`text-primary text-[13px] ${formik.touched.last_name && formik.errors.last_name
                      ? "text-red-700"
                      : ""
                      }`}
                  >
                    {formik.touched.last_name && formik.errors.last_name
                      ? formik.errors.last_name
                      : t("accountForm.lastName")}
                  </label>
                  <input
                    className={`bg-gray-100 text-primary placeholder:text-primary capitalize py-3 px-4 ${formik.touched.last_name && formik.errors.last_name
                      ? "border-2 border-red-600"
                      : ""
                      } `}
                    type="text"
                    name="last_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                    placeholder={t("accountForm.lastName")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className={`text-primary text-[13px] ${formik.touched.phone && formik.errors.phone
                      ? "text-red-700"
                      : ""
                      }`}
                  >
                    {formik.touched.phone && formik.errors.phone
                      ? formik.errors.phone
                      : t("accountForm.phone")}
                  </label>
                </div>
                <PhoneInput
              onChange={(value) => formik.setFieldValue("phone", value)}
              value={formik.values.phone}
               onBlur={formik.handleBlur}
              name="phone"
              countries={allowedCountries}
              defaultCountry={countryCode}
                />
              </div>
              <div className="grid grid-cols-1">
                <div className="flex flex-col">
                  <label
                    className={`text-primary text-[13px] ${formik.touched.email && formik.errors.email
                      ? "text-red-700"
                      : ""
                      }`}
                  >
                    {formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : t("accountForm.email")}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      className={`bg-gray-100 text-primary placeholder:text-primary py-2 px-4 w-[70%] ${formik.touched.email && formik.errors.email
                        ? "border-2 border-red-600"
                        : ""
                        }`}
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      placeholder={t("accountForm.email")}
                    />
                    <button
                      className={`bg-secondary text-primary text-md mt-[-1px] border-2 font-semibold w-[30%] py-[9px] rounded
                    border-secondary transition-colors duration-300
                    hover:bg-gray-100 hover:text-secondary hover:border-2`}
                      type="button"
                      onClick={sendEmailOtp}
                      disabled={!formik.values.email || disableSendEmailOtpBtn}
                    >{sendEmailOtpLoading ? <span className="text-xs flex gap-2 justify-center items-center"><ClockLoader loading={sendEmailOtpLoading} color="#2C6390" size={20} cssOverride={true} /> <span>{t2("sending")}</span> </span> : <span>{t2("send_otp")}</span>}
                    </button>
                  </div>
                </div>
              </div>
              <div className={`items-center gap-2 py-3 ${showEmailOtpVerify ? `flex slideDivVisible` : `hidden slideDiv`}`}>
                <OtpInput
                  containerStyle={{
                    justifyContent: 'space-around',
                    alignItems: "center",
                    gap: "10px",
                    width: "70%",
                  }}

                  value={emailOtp}
                  onChange={setEmailOtp}
                  numInputs={6}
                  renderInput={(props) => <input {...props} />}
                  inputType="text"
                  inputStyle={{
                    borderRadius: '5px',
                    paddingBottom: '8px',
                    paddingTop: "8px",
                    width: "20%",
                    backgroundColor: "#f3f4f6",
                    color: "#000",
                    fontWeight: "700",
                    outlineColor: '#f9c617'
                  }}
                />
                <button
                  className="bg-secondary text-primary text-center text-md font-semibold w-[30%] py-[9px] rounded hover:bg-gray-100 hover:text-secondary hover:border-2 border-secondary border-2 transition-colors duration-300"
                  type="button"
                  onClick={verifyEmailOtp}
                  disabled={disableVerifyEmailOtpBtn}
                >{isEmailVerified ? <span className="text-green-600 flex text-center justify-center items-center"><TiTick color="green" size={25} /> <span>{t2("verified")}</span></span> : <p>{t2("verify_otp")}</p>}</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col w-full">
                  <label
                    className={`text-primary text-[13px] ${formik.touched.date_of_birth && formik.errors.date_of_birth
                      ? "text-red-700"
                      : ""
                      }`}
                  >
                    {formik.touched.date_of_birth && formik.errors.date_of_birth
                      ? formik.errors.date_of_birth
                      : t("accountForm.dob")}
                  </label>
                  <input
                    className={`bg-gray-100 w-full text-primary placeholder:text-primary py-2 px-4 custom_appearance ${formik.touched.date_of_birth && formik.errors.date_of_birth
                      ? "border-2 border-red-600"
                      : ""
                      }`}
                    name="date_of_birth"
                    type="date"
                    placeholder="dd/mm/yyyy"
                    value={formik.values.date_of_birth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className={`text-primary text-[13px] ${formik.touched.platform && formik.errors.platform
                      ? "text-red-600"
                      : ""
                      }`}
                  >
                    {formik.touched.platform && formik.errors.platform
                      ? formik.errors.platform
                      : t("accountForm.platform")}
                  </label>
                  <select
                    className={`bg-gray-100 text-primary placeholder:text-primary capitalize py-3 pb-[0.5rem] px-4 ${formik.touched.platform && formik.errors.platform
                      ? "border-2 border-red-600"
                      : ""
                      }`}
                    name="platform"
                    value={formik.values.platform}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">{t("accountForm.selectPlaceholder")}</option>
                    {platforms.map((platform, el) => {
                      return (
                        <option key={platform.id} value={platform.value}>
                          {platform.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="flex flex-col">
                  <label
                    className={`text-primary text-[13px] ${formik.touched.country && formik.errors.country
                      ? "text-red-600"
                      : ""
                      }`}
                  >
                    {formik.touched.country && formik.errors.country
                      ? formik.errors.country
                      : t("accountForm.country")}
                  </label>
                  <select
                    className={`bg-gray-100 text-primary placeholder:text-primary capitalize  py-2 px-4 ${formik.touched.country && formik.errors.country
                      ? "border-2 border-red-600"
                      : ""
                      }`}
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">{t("accountForm.selectPlaceholder")}</option>
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
              </div>

              <div>
                <label
                  className={`block text-sm pb-2 ${formik.touched.terms && formik.errors.terms
                    ? "text-red-500"
                    : ""
                    }`}
                  htmlFor="terms"
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : t("accountForm.termOfService")}
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value="checked"
                    className="h-5 w-5"
                  />
                  <p className="inline px-3 text-[13px] text-primary">
                    {t("accountForm.termText")} <Link href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf" target="_blank" className="underline text-[#625df5]"> {t("accountForm.termText2")}</Link>  {t("accountForm.termText3")}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <button
                  disabled={loading}
                  type="submit"
                  className="text-secondary font-semibold cursor-pointer py-2 px-4 border border-secondary bg-gray-100 hover:text-primary"
                >
                  <div className="flex gap-1 items-center">{loading && <div className="spinner inline-block"></div>} {loading ? <span className="text-center">Sending...</span> : <span>Send</span>}</div>
                </button>

              </div>
            </form>
          )
        } */}

      </div>
    </section>
  )
}
export default MainForm