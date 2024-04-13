import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import hotelData from '../data/hotelData'
import Navbar from "./Navbar";
import HotelCard from "./HotelCard";

const HotelFeed = () => {

  const location = useLocation();
  const selectedCity = location.state?.city;

  const [feedBudget, setFeedBudget] = useState(0);
  const [receivedCity, setReceivedCity] = useState(0);

  useEffect(() => {
    const savedFeedBudget = localStorage.getItem('budget');
    if (savedFeedBudget) {
      setFeedBudget(parseFloat(savedFeedBudget)); // Parse the saved budget to a number
    }

    console.log(savedFeedBudget)
  }, []);

  useEffect(() => {
    // Retrieve the state from the query parameter
    const cityStateParam = new URLSearchParams(location.search).get('cityState');
    if (cityStateParam) {
      // Parse the state back into an object
      const cityState = JSON.parse(decodeURIComponent(cityStateParam));
      console.log('Received city state:', cityState);
      setReceivedCity(cityState)
    }
  }, [location.search]);


  const getHotelsByCity = (city) => {
    return hotelData.filter((hotel) => hotel.city === city);
  };

    // Filter hotels based on the selected city
    const hotelsInCity = getHotelsByCity(receivedCity);
    console.log(receivedCity)
  
  return (
    <div className="hotelData-feed">
      <Navbar/>
      {hotelsInCity.map((item, index) => (
        <HotelCard key={index} hotelData={item} feedBudget={feedBudget}/>
      ))}
    </div>
  );
};

export default HotelFeed;
