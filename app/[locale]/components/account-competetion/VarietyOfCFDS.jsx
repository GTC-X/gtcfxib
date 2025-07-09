import Image from 'next/image'
import React from 'react'

const VarietyOfCFDS = () => {
  return (
    <section className='competition_variety py-5'>
        <div className='grid md:grid-cols-2 grid-cols-1 order-1 gap-5 justify-items-center container items-center'>
           
            <div>
                <h3 className='font-[600] text-white leading-[40px] md:text-[32px] text-[22px] md:text-left text-center'>Open a Live Account to</h3>
                <h3 className='font-[900] text-secondary leading-[40px] md:text-[32px] text-[22px] md:text-left text-center'>Trade a Variety of CFDS!</h3>
                <p className='py-8 text-white font-[400] md:text-[16px] text-[14px] md:text-left text-center'>
                Get in on the action with major forex pairs, indices, energy, ETFs, share CFDs, and bonds, 
                all starting at rock-bottom 0.0 pips. Spice up your portfolio with a dash of precious metals, 
                oil, and indices, perfectly customized to satisfy your risk appetite and cravings. And guess what? 
                Explore global financial markets with absolutely zero commission fees. 
                Now, that’s what we call trading with flair!
                </p>
            </div>
            <Image src='/common/competition_variety.webp' width={500} height={400} alt='variety'/>
        </div>
    </section>
  )
}

export default VarietyOfCFDS