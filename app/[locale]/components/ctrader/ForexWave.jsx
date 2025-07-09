import React from 'react'
const ForexWave = ({ imgsrc, title, subTitle, mt4Advantages }) => {
    return (
        <section className='py-5'>
            <div className='container grid md:grid-cols-2 grid-cols-1 justify-evenly items-center gap-2'>
                <div className='flex-1'>
                    <img
                        src={imgsrc}
                        alt='section image'
                        className='w-[70%] mx-auto md:m-0 md:w-[100%]'
                    />
                </div>
                <div className='flex-1'>
                    <h2 className='HeadingH2 md:ltr:text-left md:rtl:text-right'>{title}</h2>
                    <p className='text md:ltr:text-left md:rtl:text-right'>
                        {subTitle}
                    </p>
                </div>
            </div>
            <div className='container my-1 flex flex-col md:flex-row justify-evenly items-center gap-2 xl:mb-10 2xl:mb-12 3xl:mb-16'>
                {
                    mt4Advantages.map((item, index) => {
                        return (
                            <div key={index} className="h-72 p-8 border border-gray-300 items-center md:w-[400px]">
                                <h2 className="text-lg mb-5 text-center">{item.title}</h2>
                                <p className="text md:text-base">
                                    {item.paragraph}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ForexWave;