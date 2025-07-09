import React from 'react';
import Image from 'next/image';

// Define your list items in arrays
const benefitsLeft = [
    "1. Increase your profits with the highest rebates & commissions in the industry",
    "2. Become part of an expanding community of over 85,000 introducing brokers",
    "3. Explore our tailored IB program designed to complement your business",
    "4. Ensure the safety of your funds and enjoy guaranteed withdrawal security through our platform",
];

const benefitsRight = [
    "5. Expand your client network effortlessly with our advanced partnership solutions",
    "6. Offering a comprehensive ib account panel for  monitoring rebates and your clients account  activities",
    "7. Access to 7 markets with over 25,000 financial trading products",
    "8. Analysis and technology tools (including mam and pamm accounts)",
];

const ClientNetwork = () => {
    return (
        <section className='bg-primary text-white container md:px-14 pb-10'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:space-x-10'>
                <div className='content-side pt-5'>
                    <h2 className='text-xl md:text-4xl text-white md:leading-[40px] font-normal md:w-[680px]'><b className='font-bold text-secondary'>Expand your Business & Client Network </b>
                        While Maximizing the Advantages of our IB and Affiliate Programs</h2>
                    <p className='text-white md:w-[600px] py-4 text-lg'>Join our specialized IB program to supercharge your business growth and skyrocket your earning potential.</p>
                </div>
                <div className='relative h-96 md:h-[311px] w-full md:mt-[-50px]'>
                    <Image src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/refunud.webp" fill alt="" className="object-contain" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 bg-white p-10 divide-x divide-gray-200 text-primary font-medium md:space-x-5'>
                <div className='left-side-content'>
                    <ul className='list space-y-2 uppercase'>
                        {benefitsLeft.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </div>
                <div className='right-side-content md:pl-5'>
                    <ul className='list md:space-y-2 uppercase'>
                        {benefitsRight.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ClientNetwork;
