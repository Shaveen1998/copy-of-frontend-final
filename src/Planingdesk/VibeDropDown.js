// src/components/VibeDropdown.js
import React from 'react';

const VibeDropdown = ({ onVibeSelected }) => {
  const handleVibeChange = (event) => {
    const selectedVibe = event.target.value;
    onVibeSelected(selectedVibe);
  };

  return (
    <div className="vibe-dropdown">
      <label htmlFor="vibeSelect">Select Vibe: </label>
      <select id="vibeSelect" onChange={handleVibeChange}>
        <option value="">Select a Vibe</option>
        <option value="Scenic">Scenic</option>
        <option value="Beach">Beach</option>
        <option value="Historical">Historical</option>
        <option value="Wildlife">Wildlife</option>
      </select>
    </div>
  );
};

export default VibeDropdown;
