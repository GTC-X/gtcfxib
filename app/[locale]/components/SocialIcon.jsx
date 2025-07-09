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
  { icon: BiLogoFacebookCircle, link: "https://www.facebook.com/GTCFXGlobalTradeCapital" },
  { icon: FaXTwitter, link: "https://x.com/GTC_fx" },
  { icon: BiLogoYoutube, link: "https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA" },
  { icon: BiLogoLinkedinSquare, link: "https://linkedin.com/company/gtcfx-official" },
  { icon: BiLogoInstagramAlt, link: "https://www.instagram.com/gtcfxofficial/" },
  { icon: BiLogoWhatsapp, link: "https://api.whatsapp.com/send?phone=971800667788" },
  { icon: BiLogoTelegram, link: "https://t.me/gtc_vip_signal" },
  { icon: BiLogoTiktok, link: "https://www.tiktok.com/@gtcgroup_official" },
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