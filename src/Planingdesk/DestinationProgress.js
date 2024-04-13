import {
    Timeline,
    TimelineItem,
    TimelineIcon,
    Typography,
    TimelineHeader,
  } from "@material-tailwind/react";
  import {
    CurrencyDollarIcon,
  } from "@heroicons/react/24/solid";
  import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


   
  export default function DestinationProgress({selectedCities }) {

    const navigate = useNavigate()
    
    const handleTimelineItemClick = (city) => {
      // Stringify the city object and encode it for the URL
      const cityState = encodeURIComponent(JSON.stringify(city));
  
      // Open the link in a new tab with the state as a query parameter
      window.open(`/hotelfeed?cityState=${cityState}`, '_blank');
    };
  

    return (
      <div className="w-[25rem]">
        <Timeline className="flex">
          {selectedCities?.map((city, index) => (
            <TimelineItem key={index} className="flex-none" onClick={() => handleTimelineItemClick(city.name)}>
              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon className="p-3" variant="ghost" color="green">
                  <CurrencyDollarIcon className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="blue-gray">
                    {`Destination ${index + 1}`}
                  </Typography>
                  <Typography variant="h6" color="blue-gray">
                    {city.name}
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>
          ))}
      </Timeline>
      
      </div>
    );
  }



// import { Button, Timeline } from 'flowbite-react';
// import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';

// export default function DestinationProgress({selectedCities}) {
//   return (
//     <Timeline>
//       <Timeline.Item>
//         <Timeline.Point icon={HiCalendar} />
//         <Timeline.Content>
//           <Timeline.Time>February 2022</Timeline.Time>
//           <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
//           <Timeline.Body>
//             Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
//             E-commerce & Marketing pages.
//           </Timeline.Body>
//           <Button color="gray">
//             Learn More
//             <HiArrowNarrowRight className="ml-2 h-3 w-3" />
//           </Button>
//         </Timeline.Content>
//       </Timeline.Item>
//       <Timeline.Item>
//         <Timeline.Point icon={HiCalendar} />
//         <Timeline.Content>
//           <Timeline.Time>March 2022</Timeline.Time>
//           <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
//           <Timeline.Body>
//             All of the pages and components are first designed in Figma and we keep a parity between the two versions
//             even as we update the project.
//           </Timeline.Body>
//         </Timeline.Content>
//       </Timeline.Item>
//       <Timeline.Item>
//         <Timeline.Point icon={HiCalendar} />
//         <Timeline.Content>
//           <Timeline.Time>April 2022</Timeline.Time>
//           <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
//           <Timeline.Body>
//             Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
//           </Timeline.Body>
//         </Timeline.Content>
//       </Timeline.Item>
//     </Timeline>
//   );
// }
