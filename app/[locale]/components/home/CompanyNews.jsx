import Image from 'next/image';
import React from 'react'


const imagePaths = [
    {
        "name":'Fintech & Crypto Summit',
        "path":"/BestSpread.webp",
        "desc":"Best STP Forex Broker"
    },
    {
        "name":'Shanghai Financial Expo Award',
        "path":"/forexBroker.webp",
        "desc":"Best STP Forex Broker"
    },
    {
        "name":'Fintech & Crypto Summit',
        "path":"/bestForex.webp",
        "desc":"Best STP Forex Broker"
    },
  ];
  

const CompanyNews = () => {
  return (
    <section className='py-12 md:py-12 container'>
        <div className='flex flex-col md:flex-row justify-around'>
            {/* <div className='rounded-[12%] bg-[#E9E9E9] border border-secondary px-12 py-12 shadow-2xl'>
                <h2 className='text-lg md:text-2xl text-accent font-[600] text-center'>WHAT'S NEW</h2>
                <h1 className='text-xl md:text-3xl text-primary font-[800] text-center'>Company News</h1>
            </div>   */}
            <div className='rounded-2xl bg-[#E9E9E9] border border-secondary px-4 md:px-20 py-12 shadow-2xl'>
            <h2 className='text-lg md:text-3xl text-accent font-[600] text-center'>ACHEIVMENTS</h2>
                <h1 className='text-xl md:text-4xl text-primary font-[800] text-center'>Our Awards</h1>
                <div className='flex flex-col gap-6 pt-8 md:justify-start justify-center'>
                {imagePaths.map((award,index)=>(
                    <div className='flex flex-col md:flex-row items-center gap-8 ' key={index}>
                       <Image   
                       width={100}
                       height={120} 
                       src={award.path}/>     
                       <div>
                        <p className='md:text-2xl text-accent font-[700]'>{award.name}</p>
                        <span>
                           {award.desc} 
                        </span>
                       </div> 
                    </div>
                ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default CompanyNews;