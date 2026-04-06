import React, { useContext } from 'react';
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";
import Link from "next-intl/link";
import { MdOutlineLogin } from "react-icons/md";
import Language from "./Language";
import { useLocationDetail } from "@/context/useLocationDetail";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
const TopBar = ({ currentLanguage, isAr, href }) => {
    const t = useTranslations("navigation");
     const t2 = useTranslations("footerLink");
    const router = useRouter();
    const locale = useLocale();
    const location = useContext(useLocationDetail);
    const { countryCode } = useLocationDetail();

    // Define region-specific conditions
    const europeanCountries = ['AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'];
    
    const isEuropean = countryCode && europeanCountries.includes(countryCode);
    const isChilean = countryCode === 'CL'; // Check if the country is Chile
    const isJapanese = countryCode === 'JP';
    const isIranianOrFarsi = countryCode === 'IR' || locale === 'fa-IR'; // Check for Iran or Farsi language

    // Define base links for different regions
    const baseLink = (() => {
        if (isIranianOrFarsi) {
            return 'https://web.mygtc.app/login/register?ref=gtciraq'; // Iranian or Farsi
        } else if (isEuropean) {
            return 'https://web.mygtc.app/login/register?ref=gtciraq'; // European
        } else if (isChilean) {
            return 'https://web.mygtc.app/login/register?ref=gtciraq'; // Chilean token
        } else if (countryCode === 'JP') {
            return 'https://web.mygtc.app/login/register?ref=gtciraq'; // Japanese
        } else if (countryCode === 'PK') {
            return 'https://web.mygtc.app/login/register?ref=gtciraq'; // Pakistani
        } else if (countryCode === 'IN') {
            return 'https://web.mygtc.app/login/register?ref=gtciraq'; // Indian
        } else {
            return 'https://web.mygtc.app/login/register?ref=gtciraq'; // Default
        }
    })();

    const baseLink2 = isEuropean ? 'https://web.mygtc.app/user?redirect=%252Fdashboard' : isJapanese ? 'https://web.mygtc.app/user?redirect=%252Fdashboard' : 'https://web.mygtc.app/user?redirect=%252Fdashboard';
    
    const newClientPortalLink = `${baseLink2}/`;
    const accountLink = `${baseLink}`;
    const registerLink = `${baseLink}`;

    return (
        <section className="hidden lg:block border-b border-gray-200 bg-primary text-white" id="register1">
            <div className="container flex flex-row justify-between items-center">
     <div className="content-top flex flex-row gap-2">
  <p className="text-[14px] font-[400] flex items-center gap-4 py-3">
    <Link
      href="tel:+9647502207788"
      className="flex items-center gap-2 hover:text-secondary text-sm"
      dir="ltr"
    >
      <BsTelephoneFill /> +96 475 0220 7788
    </Link>

    <span className="h-4 border-l border-white"></span>

    <Link
      href="mailto:info@gtcfxiq.com"
      className="flex items-center gap-2 hover:text-secondary text-sm"
      dir="ltr"
    >
      <MdEmail /> info@gtcfxiq.com
    </Link>

    <span className="h-4 border-l border-white"></span>

    <Link
      href="https://wa.me/9647502207788"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-secondary text-sm"
      dir="ltr"
    >
      <FaWhatsapp /> +96 475 0220 7788
    </Link>
  </p>
</div>


                <div className={`flex items-center gap-2 ${isAr ? "rtl:md:mr-4" : "ltr:md:ml-4"}`}>
                
                    <div className="flex flex-col lg:flex-row">
                        <Link href={newClientPortalLink} target="_blank" className="hidden text-white uppercase hover:bg-white hover:text-secondary text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center">
                            <MdOutlineLogin size={20} />
                            {t("new_client_portal")} 
                        </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <Link href='https://web.mygtc.app/login/register?ref=gtciraq' target="_blank" className="hidden text-white uppercase bg-[#29a643] hover:bg-white hover:text-primary text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center">
                            {t("tobbar.account")}
                        </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <Link href='/introductory-broker' className="hidden text-white uppercase bg-secondary hover:bg-primary hover:text-white text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center">
                            {t("tobbar.rgister")}
                        </Link>
                    </div>
                    <Language href={href} currentLanguage={currentLanguage}/>
                </div>
            </div>
        </section>
    );
};

export default TopBar;
