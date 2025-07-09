import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLogin } from "react-icons/md";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useRouter } from "next-intl/client";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useTranslations } from "next-intl";
import { RxCross2 } from "react-icons/rx";

export default function MobileMenu(props) {
  const { navigationData, href } = props;
  const router = useRouter();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const t = useTranslations("navigation");
  const ref = useDetectClickOutside({
    onTriggered: () => {
      setOpen(false);
    },
  });

  return (
    <Popover className="" ref={ref}>
      <Popover.Button
        className="inline-flex items-center border border-[#ccc] rounded-none p-1 bg-primary text-white"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <GiHamburgerMenu size={"22px"} />
      </Popover.Button>

      <Transition
        as={Fragment}
        show={open}
        enter="transform transition duration-300 ease-out"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition duration-200 ease-in"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Popover.Panel
          className="fixed h-full top-0 left-0 z-50 w-90% max-w-sm bg-white overflow-y-auto"
          style={{ width: "92%" }}
        >
          <div className="flex flex-row items-center justify-between p-4 border-b border-gray-300 ">
            <p className="flex flex-row gap-2 justify-start items-center text-lg">
              <GiHamburgerMenu size={"22px"} />
              Menu
            </p>
            <button
              className="text-primary text-2xl"
              onClick={() => setOpen(false)} // Close the popover when the icon is clicked
            >
              <RxCross2 />
            </button>
          </div>
          <div className="flex flex-row justify-center gap-4 items-center  p-3 border-b border-gray-300">
            <div className="">
              <Link
                href="https://web.mygtc.app/login/register?code=2544249&scope=1"
                target="_blank"
                className="uppercase border border-[#29a643] hover:bg-primary hover:text-white  text-[11px] px-3 py-[6px] md:flex gap-2 items-center"
              >
                 {t("tobbar.account")}
              </Link>
              {/* Ensure any other link you want to add border styling to is updated similarly */}
            </div>
            <div className="">
              <Link
                href="/introductory-broker"
                className=" uppercase border-secondary hover:bg-primary hover:text-white text-[11px] border  px-3 py-[6px] md:flex gap-2 items-center"
              >
                {t("tobbar.rgister")}
              </Link>
              {/* Ensure any other link you want to add border styling to is updated similarly */}
            </div>
          </div>
          <ul className="menu p-0 text-accent">
            {navigationData?.map((item, index) => (
              <li key={index}>
                <details>
                  <summary className="rounded-none border-b py-4 text-sm text-accent hover:bg-primary hover:text-white">
                    {item?.title}
                  </summary>
                  {item?.links?.map((row, index) => (
                    <Fragment key={index}>
                      {row?.title && (
                        <h3
                          className={`flex gap-2 items-center underline text-[15px] 2xl:text-[19px] border-b 3xl:text-xl text-secondary px-4 py-4 `}
                        >
                          <p className="text-primary text-base">{row.icon}</p>
                          {row.title}
                        </h3>
                      )}
                      {row?.items?.map((value) => {
                        if (!value?.locale?.includes(locale)) {
                          return null;
                        }
                        return (
                          <button
                            key={index}
                            className="block px-9 w-full text-left border-b py-4 text-accent bg-white hover:bg-primary hover:text-white"
                            onClick={() => {
                              router.push(value?.href, { locale: locale });
                              setOpen(false);
                            }}
                          >
                            {value?.label}
                          </button>
                        );
                      })}
                    </Fragment>
                  ))}
                </details>
              </li>
            ))}
            <Link
              target="_blank"
              href="https://mygtcportal.com/"
              className="primaryButton rounded-none text-sm font-normal bg-primary hover:bg-secondary hover:text-primary flex gap-2 items-center"
            >
              <MdOutlineLogin size={20} /> {t("new_client_portal")} 1
            </Link>
             <Link
              target="_blank"
              href="https://web.mygtc.app/login/login"
              className="primaryButton rounded-none text-sm my-2 font-normal bg-primary hover:bg-secondary hover:text-primary flex gap-2 items-center"
            >
              <MdOutlineLogin size={20} /> {t("new_client_portal")} 2
            </Link>
          </ul>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
