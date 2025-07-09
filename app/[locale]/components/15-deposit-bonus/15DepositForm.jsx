'use client';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import nationality from '../../../../public/data/nationality.json';
import { usePathname, useSearchParams } from "next/navigation";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useTranslations } from "next-intl";
import { useState,useContext } from "react";
import { LocationContext } from "@/context/location-context";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import { TiTick } from "react-icons/ti";
import {ClockLoader} from 'react-spinners'
import Link from "next/link";



const DepositForm = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtpVerify,setShowOtpVerify] = useState(false);
  const [diableSendOtpBtn,setDisableOtpBtn] = useState(false);
  const [disableVerifyOtpBtn,setDisableVerifyBtn] = useState(false);
  const [storedOtp,setStoredOtp] = useState("");
  const [isVerified,setIsVerified] = useState(false); 
  const [sendOtpLoading,setSendOtpLoading] = useState(false)
  const campaign = useSearchParams().get('utm_source');
  const fbclid = useSearchParams().get('fbclid');
  const path = usePathname();
  const isAr = path.includes("/ar");
  const termsPdfUrl = path.includes('trade-to-win')
  ? "https://www.gtcfx.com/terms-and-conditions" // URL for trade-to-win terms
  : path.includes('15-deposit-bonus')
  ? "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/15_Deposit_Bonus.pdf" // URL for 15-deposit terms
  : "https://www.gtcfx.com/terms-and-conditions"; // Default URL if neither

  const t = useTranslations("form");
  const {country:originCountry,ip:originIp} = useContext(LocationContext);
  const formik = useFormik({
    initialValues: {
      ip:"",
      fbclid:"",
      utm_campain:"",
      utm_source:"",
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      account_no:'',
      country: '',
      terms: false,
    },
    validationSchema: Yup.object({
      first_name: Yup.string().matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            'Only contain letters.'
        ).required(t("error.firstName")),
      last_name: Yup.string().matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            'Only contain letters.'
        ).required(t("error.lastName")),
      email: Yup.string().email(t("error.invalidEmail")).required(t("error.email")),
      account_no:Yup.string().min(6,'minimum 6 numbers').max(7,"maximum 7 numbers").required(t("error.account_no")),
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
    onSubmit: async(values) => {
      if(path.includes('introductory-broker')){
        console.log("Inside ib");
        if(typeof window !== 'undefined'){
          console.log('Window is Defined');
        if(window.gtag){
          console.log('inside window.gtag');
          window.gtag('event', 'conversion', {'send_to': 'AW-10835048699/qDs-CJmcvY0ZEPvxxq4o'}); 
        }
      }
      }
      try {
        setLoading(true);
     try{   
     const response = await axios.post(`https://hooks.zapier.com/hooks/catch/16420445/3ef1iyd/`,JSON.stringify(values));
    }catch(err){
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

  const sendEmailOtp = async()=>{
  setSendOtpLoading(true);  
  const response =  await axios.post(`/api/otp-smtp`,JSON.stringify({email:formik.values.email})); 
  console.log(response);
  if(response.status === 200){
   setSendOtpLoading(false); 
   setStoredOtp(response.data.message) 
   setShowOtpVerify(true);
   setDisableOtpBtn(true);
   toast.success(`${t("otp_sent")} ${formik.values.email}`)
  }else{
    toast.error(t("otp_error"));
    setDisableOtpBtn(false);
  }
}

const verifyEmailOtp = async()=>{
if(otp === storedOtp){
setIsVerified(true);
setDisableVerifyBtn(true);
toast.success(t("otp_verified"));
setDisableOtpBtn(true);
}
else{
  toast.error(t("otp_not_verified"));
  setDisableOtpBtn(false);
  setIsVerified(false)
}
}
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
      <div className="contact-form relative bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#05033162] rounded-lg shadow-lg overflow-hidden z-10 p-6 text-left">
      <div className="form-heading text-center">
        <h3 className="py-3 bg-secondary text-primary uppercase rounded-tl-xl rounded-tr-xl font-bold">
          {t("register")}
        </h3>
      </div>
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
              value={!formik.values.fbclid || formik.values.fbclid === ''? formik.values.fbclid = fbclid : formik.values.fbclid = fbclid }
              />
              <input
              name="utm_campain"
              className="hidden"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={!formik.values.utm_campain || formik.values.utm_campain === '' ? formik.values.utm_campain = path: formik.values.utm_campain = path}
            />
            <input
              name="utm_source"
              className="hidden"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={!formik.values.utm_source || formik.values.utm_source === '' ? formik.values.utm_source = campaign: formik.values.utm_source = campaign}
            />
        <div className="flex flex-row gap-2 mb-3">
          <div className="flex flex-col w-[50%]">
          <label className={`text-white text-[13px] ${formik.touched.first_name && formik.errors.first_name ? "text-yellow-500" : ""}`}> {formik.touched.first_name && formik.errors.first_name
              ? formik.errors.first_name
              : t("firstName")}</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder={t("firstName")}
              className="formInput mt-0 bg-white text-primary"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
            />
            
          </div>
          <div className="flex flex-col w-[50%]">
          <label className={`text-white text-[13px] ${formik.touched.last_name && formik.errors.last_name ? "text-yellow-500" : ""}`}>
              {formik.touched.last_name && formik.errors.last_name
                ? formik.errors.last_name
                : t("lastName")}
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
              placeholder={t("lastName")}
              className="formInput mt-0 bg-white text-primary"
            />
         
          </div>
        </div>
        <div className="flex flex-col">
        <label className={`text-white text-[13px] ${formik.touched.email && formik.errors.email ? "text-yellow-500" : ""}`}>
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
            className="formInput mb-3 mt-0 bg-white  w-[70%] text-primary"
          />
          <button 
          className={`bg-secondary text-primary text-sm mt-[-12px] border-2 font-semibold w-[30%] py-[6px] border-secondary transition-colors duration-300
           hover:bg-primary hover:text-secondary hover:border-2`}
          type="button"
          onClick={sendEmailOtp}
          disabled={!formik.values.email || diableSendOtpBtn}
          >{sendOtpLoading ? <span className="text-xs flex gap-2 justify-center items-center"><ClockLoader loading={sendOtpLoading} color="#2C6390" size={20} cssOverride={true}/> <span>{t("sending")}</span> </span>:<span>{t("send_otp")}</span>}
          </button>
          </div>
          <div className={`items-center gap-2 py-3 ${showOtpVerify ? `flex slideDivVisible`:`hidden slideDiv`}`}>
          <OtpInput
              containerStyle={{
                justifyContent:'space-around',
                alignItems: "center",
                gap: "10px",
                width: "70%",
                direction:'ltr'
              }}
              
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              inputType="text"
              inputStyle={{
                paddingBottom:'5px',
                paddingTop:"5px",
                width: "20%",
                backgroundColor: "#FFF", 
                color: "#000",
                fontWeight: "700",
                outlineColor:'#f9c617'
              }}
            />
             <button  
          className="bg-secondary text-primary text-sm font-semibold w-[30%] py-[12px] hover:bg-primary hover:text-secondary hover:border-2 border-secondary border-2 transition-colors duration-300"
          type="button"
          onClick={verifyEmailOtp}
          disabled={disableVerifyOtpBtn}
          >{isVerified ? <span className="text-green-600 flex  items-center"><TiTick color="green" size={25}/> <span>{t("verified")}</span></span>:<p>{t("verify_otp")}</p>}</button>
          </div>
          <div className="flex flex-col mb-3">
          <label className={`text-white text-[13px] ${formik.touched.account_no && formik.errors.account_no ? "text-yellow-500" : ""}`}> {formik.touched.account_no && formik.errors.account_no
              ? formik.errors.account_no
              : t("account_no")}</label>
          <input
              type="number"
              name="account_no"
              id="account_no"
              placeholder={t("account_no")}
              className="formInput mt-0 bg-white text-primary "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.account_no}
            />
        </div>    
          <label htmlFor='phone' className={`text-white text-[13px] ${formik.touched.phone && formik.errors.phone ? "text-yellow-500" : ""}`}>
            {formik.touched.phone && formik.errors.phone
              ? formik.errors.phone
              : t("phone")}
          </label>
          <PhoneInput
            className="bg-white simple p-1.5 outline-none focus-visible:outline-none mb-3 mt-0 custom-style text-primary"  
            onChange={(value) => formik.setFieldValue('phone', value)}
            onBlur={formik.handleBlur}
            name="phone"
            value={formik.values.phone}
            defaultCountry={originCountry}
          />
         <label className={`text-white text-[13px] ${formik.touched.country && formik.errors.country ? "text-yellow-500" : ""}`}>
            {formik.touched.country && formik.errors.country
              ? formik.errors.country
              : t("country")}

          </label>

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
            <Link href={termsPdfUrl} target="_blank" className='text-left underline inline px-3 text-[11px] text-white cursor-pointer'>
             {t("terms")}
            </Link>

          </div>
          <label className={`text-white text-[13px] ${formik.touched.terms && formik.errors.terms ? "text-yellow-500" : ""}`}>
            {formik.touched.terms && formik.errors.terms
              ? formik.errors.terms
              : ""}

          </label>
          </div>
        </div>
        <button  
        disabled={!isVerified}
        className="bg-secondary text-center w-full py-3 font-semibold text-primary text-lg rounded-md" type="submit">
         {loading ? <p> {t("sending")}</p>:<p>{t("submit")}</p>}
        </button>
      </form>
    </div>
    </div>
  );
};

export default DepositForm;