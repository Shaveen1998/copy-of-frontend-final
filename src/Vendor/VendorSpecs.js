import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../Config/firebase';
import { addDoc, collection } from 'firebase/firestore';


function VendorSpecs() {
    const [propertyType, setPropertyType] = useState([]);
    const [roomType, setRoomType] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [accessibility, setAccessibility] = useState([]);
    const [policies, setPolicies] = useState([]);
    const [views, setViews] = useState([]);
    const [languagesSpoken, setLanguagesSpoken] = useState([]);
    const [nearbyLandmarks, setNearbyLandmarks] = useState([]);
    const vendorDetails = JSON.parse(localStorage.getItem("vendorFormData")) || null;

    const navigate = useNavigate();

    const handleCheckboxChange = (e, state, setState) => {
        const { value, checked } = e.target;
        if (checked) {
            setState([...state, { value, checked }]);
        } else {
            setState(state.filter(item => item.value !== value));
        }
    };

    const handleSubmit = async () => {

        const vendorId = vendorDetails.vendorId;

        try {
            // Format the data as needed
            const formData = {
                propertyType: propertyType.filter(item => item.checked).map(item => item.value),
                roomType: roomType.filter(item => item.checked).map(item => item.value),
                amenities: amenities.filter(item => item.checked).map(item => item.value),
                accessibility: accessibility.filter(item => item.checked).map(item => item.value),
                policies: policies.filter(item => item.checked).map(item => item.value),
                views: views.filter(item => item.checked).map(item => item.value),
                languagesSpoken: languagesSpoken.filter(item => item.checked).map(item => item.value),
                nearbyLandmarks: nearbyLandmarks.filter(item => item.checked).map(item => item.value)
            };

            console.log(formData)

            // Store the data in Firestore
            await addDoc(collection(db, "vendor-specs"), {
            ...formData,
            vendorId // Assuming you want to store the vendor UID within the document
            });
            localStorage.removeItem('vendorFormData');
            localStorage.removeItem('email');
            navigate("/VendorHome")

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center">Property Listing Form</h1>

            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
                {/* Property Type */}
                <div className="mb-4">
                    <label className="block font-bold mb-2">Property Type:</label>
                    <div>
                        <input type="checkbox" value="Hotel" onChange={(e) => handleCheckboxChange(e, propertyType, setPropertyType)} /> Hotel <br />
                        <input type="checkbox" value="Apartment" onChange={(e) => handleCheckboxChange(e, propertyType, setPropertyType)} /> Apartment <br />
                        <input type="checkbox" value="Resort" onChange={(e) => handleCheckboxChange(e, propertyType, setPropertyType)} /> Resort <br />
                        <input type="checkbox" value="Villa" onChange={(e) => handleCheckboxChange(e, propertyType, setPropertyType)} /> Villa <br />
                        <input type="checkbox" value="Guest House" onChange={(e) => handleCheckboxChange(e, propertyType, setPropertyType)} /> Guest House <br />
                        <input type="checkbox" value="Hostel" onChange={(e) => handleCheckboxChange(e, propertyType, setPropertyType)} /> Hostel <br />
                        <input type="checkbox" value="Bread and Breakfast" onChange={(e) => handleCheckboxChange(e, propertyType, setPropertyType)} /> Bread and Breakfast <br />
                  
                        {/* Include other property types similarly */}
                    </div>
                </div>

                {/* Room Type */}
                <div className="mb-4">
                    <label className="block font-bold mb-2">Room Type:</label>
                    <div>
                        <input type="checkbox" value="Single" onChange={(e) => handleCheckboxChange(e, roomType, setRoomType)} /> Single <br />
                        <input type="checkbox" value="Double" onChange={(e) => handleCheckboxChange(e, roomType, setRoomType)} /> Double <br />
                        <input type="checkbox" value="Suite" onChange={(e) => handleCheckboxChange(e, roomType, setRoomType)} /> Suite <br />
                        <input type="checkbox" value="Twin" onChange={(e) => handleCheckboxChange(e, roomType, setRoomType)} /> Twin <br />
                        <input type="checkbox" value="Deluxe" onChange={(e) => handleCheckboxChange(e, roomType, setRoomType)} /> Deluxe <br />
                        <input type="checkbox" value="Family Room" onChange={(e) => handleCheckboxChange(e, roomType, setRoomType)} /> Family Room <br />

                        {/* Include other room types similarly */}
                    </div>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                    <label className="block font-bold mb-2">Amenities:</label>
                    <div>
                        <input type="checkbox" value="Free WiFi" onChange={(e) => handleCheckboxChange(e, amenities, setAmenities)} /> Free WiFi <br />
                        <input type="checkbox" value="Air Conditioning" onChange={(e) => handleCheckboxChange(e, amenities, setAmenities)} /> Air Conditioning <br />
                        <input type="checkbox" value="Swimming Pool" onChange={(e) => handleCheckboxChange(e, amenities, setAmenities)} /> Swimming Pool <br />
                        <input type="checkbox" value="Free Parking" onChange={(e) => handleCheckboxChange(e, amenities, setAmenities)} /> Free Parking <br />
                        <input type="checkbox" value="Pet-Friendly" onChange={(e) => handleCheckboxChange(e, amenities, setAmenities)} /> Pet-Friendly <br />
                        <input type="checkbox" value="Non-smoking Rooms" onChange={(e) => handleCheckboxChange(e, amenities, setAmenities)} /> Non-smoking Rooms <br />
                        <input type="checkbox" value="Restaurant" onChange={(e) => handleCheckboxChange(e, amenities, setAmenities)} /> Restaurant <br />
                        <input type="checkbox" value="Bar/Lounge" onChange={(e) => handleCheckboxChange(e, amenities, setAmenities)} /> Bar/Lounge <br />
                        <input type="checkbox" value="Fitness Center" onChange={(e) => handleCheckboxChange(e, amenities, setAmenities)} />Fitness Center <br />
                        <input type="checkbox" value="Spa" onChange={(e) => handleCheckboxChange(e, amenities, setAmenities)} /> Spa <br />
                       

                        {/* Include other amenities similarly */}
                    </div>
                </div>

                {/* Accessibility */}
                <div className="mb-4 ">
                    <label className="block font-bold mb-2">Accessibility:</label>
                    <div>
                        <input type="checkbox" value="Elevator" onChange={(e) => handleCheckboxChange(e, accessibility, setAccessibility)} /> Elevator <br />
                        <input type="checkbox" value="Wheelchair Accessible" onChange={(e) => handleCheckboxChange(e, accessibility, setAccessibility)} /> Wheelchair Accessible <br />
                        <input type="checkbox" value="Accessible Parking" onChange={(e) => handleCheckboxChange(e, accessibility, setAccessibility)} /> Accessible Parking <br />
                    </div>
                </div>

                {/* Policies */}
                <div className="mb-4">
                    <label className="block font-bold mb-2">Policies:</label>
                    <div>
                        {/* Include checkboxes for policies */}
                        <input type="checkbox" value="Free Cancellation" onChange={(e) => handleCheckboxChange(e, policies, setPolicies)} /> Free Cancellation <br />
                        <input type="checkbox" value="No Prepayment Needed" onChange={(e) => handleCheckboxChange(e, policies, setPolicies)} /> No Prepayment Needed <br />
                        <input type="checkbox" value="Breakfast Included" onChange={(e) => handleCheckboxChange(e, policies, setPolicies)} /> Breakfast Included <br />
                        <input type="checkbox" value="24 hr Front desk" onChange={(e) => handleCheckboxChange(e, policies, setPolicies)} /> 24 hr Front desk <br />
                        <input type="checkbox" value="Airport Shuttle" onChange={(e) => handleCheckboxChange(e, policies, setPolicies)} /> Airport Shuttle <br />
                        <input type="checkbox" value="Shuttle Service" onChange={(e) => handleCheckboxChange(e, policies, setPolicies)} /> Shuttle Service (additional charge) <br />

                    </div>
                </div>

                {/* Views */}
                <div className="mb-4 ">
                    <label className="block font-bold mb-2">Views:</label>
                    <div>
                        {/* Include checkboxes for views */}
                        <input type="checkbox" value="Sea View" onChange={(e) => handleCheckboxChange(e, views, setViews)} /> Sea View <br />
                        <input type="checkbox" value="City View" onChange={(e) => handleCheckboxChange(e, views, setViews)} /> City View <br />
                        <input type="checkbox" value="Mountain View" onChange={(e) => handleCheckboxChange(e, views, setViews)} /> Mountain View <br />
                        <input type="checkbox" value="Garden View" onChange={(e) => handleCheckboxChange(e, views, setViews)} /> Garden View <br />
    
                    </div>
                </div>

                {/* Languages Spoken */}
                <div className="mb-4 ">
                    <label className="block font-bold mb-2">Languages Spoken:</label>
                    <div>
                        {/* Include checkboxes for languages */}
                        <input type="checkbox" value="English" onChange={(e) => handleCheckboxChange(e, languagesSpoken, setLanguagesSpoken)} /> English <br />
                        <input type="checkbox" value="Spanish" onChange={(e) => handleCheckboxChange(e, languagesSpoken, setLanguagesSpoken)} /> Spanish <br />
                        <input type="checkbox" value="French" onChange={(e) => handleCheckboxChange(e, languagesSpoken, setLanguagesSpoken)} /> French <br />
                        <input type="checkbox" value="German" onChange={(e) => handleCheckboxChange(e, languagesSpoken, setLanguagesSpoken)} /> German <br />
                        <input type="checkbox" value="Italian" onChange={(e) => handleCheckboxChange(e, languagesSpoken, setLanguagesSpoken)} /> Italian <br />
                        <input type="checkbox" value="Chinese" onChange={(e) => handleCheckboxChange(e, languagesSpoken, setLanguagesSpoken)} /> Chinese <br />
                        <input type="checkbox" value="Japanese" onChange={(e) => handleCheckboxChange(e, languagesSpoken, setLanguagesSpoken)} /> Japanese <br />
                        <input type="checkbox" value="Russian" onChange={(e) => handleCheckboxChange(e, languagesSpoken, setLanguagesSpoken)} /> Russian <br />
         
                    </div>
                </div>

                {/* Nearby Landmarks */}
                <div className="mb-4 ">
                    <label className="block font-bold mb-2">Nearby Landmarks:</label>
                    <div>
                        {/* Include checkboxes for nearby landmarks */}
                        <input type="checkbox" value="Close to the Beach" onChange={(e) => handleCheckboxChange(e, nearbyLandmarks, setNearbyLandmarks)} />  Close to the Beach <br />
                        <input type="checkbox" value="Near the Airport" onChange={(e) => handleCheckboxChange(e, nearbyLandmarks, setNearbyLandmarks)} /> Near the Airport <br />
                        <input type="checkbox" value="Near Public Transportation" onChange={(e) => handleCheckboxChange(e, nearbyLandmarks, setNearbyLandmarks)} /> Near Public Transportation <br />
                        <input type="checkbox" value="Close to city center" onChange={(e) => handleCheckboxChange(e, nearbyLandmarks, setNearbyLandmarks)} /> Close to city center <br />
                       

                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center col-span-3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VendorSpecs;
