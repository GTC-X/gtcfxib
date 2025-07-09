import "../globals.css";
import "aos/dist/aos.css";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { notFound } from "next/navigation";
import localFont from "@next/font/local";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import { supportedLanguages } from "@/helpers/localization";
import { getCookie, setCookie } from "cookies-next";
import LayoutWrapper from "./LayoutWrapper";

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto/Roboto-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Roboto/Roboto-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Roboto/Roboto-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Roboto/Roboto-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-roboto",
});

const kufi = localFont({
  src: [
    {
      path: "../../public/fonts/Kufi/NotoKufiArabic-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Kufi/NotoKufiArabic-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Kufi/NotoKufiArabic-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Kufi/NotoKufiArabic-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-kufi",
});

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ar-AE" }
  ];
}

export default async function LocaleLayout({ children, params }) {
  setCookie("gtcfx", "true", { maxAge: 60 * 6 * 24 });
  const { locale } = params;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  const currentLanguage = supportedLanguages[locale];

  return (
    <html
        lang={currentLanguage?.locale || locale}
      dir={currentLanguage?.direction}
      className={`${
        currentLanguage?.font == "font-kufi"
          ? `${kufi.variable} font-kufi`
          : `${roboto.variable} font-sans`
      } `}
    >
      <head>
        <meta
          name="facebook-domain-verification"
          content="60dqaxv53ub77e10r0xc6bmbl9y2b3"
        />
        <Script
          async={true}
          src="https://www.googletagmanager.com/gtag/js?id=AW-10835048699"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'AW-10835048699');
            `,
          }}
        />
         {/* Finteza Script */}
         <Script
          id="finteza-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(a,e,f,g,b,c,d){a[b]||(a.FintezaCoreObject=b,a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)},a[b].l=1*new Date,c=e.createElement(f),d=e.getElementsByTagName(f)[0],c.async=!0,c.defer=!0,c.src=g,d&&d.parentNode&&d.parentNode.insertBefore(c,d))})
              (window,document,"script","https://content.mql5.com/core.js","fz");
              fz("register","website",{id:"dzwzfjftdagmxioapjzjratbyxemivrdqi",trackLinks:true,timeOnPage:true});
            `,
          }}
        />
        
          <Script src="https://cloud.umami.is/script.js" data-website-id="6e6d0916-5871-41f5-8ef5-1f89b83e611b" defer></Script>
           <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', "GTM-PSWH9QF");
        `,
          }}
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        function gtag_report_conversion(url) {
          var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          gtag('event', 'conversion', {
              'send_to': 'AW-10835048699/LUb0CNmY5OsYEPvxxq4o',
              'event_callback': callback
          });
          return false;
        }
           document.addEventListener("wpcf7submit", function(event){
            gtag_report_conversion();
          }, false);
        `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: ` <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSWH9QF"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
  
      </head>
      <body className="bg-white">
        <LayoutWrapper
          children={children}
          currentLanguage={currentLanguage}
          locale={locale}
          messages={messages}
        />
       
      </body> 
    </html>
  );
}
