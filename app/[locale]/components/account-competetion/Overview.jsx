import Image from 'next/image'
import React from 'react'
import { TiTickOutline } from "react-icons/ti";

const Overview = () => {
  return (
    <section className='competetion_overview py-8'>
        <div className='container flex flex-col md:flex-row items-center justify-center gap-10'>
            <Image src='/common/overview.webp' width={277} height={267} alt='overview' / >
            <div className='space-y-3 md:block flex flex-col justify-center items-center'>
            <h3 className='text-secondary font-[900] md:text-[2rem]'>
            Competition <span className='text-white font-[500]'>Overview</span></h3>
            <h5 className='md:text-[1.25rem] text-white font-[600]'>
            TOTAL PRIZE POOL:<span className='text-secondary ml-3'>$50,000</span></h5>
            <p className='max-w-xl text-white md:text-[18px] md:text-left text-center'><span className='text-secondary font-[800]'>20 winners</span> will be selected based on the basis of highest returns, 
            determined by the percentage increase in their account equity at the end of the competition.
            </p>
            <p className='text-white md:text-[18px]'>Prizes will be awarded to the top <span className='text-secondary font-[800]'>20 winners</span> as follows:</p>
            <div className='flex md:gap-6 md:flex-row flex-col'>
            <ul className='text-white md:text-[18px]'>
                <li className='flex items-center'><TiTickOutline color='green' size={25}/> 1st place: USD $20,000</li>
                <li className='flex items-center'><TiTickOutline color='green' size={25}/>2nd place: USD $10,000</li>
                <li className='flex items-center'><TiTickOutline color='green' size={25}/>3rd place: USD $6,000</li>
            </ul>
            <ul className='text-white md:text-[18px]'>
                <li className='flex items-center'><TiTickOutline color='green' size={25}/>4th place: USD $3,000</li>
                <li className='flex items-center'><TiTickOutline color='green' size={25}/>5th to 10th place: USD $1,000 each</li>
                <li className='flex items-center'><TiTickOutline color='green' size={25}/>11th to 20th place: USD $500 each</li>
            </ul>
            </div>
        </div>
        </div>
       
    </section>
  )
}

export default Overview