import React from 'react'
const ForexWave = ({ imgsrc, title, subTitle, mt4Advantages }) => {
    return (
        <section className='py-12'>
            <div className='container flex flex-col md:flex-row justify-evenly items-center gap-2 md:px-16 pb-8'>
                <div className='flex-1'>
                    <img
                        src={imgsrc}
                        alt='section image'
                        className='w-[60%] mx-auto md:m-0 md:w-[90%]'
                    />
                </div>
                <div className='flex-1'>
                    <h2 className='text-primary md:text-3xl text-2xl font-bold whitespace-nowrap md:text-left text-center'>{title}</h2>
                    <p className='text-primary mt-3 font-semibold'>
                        {subTitle}
                    </p>
                </div>
            </div>
            <div className='container my-1 flex flex-col md:flex-row justify-evenly items-center gap-3'>
                {
                    mt4Advantages.map((item, index) => {
                        return (
                            <div key={index} className="h-72 w-80 p-4 bg-gradient-to-b from-[#1e446d] via-[#1e446d] to-[#1e446d] rounded-[25px]">
                                <h1 className="text-secondary font-semibold mb-5 text-center">{item.title}</h1>
                                <h1 className="text-white flex flex-col justify-center items-center text-center">
                                    {item.paragraph}
                                </h1>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ForexWave;