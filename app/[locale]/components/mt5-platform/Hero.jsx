import React from 'react'
import Button from '../common/Button'

const Hero = ({title,subTitle,paragraph,imgsrc}) => {
  return (
    <section className='bg-gradient'>
        <div className='container grid md:grid-cols-2 grid-cols-1 justify-center items-center'>
        <div className='md:order-2'>
            <img 
            src={imgsrc} 
            className='block mx-auto xl:w-[80%] lg:w-[70%] md:w-[100%] sm:w-[100%] xs:w-[100%] w-[70%]'
            />
        </div>
        <div className='flex flex-col  md:order-1'>
        <h2 className='text-secondary text-[24px] md:text-[36px] lg:text-6xl font-[600] uppercase text-center md:text-left md:leading-[1.2em]'>{title}</h2>
        <h4 className='text-secondary text-[15px] md:text-[20px] font-[400] text-center md:text-left md:leading-[1.2em] my-2'>{subTitle}</h4>
        <p className='text-[#FFF] text-[13px]  md:text-[16px]  text-center md:text-left md:mt-0 my-2'>{paragraph}</p>
        <Button />
        </div>
       
        </div>
    </section>
  )
}

export default Hero