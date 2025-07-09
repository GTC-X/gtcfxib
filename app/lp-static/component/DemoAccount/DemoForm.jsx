import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import nationality from "../../../../public/data/nationality.json";
import { usePathname, useSearchParams } from "next/navigation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import { LocationContext } from "@/context/location-context";
import { formatDateTime } from "@/helpers";
import { TiTick } from "react-icons/ti";
import { ClockLoader } from 'react-spinners'
import Link from "next/link";
const platforms = [
  { id: 1, name: "MT4", value: "mt4" },
  { id: 2, name: "MT5", value: "mt5" },
];
const DemoForm = () => {
    const { country: originCountry, ip: originIp } = useContext(LocationContext); // Using the correct context
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
  
    //Phone OTP Logic
    const [phoneOtp, setPhoneOtp] = useState("");
    const [showPhoneOtpVerify, setShowPhoneOtpVerify] = useState(false);
    const [disableSendPhoneOtpBtn, setDisablePhoneOtpBtn] = useState(false);
    const [disableVerifyPhoneOtpBtn, setDisableVerifyPhoneBtn] = useState(false);
    const [isPhoneVerified, setIsPhoneVerified] = useState(false);
    const [sendPhoneOtpLoading, setSendPhoneOtpLoading] = useState(false);
  
    const searchParams = useSearchParams();
    const source = searchParams.get('utm_source');
    const campaign = searchParams.get('utm_campaign');
    const fbclid = searchParams.get('fbclid');
    const lang = path.split('/').at(1);
  
    const formik = useFormik({
      initialValues: {
        ip: originIp || "",
        fbclid: fbclid || "",
        account_type: path.includes('live-account') ? "Live Account" : "Demo Account",
        language: lang === "ar" ? "Ar" : lang === "zh-hans" ? "zh-hans" : "EN",
        utm_source: source || "",
        utm_campaign: campaign || "",
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        date_of_birth: "",
        platform: "",
        country: "",
        terms: false,
      },
      validationSchema: Yup.object({
        first_name: Yup.string()
          .matches(/^([A-Za-z\s]*)$/gi, 'First name can only contain letters.')
          .required("First Name is required"),
        last_name: Yup.string()
          .matches(/^([A-Za-z\s]*)$/gi, 'Last name can only contain letters.')
          .required("Last Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email required"),
        date_of_birth: Yup.date()
          .max(new Date(Date.now() - 567648000000), "You must be at least 18 years old")
          .required("Date of birth is required"),
        platform: Yup.string().required("Please select platform"),
        country: Yup.string().required("Please select your country"),
        terms: Yup.bool().oneOf([true], 'Please agree to the terms and conditions to proceed.'),
      }),
      validate: (values) => {
        const errors = {};
        if (!values.phone) {
          errors.phone = "Update your phone number";
        }
        return errors;
      },
      onSubmit: async (values) => {
        if (path.includes('live-account') && window.gtag) {
          window.gtag('event', 'conversion', { 'send_to': 'AW-10835048699/5-EeCJOg7pIZEPvxxq4o' });
        } else if (path.includes('free-demo-account') && window.gtag) {
          window.gtag('event', 'conversion', { 'send_to': 'AW-10835048699/r0r_CICo7pIZEPvxxq4o' });
        }
  
        try {
          setLoading(true);
          const response = await axios.post(`https://hooks.zapier.com/hooks/catch/16420445/3ajp4wk/`, JSON.stringify(values));
          window.location.href = `/thank-you?account=${values.account_type === "Live Account" ? "live" : "demo"}`;
        } catch (err) {
          toast.error("Submission failed");
        } finally {
          setLoading(false);
        }
      },
    });
  
    const sendEmailOtp = async () => {
      setSendEmailOtpLoading(true);
      const response = await axios.post(`/api/otp-smtp`, JSON.stringify({ email: formik.values.email }));
      if (response.status === 200) {
        setStoredEmailOtp(response.data.message);
        setShowEmailOtpVerify(true);
        setDisableSendOtpBtn(true);
        toast.success(`OTP Sent to ${formik.values.email}`);
      } else {
        toast.error('Error Sending OTP');
      }
      setSendEmailOtpLoading(false);
    };
  
    const verifyEmailOtp = () => {
      if (emailOtp === storedEmailOtp) {
        setIsEmailVerified(true);
        toast.success('Email OTP Verified');
      } else {
        toast.error('Invalid OTP');
      }
    };
  
    const sendPhoneOtp = async () => {
      const response = await axios.post('/api/send-otp', { phone: formik.values.phone });
      if (response.status === 200) {
        setShowPhoneOtpVerify(true);
        setDisablePhoneOtpBtn(true);
        toast.success('OTP sent to your phone');
      } else {
        toast.error('Error sending OTP');
      }
    };
  
    const verifyPhoneOtp = async () => {
      const response = await axios.post('/api/verify-otp', { phone: formik.values.phone, otp: phoneOtp });
      if (response.data.status === "approved") {
        setIsPhoneVerified(true);
        toast.success('Phone OTP Verified');
      } else {
        toast.error('Invalid OTP');
      }
    };

  return (
    <section className="demo-account pb-14">
      <div className="max-w-6xl mx-auto p-10 shadow-2xl border border-gray-200">
        
      <form onSubmit={formik.handleSubmit} className="space-y-4 account"> 
  {/* Hidden Inputs */}
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
    value={path.includes('live-account') ? formik.values.account_type = "Live Account" : formik.values.account_type = "Demo Account"}
  />
  <input
    name="language"
    className="hidden"
    type="text"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={lang === "ar" ? formik.values.language = "Ar" : lang === "zh-hans" ? formik.values.language = "zh-hans" : formik.values.language = "EN"}
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
  {/* End Of Hidden Inputs */}
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
    <div className="flex flex-col">
      <label className={`text-primary text-[13px] ${formik.touched.first_name && formik.errors.first_name ? "text-red-700" : ""}`}>
        First Name
      </label>
      <input
        className={`bg-gray-100 text-primary placeholder:text-primary py-3 px-4 capitalize ${formik.touched.first_name && formik.errors.first_name ? "border-2 border-red-600" : ""}`}
        type="text"
        name="first_name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.first_name}
        placeholder="First Name"
      />
    </div>
    <div className="flex flex-col">
      <label className={`text-primary text-[13px] ${formik.touched.last_name && formik.errors.last_name ? "text-red-700" : ""}`}>
        Last Name
      </label>
      <input
        className={`bg-gray-100 text-primary placeholder:text-primary capitalize py-3 px-4 ${formik.touched.last_name && formik.errors.last_name ? "border-2 border-red-600" : ""}`}
        type="text"
        name="last_name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.last_name}
        placeholder="Last Name"
      />
    </div>
  </div>

  <div className="grid grid-cols-1">
    <div className="flex flex-col">
      <label htmlFor="phone" className={`text-primary text-[13px] ${formik.touched.phone && formik.errors.phone ? "text-red-700" : ""}`}>
        Phone Number
      </label>
    </div>
    <PhoneInput
      onChange={(value) => formik.setFieldValue("phone", value)}
      onBlur={formik.handleBlur}
      name="phone"
      value={formik.values.phone}
      defaultCountry={originCountry}
    />
  </div>

  <div className="grid grid-cols-1">
    <div className="flex flex-col">
      <label className={`text-primary text-[13px] ${formik.touched.email && formik.errors.email ? "text-red-700" : ""}`}>
        Email Address
      </label>
      <div className="flex items-center gap-2">
        <input
          className={`bg-gray-100 text-primary placeholder:text-primary py-2 px-4 w-[70%] ${formik.touched.email && formik.errors.email ? "border-2 border-red-600" : ""}`}
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email Address"
        />
        <button
          className={`bg-secondary text-primary text-md mt-[-1px] border-2 font-semibold w-[30%] py-[9px] rounded border-secondary transition-colors duration-300 hover:bg-gray-100 hover:text-secondary hover:border-2`}
          type="button"
          onClick={sendEmailOtp}
          disabled={!formik.values.email || disableSendEmailOtpBtn}
        >{sendEmailOtpLoading ? <span className="text-xs flex gap-2 justify-center items-center"><ClockLoader loading={sendEmailOtpLoading} color="#2C6390" size={20} /> <span>Sending</span> </span> : <span>Send OTP</span>}
        </button>
      </div>
    </div>
  </div>

  <div className={`items-center gap-2 py-3 ${showEmailOtpVerify ? `flex` : `hidden`}`}>
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
    >{isEmailVerified ? <span className="text-green-600 flex text-center justify-center items-center"><TiTick color="green" size={25} /> <span>Verified</span></span> : <p>Verify OTP</p>}</button>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
    <div className="flex flex-col w-full">
      <label className={`text-primary text-[13px] ${formik.touched.date_of_birth && formik.errors.date_of_birth ? "text-red-700" : ""}`}>
        Date of Birth
      </label>
      <input
        className={`bg-gray-100 w-full text-primary placeholder:text-primary py-2 px-4 custom_appearance ${formik.touched.date_of_birth && formik.errors.date_of_birth ? "border-2 border-red-600" : ""}`}
        name="date_of_birth"
        type="date"
        placeholder="dd/mm/yyyy"
        value={formik.values.date_of_birth}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </div>
    <div className="flex flex-col">
      <label className={`text-primary text-[13px] ${formik.touched.platform && formik.errors.platform ? "text-red-600" : ""}`}>
        Trading Platform
      </label>
      <select
        className={`bg-gray-100 text-primary placeholder:text-primary capitalize py-3 pb-[0.5rem] px-4 ${formik.touched.platform && formik.errors.platform ? "border-2 border-red-600" : ""}`}
        name="platform"
        value={formik.values.platform}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="">Please select the option</option>
        {platforms.map((platform) => (
          <option key={platform.id} value={platform.value}>{platform.name}</option>
        ))}
      </select>
    </div>
  </div>

  <div className="grid grid-cols-1">
    <div className="flex flex-col">
      <label className={`text-primary text-[13px] ${formik.touched.country && formik.errors.country ? "text-red-600" : ""}`}>
        Country
      </label>
      <select
        className={`bg-gray-100 text-primary placeholder:text-primary capitalize py-2 px-4 ${formik.touched.country && formik.errors.country ? "border-2 border-red-600" : ""}`}
        name="country"
        value={formik.values.country}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="">Please select your Country</option>
        {nationality.map((country, index) => (
          <option key={index} value={country.en_short_name}>{country.en_short_name}</option>
        ))}
      </select>
    </div>
  </div>

  <div>
    <label className={`block text-sm pb-2 ${formik.touched.terms && formik.errors.terms ? "text-red-500" : ""}`} htmlFor="terms">
      Terms of Service
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
      By clicking Submit, I confirm that: (1) I have read and agree to the <Link href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf" target="_blank" className="underline text-[#60b1ee]"> (2) Client Agreements;</Link>  I consent to GTCFX contacting me at reasonable times; and (3) my number is not on the Do Not Call Register (DNCR).
      </p>
    </div>
  </div>

  <div className="text-center">
    <button
      disabled={loading}
      type="submit"
      className="text-secondary font-semibold cursor-pointer py-2 px-4 border border-secondary bg-gray-100 hover:text-primary"
    >
      <div className="flex gap-1 items-center">
        {loading && <div className="spinner inline-block"></div>} 
        {loading ? <span className="text-center">Sending...</span> : <span>Send</span>}
      </div>
    </button>
  </div>
</form>

      </div>
    </section>
  )
}
export default DemoForm