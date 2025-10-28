import { useTranslations } from 'next-intl'
import React from 'react'
import Link from 'next/link';
import {
    BiLogoFacebookCircle,
    BiLogoYoutube,
    BiLogoLinkedinSquare,
    BiLogoInstagramAlt,
    BiLogoWhatsapp,
    BiLogoTelegram ,
    BiLogoTiktok,
  } from "react-icons/bi";
  import { FaThreads,FaXTwitter} from "react-icons/fa6";


  const socialMediaIcons = [
  { icon: BiLogoFacebookCircle, link: "https://www.facebook.com/share/1CiQoaVswP/?mibextid=wwXIfr" },
  { icon: BiLogoInstagramAlt, link: "https://www.instagram.com/gtcfxiq/?igsh=ZWJhN2h5cmdlaXZ3#" },
  { icon: BiLogoWhatsapp, link: "https://api.whatsapp.com/send?phone=9647502207788" },
  { icon: BiLogoTiktok, link: "https://www.tiktok.com/@gtcfxiq?_t=ZS-90vGfOeibCi&_r=1" },
];

const CopyRight = () => {
 
  return (
    <ul className="flex justify-center gap-1 items-center mt-4">
    {socialMediaIcons.map((social, index) => (
      <li key={index}>
        <Link href={social.link} target='_blank' className='hover:animate-spi text-secondary hover:text-white'>
          {React.createElement(social.icon, { size: 20})}
        </Link>
      </li>
    ))}
  </ul>
  )
}

export default CopyRight