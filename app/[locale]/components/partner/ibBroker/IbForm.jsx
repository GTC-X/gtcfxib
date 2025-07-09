import React from 'react'

const IbForm = ({title, subtitle}) => {
  return (
    <div className='px-4 py-6 pb-4 flex flex-col justify-around lg:w-fit w-full'>
        <h1 className='HeadingH2 font-[500] pb-1'>{title}</h1>
        <p className='text-primary md:text-[16px] text-[16px] text-center font-[400] lg:max-w-lg'>{subtitle}</p>
        <form className='flex flex-col gap-5 pt-6'>
            <div className='flex flex-col sm:flex-row gap-5'>
                <div className='flex flex-col w-full'>
                <label className='font-[700]'>First Name <span className='text-secondary'>*</span></label>    
                <input
                className='white_input' 
                type='text' 
                name='first_name'
                />
                </div>
                <div className='flex flex-col w-full'>
                    <label className='font-[700]'>Last Name <span className='text-secondary'>*</span></label>
                <input
                className='white_input' 
                type='text' 
                name='last_name'
                />
                </div>
            </div>
            <div className='flex-col'>
             <label className='font-[700]'>Email <span className='text-secondary'>*</span></label>   
            <input
                className='white_input w-full' 
                type='text' 
                name='email'
                />
            </div>
            <div className='flex flex-col'>
            <label className='font-[700]'>Country Of Residense <span className='text-secondary'>*</span></label>    
            <input
                className='white_input w-full' 
                type='email' 
                name='country'
                />
            </div>
            <div className='flex flex-col'>
            <label className='font-[700]'>Phone Number <span className='text-secondary'>*</span></label>    
            <input
                className='white_input w-full' 
                type='tel' 
                name='phone'
                />
            </div>
            <div className='flex gap-4'>
                <input 
                className='white_checkBox w-6 h-6 outline-none border border-[#DDD]'
                type='checkbox' 
                name='terms'/>
                <p>I accept Terms & Conditions</p>
            </div>
            <div className='flex'>
                <button
                className='bg-secondary text-white w-full py-3 font-[500]'
                >Send</button>
            </div>
        </form>
    </div>
  )
}

export default IbForm