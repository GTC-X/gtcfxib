// components/Popup.js
import React from "react";
import { Dialog } from "@headlessui/react";
import { IoCloseSharp } from "react-icons/io5";
import { useTranslations } from "next-intl";


const LeveragePop = ({ isOpen, onClose }) => {
  const t = useTranslations("lervage.popUp")
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-normal xl:text-[30px] 2xl:text-[28px] capitalize leading-10">{t('leveragePopTitle')}</h2>
            <button onClick={onClose} className="text-gray-600 outline-0">
              <IoCloseSharp className="w-6 h-6 bg-secondary rounded-full text-white outline-0" />
            </button>
          </div>
          <p className="mt-4">{t("description")}</p>
          <div className="mt-6">
            <button
              onClick={onClose}
              className="bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#05033162] rounded-lg shadow-lg overflow-hidden text-white 3xl:text-base px-5 py-3 text-center md:w-auto  md:m-0 mx-auto transition-colors duration-900 hover:bg-gradient-to-b hover:from-secondary hover:to-[#fff] duration-500 hover:text-primary"
            >
               {t('agreedButton')}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default LeveragePop;
