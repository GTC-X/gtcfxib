'use client'
import React from 'react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { number } from 'prop-types';

const ExpoTeam = () => {
    const teamMembers = [
        {
          name: 'Ali Afzal',
          role: 'Business Development Director',
          imageUrl: '/01.png',
          phoneNumber: '+971589466910',
          number: '+97154 336 5106',
          local: '+91 9099920752'
        },
        
        {
          name: 'Leon Liu',
          role: 'Business Development Director', 
          imageUrl: '/02.png',
          phoneNumber: '+971525673395',
          number: '+971 55 352 0603',
          local: '+91 9099920752'
        },
        {
            name: 'Mohammad Sameer',
            role: 'Business Development Director',
            imageUrl: '/03.png',
            phoneNumber: '+971503673278',
            number: '+971 50 786 8655',
            local: '+91 9099920752'
          },
          {
            name: 'Jameel Ahmad',
            role: 'Chief Analyst',
            imageUrl: '/04.png',
            phoneNumber: '',
            number: '+971 50 786 8655',
            local: '+91 9099920752'
          },
         
          {
            name: 'Suha Hababa',
            role: 'Business Development Director', 
            imageUrl: '/05.png',
            phoneNumber: '+971585150080',
            number: '+971 55 352 0603',
            local: '+91 9099920752'
          },
         
          
        // Add more members as needed...
    ];

    return (
        <div className="bg-white py-10  sm:py-12 lg:py-16 2xl:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative text-center">
                <h2 class="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-[400] xl:text-[30px] 2xl:text-[32px] capitalize max-w-xl leading-tight">Meet Our Team</h2>
            <p class="textprimarymd:text-[16px] 2xl:text-[17px] text-sm text-center max-w-4xl mx-auto py-5 leading-7">Don’t miss our expert-led sessions on trading strategies and market forecasts. Gain valuable insights and practical tips to navigate the financial markets effectively. </p>
            </div>
                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
                    {teamMembers.map(member => (
                           <div className="relative py-[1px] px-[1px]" style={{ 
                            background: 'linear-gradient(to bottom, rgba(0,2,47,.65) 40%, rgba(255,255,255,1) 60%)', 
                            borderRadius: '8px' 
                          }}>
                            <div className="contact-form relative bg-gradient-to-b from-[#fff] via-[#f2f2f2] to-[#f7f7f7] rounded-lg shadow-lg overflow-hidden z-10">
                        <div key={member.name} className="text-center">
                          <div className='relative text-center w-full h-[160px] mb-3'>
                            <Image src={member.imageUrl} alt={member.name} fill  className='object-contain'/>
                            </div>
                            <div className="space-y-2">
                                <div className="text-lg leading-6 font-medium space-y-1">
                                    <h3 className="text-secondary text-sm font-medium">{member.name}</h3>
                                    <p className="text-xs text-primary max-w-40 mx-auto h-8">{member.role}</p>
                                </div>
                                <ul className="flex flex-col justify-center space-x-5 pb-4">
                                    <li>
                                    <a href={`https://api.whatsapp.com/send?phone=${member.phoneNumber}&text=Hello, I am interested in your services.`} className="text-[#25D366] hover:text-[#075E54] flex flex-row justify-center gap-2" target='_blank' rel="noopener noreferrer">
                                            <span className="sr-only">WhatsApp</span>
                                            Chat on Whatsapp <FaWhatsapp className="h-6 w-6" aria-hidden="true" /> 
                                        </a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                        </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("new1")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-white bg-gradient-to-r from-primary to-secondary rounded-md px-8 py-3 md:w-auto w-[300px] hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition-colors duration-500"
          >
            REGISTER NOW
          </button>
        </div>
            </div>
        </div>
    );
};

export default ExpoTeam;
