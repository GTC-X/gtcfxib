"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next-intl/link";
import { useLocale, useTranslations } from "next-intl";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next-intl/client";
import { useParams, usePathname } from "next/navigation";
import { LiaBoxesSolid } from "react-icons/lia";
import { RiStockLine, RiGlobalLine } from "react-icons/ri";
import { IoMdLaptop } from "react-icons/io";
import { BsBarChart } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWbSunny, MdOutlineManageAccounts } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { FiBriefcase, FiGitPullRequest } from "react-icons/fi";
import { BiAnalyse, BiSpeaker } from "react-icons/bi";
import { MdOutlineLogin } from "react-icons/md";
import { useDetectClickOutside } from "react-detect-click-outside";
import LocationContextProvider from "@/context/location-context";
import LanguageMobile from "./LanguageMobile";
import { TbSpeakerphone } from "react-icons/tb";
import TopBar from "./Topbar";

const NavItem = ({
  title,
  links,
  href,
  locale,
  description,
  id,
  show,
  setShow,
}) => {
  const [arrow, setArrow] = useState("down");
  const router = useRouter();
  const urlLocale = useLocale();
  const pathname = usePathname();
  const isAr = pathname.includes("/ar-AE");
  const pathnameWithoutLocale = pathname.replace(`/${urlLocale}`, "");
  const innerActive = links?.some((single) => {
    return single?.items?.some((x) => x?.href === pathnameWithoutLocale);
  });
  const activeClass =
    pathnameWithoutLocale == href || innerActive
      ? "text-secondary"
      : "text-primary";
      

  return (
    <li className={`${activeClass} clickable hover:text-secondary `}>
      <div
        className="flex justify-center items-center"
        // onMouseEnter={() => {
        //   setShowMenu("!block");
        //   setArrow("up");
        // }}
        // onMouseLeave={() => {
        //   setShowMenu("hidden");
        //   setArrow("down");
        // }}
        onClick={() => {
          setShow(show == id ? "" : id);
          setArrow("up");
          // router.push(href, { locale: locale });
        }}
      >
        <button
          className={`block cursor-pointer py-6  ${
            isAr ? "pr-2 lg:pr-5 pl-2 lg:pl-5" : "pl-2 lg:pl-4 lg:pr-4"
          }  lg:py-5 text-[sm] lg:text-[16px] 3xl:text-xl`}
        >
          {title}
        </button>
      </div>
      {show == id && (
        <div
          className={`mega-menu mb-16 sm:mb-0 shadow-xl border-t border-gray-200 h-[400px] z-50 bg-white rounded-b-none !block mt-2`}
        >
          <div className="container w-full flex flex-wrap py-5">
            <div className=" basis-3/12 flex justify-end">
              <div
                className={`content-sidebar text-primary border-gray-100 mt-8 lg:text-[11.5px] 2xl:text-[15px] ltr:text-left ltr:pr-8 rtl:text-right rtl:pl-8`}
              >
                <p className="mb-4 leading-5 ">{description}</p>
              </div>
            </div>

            {links.map((linkGroup, index) => (
              <div className=" basis-3/12 flex justify-between">
                <ul key={index} className={`px-4 w-full  pb-6 pt-6 lg:pt-3`}>
                  <h3
                    className={`flex gap-2 items-center underline text-[15px] 2xl:text-[19px] 3xl:text-xl text-secondary mb-2 ${
                      isAr ? "text-right" : "text-left"
                    }`}
                  >
                    <p className="text-primary text-2xl">{linkGroup.icon}</p>
                    {linkGroup.title}
                  </h3>
                  {linkGroup.items?.map((item, itemIndex) => {
                    const activeClassList =
                      pathnameWithoutLocale == item.href
                        ? "text-secondary"
                        : "text-primary";
                    if (!item?.locale?.includes(locale)) {
                      return null;
                    }
                    return (
                      <li
                        key={itemIndex}
                        className="py-2 text-sm md:text-base 2xl:text-lg 3xl:text-xl border-b border-gray-200 border-opacity-40 last:border-0 rtl:text-right"
                      >
                       <Link
                      href={item.href}
                      locale={locale}
                      className={`block ${activeClassList} hover:text-secondary`}
                      onClick={() => setShow("")}
                    >
                      {item.label}
                    </Link>


                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

const Header = ({currentLanguage}) => {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [show, setShow] = useState("");
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
  const [href, setHref] = useState([
    {
      href: "/",
      locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
    },
  ]);
  const isAr = pathname.includes("/ar-AE");
  const navigationData = [
    {
      title: t("about.lable"),
      locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
      description: t("about.des"),
      id: 1,
      links: [
        {
          icon: <IoHomeOutline />,
          title: t("about.firstcolumn.heading"),
          items: [
            {
              href: "/about-us",
              label: t("about.firstcolumn.option1"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/why-gtc-group",
              label: t("about.firstcolumn.option2"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/regulations",
              label: t("about.firstcolumn.option3"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },

          ],
        },
        {
          icon: <RiGlobalLine />,
          title: t("about.secondcolumn.heading"),
          items: [
            {
              href: "/global-presence",
              label: t("about.secondcolumn.option1"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/awards",
              label: t("about.secondcolumn.option2"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/compensation-fund",
              label: t("about.secondcolumn.option3"),
              locale: "en,ar-AE,zh-hans,zh-TW,ms-MY,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR",
            },
          ],
        },
        {
          icon: <MdOutlineWbSunny />,
          title: t("about.thirdcolumn.heading"),
          items: [
           
            {
              href: "/contact-us",
              label: t("about.thirdcolumn.option3"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
          ],
        },
      ],
    },
    {
      title: t("account.lable"),
      href: "#",
      locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
      description: t("account.des"),
      id: 2,
      links: [
        {
          icon: <MdOutlineManageAccounts />,
          title: t("account.firstcolumn.heading"),
          items: [
            {
              href: "https://mygtcfx.com/getview?view=register",
              label: t("account.firstcolumn.option1"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/free-demo-account",
              label: t("account.firstcolumn.option3"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/deposit",
              label: t("account.firstcolumn.option2"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
          ],
        },
        {
          icon: <LiaBoxesSolid />,
          title: t("account.secondcolumn.heading"),
          items: [
            {
              href: "/account-types",
              label: t("account.secondcolumn.option1"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
          ],
        },
        {
          icon: <TbSpeakerphone />,
          title: t("account.thirdcolumn.heading"),
          items: [
            {
              href: "/cashback-bonus-promotion",
              label: t("account.thirdcolumn.option1"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
          ],
        },
      ],
    }, 
    {
      title: t("trading.lable"),
      href: "#",
      locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
      description: t("trading.des"),
      id: 3,
      links: [
        {
          icon: <RiStockLine />,
          title: t("trading.firstcolumn.heading"),
          items: [
            {
              href: "/forex",
              label: t("trading.firstcolumn.option1"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/cfd-energy",
              label: t("trading.firstcolumn.option6"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/shares",
              label: t("trading.firstcolumn.option7"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/stock",
              label: t("trading.firstcolumn.option3"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/commodities",
              label: t("trading.firstcolumn.option4"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/indices",
              label: t("trading.firstcolumn.option5"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/precious-metals",
              label: t("trading.firstcolumn.option2"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            
           
          ],
        },
        {
          icon: <IoMdLaptop />,
          title: t("trading.secondcolumn.heading"),
          items: [
            {
              href: "/mt5-platform",
              label: t("trading.secondcolumn.option2"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/download-app",
              label: t("trading.secondcolumn.option3"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
          ],
        },
        {
          icon: <BsBarChart />,
          title: t("trading.thirdcolumn.heading"), 
          items: [
            {
              href: "/tutorial-videos",
              label: t("trading.thirdcolumn.option"),
              locale: "en",
            },
            {
              href: "/webinar-with-gtcfx",
              label: "Weekly Webinars",
              locale: "en",
            },
            {
              href: "/economic-calendar",
              label: t("trading.thirdcolumn.option2"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/market-overview",
              label: t("trading.thirdcolumn.option3"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/glossary-faqs",
              label: t("trading.thirdcolumn.option4"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/dynamic-leverage",
              label: t("trading.thirdcolumn.option5"),
              locale: "en",
            },
            {
              href: "/swap-update",
              label: t("trading.thirdcolumn.option6"),
              locale: "en",
            },
          ],
        },
      ],
    },
    {
      title: t("partner.lable"),
      href: "#",
      locale: "en,ar-AE,zh-hans,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF,pt-PT,tr-TR,",
      description: t("partner.des"),
      id: 4,
      links: [
        {
          items: [
            {
              href: "/introductory-broker",
              label: t("partner.firstcolumn.option1"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
          ],
        },
        {
          items: [
            {
              href: "/affiliate-program",
              label: t("partner.thirdcolumn.option1"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
          ],
        },
      ],
    },
    {
      title: t("technology.lable"),
      href: "#",
      locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
      description: t("technology.des"),
      id: 5,
      links: [
        {
          icon: <FiBriefcase />,
          title: t("technology.firstcolumn.heading"),
          items: [
            {
              href: "/liquidity-technology",
              label: t("technology.firstcolumn.option1"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/copy-trading",
              label: t("technology.firstcolumn.option2"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
          ],
        },
        {
          icon: <FiGitPullRequest />,
          title: t("technology.secondcolumn.heading"),
          items: [
            {
              href: "/pamm-account",
              label: t("technology.secondcolumn.option1"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/mam-account",
              label: t("technology.secondcolumn.option2"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/signal-centre-tool",
              label: t("technology.secondcolumn.option3"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
            {
              href: "/vps-hosting-services",
              label: t("technology.secondcolumn.option4"),
              locale: "en,ar-AE,zh-hans,zh-TW,it-IT,tr-TR,fr-FR,es-ES,pt-PT,ur-PK,hi-IN,vi-VN,id-ID,fa-IR,tl-PH,th-TH,ko-KR,,ja-JP,ms-MY,ru_RU,ps-AF",
            },
          ],
        },
    
      ],
    },
  ];
  const extractHrefsAndLocales = (data) => {
    if (data?.length > 0 && pathnameWithoutLocale != "/") { 
      const extractedData = [];
      data.forEach((item) => {
        const { href, locale, links } = item;

        if (href && locale) {
          extractedData.push({ href, locale });
        } else if (href) {
          extractedData.push({ href, locale: null });
        }

        links.forEach((link) => {
          link.items.forEach((subItem) => {
            const { href, locale } = subItem;
            if (href && locale) {
              extractedData.push({ href, locale });
            } else if (href) {
              extractedData.push({ href, locale: null });
            }
          });
        });
      });
      setHref(extractedData?.filter((x) => x?.href == pathnameWithoutLocale));
      return extractedData;
    }
  };

  useEffect(() => {
    if (pathname == "/") {
      setHref([
        {
          href: "/",
          locale: "en,ar-AE,zh-hans,it-IT,tr-TR,fr-FR,es-ES,hi-IN,vi-VN,id-ID,fa-IR",
        },
      ]);
      return;
    }
    if (params?.slug) {
      setHref([
        {
          href: `${params?.slug?.[0]}/${params?.slug?.[1]}/${params?.slug?.[2]}`,
          locale: "en,ar-AE",
        },
      ]);
      return;
    }
    if (navigationData) {
      extractHrefsAndLocales(navigationData);
    }
  }, [pathname]);

  const ref = useDetectClickOutside({
    onTriggered: () => {
      setShow("");
    },
  });

  return (
    <LocationContextProvider>
    <TopBar currentLanguage={currentLanguage} /> {/* Use the TopBar component */}

      <div className="header py-2 sticky top-0 z-[40] bg-white border-b border-gray-200">
        <nav className="container">
          <div className="flex justify-between items-center ">
            <Image
              src="/logoiq.webp"
              width={200}
              height={56}
              alt="GTCFX"
              className="lg:w-[200px] lg:h-[56px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
              onClick={() => {
                router.push("/", { locale: locale });
              }}
            />
            <div className="lg:flex justify-end items-center hidden" ref={ref}>
              <ul className="hidden lg:flex">
                {navigationData.map((item, index) => (
                  <NavItem
                    key={index}
                    id={item?.id}
                    title={item.title}
                    href={item.href}
                    locale={locale}
                    links={item.links}
                    description={item.description}
                    sideImage={item.sideImage}
                    show={show}
                    setShow={setShow}
                  />
                ))}
              </ul>
              <div
                className={`flex items-center gap-2 ${
                  isAr ? "md:mr-4" : "md:ml-4"
                }`}
              ></div>
            </div>
            <div className="lg:hidden flex gap-2 items-center">
              {/* <Language href={href} /> */}
              <LanguageMobile  href={href}/>
              <MobileMenu navigationData={navigationData} href={href} />
            </div>
          </div>
        </nav>
      </div>
    </LocationContextProvider>
  );
};

export default Header;
