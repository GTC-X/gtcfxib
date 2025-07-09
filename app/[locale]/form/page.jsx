"use client";
import React from 'react'
import PartnerForm from '../components/forms/PartnerForm'
import LocationContextProvider from '@/context/location-context'

const page = () => {
  return (
    <LocationContextProvider>
    <PartnerForm
    title="Register Now & Become Our Partner"
    subtitle=""
    />
    </LocationContextProvider>
  )
}

export default page