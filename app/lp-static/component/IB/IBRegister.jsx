import { Dialog } from "@headlessui/react";
import VPSPakFrom from "../common/VPSPakFrom";

const IBRegister = ({ isOpen, closeModal }) => {


  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#05033162] rounded-lg shadow-lg relative">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-8 text-white hover:text-secondary transition"
            aria-label="Close"
          >
            &times;
          </button>
      
          <VPSPakFrom />
        
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default IBRegister