"use client";
import { useTranslations } from "next-intl";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import axios from "axios";
import { LocationContext } from "@/context/location-context";
import { FaArrowRightLong } from "react-icons/fa6";
import { Dialog, Switch, Transition } from "@headlessui/react";
import { IoCloseSharp } from "react-icons/io5";
import { useLocationDetail } from "@/context/useLocationDetail";
import TagManager from 'react-gtm-module';

const CookiesBanner = () => {
  const t = useTranslations("cookies");
  const [show, setShow] = useState(false);
  const [customize, setCustomize] = useState(false);
  const location = useContext(LocationContext);
  const [enabled, setEnabled] = useState({
    analytics: false,
    advertising: false
  })
  const { countryCode, countryData } = useLocationDetail()

  // Define a list of European countries
  const europeanCountries = ['AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'];
  const isEuropean = countryCode && europeanCountries.includes(countryCode);

  useEffect(() => {
    const cookieValue = getCookie("gtcfx");
    setShow(cookieValue !== "true");
  }, []);

  const handleClick = () => {
    const dataLayerArgs = {
      dataLayer: {
        event: 'button_click',  // Custom event name
        buttonName: 'Cookies',   // Example data: button name
        ...countryData
      },
    };
    TagManager.dataLayer(dataLayerArgs);
  };

  const handleApiCall = () => {
    const payload = { newUser: true, ...location };
    axios
      .post(
        "https://hooks.zapier.com/hooks/catch/16420445/37ltm4i/",
        JSON.stringify(payload)
      )
      .then((res) => {
        handleClick()
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <>
      <Transition
        appear
        show={customize}
        as={Fragment}
        onClose={() => setCustomize(true)}
      >
        <Dialog as="div" className="relative z-[51]">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 bg-opacity-25 transition-opacity overflow-auto" />
          </Transition.Child>

          <div className="fixed inset-0 bg-black/70 bg-opacity-25  overflow-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <div>
                <IoCloseSharp size={40} className="bg-[#ffffff1a] cursor-pointer z-10 rounded-md p-1 text-[#fff] fixed top-8 right-8"
                  onClick={() => {
                    setShow(true)
                    setCustomize(false)
                  }}
                />
              </div>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90% rounded-[25px] backdrop-blur-md p-10 md:py-14 md:px-20 max-w-4xl mx-auto ">
                  <div className="mt-2 flex gap-4 flex-col sm:flex-row items-center">
                    <div>
                      <p className="text-base md:text-lg mb-2 bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text font-normal">
                        {t("PopText.heading1")}
                      </p>
                      <p className=" text-sm text-white">
                        {t("PopText.des1")}
                      </p>
                    </div>
                    <div>
                      <Switch
                        disabled
                        className={`bg-secondary relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span className="sr-only">{t("PopText.enable1")}</span>
                        <span
                          className={`translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </Switch>
                    </div>
                  </div>
                  <hr class="mt-6 mb-4 sm:my-4"></hr>
                  <div className="mt-2 flex gap-4 flex-col sm:flex-row items-center">
                    <div>
                      <p className="text-base md:text-lg mb-2 bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text font-normal">
                        {t("PopText.heading2")}
                      </p>
                      <p className=" text-sm text-white">
                        {t("PopText.desc2")}
                      </p>
                    </div>
                    <div>
                      <Switch
                        checked={enabled?.analytics}
                        onChange={(e) => {
                          setEnabled((st) => ({ ...st, analytics: e }))
                        }}
                        className={`${enabled?.analytics ? 'bg-secondary' : 'bg-gray-700'
                          } relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span className="sr-only">{t("PopText.enable1")}</span>
                        <span
                          className={`${enabled?.analytics ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </Switch>
                    </div>
                  </div>
                  <hr class="mt-6 mb-4 sm:my-4"></hr>
                  <div className="mt-2 flex gap-4 flex-col sm:flex-row items-center">
                    <div>
                      <p className="text-base md:text-lg mb-2 bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text font-normal">
                        {t("PopText.heading3")}
                      </p>
                      <p className=" text-sm text-white">
                        {t("PopText.des3")}
                      </p>
                    </div>
                    <div>
                      <Switch
                        checked={enabled?.advertising}
                        onChange={(e) => {
                          setEnabled((st) => ({ ...st, advertising: e }))
                        }}
                        className={`${enabled?.advertising ? 'bg-secondary' : 'bg-gray-700'
                          } relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span className="sr-only"> {t("PopText.enable1")}</span>
                        <span
                          className={`${enabled?.advertising ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </Switch>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="text-base mx-auto flex gap-2 items-center p-3 px-6 font-medium cursor-pointer bg-white rounded-[25px] hover:bg-secondary hover:text-white  text-primary"
                      onClick={() => {
                        setCookie("gtcfx", "true", { maxAge: 1728000 }); // 20 days
                        setShow(false);
                        handleApiCall();
                        setCustomize(false)
                      }}
                    >
                      <span className=" whitespace-pre tedxt-base font-medium">
                        {t("PopText.saveButton")}
                      </span>
                      <FaArrowRightLong />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {show && (
        <>
          {isEuropean ?
            <div className=" flex justify-center relative">
              <div
                className="rounded-2xl drop-shadow-[0_0_10px_#00000099] max-w-5xl lg:w-2/3 md:w-4/5 z-[52] fixed bottom-0 m-3 text-white p-4 py-6"
                style={{
                  background:
                    "radial-gradient(100% 100% at 100.85% 80%, #1b319f 0, #0b1c54 100%)",
                }}
              >
                <div className="">
                  <div className="flex gap-5 sm:flex-wrap flex-wrap justify-center items-center md:flex-nowrap ">
                    <p className="text-[14px] ltr:text-left rtl:text-right col-span-1 md:col-span-10">
                      {t("text")}
                    </p>
                    <div className="flex items-center gap-6">
                      <h3 className="text-base whitespace-pre text-secondary font-medium cursor-pointer underline"
                        onClick={() => { setShow(false) }}
                      >
                        {t("reject")}
                      </h3>
                      <h3
                        className="text-base whitespace-pre text-secondary font-medium cursor-pointer underline"
                        onClick={() => {
                          setCustomize(true);
                          setShow(false)
                        }}
                      >
                        {t("customize")}
                      </h3>
                      <button className="text-base flex gap-2 items-center p-2 font-medium cursor-pointer bg-white hover:bg-secondary hover:text-white rounded-[25px]  text-primary"
                        onClick={() => {
                          setCookie("gtcfx", "true", { maxAge: 1728000 }); // 20 days
                          setShow(false);
                          handleApiCall();
                        }}>
                        <span className=" whitespace-pre tedxt-base font-medium">
                          {t("acceptAll")}
                        </span>
                        <FaArrowRightLong />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :
            <div className="w-full bg-secondary z-50 fixed bottom-0 text-white p-4">
              <div className="container">
                <div className="grid grid-cols-1 items-center md:grid-cols-12 gap-4">
                  <p className="text-[13px] ltr:text-left rtl:text-right col-span-1 md:col-span-10">
                    {t("text")}
                  </p>
                  <div className="md:text-right text-center col-span-1 md:col-span-2">
                    <button
                      className="text-white uppercase bg-primary text-sm px-3 py-[6px] gap-2 items-center hover:bg-white hover:text-primary"
                      onClick={() => {
                        setCookie("gtcfx", "true", { maxAge: 1728000 }); // 20 days
                        setShow(false);
                        handleApiCall();
                      }}
                    >
                      {t("btnText")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          }
        </>
      )}
    </>
  );
};

export default CookiesBanner;
