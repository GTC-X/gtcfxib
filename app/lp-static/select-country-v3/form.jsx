"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePathname, useRouter } from "next/navigation";
import nationality from "../../../public/data/nationality.json";
import "react-phone-number-input/style.css";
import { useEffect, useState } from "react";
import { useLocationDetail } from "@/context/useLocationDetail";

const BonusV3Form = () => {
    //Email OTP Logic
    const router = useRouter()
    const [loading, setLoading] = useState(false);

    const path = usePathname();
    const { countryData } = useLocationDetail()
    const [initialCountry, setInitialCountry] = useState("");

    // Update the initial country value when countryData is available
    useEffect(() => {
        if (countryData?.country) {
            const filterData = nationality?.find(x => x?.alpha_2_code == countryData?.country)
            console.log({ filterData })
            setInitialCountry(filterData?.en_short_name || "");
        }
    }, [countryData?.country]);

    const formik = useFormik({
        initialValues: {
            ip: "",
            fbclid: "",
            utm_compaign: "",
            utm_source: "",
            country: initialCountry,
        },
        validationSchema: Yup.object({
            country: Yup.string().required("Country is required"),
        }),
        enableReinitialize: true,
        validate: (values) => {
            const errors = {};
            return errors;
        },
        onSubmit: async (values) => {
            {
                console.log("Form submitted:", values);

                // Redirect to the URL after submission
                router.push("https://www.gtcfx.com/lp-static/introductory-broker-v2");
            }
        },
    });

    return (
        <div className="container py-10 mx-auto h-screen bg-white">
            <div className=" flex justify-center">
                <div
                    className="simple-form  border-opacity-50 w-full rounded-lg md:w-full lg:w-96 border border-gray-200 p-4 bg-[#eef0f1]"
                    id="register"
                >
                    <div className="form-heading text-center ">
                        <h3 className="py-3 bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] uppercase rounded-tl-xl rounded-tr-xl text-white">
                            Select Your Country To Continue
                        </h3>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="py-3">
                        <div>
                            <div className="flex flex-col my-2">
                                <label
                                    className={`text-[13px] ${formik.touched.country && formik.errors.country
                                        ? "text-red-600"
                                        : "text-primary"
                                        }`}
                                >
                                    {formik.touched.country && formik.errors.country
                                        ? formik.errors.country
                                        : "Selected country"}
                                </label>
                                <select
                                    className={`bg-gray-100 mt-2 border rounded-md text-primary placeholder:text-primary capitalize py-3 text-sm px-4 ${formik.touched.country && formik.errors.country
                                        ? "border-2 border-red-600"
                                        : ""
                                        }`}
                                    name="country"
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="">{"Please Select One"}</option>
                                    {/* Filtered Country */}
                                    {initialCountry && (
                                        <option key="filtered-country" value={initialCountry}>
                                            {initialCountry}
                                        </option>
                                    )}
                                    {/* Remaining Countries */}
                                    {nationality
                                        .filter((country) => country.en_short_name !== initialCountry)
                                        .map((country, index) => (
                                            <option key={index} value={country.en_short_name}>
                                                {country.en_short_name}
                                            </option>
                                        ))}
                                </select>
                            </div>

                        </div>
                        <button
                            className={`bg-gradient-to-r mt-8 from-[#24358b] via-[#242c75] to-[#141b43] text-center w-full py-3 font-semibold text-white text-lg ${
                                !formik.values.firstCountry || loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            type="submit"
                            disabled={!formik.values.firstCountry || loading}
                        >
                            {loading ? <p>{"Sending..."}</p> : <p>{"Submit"}</p>}
                        </button>
                                            </form>
                </div>
            </div>
        </div>
    );
};

export default BonusV3Form