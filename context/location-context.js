import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const LocationContext = React.createContext();
const LocationContextProvider = ({children})=>{
    const [location,setLocation] = useState({});
    async function getGeoInfo(){
        await axios.get('https://ipapi.co/json/').then((response)=>{
          let data = response.data;
          setLocation(data);
        }).catch((error)=>{
          console.log(error);
        })
      }
      useEffect(()=>{
        getGeoInfo();
      },[]);
    
    return (
       <LocationContext.Provider value={location}>
        {children}
       </LocationContext.Provider>
    )
}

export default LocationContextProvider;