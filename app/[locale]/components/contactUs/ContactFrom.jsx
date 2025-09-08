"use client";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import Link from "next-intl/link";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import useCountriesDetails from "@/context/useCountriesDetails";
import { useLocationDetail } from "@/context/useLocationDetail";
import axios from "axios";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("AE");
  const t = useTranslations("about.contact-us"); // Primary namespace
  const t2 = useTranslations("form"); // Secondary namespace for form-specific translations
  const locale = useLocale();
  const router = useRouter();

  const { countryList } = useCountriesDetails(locale);
  const { countryData } = useLocationDetail();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      country: "",
      message: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(2, t("error.min"))
        .required(t("error.firstName")),
      last_name: Yup.string()
        .min(2, t("error.min"))
        .required(t("error.lastName")),
      email: Yup.string()
        .email(t("error.invalidEmail"))
        .required(t("error.email")),
      country: Yup.string().required(t2("error.country")),
      phone: Yup.string().required(t2("error.phone")),
      message: Yup.string().required(t2("error.message")),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        // Step 1: Send to internal API
        const res = await fetch("/api/send-support-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        await axios.post("https://hooks.zapier.com/hooks/catch/16420445/3gwk9ez/", JSON.stringify(values));

        if (!res.ok) {
          throw new Error("Failed to send support email");
        }

        // Step 2: Send to Zapier
        // const zapierRes = await fetch(
        //   "https://hooks.zapier.com/hooks/catch/16420445/3gwk9ez/",
        //   {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //       ...values,
        //       locale: locale, // Add locale for tracking
        //       timestamp: new Date().toISOString(), // Add timestamp for Zapier
        //     }),
        //   }
        // );

        // if (!zapierRes.ok) {
        //   console.warn("Zapier notification failed, but form submission succeeded");
        // }

        toast.success(t2("submitted_success"));
        formik.resetForm();
        router.push(`/${locale}/thank-you`);
      } catch (error) {
        console.error(error);
        toast.error(t2("otp_error") || "An error occurred."); 
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (countryData?.country) {
      const matched = countryList.find((c) => c.code === countryData.country);
      if (matched) {
        formik.setFieldValue("country", matched.nameInEnglish);
        setCountryCode(matched.code);
      }
    }
  }, [countryData?.country, countryList]);

  return (
    <div className="p-4 md:p-8 border border-gray-300 bg-gray-100">
      <form onSubmit={formik.handleSubmit}>
        <div className="space-y-6">
          <div className="grid max-w-6xl grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 md:col-span-2 text-left">
            {/* First Name */}
            <div className="sm:col-span-3">
              <input
                type="text"
                name="first_name"
                placeholder={t("form.first-name")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.first_name}
                className={`block w-full bg-white border p-2 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 ${
                  formik.touched.first_name && formik.errors.first_name
                    ? "border-red-600"
                    : "border-gray-200"
                }`}
              />
              {formik.touched.first_name && formik.errors.first_name && (
                <p className="text-red-600 text-xs">{formik.errors.first_name}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="sm:col-span-3">
              <input
                type="text"
                name="last_name"
                placeholder={t("form.last-name")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
                className={`block w-full bg-white border p-2 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 ${
                  formik.touched.last_name && formik.errors.last_name
                    ? "border-red-600"
                    : "border-gray-200"
                }`}
              />
              {formik.touched.last_name && formik.errors.last_name && (
                <p className="text-red-600 text-xs">{formik.errors.last_name}</p>
              )}
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <input
                type="email"
                name="email"
                placeholder={t("form.email")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`block w-full bg-white border p-2 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-600"
                    : "border-gray-200"
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-600 text-xs">{formik.errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="sm:col-span-2">
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry={countryCode}
                value={formik.values.phone}
                onChange={(phone) => formik.setFieldValue("phone", phone)}
                className={`w-full px-4 py-2 border ${
                  formik.touched.phone && formik.errors.phone
                    ? "border-red-600"
                    : "border-gray-200"
                } bg-white`}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-600 text-xs">{formik.errors.phone}</p>
              )}
            </div>

            {/* Country */}
            <div className="sm:col-span-2">
              <select
                className={`w-full py-[10px] bg-white text-sm border px-3 ${
                  formik.touched.country && formik.errors.country
                    ? "border-red-600"
                    : "border-gray-200"
                }`}
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled hidden>{t2("CountryPlace")}</option>
                {countryList.map((country, index) => (
                  <option key={index} value={country.nameInEnglish}>
                    {country.name}
                  </option>
                ))}
              </select>
              {formik.touched.country && formik.errors.country && (
                <p className="text-red-600 text-xs">{formik.errors.country}</p>
              )}
            </div>

            {/* Message */}
            <div className="col-span-full">
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder={t("form.message")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className={`block w-full bg-white border p-2 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-600"
                    : "border-gray-200"
                }`}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-600 text-xs">{formik.errors.message}</p>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="mt-6 flex flex-col items-center justify-end gap-x-6">
            <button
              disabled={loading}
              type="submit"
              className="bg-primary text-white text-xl w-[120px] h-[50px] rounded"
            >
              {loading ? t("form.sending") : t("form.submit")}
            </button>
            <p className="inline px-3 text-[11px] text-primary pt-5">
              {t2("terms")}{" "}
              <Link
                href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf"
                target="_blank"
                className="underline text-[#3b36cc]"
              >
                {t2("termText2")}
              </Link>{" "}
              {t2("termText3")}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;