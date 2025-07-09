'use client'
import React from 'react'
import ForexStack from './ForexStack'
import Image from 'next/image'

const Uncover = () => {
  return (
    <div className="bg-gradient pb-10 mt-[-50px]">
        <div className="container">
          <div className="text-center pt-12">
                <h2 className='text-secondary font-black text-2xl md:text-4xl'><span className='text-white font-light'>UNCOVER A </span>WORLD OF POSSIBILITIES</h2>
                <p className='text-white max-w-6xl text-base md:px-5 py-5 mx-auto md:text-lg'>Dive into the world of Forex trading and chart your course towards financial prosperity. Amplify your returns and navigate a more secure financial future through the dynamic world of foreign exchange markets. Explore a spectrum of currency pairs and seize the opportunities of global currencies.</p>
          </div>
          <ForexStack/>
          <div className="text-center pt-12">
                <h2 className='text-secondary font-black text-2xl md:text-4xl'><span className='text-white font-light'>DISCOVER THE EXCELLENCE OF OUR </span>TOP-TIER TRADING PLATFORMS</h2>
                <p className='text-white max-w-6xl text-base md:px-5 py-5 mx-auto md:text-lg'>GTCFX offers its clients the trading experience of a lifetime with award-winning platforms like MT4, MT5, and cTrader. Equipped with cutting-edge trading functionalities, an array of market analysis tools, and lightning-quick order execution, our trading platforms provide the essential tools and resources you require for a triumphant journey in the world of finance.</p>
          </div>
          <div className='flex items-center justify-between gap-8 pt-5'>
              <div className='relative h-16 w-full'>
                  <Image src="/compaign/forex/Icon-02.webp" alt='MT4' fill className='object-contain' />
              </div>
              <div className='relative h-16 w-full'>
                  <Image src="/compaign/forex/Icon-03.webp" alt='MT5' fill className='object-contain' />
              </div>
              <div className='relative h-16 w-full'>
                  <Image src="/compaign/forex/Icon-04.webp" alt='cTrader' fill className='object-contain' />
              </div>
          </div>
        </div>
      </div>
  )
}

export default Uncover