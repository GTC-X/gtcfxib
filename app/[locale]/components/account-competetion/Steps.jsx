import Image from 'next/image'
import React from 'react'

const Steps = () => {
  return (
    <section className='container py-8'>
        <div className='competetion_steps rounded-[60px] py-8' >
            <h2 className='text-white md:text-[2rem] font-[500] text-center'>
            Steps to 
            <span className='text-secondary font-[900] ml-2'>JOIN COMPETITION</span>
        </h2>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  justify-items-center py-8'>
        <div className='flex gap-2 mb-6 lg:mb-0'>
            <Image src='/1_step.webp' width={40} height={50} alt='steps'/>
            <div className='flex flex-col' >
                <Image src='/icon1_step.webp' width={100} height={100} alt=''/>
                <span className='text-white font-[600] md:text-[1rem]'>Open Live Account</span>
            </div>
        </div>
        <div className='flex gap-2 mb-6 lg:mb-0'>
            <Image src='/2_step.webp'  width={40} height={50} alt=''/>
            <div>
                <Image src='/icon2_step.webp'width={100} height={100} alt=''/>
                <span className='text-white font-[600] md:text-[1rem]'>Deposit Fund</span>
            </div>
        </div>
        <div className='flex gap-2 mb-6 lg:mb-0'>
            <Image src='/3_step.webp' width={40} height={50} alt=''/>
            <div>
                <Image src='/icon3_step.webp' width={100} height={100} alt=''/>
                <span className='text-white font-[600] md:text-[1rem]'>Signup for competition</span>
            </div>
        </div>
        <div className='flex gap-2 mb-6 lg:mb-0'>
            <Image src='/4_step.webp' width={40} height={50} alt=''/>
            <div>
                <Image src='/icon4_step.webp'width={100} height={100} alt=''/>
                <span className='text-white font-[600] md:text-[1rem]'>Begin Trade!</span>
            </div>
        </div>
        </div>

        <h2 className='text-white md:text-[2rem] font-[500] text-center'>
            Why
            <span className='text-secondary font-[900] ml-2'>Participate?</span>
        </h2>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 py-8 '>
            <div className='px-[21px] py-[22px] rounded-[11px] bg-[#39617D] md:w-[30%]'>
            <h5 className='text-secondary md:text-[22px] font-[600] text-center'>Cash Prizes!</h5>
            <p className='text-white font-[400] md:text-[16px] text-center max-w-[250px] mx-auto'>Score Amazing Cash Bonuses as You Trade!</p>
            </div>
            <div className='px-[21px] py-[22px] rounded-[11px] bg-[#39617D] md:w-[30%]'>
            <h5 className='text-secondary md:text-[22px] font-[600] text-center'>No Registration Charges</h5>
            <p className='text-white font-[400] md:text-[16px] text-center max-w-[250px] mx-auto'>With no added Fee, You get to Win While You Trade!</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Steps