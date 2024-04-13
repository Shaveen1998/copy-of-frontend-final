import React from "react";

function RoomModal({ room, closeModal }) {
  // Function to render room features tags
  const renderRoomFeatures = () => {
    const features = ["Free WiFi", "Air Conditioning", "Television", "Mini Fridge", "Coffee Maker", "Work Desk", "Private Bathroom", "Hair Dryer", "Iron", "Room Service"];

    return features.map((feature, index) => (
      <span
        key={index}
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        {feature}
      </span>
    ));
  };

  // Sample images for image carousel
  const roomImages = [
    "https://i.postimg.cc/Xv3mTTw9/markus-spiske-g5-ZIXjz-RGds-unsplash.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-headline">
                  {room.name}
                </h3>
                {/* Image Carousel */}
                <div className="mb-4">
                  <div className="carousel">
                    {roomImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Room ${index + 1}`}
                        className="rounded-lg mx-auto max-h-64 mb-2"
                      />
                    ))}
                  </div>
                </div>
                {/* Room Features Tags */}
                <div className="mb-4">{renderRoomFeatures()}</div>
                {/* Bed Type */}
                <div className="mb-4">Bed Type: Double </div>
                {/* Room Details */}
                <div>Room details</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={closeModal}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomModal;
