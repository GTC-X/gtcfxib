"use client";
import LocationContextProvider from "@/context/location-context";
import SupportForm from "../components/forms/SupportForm";

const page = () => {
  return (
    <LocationContextProvider>
      <div className="max-w-4xl mx-auto py-20">
        <div className="content shadow-2xl p-10">
        <h2 className="mb-10 text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl text-center">
            Immediate Leads
        </h2>
        <SupportForm />
        </div>
      </div>
    </LocationContextProvider>
  );
};

export default page;
