// src/components/PlanningDesk.js
import React, { useState } from 'react';
import VibeDropDown from './VibeDropDown';
import Map from './map';
import Navbar from './Navbar'
import Footer from '../Components/Footer';
import Logocloud from '../Components/logocloud';
import G_Footer from '../Components/G_Footer';

const MapAndVibe = ({ selectedCity, setSelectedCity }) => {
  const [selectedVibe, setSelectedVibe] = useState('');

  const handleVibeSelected = (vibe) => {
    setSelectedVibe(vibe);
  };

  return (
    <div className='bg-white'>
      <Navbar />
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 py-5">Planing Desk</h1>
      <VibeDropDown onVibeSelected={handleVibeSelected}/>
      <Map selectedVibe={selectedVibe} />
      <Footer/>
      <Logocloud/>
      <G_Footer/>
    </div>
  );
};

export default MapAndVibe;
