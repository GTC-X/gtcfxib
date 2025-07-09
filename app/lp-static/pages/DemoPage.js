'use client'
import React from 'react'
import DemoForm from '../component/DemoAccount/DemoForm'
import DemoBanner from '../component/DemoAccount/DemoBanner'
import LocationContextProvider from '@/context/location-context'
import WhyChooseIconLp from '../component/DemoAccount/WhyChoose'
import WhyGtcGroupLp from '../component/DemoAccount/WhyGtcGroup'
import AwardsLp from '../component/DemoAccount/Awards'

const DemoPage = () => {
  return (
    <LocationContextProvider>
      <DemoBanner />
      <WhyChooseIconLp />
      <WhyGtcGroupLp />
      <DemoForm />
      <AwardsLp />
    </LocationContextProvider>
  )
}

export default DemoPage