'use client'
import React from 'react'
import LocationContextProvider from '@/context/location-context'
import SimpleForm from '../components/common/SimpleForm'
import TradeInvest from '../components/MoneyExpo/TradeInvest'
import DirectAccess from '../components/home/DirectAccess'

const InActiveClient = () => {
  return (
    <div className='pb-24'>
     <LocationContextProvider>
      <section className="bg-gradient-to-b from-gray-50 via-gray-100 to-zinc-100 py-10 md:py-20">
            {/* Content */}
        <div className="container relative z-10 flex flex-col md:flex-row justify-between items-center h-full">
          <div className="content-side text-center md:text-left pb-10">
            <h4 className="text-primary text-xl md:text-3xl pb-2">
            Unlock Exclusive 50 USD Trading Credit Bonuses!

            </h4>
            <h2 className="bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text text-xl xl:text-3xl 2xl:text-[40px] font-medium mb-0 md:mb-0 line-height-setting md:w-[750px] uppercase">
            Take advantage of our limited-time offers and boost your trading potential. Don’t miss out!
            </h2>
            <div className="flex flex-col gap-2 text-base md:text-2xl text-primary md:max-w-3xl">
              <p>Get a 100% bonus on your first deposit! Kickstart your trading journey with extra funds to trade more and increase your potential profits.

              </p>

            </div>
          </div>
          <div className="">
          <div class="form-heading text-center"><h3 class="py-3 bg-gradient-to-r from-[#24358b] via-[#242c75] to-[#141b43] uppercase rounded-tl-xl rounded-tr-xl text-white">Register Now</h3></div>
            
            <SimpleForm />
          </div>
        </div>
      </section>
    </LocationContextProvider>
    <TradeInvest />
    <DirectAccess />
    </div>
  )
}

export default InActiveClient