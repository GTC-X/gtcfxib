"use client";
import React from "react";
import LocationContextProvider from "@/context/location-context";
import CookesBanner from "./CookiesBanner";

const Cookies = () => {
  return (
    <LocationContextProvider>
      <CookesBanner />
    </LocationContextProvider>
  );
};

export default Cookies;
