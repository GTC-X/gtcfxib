import { Dialog } from "@headlessui/react";
import IBFrom from "../../common/IBFrom";

const RegistrationPopup = ({ isOpen, closeModal }) => {


  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm bg-gradient-to-l from-[#202d7bdb] via-[#050331] to-[#202d7bdb] rounded-lg shadow-lg p-5 relative">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition"
            aria-label="Close"
          >
            &times;
          </button>
          <div className="text-center">
          <h2 className="bg-gradient-to-r from-white to-secondary inline-block text-transparent bg-clip-text text-xl font-[600] xl:text-[30px] 2xl:text-[25px] mb-5 capitalize max-w-xl leading-tight">Register Now</h2>
          </div>
          <IBFrom />
        
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default RegistrationPopup;
