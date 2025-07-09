import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <section className='competetion_banner'>
        <div className='competetion_banner_overlay'/>
        <div className='container flex flex-col justify-center items-center pt-12 opacity-100'>
        <h1 className='text-white font-[600] md:text-[54px] text-[36px] uppercase leading-[1.1em] z-0'>
            GTCFX
        </h1>
        <h1 className='text-secondary font-[600] md:text-[54px] text-[36px] uppercase leading-[1.1em] z-0 block text-center'>
        LIVE ACCOUNT TRADING
        </h1>
        <h1 className='text-white font-[600] md:text-[54px] text-[36px] uppercase leading-[1.1em] z-0'>
        COMPETITION
        </h1>
        <p className='text-secondary md:text-[1rem] font-[400] py-4 text-center z-0 max-w-lg'>
        Step into the world of trading with GTCFX and win exciting
        prizes as you multiply your investment.   
        </p>
        <a 
        href='#'
        className='underline text-white text-[16px] font-[400] z-0'>Read Terms & Conditions</a>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 py-5' >
        <Image 
        src='/common/mt-4.webp' 
        width={120} 
        height={70} 
        alt='mt4 icon' 
        className='z-0'
        />
         <Image 
        src='/common/mt-5.webp' 
        width={120} 
        height={70} 
        alt='mt4 icon' 
        className='z-0'
        />
         <Image 
        src='/common/ctrader.webp' 
        width={120} 
        height={70} 
        alt='mt4 icon' 
        className='z-0'
        />
        </div>
    </section>
  )
}

export default Banner