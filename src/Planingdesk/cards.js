import React from "react";

const  CityCard = ({selectedCity})  =>{

  return (
    <div className="bg-white">
      <div className="pt-6">
        
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            
            <li className="text-sm">
              
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        
        <div  className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              
              <img 
               
                src={selectedCity.images[0].src} 
                alt={selectedCity.images[0].alt} 
                className="h-full w-full object-cover object-center"
                />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                
                 src={selectedCity.images[1].src} 
                 alt={selectedCity.images[1].alt} 
                 className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                 
                  src={selectedCity.images[2].src} 
                  alt={selectedCity.images[2].alt} 
                  className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
               
               src={selectedCity.images[3].src} 
               alt={selectedCity.images[3].alt} 
               className="h-full w-full object-cover object-center"
            />
          </div>
        </div>


   
      </div>
    </div>
  )
}

export default CityCard;
