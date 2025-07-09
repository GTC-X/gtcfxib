'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from "next-intl/link";
import { MdOutlineLogin } from "react-icons/md";
import LpStaticModal from '../../components/modals/lpStaticModal';

const LpHeader = () => {
  const [open, setOpen] = useState(false)
  const handleNavigation = () => {
    setOpen(true)
  }
  return (
    <>
      <div className='bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] py-2'>
        <div className='container'>
          <div className='flex flex-row items-center justify-between'>
            <div className='logo cursor-pointer'
              onClick={() => handleNavigation()}
            >
              <Image
                src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/footer-logo.webp"
                width={200}
                height={72}
                alt="GTCFX"
                className="lg:w-[200px] lg:h-[72px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
              />
            </div>
            <div className={`flex items-center gap-2 rtl:md:mr-4 ltr:md:ml-4`}>
              
              <div className="flex flex-col lg:flex-row">
                <Link href='https://mygtcportal.com' target="_blank" className="hidden text-primary hover:bg-secondary hover:text-white text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center bg-white">
                  <MdOutlineLogin size={20} />
                  Member Login
                </Link>
              </div>
              <div className="flex flex-col lg:flex-row">
                <Link href='https://web.mygtc.app/login/register?code=2544249&scope=1' target="_blank" className="hidden text-white uppercase bg-[#29a643] hover:bg-primary hover:text-white text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center">
                  Open An Account
                </Link>
              </div>
              <div className="flex flex-col lg:flex-row">
                        <Link href='/introductory-broker' className="hidden text-white uppercase bg-secondary hover:bg-primary hover:text-white text-sm border border-gray-200 px-3 py-[6px] md:flex gap-2 items-center">
                        Register as a Partner
                        </Link>
                    </div>
            </div>
          </div>
        </div>
      </div>
      <LpStaticModal open={open} setOpen={setOpen} />
    </>
  )
}

export default LpHeader