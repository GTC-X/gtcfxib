import React from "react";
import Link from "next/link";
import { FcAndroidOs } from "react-icons/fc";
import { BsWindows, BsAndroid, BsApple } from "react-icons/bs";
import { RiGlobalFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
const AppIcon5 = ({windowLink, appleLink, globalLink, apkLink, playLink}) => {
    const linkItems = [
        {
          link: windowLink,
          icon: <BsWindows size={22} />,
        },
        {
          link: appleLink,
          icon: <BsApple size={22} />,
        },
        {
          link: globalLink,
          icon: <RiGlobalFill size={22} />,
        },
      ];
      
  return (
    <>
    <div className="flex justify-start items-center gap-3 pt-6">
      <div className="p-3 bg-secondary text-primary w-12 h-12 rounded-full text-center  hover:bg-white cursor-pointer">
        <BsAndroid size={22} onClick={()=>document.getElementById('my_modal_1').showModal()} />
      </div>
      <div className="others-icon">
      <ul className="relative py-1 flex justify-start items-start gap-2">
        {linkItems.map((item, index) => (
        <li key={index} className="p-3 bg-secondary text-primary w-12 h-12 rounded-full text-center hover:bg-white">
            <Link href={item.link} target="_blank">{item.icon}</Link>
        </li>
        ))}
         </ul>
      </div>
    </div>
        <dialog
        id="my_modal_1"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box text-center md:w-[400px] ">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">
            Download MT5 App
            </h3>
            <div className="modal-action m-0">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="p-2 bg-secondary text-primary rounded-full">
                <IoMdClose size={20} />
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-5">
            <Link
              target="_blank"
              href={playLink}
            >
              <img className="w-48 mx-auto rounded-md" src="/google.svg" />
            </Link>
            <Link
              target="_blank"
              href={apkLink}
            >
              <div className="flex justify-center items-center gap-2 px-2 py-4 md:py-2 bg-black w-[190px] md:npw-[180px] mx-auto rounded-lg">
                <FcAndroidOs size={30} />
                <p className="text-white font-medium text-base">
                  Download APK
                </p>
              </div>
            </Link>
          </div>
        </div>
      </dialog>
      </>
  );
};

export default AppIcon5;
