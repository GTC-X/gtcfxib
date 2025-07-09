"use client";

import { NextIntlClientProvider } from "next-intl";
import Header from "./components/Header";
import { useLanguageHook } from "./hook";
import FallbackLoader from "./components/LoadingSpinner";
import { Suspense, useEffect, useState } from "react";
import { FacebookPixelEvents } from "./components/utilities/pixelEvent";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";

const LayoutWrapper = ({ children, currentLanguage, locale, messages }) => {
  const { translation, loading } = useLanguageHook({ locale, messages });
  const pathName = usePathname(); // Access the router

  // Ensure the router and path-related logic runs only after mounting
  const isStaticPath = pathName?.includes("static");
  const ignoreMissingTranslations = process.env.NEXT_PUBLIC_IGNORE_MISSING_TRANSLATION === 'true';

  useEffect(() => {
    const referrerUrl = document.referrer;

    if (referrerUrl) {
      localStorage.setItem('user_referrer', referrerUrl);
    }
  }, []);

  return (
    <Suspense fallback={<FallbackLoader />}>
      <NextIntlClientProvider locale={locale} messages={translation}
        onError={(error) => {
          if (ignoreMissingTranslations && error.code === 'MISSING_MESSAGE') {
            return; // Ignore the error
          }
          throw error;
        }}
      >
        {loading && <FallbackLoader />}
        {!isStaticPath && <Header currentLanguage={currentLanguage} />}
        {children}
        <ToastContainer autoClose={3000} />
        <FacebookPixelEvents />
 
        {!isStaticPath && <Footer />}
      </NextIntlClientProvider>
    </Suspense>
  );
};

export default LayoutWrapper;
