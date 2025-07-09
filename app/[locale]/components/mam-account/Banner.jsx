import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LiveAccountButton from '../liveAccountButton'

const Banner = ({ title, subtitle, content,content2, subtitle2, imageUrl, buttonText, buttonLink }) => {
  return (
    <section className='py-8 md:py-12 container'>
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-8'>
            <div className='xl:max-w-[700px] lg:max-w-3xl'>
                <h1 className='text-lg xl:text-3xl ltr:md:text-left rtl:md:text-right mb-4'>{title}</h1>
                <p className='text-base ltr:lg:text-left rtl:lg:text-right pb-5'>
                    {content}
                </p>
                <p className='text-base ltr:lg:text-left  rtl:lg:text-right'>
                    {content2}
                </p>
            </div>
            <div className='relative h-36 md:h-96 w-full'>
                <Image 
                src={imageUrl} 
                fill
                alt='MAM Account'
                className='mx-auto block object-contain'
                />
            </div>
        </div>
        <div className='flex flex-col md:flex-row bg-primary justify-between items-center px-8 py-8 mt-12  w-full mx-auto'>
            <div className=''>
                <h2 className='text-lg xl:text-3xl text-secondary ltr:md:text-left rtl:md:text-right'>{subtitle}</h2>
                <h3 className='text-white text-lg xl:text-3xl ltr:md:text-left rtl:md:text-right'>{subtitle2}</h3>
            </div>
            <div>
            <Link
      href={buttonLink}
      target="_blank"
      className={`bg-secondary text-white text-sm 3xl:text-xl px-8 py-3 uppercase text-center md:w-auto w-[300px] md:m-0 mx-auto transition-colors duration-500`}
    >
      {buttonText}
    </Link>
            </div>
        </div>
    </section>
  )
}

export default Banner
