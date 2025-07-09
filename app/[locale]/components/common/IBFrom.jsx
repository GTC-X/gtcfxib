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
import { ClockLoader } from 'react-spinners'



const IBFrom = ({title, subtitle}) => {

  //Email OTP Logic
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
  const [showPhoneOtpVerify,setShowPhoneOtpVerify] = useState(false);
  const [disableSendPhoneOtpBtn,setDisablePhoneOtpBtn] = useState(false);
  const [disableVerifyPhoneOtpBtn,setDisableVerifyPhoneBtn] = useState(false);
  const [isPhoneVerified,setIsPhoneVerified] = useState(false); 
  const [sendPhoneOtpLoading,setSendPhoneOtpLoading] = useState(false);







  const campaign = useSearchParams().get('utm_source');
  const fbclid = useSearchParams().get('fbclid');
  const path = usePathname();
  const t = useTranslations("form");
  const { country: originCountry, ip: originIp } = useContext(LocationContext);

  const formik = useFormik({
    initialValues: {
      ip: "",
      fbclid: "",
      utm_campain: "",
      utm_source: "",
      first_name: '',
      phone: '',
      email: '',
      country: '',
      terms: false,
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
  .matches(
    /^[\p{L}\p{M}\s]*$/u,
    'Only contain letters.'
  )
  .required(t("error.firstName")),
      email: Yup.string().email(t("error.invalidEmail")).required(t("error.email")),
      country: Yup.string().required(t("error.country")),
      terms: Yup.bool().oneOf([true], t("error.termOfService")),
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
    },
  });


  //Email OTP Methods

  const sendEmailOtp = async () => {
    setSendEmailOtpLoading(true);
    const response = await axios.post(`/api/otp-smtp`, JSON.stringify({ email: formik.values.email }));
    if (response.status === 200) {
      setSendEmailOtpLoading(false);
      setStoredEmailOtp(response.data.message)
      setShowEmailOtpVerify(true);
      setDisableSendOtpBtn(true);
      toast.success(`${t("otp_sent")} ${formik.values.email}`)
    } else {
      toast.error(t("otp_error"));
      setDisableSendOtpBtn(false);
    }
  }
  const verifyEmailOtp = async () => {
    if (emailOtp === storedEmailOtp) {
      setIsEmailVerified(true);
      setDisableVerifyEmailBtn(true);
      toast.success(t("otp_verified"));
      setDisableSendOtpBtn(true);
    }
    else {
      toast.error(t("otp_not_verified"));
      setDisableSendOtpBtn(false);
      setIsEmailVerified(false)
    }
  }

  const sendPhoneOtp = async()=>{
    const response = await axios.post('/api/send-otp',{phone:formik.values.phone});
     if(response.status === 200){
       setSendPhoneOtpLoading(false); 
       setShowPhoneOtpVerify(true);
       setDisablePhoneOtpBtn(true);
       toast.success(`${t("otp_sent")} ${formik.values.phone}`)
     }else{
       toast.error(t("otp_error"));
       setDisablePhoneOtpBtn(false);
     }
   }
   
   const verifyPhoneOtp = async()=>{
    const response =  await axios.post('/api/verify-otp',{phone:formik.values.phone,otp:phoneOtp});
    if(response.data.status == "approved"){
     setIsPhoneVerified(true);
     setDisableVerifyPhoneBtn(true);
     toast.success(t("otp_verified"));
     setDisablePhoneOtpBtn(true);
    }else{
     toast.error(t("otp_not_verified"));
     setDisablePhoneOtpBtn(false);
     setIsPhoneVerified(false);
   }
   }
   



  return (
    <div className="simple-form w-full shadow-2xl" id="register">
   
      {
        originCountry === 'EUS' ? (
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
            <div className="flex flex-row gap-2 mb-3">
            
                
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
                onChange={(value) => formik.setFieldValue('phone', value)}
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
                  >{sendPhoneOtpLoading ? <span className="text-xs flex gap-2 justify-center items-center"><ClockLoader loading={sendPhoneOtpLoading} color="#2C6390" size={20} cssOverride={true} /> <span>{t("sending")}</span> </span> : <span>{t("send_otp")}</span>}
                </button>
                </div>
                <div className={`items-center gap-2 py-3 ${showPhoneOtpVerify ? `flex slideDivVisible` : `hidden slideDiv`}`}>
                <OtpInput
                  containerStyle={{
                    justifyContent: 'space-around',
                    alignItems: "center",
                    gap: "10px",
                    width: "70%",
                    direction: 'ltr'
                  }}

                  value={phoneOtp}
                  onChange={setPhoneOtp}
                  numInputs={6}
                  renderInput={(props) => <input {...props} />}
                  inputType="text"
                  inputStyle={{
                    paddingBottom: '5px',
                    paddingTop: "5px",
                    width: "20%",
                    backgroundColor: "#FFF",
                    color: "#000",
                    fontWeight: "700",
                    outlineColor: '#f9c617'
                  }}
                />
                <button
                  className="bg-secondary text-primary text-sm w-[30%] py-[5px] hover:bg-primary hover:text-secondary hover:border-2 border-secondary border-2 transition-colors duration-300"
                  type="button"
                  onClick={verifyPhoneOtp}
                  disabled={disableVerifyPhoneOtpBtn}
                >{isPhoneVerified ? <span className="text-green-600 flex  items-center"><TiTick color="green" size={25} /> <span>{t("verified")}</span></span> : <p>{t("verify_otp")}</p>}</button>
              </div>
          

              <select
                className={`bg-white text-primary py-3 px-3 ${formik.touched.country && formik.errors.country ? "border-2 border-yellow-500" : ""}`}
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
            <div>
              <div className="flex flex-col">
                <div className="flex items-center justify-start py-3 gap-1 ">
                  <input
                    type='checkbox'
                    name='terms'
                    id="terms"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value="checked"
                    className="h-5 w-5"
                  />
                  <p className='inline px-3 text-[13px] text-secondary'>
                    {t("terms")}
                  </p>

                </div>
                <label className={`text-white text-[13px] ${formik.touched.terms && formik.errors.terms ? "text-yellow-500" : ""}`}>
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : ""}

                </label>
              </div>
            </div>
            <div className="text-center">
            <button
              disabled={!isPhoneVerified}
              className="bg-secondary text-center w-[150px] h-[50px] py-3 font-semibold text-primary text-lg" type="submit">
              {loading ? <p> {t("sending")}</p> : <p>{t("submit")}</p>}
            </button>
            </div>
          </form>) : (
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
            <div className="flex flex-row gap-2 mb-3">
              <div className="flex flex-col w-[50%]">
           
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
              <div className="flex flex-col w-[50%]">
              
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                  placeholder={t("lastName")}
                  className="formInput mt-0 bg-white"
                />

              </div>
            </div>
            <div className="flex flex-col">
             
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
                  className="formInput mb-3 mt-0 bg-white customPadding w-[70%]"
                />
                <button
                  className={`bg-secondary text-white text-sm mt-[-12px] border-2 font-semibold w-[30%] py-[12px] border-secondary transition-colors duration-300
                hover:bg-primary hover:text-secondary hover:border-2`}
                  type="button"
                  onClick={sendEmailOtp}
                  disabled={!formik.values.email || disableSendEmailOtpBtn}
                >{sendEmailOtpLoading ? <span className="text-xs flex gap-2 justify-center items-center"><ClockLoader loading={sendEmailOtpLoading} color="#2C6390" size={20} cssOverride={true} /> <span>{t("sending")}</span> </span> : <span>{t("send_otp")}</span>}
                </button>
              </div>
              <div className={`items-center gap-2 py-3 ${showEmailOtpVerify ? `flex` : `hidden`}`}>
                <OtpInput
                  containerStyle={{
                    justifyContent: 'space-around',
                    alignItems: "center",
                    gap: "10px",
                    width: "70%",
                    direction: 'ltr'
                  }}

                  value={emailOtp}
                  onChange={setEmailOtp}
                  numInputs={6}
                  renderInput={(props) => <input {...props} />}
                  inputType="text"
                  inputStyle={{
                    paddingBottom: '12px',
                    paddingTop: "12px",
                    width: "20%",
                    backgroundColor: "#FFF",
                    color: "#000",
                    fontWeight: "700",
                    outlineColor: '#f9c617'
                  }}
                />
                <button
                  className="bg-secondary text-primary text-sm w-[30%] py-[12px] hover:bg-primary hover:text-secondary hover:border-2 border-secondary border-2 transition-colors duration-300"
                  type="button"
                  onClick={verifyEmailOtp}
                  disabled={disableVerifyEmailOtpBtn}
                >{isEmailVerified ? <span className="text-green-600 flex  items-center"><TiTick color="green" size={25} /> <span>{t("verified")}</span></span> : <p>{t("verify_otp")}</p>}</button>
              </div>
           
              <PhoneInput
                className="bg-white simple p-1.5 outline-none focus-visible:outline-none mb-3 mt-0 custom-style"
                onChange={(value) => formik.setFieldValue('phone', value)}
                onBlur={formik.handleBlur}
                name="phone"
                value={formik.values.phone}
                defaultCountry={originCountry}
              />
          

              <select
                className={`bg-white text-primary customPadding rounded-[3px] ${formik.touched.country && formik.errors.country ? "border-2 border-yellow-500" : ""}`}
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
            <div>
              <div className="flex flex-col">
                <div className="flex items-center justify-start py-3 gap-1 ">
                  <input
                    type='checkbox'
                    name='terms'
                    id="terms"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value="checked"
                    className="h-5 w-5"
                  />
                  <p className='inline px-3 text-[13px] text-secondary'>
                    {t("terms")}
                  </p>

                </div>
                <label className={`text-white text-[13px] ${formik.touched.terms && formik.errors.terms ? "text-yellow-500" : ""}`}>
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : ""}

                </label>
              </div>
            </div>
            <div className="text-center">
            <button
              disabled={!isEmailVerified} 
              className="bg-secondary text-center w-[150px] h-[50px] py-3 text-primary" type="submit">
              {loading ? <p> {t("sending")}</p> : <p>{t("submit")}</p>}
            </button>
            </div>
             
          </form>
        )
      }
    </div>
  );
};


export default IBFrom