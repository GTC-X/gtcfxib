'use client';

import Link from 'next/link';
import React from 'react';
import { CiFacebook, CiTwitter, CiLinkedin, CiYoutube, CiInstagram } from "react-icons/ci";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { FaTiktok } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterIcon,
    TwitterShareButton,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
    LineShareButton,
    LineIcon,
    TelegramShareButton,
    TelegramIcon
} from 'react-share';
import { usePathname } from 'next/navigation';

const SocialBanner = () => {
    const domainUrl = 'https://www.gtcfx.com';
    const path = usePathname();
    const blogLink = path.split('/')[2].split('-').join(' ').toUpperCase();
    return (
        <article
            className='flex-col items-center justify-between border-l-8 border-secondary bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] py-3 gap-5 space-y-3'>

            <ul className='flex flex-wrap gap-2 justify-start pl-4'>
                <li
                    className='flex items-center'
                >
                    <EmailShareButton
                        url={domainUrl.concat(path)}
                        title={blogLink}
                    >
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                </li>
                <li
                    className='flex items-center'
                ><FacebookShareButton
                    url={`${domainUrl.concat(path)}`}
                    title={blogLink}
                >
                        <FacebookIcon size={32} round /></FacebookShareButton></li>
                <li className='flex items-center'>
                    <TwitterShareButton
                        url={`${domainUrl.concat(path)}`}
                        title={blogLink}
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                </li>
                <li className='flex items-center'>
                    <LineShareButton
                        url={domainUrl.concat(path)}
                        title={blogLink}
                    >
                        <LineIcon size={32} round />
                    </LineShareButton>
                </li>
                <li className='flex items-center'>
                    <LinkedinShareButton
                        url={domainUrl.concat(path)}
                        title={blogLink}
                    >
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </li>
                <li className='flex items-center justify-center'>
                    <WhatsappShareButton
                        url={domainUrl.concat(path)}
                        title={blogLink}
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                </li>
                <li className='flex items-center justify-center'>
                    <TelegramShareButton
                        url={domainUrl.concat(path)}
                        title={blogLink}
                    >
                        <TelegramIcon size={32} round />
                    </TelegramShareButton>
                </li>

            </ul>
        </article>
    )
}

export default SocialBanner;