import { Link, useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { db, storage } from "../Config/firebase";
import { doc, serverTimestamp, setDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useDropzone } from "react-dropzone";
import StarRatingSelect from '../Components/StarRating';

export default function VendorDetails() {

  const navigate = useNavigate();
  const [rating, setRating] = useState('');
  const [data, setData] = useState({});
  const [images, setImages] = useState([])
  const current = JSON.parse(localStorage.getItem("vendor")) || null;

  const handleChange = (value) => {
    setRating(value);
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]: value});
  };

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      if (file.type.startsWith('image/')) { // Check if file is an image
        const storageRef = ref(storage, `vendor-images/${current.uid}/${file.name}`);
        uploadBytes(storageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((downloadURL) => {
            setImages(prev => [...prev, downloadURL])
          })
        })
      } else {
        console.log("Unsupported file type:", file.type);
      }
    });
  }, [current.uid]);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: 'image/*'})

  const handleNext = async (e) => {
    try{
      // Retrieve form data
      const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        hotelName: document.getElementById("company").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        address: document.getElementById("address").value,
        rating: rating,
        vendorId: current.uid,
        images: images
      };
      console.log("Rating:", rating);

      // Store form data in local storage
      localStorage.setItem("vendorFormData", JSON.stringify(formData));

      await setDoc(doc(db, "vendors", current.uid), {
        ...data,
        timeStamp: serverTimestamp(),
        images: images
      });

      const docSnapshot = await getDoc(doc(db, "vendors", current.uid));
      if (docSnapshot.exists()) {
        const addedData = docSnapshot.data();
        console.log("Document data:", addedData);
      } else {
        console.log("Document doesn't exist");
      }

      // Navigate to the next page
      navigate("/roomDetails");
    }
    catch(error){
      console.log(error);
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Enter Hotel Details
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Basic Details</p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <input
            type="hidden"
            id="vendorId"
            onChange={handleInput}
            value={current?.uid || ""}
          />
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Proprierter Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="given-name"
              onChange={handleInput}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            City
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="family-name"
              onChange={handleInput}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="company"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Hotel Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="company"
              id="company"
              autoComplete="organization"
              onChange={handleInput}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="company"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Location - need google maps(Lat, Long)
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="location"
              id="location"
              autoComplete="organization"
              onChange={handleInput}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              disabled="disabled"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              value={current.email}
              onChange={handleInput}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="phone-number"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Phone number
          </label>

          <div className="relative mt-2.5">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>SL</option>
              </select>
              {/* <ChevronDownIcon
                className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                aria-hidden="true"
              /> */}
            </div>

            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              autoComplete="tel"
              onChange={handleInput}
              className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <StarRatingSelect value={rating} onChange={handleChange} />
      </div>

      <div className="sm:col-span-2">
          <label
            htmlFor="company"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Number of rooms available
          </label>
          <div className="mt-2.5">
            <input
              type="number"
              name="noOfRooms"
              id="noOfRooms"
              autoComplete="organization"
              onChange={handleInput}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

      <div>
        <label
          htmlFor="last-name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Street Address
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="address"
            id="address"
            autoComplete=""
            onChange={handleInput}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        
        <div {...getRootProps()}>
          <input
            {...getInputProps()}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag and drop some files here, or click to select files</p>
          )}
          <ul>
            {images.map((image, index) => (
              <li key={index}>
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className="w-32 h-32 object-cover rounded-md mr-2 mb-2"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <Link to="/roomDetails">
          <button
            type="button"
            onClick={handleNext}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
