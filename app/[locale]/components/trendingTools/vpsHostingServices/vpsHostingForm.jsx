import React, { useState,useContext } from "react";
import { LocationContext } from "@/context/location-context";
import { usePathname, useSearchParams } from "next/navigation";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useFormik } from "formik";
import * as Yup from "yup";
import nationality from '../../../../../public/data/nationality.json';
import { useTranslations } from "next-intl";
import axios from "axios";
import { toast } from "react-toastify";



const platforms = [
  { id: 1, name: "MT4", value: "mt4" },
  { id: 2, name: "MT5", value: "mt5" },
];
const packages = [
  { id: 1, name: "Bronze", value: "bronze" },
  { id: 2, name: "Silver", value: "silver" },
  { id: 3, name: "Gold", value: "gold" },
];
const VpsHostingForm = () => {
  const [loading, setLoading] = useState(false);
  const campaign = useSearchParams().get('utm_source');
  const path = usePathname();
  const t = useTranslations("prime-tech.vpsHosting.hero.vpsForm");
  const {country:originCountry,ip:originIp} = useContext(LocationContext);

  const formik = useFormik({
    initialValues: {
      ip:"",
      utm_campain:"",
      utm_source:"",
      first_name: '',
      last_name: '',
      platform:'',
      account_no:'',
      package:'',
      phone: '',
      email: '',
      country: '',
      terms: false,
    },
    validationSchema: Yup.object({
      first_name: Yup.string().min(2, t("error.minLimit")).required(t("error.firstName")),
      last_name: Yup.string().min(2, t("error.minLimit")).required(t("error.lastName")),
      platform: Yup.string().required(t("error.platform")),
      account_no:Yup.string().min(6,'minimum 6 numbers').max(7,"maximum 7 numbers").required(t("error.account_no")),
      package:Yup.string().required('Please Choose a package'),
      email: Yup.string().email(t("error.invalidEmail")).required(t("error.email")),
      country: Yup.string().required(t("error.country")),
    }),
    validate: values => {
      const errors = {};
      if (!values.phone) {
        errors.phone = 'Phone number is required';
      }
      return errors;
    },
    onSubmit: async(values) => {
      console.log(values);
      try {
        setLoading(true);
     try{   
     const response = await axios.post(`https://hooks.zapier.com/hooks/catch/16420445/38odhxb/`,JSON.stringify(values));
    }catch(err){
      console.log(err.message);
    }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        toast('Form Submitted Successfully!')
        formik.resetForm();
      }
    },
  });

  return (
    <div className="simple-form bg-gray-100 border shadow-xl border-gray-300 border-opacity-50 p-5 w-full mx-auto">
      <div className="form-heading text-center">
        <h3 className="py-3 bg-secondary text-white rounded-tl-xl rounded-tr-xl">
          {t("formTitle")}
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
          <div className="flex flex-col">
          
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
          <div className="flex flex-col">
          
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
        <div className="flex flex-col mb-3">
        
          <select
                  className={`bg-white text-primary border border-gray-300 py-3 px-4  ${formik.touched.country && formik.errors.country ? "border-2 border-yellow-500" : ""}`}
                  name="platform"
                  value={formik.values.platform}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">{t("selectPlaceholder")}</option>
                  {platforms.map((platform, el) => {
                    return (
                      <option key={platform.id} value={platform.value}>
                        {platform.name}
                      </option>
                    );
                  })}
                </select>  
          </div>  
          <div className="flex flex-col mb-3">
         
          <input
              type="number"
              name="account_no"
              id="account_no"
              placeholder={t("account_no")}
              className="formInput mt-0 bg-white"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.account_no}
            />
        </div>    
        <div className="flex flex-col mb-3">
       
          <select
                  className={`bg-white text-primary border border-gray-300 py-3 px-4  ${formik.touched.package && formik.errors.package ? "border-2 border-yellow-500" : ""}`}
                  name="package"
                  value={formik.values.package}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">{t("selectPlaceholder")}</option>
                  {packages.map((el) => {
                    return (
                      <option key={el.id} value={el.value}>
                        {el.name}
                      </option>
                    );
                  })}
                </select>  
          </div>      
        <div className="flex flex-col">
       
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            autoComplete="email"
            placeholder={t("email")}
            className="formInput mb-3 mt-0 bg-white"
          />
         
          <PhoneInput
            className="bg-white p-3 outline-none border border-gray-300 focus-visible:outline-none mb-3 mt-0"
            onChange={(value) => formik.setFieldValue('phone', value)}
            onBlur={formik.handleBlur}
            name="phone"
            value={formik.values.phone}
            defaultCountry={originCountry}
          />
       
          <select
            className={`bg-white text-primary border border-gray-300 py-3 px-4  ${formik.touched.country && formik.errors.country ? "border-2 border-yellow-500" : ""}`}
            name='country'
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value='' >{t("selectPlaceholder")}</option>
            {
              nationality.map((country, index) => {
                return (
                  <option className="text-primary" key={index} value={country.en_short_name}>{country.en_short_name}</option>
                )
              })
            }
          </select>
        </div>
        <div className="mt-3">
        </div>
        <button  disabled={loading} className="bg-secondary text-center text-white w-full py-3 text" type="submit">
         {loading ? <p>Sending...</p>:<p>Submit</p>}
        </button>
      </form>
    </div>
  );
};

export default VpsHostingForm;
