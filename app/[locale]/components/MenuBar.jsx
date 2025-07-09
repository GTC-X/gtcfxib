"use client";
import React, { useState, useRef, useEffect }  from "react";
import Image from "next/image";
import Link from "next-intl/link";
import { useLocale, useTranslations } from "next-intl";
import Language from "./Language";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next-intl/client";
import { useParams, usePathname } from "next/navigation";
import { LiaBoxesSolid } from "react-icons/lia";
import { RiStockLine, RiGlobalLine  } from "react-icons/ri";
import { IoMdLaptop } from "react-icons/io";
import { BsBarChart } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWbSunny, MdOutlineManageAccounts  } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { FiBriefcase, FiGitPullRequest  } from "react-icons/fi";




import LocationContextProvider from "@/context/location-context";

const NavItem = ({ title, links, href, locale, description  }) => {
  const [showMenu, setShowMenu] = useState(false);
  const titleRef = useRef();
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

      const toggleMenu = () => {
        setShowMenu(prevShowMenu => !prevShowMenu);
      };
    
      // Attach the click event listener to the title button
      useEffect(() => {
        const titleElement = titleRef.current;
        titleElement.addEventListener('click', toggleMenu);
    
        return () => {
          titleElement.removeEventListener('click', toggleMenu);
        };
      }, []);
    
  return (
    <li className={`${activeClass} hoverable hover:text-secondary `}>
      <div
        className="flex justify-center items-center gap-2"
      >
        <button
          ref={titleRef}
          
          className={`block cursor-pointer py-6  ${
            isAr ? "pr-2 lg:pr-4 pl-0 lg:pl-0" : "pl-2 lg:pl-4 lg:pr-4"
          }  lg:py-5 text-[sm] lg:text-[16px] 2xl:text-xl`}
        >
          {title}
        </button> 
      </div>
      {showMenu && (
      <div
        className={`mega-menu mb-16 sm:mb-0 shadow-xl border-t border-gray-200 h-[380px] z-50 bg-white rounded-b-none ${showMenu}`}
      >
        <div className="container w-full flex flex-wrap py-5">
        <div className=" basis-3/12 flex justify-end">
            <div className="content-sidebar pr-8 text-primary mt-8 border-r border-gray-100 lg:text-[11.5px] 2xl:text-[15px] text-justify">
              <p className="mb-4 leading-5">{description}</p>
              
            </div>
          </div>
          
            {links.map((linkGroup, index) => (
              <div className=" basis-3/12 flex justify-between">
              <ul key={index} className={`px-4 w-full  pb-6 pt-6 lg:pt-3`}>
                <h3
                  className={`flex gap-2 items-center underline text-base 2xl:text-[19px] text-secondary mb-2 ${
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
                    <li key={itemIndex} className="py-2 text-base 2xl:text-lg border-b border-gray-200 border-opacity-40 last:border-0">
                      <button
                        className={`block ${activeClassList} hover:text-secondary`}
                        onClick={() => {
                          router.push(item.href, { locale: locale }); 
                          setShowMenu("!hidden");
                        }}
                      >
                        {item.label}
                      </button>
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

const Header = () => {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
  const [href, setHref] = useState([
    { href: "/", locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID,fa-IR" },
  ]);
  const isAr = pathname.includes("/ar-AE");
  const navigationData = [
    {
      title: t("about.lable"),
      href: "/about-us",
      locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID,fa-IR",
      description: "At our core, our clients are our utmost priority. With global regulation in place, we proudly serve over 895,000 clients worldwide.",
      links: [
        {
          icon: <IoHomeOutline  />,
          title: t("about.firstcolumn.heading"),
          items: [
            {
              href: "/about-us",
              label: t("about.firstcolumn.option1"),
              locale: "en,ae-AE",
            },
            {
              href: "/why-gtc-group",
              label: t("about.firstcolumn.option2"),
              locale: "en",
            },
            {
              href: "/regulations",
              label: t("about.firstcolumn.option3"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            }
          ],
        },
        {
          icon: <RiGlobalLine  />,
          title: t("about.secondcolumn.heading"),
          items: [
            {
              href: "/blogs",
              label: t("about.secondcolumn.option1"),
              locale: "en-AE",
            },
            {
              href: "/company-news",
              label: t("about.secondcolumn.option2"),
              locale: "en-AE",
            },
            {
              href: "/latest-news",
              label: t("about.secondcolumn.option3"),
              locale: "en-AE",
            }            
          ],
        },
        {
          icon: <MdOutlineWbSunny  />,
          title: t("about.thirdcolumn.heading"),
          items: [
            {
              href: "/blogs",
              label: t("about.thirdcolumn.option1"),
              locale: "en-AE",
            },
            {
              href: "/company-news",
              label: t("about.thirdcolumn.option2"),
              locale: "en-AE",
            },
            {
              href: "/latest-news",
              label: t("about.thirdcolumn.option3"),
              locale: "en-AE",
            }            
          ],
        },
      ],
    },
    {
      title: t("account.lable"),
      href: "/platform",
      locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
      description: "We Provide Ultra-low Standard And Professional Accounts Tailored To Both Novice And Experienced Traders.",
      links: [
        {
          icon: <MdOutlineManageAccounts    />,
          title: t("account.firstcolumn.heading"),
          items: [
            {
              ref: "/mt4-platform",
              label: t("account.firstcolumn.option1"),
              locale: "en,,zh-hans,ms-MY,th-TH,id-ID",
            },
            {
              href: "/mt5-platform",
              label: t("account.firstcolumn.option2"),
              locale: "en,,zh-hans,ms-MY,th-TH,id-ID",
            }
          ],
        },
       {
        icon: <LiaBoxesSolid  />,
        title: t("account.secondcolumn.heading"),
          items: [
            {
              href: "/forex",
              label: t("account.secondcolumn.option1"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            },
            {
              href: "/precious-metals",
              label: t("account.secondcolumn.option2"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            }
          ],
        },
        {
          icon: <TfiWrite  />,
          title: t("account.thirdcolumn.heading"),
          items: [
            {
              href: "/forex",
              label: t("account.thirdcolumn.option1"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            }
          ],
        },
      ],
    },
    {
      title: t("trading.lable"),
      href: "/account-types",
      locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID,fa-IR",
      description: "Offering leverage up to 1:2000 with the lowest spread starting from 0 pips. Our diverse range oftrading instruments spans over 27,000 currency pairs, shares, precious metals, energies, and equity indices, featuring competitive spreads, order execution without rejection,secure  and no re-quotes.",
      links: [
        {
          icon: <RiStockLine  />,
          title: t("trading.firstcolumn.heading"),
          items: [
            {
              href: "/account-types",
              label: t("trading.firstcolumn.option1"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            },
            {
              href: "/trading-types",
              label: t("trading.firstcolumn.option2"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            },
            {
              href: "/deposit",
              label: t("trading.firstcolumn.option3"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            },
            {
              href: "/withdraw",
              label: t("trading.firstcolumn.option4"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            },
            {
              href: "/withdraw",
              label: t("trading.firstcolumn.option5"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            },
            {
              href: "/withdraw",
              label: t("trading.firstcolumn.option6"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            }
          ],
        },
        {
          icon: <IoMdLaptop  />,
          title: t("trading.secondcolumn.heading"),
          items: [
            {
              href: "/mt4-platform",
              label: t("trading.secondcolumn.option1"),
              locale: "en,ar-AE,zh-hans",
            },
            {
              href: "/introductory-broker",
              label: t("trading.secondcolumn.option2"),
              locale: "en,ar-AE,zh-hans,",
            },
            {
              href:"/15-deposit-bonus",
              label:t("trading.secondcolumn.option3"),
              locale:"en,,ar-AE,zh-hans,"
            }
          ],
        }, 
        {
          icon: <BsBarChart />,
          title: t("trading.thirdcolumn.heading"),
          items: [
            {
              href: "/trade-to-win",
              label: t("trading.thirdcolumn.option1"),
              locale: "en,ar-AE,zh-hans",
            }
          ],
        }, 
      ],
    },
    {
      title: t("partner.lable"),
      href: "#",
      locale: "en,ar-AE,zh-hans,th-TH",
      description: "Enhance your business and expand your client network with our partnership programs unlock the full potential of your business and maximize earnings through ourdedicated ib program, designed to accelerate growth and boost your profitability",
      links: [
        {
          items: [
            {
              href: "/introductory-broker",
              label: t("partner.firstcolumn.option1"),
              locale: "en,ar-AE,ms-MY,th-TH,id-ID",
            }
          ],
        },
       {
          items: [
            {
              href: "/technical-tools",
              label: t("partner.secondcolumn.option1"),
              locale: "en,ar,zh-hans,ms-MY,th-TH,id-ID",
            }
          ],
        },
        {
          items: [
            {
              href: "/technical-tools",
              label: t("partner.thirdcolumn.option1"),
              locale: "en,ar,zh-hans,ms-MY,th-TH,id-ID",
            }
          ],
        },
      ],
    },
    {
      title: t("technology.lable"),
      href: "/economic-calendar",
      locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
      description: "We leverage cutting-edge technology and employ the latest advancements to ensure seamless operations. Partnered with top-tierbanks, we guarantee the best liquidity provision, facilitating swift and secure transactions. Our commitment to innovation enables us to deliver unparalleled service excellence, meeting the dynamic needs of our clients with precision",
      links: [
        {
          icon: <FiBriefcase />,
          title: t("technology.firstcolumn.heading"),
          items: [
            {
              href: "/tech",
              label: t("technology.firstcolumn.option1"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            },
            {
              href: "/account",
              label: t("technology.firstcolumn.option2"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            },
            {
              href: "/account",
              label: t("technology.firstcolumn.option3"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            }
          ],
        },
        {
          icon: <FiGitPullRequest />,
          title: t("technology.secondcolumn.heading"),
          items: [
            {
              href: "/autochartist",
              label: t("technology.secondcolumn.option1"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            },
            {
              href: "/mam-account",
              label: t("technology.secondcolumn.option2"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            },
            {
              href: "/signal-centre-tool",
              label: t("technology.secondcolumn.option3"),
              locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID",
            },
          ],
        }, 
      ],
      sideImage: "/event/second-1.webp",
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
        { href: "/", locale: "en,ar-AE,zh-hans,ms-MY,th-TH,id-ID,fa-IR" },
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

  return (
    <LocationContextProvider>
      <section className="hidden md:block border-b border-gray-200 bg-gray-100"> 
        <div className="container flex flex-row justify-between items-center">
          <div className="content-top border-l  pl-2 flex flex-row gap-2">
          <p className="text-[14px] font-[400]  flex gap-2 border-r border-gray-200 pr-2 py-4 ">
             SCA License <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/uae_flag.svg"/>
            </p>
            <p className="text-[14px] font-[400]  flex gap-2 py-4 ">
            Partners with Nasdaq <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/nasdaq.webp" width={24} height={18}/>
            </p>
          </div>
          <div
            className={`flex items-center gap-2 ${
              isAr ? "md:mr-4" : "md:ml-4"
            }`}
          >
              <div className="flex flex-col lg:flex-row ">
              <Link
                href="https://my.gtcfx.com"
                target="_blank"
                className="hidden text-primary hover:bg-primary hover:text-white text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center"
              >
                {t("new_client_portal")}
              </Link>
              {/* Ensure any other link you want to add border styling to is updated similarly */}
            </div>
            <div className="flex flex-col lg:flex-row ">
              <Link
                href="https://my.gtcfx.com"
                target="_blank"
                className="hidden text-white uppercase bg-[#29a643] hover:bg-primary hover:text-white text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center"
              >
                Open an Account
              </Link>
              {/* Ensure any other link you want to add border styling to is updated similarly */}
            </div>
            <div className="flex flex-col lg:flex-row ">
              <Link
                href="https://my.gtcfx.com"
                target="_blank"
                className="hidden text-white uppercase bg-secondary hover:bg-primary hover:text-white text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center"
              >
                 Register as a Partner
              </Link>
              {/* Ensure any other link you want to add border styling to is updated similarly */}
            </div>
            <Language href={href} />
          </div>
        </div>
      </section>

      <div className="header py-2">
        <nav className="container">
          <div className="flex justify-between items-center">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/logo-2024.webp"
              width={160}
              height={57}
              alt="GTCFX"
              className="lg:w-[160px] lg:h-[57px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
              onClick={() => {
                router.push("/", { locale: locale });
              }}
            />
            <div className="md:flex justify-end items-center hidden">
              <ul className="hidden md:flex">
                {navigationData.map((item, index) => (
                  <NavItem
                    key={index}
                    title={item.title}
                    href={item.href}
                    locale={locale}
                    links={item.links}
                    description={item.description}
                    sideImage={item.sideImage}
                  />
                ))}
              </ul>
              <div
                className={`flex items-center gap-2 ${
                  isAr ? "md:mr-4" : "md:ml-4"
                }`}
              ></div>
            </div>
            <div className="md:hidden flex gap-2 items-center">
              <Language href={href} />
              <MobileMenu navigationData={navigationData} href={href} />
            </div>
          </div>
        </nav>
      </div>
    </LocationContextProvider>
  );
};

export default Header;
