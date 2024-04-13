import { useState } from "react"
import Popup from "./popup";

const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://i.postimg.cc/MT6TvYxW/photo-1613526949297-1aba25022d0c-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://i.postimg.cc/XJsvFy79/photo-1609681980718-340e7f4b11d7-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://i.postimg.cc/L5sq1tdM/photo-1522310570852-0b661319089c-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://i.postimg.cc/V6m0YyDv/photo-1566766188646-5d0310191714-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://i.postimg.cc/25mn5B5C/premium-photo-1661876643563-00656cbd1d41-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://i.postimg.cc/3RxpX5p6/photo-1569669568849-39a2939a4b65-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function Feed() {

    const [selectedCallout, setSelectedCallout] =useState(null);

    const openPopup =(callout) =>{
        setSelectedCallout(callout);
    }
    const closePopup =() =>{
        setSelectedCallout(null);
    }

    return (
      <div className="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-white">Top Events for the week</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative" onClick={() => openPopup(callout)}>
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img 
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-white">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-white">{callout.description}</p>
                </div>
              ))}
            </div>

            {selectedCallout &&(
                <Popup callout={selectedCallout} onClose={closePopup}/>
            )}
          </div>
        </div>
      </div>
    )
  }
  