import React from 'react'
import IBHero from '../component/IB/IBHero'
import PartnerWithGtc from '../component/IB/PartnerWithGtc'
import JoinUsIB from '../component/IB/JoinUsIB'
import IBProgram from '../component/IB/IBProgram'
import IBWork from '../component/IB/IBWork'
import IBFAQS from '../component/IB/IBFAQS'
import LpAwardCarusal from '../component/IB/LpAwardCarusal'


export const metadata = {
  title: 'Become an Introductory Broker With Us | GTCFX',
  description: 'Power up your business expansion and client network while maximizing the advantages of our IB program.',
}


const joinSteps = [
  {
    "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/1.webp",
    "text": 'Register'
  },
  {
    "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/2.webp",
    "text": 'Refer Clients'
  },
  {
    "imgSrc": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/3.webp",
    "text": 'Introduce Clients And IBs'
  }
];

const reasonList = [
  {
    "number": "1",
    "imgSRC": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/IB-02.webp",
    "text": "70% Rebate"
  },
  {
    "number": "2",
    "imgSRC": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/IB-03.webp",
    "text": "Fast & Secure Execution"
  },
  {
    "number": "3",
    "imgSRC": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/IB-04.webp",
    "text": "24X7 Multiligual Support"
  },

  {
    "number": "4",
    "imgSRC": "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/partner/IB/IB-06.webp",
    "text": "Quick Withdrawal"
  },
]


const images = [
  '/ib/1b1.webp',
  '/ib/1b6.webp',
  '/ib/1b7.webp',
  '/ib/1b5.webp',
  '/ib/1b8.webp',
  '/ib/1b2.webp',
  '/ib/1b3.webp',
  '/ib/1b17.webp',
  '/ib/1b13.webp',
  '/ib/1b14.webp',
  '/ib/1b15.webp',
  '/ib/1b16.webp',
  '/ib/1b4.webp',
  '/ib/IB10.webp',
  '/ib/IB1.webp',
  '/ib/IB2.webp',
  '/ib/IB3.webp',
  '/ib/IB7.webp',
  '/ib/IB8.webp',
  '/ib/IB6.webp',

  '/ib/IB6.webp',
  '/ib/1b11.webp',
  '/ib/1b9.webp',
  '/ib/IB4.webp',

  // Add more images as needed
];

const page = () => {


  return (
    <>
      <IBHero />
      <PartnerWithGtc title='Why Partner Up With GTCFX?' reasons={reasonList} columns={4} />

      
      <IBWork
        title='How it works?'
        subtitle='Register now as an Introducing Broker & Unlock massive career growth!'
        steps={joinSteps}
        gridCols="lg:grid-cols-3" // for 3 columns on large screens
        bgColor="md:py-16 3xl:py-20 py-8 bg-gray-100" // for white background
      />
      <LpAwardCarusal />
      <IBFAQS />
    </>
  )
}

export default page