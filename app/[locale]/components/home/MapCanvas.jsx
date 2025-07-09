"use client";
import { Map, Marker } from "pigeon-maps";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";


const cities = [
    { name: 'London', latitude: 51.5074, longitude: -0.1278 },
    {name:'South Africa',latitude:-33.9249,longitude:18.4241},
    {name:"Vietnam",latitude:10.8231,longitude:106.6297},
    {name:"Egypt",latitude:28,longitude:31.2357},
    {name:"Malaysia",latitude:3.1319,longitude:101.6841},
    // Add more cities as needed
];

const MapCanvas = () => {
    const [highlightedCity, setHighlightedCity] = useState(null);
   
    const handleCityButtonClick = (city) => {
        setHighlightedCity(city);
      };
    return (
        <div className="container">
        <div className="flex justify-center py-6 gap-4">
        {cities.map((city, index) => (
          <button className={`px-4 py-2 bg-secondary text-primary rounded-lg font-[700] hover:scale-110 duration-300`}  key={index} onMouseEnter={() => handleCityButtonClick(city)}>
            {city.name}
          </button>
        ))}
      </div>
        <Map height={680} width={1300} boxClassname="map_container" defaultCenter={[50.879, 4.6997]} defaultZoom={3} metaWheelZoom maxZoom={2} minZoom={2}>
            {
                cities.map((city,index)=>(
                    <Marker key={index} width={50} anchor={[city.latitude, city.longitude]} color={city === highlightedCity ? '#B58D47' : '#000031'}>
                       <FaMapMarkerAlt className="absolute mt-[12px]" size={50} color={city === highlightedCity ? '#B58D47' : '#000031'}/>
                    </Marker>
                ))
            }
        </Map>
        </div>
      )
}

export default MapCanvas;