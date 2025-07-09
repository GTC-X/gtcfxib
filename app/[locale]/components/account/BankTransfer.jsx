import React from 'react';
import Image from 'next/image';

const BankTransfer = () => {
  return (
    <div className='py-0'>
      <div className=' max-w-6xl mx-auto'>
        <div className='flex flex-wrap justify-center'>
          {/* First Row */}
  
          <div className='relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center hover:filter-none filter grayscale'>
            <Image
              src={`https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/payment/payments+logos-10.webp`}
              alt='Payment'
              fill
              className='object-contain'
            />
          </div>

          {/* Second Row */}
          {[...Array(4)].map((_, index) => (
            <div key={index} className='relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center hover:filter-none filter grayscale'>
              <Image
                src={`https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/payment/payments+logos-${index + 11}.webp`}
                alt='Payment'
                fill
                className='object-contain'
              />
            </div>
          ))}

          {/* Third Row */}
          {[...Array(5)].map((_, index) => (
            <div key={index} className='relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center hover:filter-none filter grayscale'>
              <Image
                src={`https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/payment/payments+logos-${index + 15}.webp`}
                alt='Payment'
                fill
                className='object-contain'
              />
            </div>
          ))}

          {/* Fourth Row */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className='relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center hover:filter-none filter grayscale'>
              <Image
                src={`https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/payment/payments+logos-${index + 20}.webp`}
                alt='Payment'
                fill
                className='object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
