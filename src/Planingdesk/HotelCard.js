import { useEffect, useRef, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import React from 'react'
import RoomModal from '../Components/RoomModal'
import "react-datepicker/dist/react-datepicker.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";


const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function HotelCard({hotelData, feedBudget}) {

  const [selectedCategory, setSelectedCategory] = useState(hotelData.categories[0])
  const [selectedType, setselectedType] = useState(hotelData.type[0])
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [price, setPrice] = useState(getPrice(selectedCategory, selectedType, selectedRoom));
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateRangeRef = useRef(null);

  const handleInputClick = () => {
    setShowDatePicker(true);
  };

  const handleClickOutside = (event) => {
    if (dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
      setShowDatePicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    setPrice(getPrice(selectedCategory, selectedType, selectedRoom));
  };

  const handleTypeChange = (selectedType) => {
    setselectedType(selectedType);
    setPrice(getPrice(selectedCategory, selectedType, selectedRoom));
  };

  const handleRoomChange = (selectedRoom) => {
    setSelectedRoom(selectedRoom)
    console.log('selected room now: ', selectedRoom)
  };

  // function getPrice(selectedCategory, selectedType) {
  //   const selectedPrice = hotelData.prices.find(
  //     (item) => item.category === selectedCategory && item.type === selectedType.name
  //   );
  //   return selectedPrice ? selectedPrice.price : 0; // Default to 0 if not found
  // }

  function getPrice(selectedCategory, selectedType, selectedRoom) {
    console.log(selectedCategory, selectedType, selectedRoom)
    if (selectedRoom) {
      const room = hotelData.rooms[selectedCategory].find(room => room === selectedRoom);
      if (room && room.prices && room.prices[selectedType.name]) {
        return room.prices[selectedType.name];
      }
    }
    return 0; // Default to 0 if any data is missing
  }

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  
  const handleAddToBag = () => {
    // Deduct the price from the budget
    const remainingBudget = feedBudget - price;
    console.log(remainingBudget, price)

    // Update the budget in local storage
    localStorage.setItem('budget', remainingBudget);

    window.location.reload(true);

    // You might want to add further logic here, like updating a shopping cart state
  };
  return (
    <div className="bg-white">
      <div className="pt-6">
        
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            
            <li className="text-sm">
              <a href={hotelData.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {hotelData.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        
        <div  className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              
              <img 
               
                src={hotelData.images[0].src} 
                alt={hotelData.images[0].alt} 
                className="h-full w-full object-cover object-center"
                />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                
                 src={hotelData.images[1].src} 
                 alt={hotelData.images[1].alt} 
                 className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                 
                  src={hotelData.images[2].src} 
                  alt={hotelData.images[2].alt} 
                  className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
               
               src={hotelData.images[3].src} 
               alt={hotelData.images[3].alt} 
               className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* hotelData info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{hotelData.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
          
            <p className="text-3xl tracking-tight text-gray-900">${price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10" action='#'>
              {/* packages */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Packages</h3>

                <RadioGroup value={selectedCategory} onChange={handleCategoryChange} className="mt-4">
                <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {hotelData.categories.map((category) => (
                      <RadioGroup.Option
                        key={category}
                        value={category}
                        className={({ active, checked }) =>
                          classNames(
                            category.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                    
                          {category}
                     
                        <span
                          aria-hidden="true"
                          className={classNames(
                            category.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>

                      {/* {selectedPackage && (
                        <div className="mt-4">
                          <h3 className="text-sm font-medium text-gray-900">{selectedPackage} Rooms</h3>
                          <ul className="mt-2">
                            {hotelData.rooms[selectedPackage].map((room) => (
                              <li
                              key={room.name}
                              onClick={() => handleRoomClick(room)}
                              style={{ cursor: "pointer" }}
                            >
                              <a>{room.name}</a>
                            </li>
                            ))}
                          </ul>
                        </div>
                      )} */}

{selectedCategory && (
  <div className="mt-4">
    <h3 className="text-sm font-medium text-gray-900">{selectedCategory} Rooms</h3>
    <ul className="mt-2">
      {hotelData.rooms[selectedCategory].map((room) => (
        <li key={room.name}>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="selectedRoom"
              value={room.name}
              checked={selectedRoom === room}
              onChange={() => handleRoomChange(room)}
              className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span  onClick={() => handleRoomClick(room)} style={{ cursor: "pointer" }} >{room.name}</span>
          </label>
        </li>
      ))}
    </ul>
  </div>
)}



                      {/* Modal */}
                      {isModalOpen && (
        <RoomModal room={selectedRoom} closeModal={closeModal} />
      )}
              </div>

              {/* type */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Package Guide
                  </a>
                </div>

                <RadioGroup value={selectedType} onChange={handleTypeChange} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {hotelData.type.map((type) => (
                      <RadioGroup.Option
                        key={type.name}
                        value={type}
                        disabled={!type.inStock}
                        className={({ active }) =>
                          classNames(
                            type.inStock
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{type.name}</RadioGroup.Label>
                            {type.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              
            </form>

            <button
                type="submit"
                onClick={handleAddToBag}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{hotelData.description}</p>
              </div>
            </div>
  
            <section className="content-area-top">
              <div className="area-top-l">

              </div>
              <div className="area-top-r">
                <div
                  ref={dateRangeRef}
                  className={`date-range-wrapper ${
                    !showDatePicker ? "hide-date-range" : ""
                  }`}
                  onClick={handleInputClick}
                >
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    showMonthAndYearPickers={false}
                  />
                </div>
              </div>
          </section>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{hotelData.details}</p>
              </div>
            </div>
          </div>
        </div>
   
      </div>
    </div>
  )
}

export default HotelCard
