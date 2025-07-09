"use client";
import React from 'react';
import LocationContextProvider from '@/context/location-context';
import ClientRegistrationForm from '../components/common/ClientRegistrationForm';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';


const ClientRegistrationPage = () => {
  const idParam = useSearchParams().get('id');
  const agentsArray = [
    {id:'BDM039',phone:'+971543365106'},
    {id:'BDM026',phone:'+971507868655'},
    {id:'BDM065',phone:'+971569794146'},
    {id:'BDM007',phone:'+971553520603'},
    {id:'BDM069',phone:'+971553344967'}
  ];

  const getAgentNumber = (agentsArray,idFromUrl)=>{
    const matchingAgents = agentsArray.filter(agent => agent.id === idFromUrl);
    if (matchingAgents.length > 0) {
      return matchingAgents[0].phone;
  } else {
      return null;
  }
  }
  const phoneNumber = getAgentNumber(agentsArray, idParam);
  

  return (
    <LocationContextProvider>
    <section className='py-8 md:py-12'>
        <div className='max-w-[420px] mx-auto bg-white p-5 rounded shadow-2xl'>
           <ClientRegistrationForm/>
           
        </div>
        <div className='text-center flex justify-center items-center pt-5'>
           <Link 
          target='_blank'
          rel='noopener noreferrer'
          className=''
          href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello, I am interested in your services`}>
           <Image src='https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/images/whatsapp_icon.png' width={150} height={50}/> 
          </Link> 
          </div>
    </section>
    </LocationContextProvider> 
  )
}

export default ClientRegistrationPage;