'use client'
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import { IoCloseSharp } from "react-icons/io5";

const LpStaticModal = ({ open, setOpen }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: "",
            terms: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email Address is required"),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            axios.post(`https://hooks.zapier.com/hooks/catch/16420445/2dqqi6m/`, JSON.stringify(values))
            .then(res => {
                router.push("/");
            }).catch((err) => {
                toast.error(err?.message || "Something went wrong, try again!");
            }).finally(() => {
                setLoading(false);
            });
        },
    });

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)} // Close when clicking outside the modal
        >
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-xl min-w-80 mx-auto relative">
                    {/* Close Button */}
                    <button
                        onClick={() => {
                            setOpen(false);
                            localStorage.removeItem("state");
                        }}
                        className="text-gray-600 absolute top-3 right-3"
                    >
                        <IoCloseSharp className="w-6 h-6 bg-secondary rounded-full text-white" />
                    </button>

                    <form onSubmit={formik.handleSubmit} className="py-3">
                        <div className="flex flex-col">
                            <label
                                className={`text-[13px] ${formik.touched.email && formik.errors.email ? "text-red-600 border-1 border-red-600" : ""}`}
                            >
                                {formik.touched.email && formik.errors.email ? formik.errors.email : "Please Enter Your Email To Continue"}
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
                                    className="formInput mb-3 mt-0 bg-white w-full"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-start justify-start py-3 gap-1">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    id="terms"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                    value="checked"
                                    className="h-5 w-5"
                                />
                                <p className="inline px-2 text-[11px]">
                                    By submitting your application, you confirm that you have read, understood, and agreed to all the terms and conditions contained herein.
                                </p>
                            </div>
                            <label className={`text-[13px] ${formik.touched.terms && formik.errors.terms ? "text-red-700" : ""}`}>
                                {formik.touched.terms && formik.errors.terms ? formik.errors.terms : ""}
                            </label>
                        </div>
                        <div className="mt-6">
                            <button className="bg-gradient-to-l from-secondary via-[#807f8d] to-[#202d7bdb] text-center w-full py-3 font-semibold text-white text-lg" type="submit">
                                {loading ? <p> Sending...</p> : <p>Send</p>}
                            </button>
                        </div>
                    </form>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

export default LpStaticModal;
