import React from 'react'
import Image from "next/image";
import Map from '../components/home/Map';

const countries = [
    { name: "ENGLAND" },
    { name: "S.AFRICA" },
    { name: "VIETNAM" },
    { name: "EGYPT" },
    { name: "MALAYSIA" },
    { name: "CHINA" },
    { name: "UAE" },
    { name: "PAKISTAN" },
    { name: "NIGERIA" },
    { name: "Hong Kong"},
    {name:"India"},
    {name:"Turkey"}
  ];

const GlobalPresence = () => {
  return (
    <>
       <Map />
    </>
  )
}

export default GlobalPresence