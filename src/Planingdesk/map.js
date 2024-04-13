import "leaflet/dist/leaflet.css"
import React ,  {useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import cityVibes from '../data/cityVibes'; 
import { Icon} from "leaflet";
import Video from "./vid";
import DestinationProgress from "./DestinationProgress";
import CityCard from "./cards";


const Map = ({ selectedVibe }) => {
  const center = [7.8731, 80.7718]; // Sri Lanka coordinates   
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCities, setSelectedCities] = useState([]);


  const handleMarkerClick = (city) => {
    setSelectedCity(city);
  };
 
  const handleAddToDestinationList = () => {
    if (selectedCity) {
      setSelectedCities([...selectedCities, selectedCity]);
    }
  };

    // Define the custom marker icon
    const customIcon = new Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png", // Path to your custom marker image
      iconSize: [38, 38], // Adjust the size as needed
    });

    const MapWithCtrlZoom = () => {
      const map = useMap();
  
      useEffect(() => {
        const handleWheel = (e) => {
          if (e.ctrlKey) {
            const delta = e.deltaY;
            const zoomStep = 0.1; // Adjust this value according to your preference
            map.setZoom(Math.max(map.getZoom() + (delta > 0 ? -zoomStep : zoomStep), 1));
          }
        };
  
        map.getContainer().addEventListener('wheel', handleWheel);
  
        return () => {
          map.getContainer().removeEventListener('wheel', handleWheel);
        };
      }, [map]);
  
      return null;
    };

  return (
    <main >
        <div >
         
    <MapContainer 
          center={center} 
          zoom={8} 
          style={{ position: "relative",height: '600px', width: '100%', top: 0, right: 0}}
          scrollWheelZoom={false} // Disable default scroll wheel zoom
          zoomControl={true} // Disable default zoom control
          doubleClickZoom={true} // Disable default double click zoom
          keyboard={false} // Disable default keyboard zoom
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
       
      {cityVibes.map((location) => {
        // Check if the location matches the selected vibe
        if (location.vibe === selectedVibe) {
          return (
            <Marker 
              key={location.name}
              position={location.coordinates}
              icon={customIcon}
              eventHandlers={{ click: () => handleMarkerClick(location) }}
            >
            </Marker>
          );
        }
        return null; // Don't render markers for other vibes
      })}
       
    </MapContainer>
    <DestinationProgress selectedCities={selectedCities} setSelectedCities={setSelectedCities} style={{ position: "relative", top: 0, right: 0}} /> 

    {selectedCity && (
      <Video
        selectedCity={selectedCity}
        onAddToDestinationList={handleAddToDestinationList}
      />
      
    )} 

      {selectedCity &&(<CityCard selectedCity={selectedCity}/>) }

  </div>
    </main>

  );
};

export default Map;
