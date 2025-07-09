import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const LervageNewUpdate = () => {
      const t = useTranslations("lervage.update")
  return (
    <section className='bg-gray-100 py-12 md:py-14'>
        <div className='container'>

        
  <div className="leverage-component bg-white rounded-lg shadow-md p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto my-2">
      {/* Left Content */}
      <div className="leverage-content">
        <h2 className="text-2xl md:text-3xl text-primary-dark mb-4">
          Fixed Leverage Schedule
        </h2>
        <p className="text mb-6 text-left">
          The following fixed leverage rules apply to all trades during specified market conditions:
        </p>

        {/* Weekend Transition Card */}
        <div className="bg-gray-50 rounded-lg p-5 mb-6 border-l-4 border-primary">
          <h3 className="text-xl font-medium text-primary mb-3 pb-2 border-b border-gray-200">
            Weekend Transition Periods
          </h3>
          
          <div className="mb-2">
            <h4 className="text-secondary font-medium mb-2">Before Friday Market Close (3 hours)</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-14 font-medium text-primary">02:00</span>
                <span className="text-gray-600">China (GMT+8)</span>
              </li>
              <li className="flex items-center">
                <span className="w-14 font-medium text-primary">21:00</span>
                <span className="text-gray-600">Server (GMT+3)</span>
              </li>
              <li className="flex items-center">
                <span className="w-14 font-medium text-primary">22:00</span>
                <span className="text-gray-600">UAE (GMT+4)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-secondary font-medium mb-2">After Monday Market Open (1 hour)</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-14 font-medium text-primary">06:00</span>
                <span className="text-gray-600">China (GMT+8)</span>
              </li>
              <li className="flex items-center text-red-600 italic">
                <span className="w-14 font-medium">07:00</span>
                <span>XAUUSD cutoff (GMT+8)</span>
              </li>
              <li className="flex items-center">
                <span className="w-14 font-medium text-primary">01:00</span>
                <span className="text-gray-600">Server (GMT+3)</span>
              </li>
              <li className="flex items-center text-red-600 italic">
                <span className="w-14 font-medium">02:00</span>
                <span>XAUUSD cutoff (GMT+3)</span>
              </li>
              <li className="flex items-center">
                <span className="w-14 font-medium text-primary">02:00</span>
                <span className="text-gray-600">UAE (GMT+4)</span>
              </li>
              <li className="flex items-center text-red-600 italic">
                <span className="w-14 font-medium">03:00</span>
                <span>XAUUSD cutoff (GMT+4)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Economic News Card */}
        <div className="bg-gray-50 rounded-lg p-5 mb-6 border-l-4 border-secondary">
          <h3 className="text-xl font-medium text-secondary mb-3">Economic News Events</h3>
          <ul className="list-disc pl-5 text text-left space-y-1">
            <li>15 minutes before high-impact news releases</li>
            <li>5 minutes after news releases</li>
            <li>During periods of expected extreme volatility</li>
          </ul>
        </div>

      
      </div>

      {/* Right Image */}
      <div className="leverage-visual flex flex-col gap-4">
        <div className="relative w-full h-60 md:h-[510px] rounded-lg overflow-hidden shadow-sm">
          <Image
            src="/lerv.webp"
            alt="Leverage schedule visualization"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex justify-around bg-gray-50 p-3 rounded-md">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-blue-500"></span>
            <span className="text-sm text-gray-600">China (GMT+8)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-green-500"></span>
            <span className="text-sm text-gray-600">Server (GMT+3)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-purple-500"></span>
            <span className="text-sm text-gray-600">UAE (GMT+4)</span>
          </div>
        </div>
          {/* Important Notes */}
        <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
          <h3 className="text-xl font-medium text-red-600 mb-2">Important Notes</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Margin calculations remain fixed after the period ends</li>
            <li>Existing positions are not affected</li>
            <li>Applies to all instruments and account types</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}

export default LervageNewUpdate