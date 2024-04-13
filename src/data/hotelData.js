const hotelData = [
  //hotel1
   {
     name: 'Marino Beach Colombo',
     city: 'Colombo',
     vibe:'Beach',
     images: [
       { src: 'https://i.postimg.cc/G3YYvh4g/156672332.jpg', alt: 'Image 1' },
       { src: 'https://i.postimg.cc/yYyZrQXF/440248970.jpg', alt: 'Image 2' },
       { src: 'https://i.postimg.cc/gkWhsFRz/463586529.jpg', alt: 'Image 3' },
       { src: 'https://i.postimg.cc/DwfXVrBR/463586532.jpg', alt: 'Image 4' },
     ],
     categories: ['Superior','Deluxe','Standard'],
     roomTypes: ['superior lounge','Deluxe family','Standard suite'],
     type: [
       { name: 'RoomOnly', inStock: true },
       { name: 'BnB', inStock: true },
       { name: 'HB', inStock: true },
       { name: 'FB', inStock: true },
     ],
     description:
       'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
     highlights: [
       'Hand cuts and sewn locally',
       'Dyed with our proprietary colors',
       'Pre-washed & pre-shrunk',
       'Ultra-soft 100% cotton',
     ],
     details:
       'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',



   rooms: {
     Superior: [
       {
         name: "Superior Family Suite",
         prices: {
           'RoomOnly': 200,
           'HB': 250,
           'FB': 300,
           'BnB': 275
         }
       },
       {
         name: "Coupples Room",
         prices: {
           'RoomOnly': 200,
           'HB': 250,
           'FB': 300,
           'BnB': 275
         }
       }
     ],
     Deluxe: [
       {
         name: "Poolside Villa",
         prices: {
           'RoomOnly': 200,
           'HB': 250,
           'FB': 300,
           'BnB': 275
         }
       },
       {
         name: "Garden View Room",
         prices: {
           'RoomOnly': 200,
           'HB': 250,
           'FB': 300,
           'BnB': 275
         }
       }
     ],
     Standard: [
       {
         name: "City View Room",
         prices: {
           'RoomOnly': 200,
           'HB': 250,
           'FB': 300,
           'BnB': 275
         }
       },
       {
         name: "Courtyard Room",
         prices: {
           'RoomOnly': 200,
           'HB': 250,
           'FB': 300,
           'BnB': 275
         }
       }
     ]
   }

   },
   // hotel 2
   {
     name: 'Kingsbury',
     city: 'Colombo',
     vibe:'Scenic',
     images: [
       { src: 'https://i.postimg.cc/hjnnwr0d/134394306.jpg', alt: 'Image 5' },
       { src: 'https://i.postimg.cc/8kHp2q9P/139151659.jpg', alt: 'Image 6' },
       { src: 'https://i.postimg.cc/PJ3kCknW/139151668.jpg', alt: 'Image 7' },
       { src: 'https://i.postimg.cc/QxYXtcj2/239918035.jpg', alt: 'Image 8' },
     ],
     categories: ['Superior','Deluxe','Standard'],
     type: [
       { name: 'RoomOnly', inStock: true },
       { name: 'BnB', inStock: true },
       { name: 'HB', inStock: true },
       { name: 'FB', inStock: true },
     ],
     description:
       'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
     highlights: [
       'Hand cut and sewn locally',
       'Dyed with our proprietary colors',
       'Pre-washed & pre-shrunk',
       'Ultra-soft 100% cotton',
     ],
     details:
       'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',

       prices: [
         {category: "Standard",type: "RoomOnly",price: 100},
         {category: "Standard",type: "BnB",price: 120},
         {category: "Standard",type: "HB",price: 150},
         {category: "Standard",type: "FB",price: 180},
         {category: "Deluxe",type: "RoomOnly",price: 150},
         {category: "Deluxe",type: "BnB",price: 180},
         {category: "Deluxe",type: "HB",price: 210},
         {category: "Deluxe",type: "FB",price: 240},
         {category: "Superior",type: "RoomOnly",price: 200},
         {category: "Superior",type: "BnB",price: 230},
         { category: "Superior",type: "HB",price: 260},
         {category: "Superior",type: "FB",price: 290}
       ],
       rooms: {
         Superior: [
           {
             name: "Ocean View Suite",
             prices: {
               'RoomOnly': 200,
               'HB': 250,
               'FB': 300,
               'BnB': 275
             }
           },
           {
             name: "Executive Suite",
             prices: {
               'RoomOnly': 200,
               'HB': 250,
               'FB': 300,
               'BnB': 275
             }
           }
         ],
         Deluxe: [
           {
             name: "Poolside Villa",
             prices: {
               'RoomOnly': 200,
               'HB': 250,
               'FB': 300,
               'BnB': 275
             }
           },
           {
             name: "Garden View Room",
             prices: {
               'RoomOnly': 200,
               'HB': 250,
               'FB': 300,
               'BnB': 275
             }
           }
         ],
         Standard: [
           {
             name: "City View Room",
             prices: {
               'RoomOnly': 200,
               'HB': 250,
               'FB': 300,
               'BnB': 275
             }
           },
           {
             name: "Courtyard Room",
             prices: {
               'RoomOnly': 200,
               'HB': 250,
               'FB': 300,
               'BnB': 275
             }
           }
         ]
       }
   
   },
   // hotel 3
   {
     name: 'Kandy Hills',
     city: 'Kandy',
     vibe:'Scenic',
     images: [
       { src: 'https://i.postimg.cc/FF3dYrzr/246891907.jpg', alt: 'Image 9' },
       { src: 'https://i.postimg.cc/wTztJCRh/246893630.jpg', alt: 'Image 10' },
       { src: 'https://i.postimg.cc/gkKxKg31/246893902.jpg', alt: 'Image 11' },
       { src: 'https://i.postimg.cc/0y2bX7fj/246901785.jpg', alt: 'Image 12' },
     ],
     colors: [
       { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
       { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
       { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
     ],
     categories: ['Superior','Deluxe','Standard'],
     type: [
       { name: 'RoomOnly', inStock: true },
       { name: 'BnB', inStock: true },
       { name: 'HB', inStock: true },
       { name: 'FB', inStock: true },
     ],
     description:
       'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
     highlights: [
       'Hand cut and sewn locally',
       'Dyed with our proprietary colors',
       'Pre-washed & pre-shrunk',
       'Ultra-soft 100% cotton',
     ],
     details:
       'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
       prices: [
         {category: "Standard",type: "RoomOnly",price: 100},
         {category: "Standard",type: "BnB",price: 120},
         {category: "Standard",type: "HB",price: 150},
         {category: "Standard",type: "FB",price: 180},
         {category: "Deluxe",type: "RoomOnly",price: 150},
         {category: "Deluxe",type: "BnB",price: 180},
         {category: "Deluxe",type: "HB",price: 210},
         {category: "Deluxe",type: "FB",price: 240},
         {category: "Superior",type: "RoomOnly",price: 200},
         {category: "Superior",type: "BnB",price: 230},
         { category: "Superior",type: "HB",price: 260},
         {category: "Superior",type: "FB",price: 290}
       ],

       rooms: {
         Superior: [
           {
             name: "Ocean View Suite kandy",
             prices: {
               'RoomOnly': 200,
               'HB': 250,
               'FB': 300,
               'BnB': 275
             }
           },
           {
             name: "Executive Suite kandy",
             prices: {
               'RoomOnly': 200,
               'HB': 250,
               'FB': 300,
               'BnB': 275
             }
           }
         ],
         Deluxe: [
           {
             name: "Poolside Villa kandy",
             prices: {
               'RoomOnly': 200,
               'HB': 250,
               'FB': 300,
               'BnB': 275
             }
           },
           {
             name: "Garden View Room kandy",
             prices: {
               'RoomOnly': 200,
               'HB': 250,
               'FB': 300,
               'BnB': 275
             }
           }
         ],
         Standard: [
           {
             name: "City View Room kandy",
             prices: {
               'RoomOnly': 200,
               'HB': 250,
               'FB': 300,
               'BnB': 275
             }
           },
           {
             name: "Courtyard Room kandy",
             prices: {
               'RoomOnly': 200,
               'HB': 250,
               'FB': 300,
               'BnB': 275
             }
           }
         ]
       }
   
   },
   // hotel 4
   {
    name: 'Cinnamon Red',
    city: 'Colombo',
    vibe:'Beach',
    images: [
      { src: 'https://i.postimg.cc/c4hc84jy/112520288.jpg', alt: 'Image 5' },
      { src: 'https://i.postimg.cc/13zr01hg/112520291.jpg', alt: 'Image 6' },
      { src: 'https://i.postimg.cc/sg09wHsT/490903473.jpg', alt: 'Image 7' },
      { src: 'https://i.postimg.cc/g0Xy5y0m/544246595.jpg', alt: 'Image 8' },
    ],
    categories: ['Superior','Deluxe','Standard'],
    type: [
      { name: 'RoomOnly', inStock: true },
      { name: 'BnB', inStock: true },
      { name: 'HB', inStock: true },
      { name: 'FB', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',

      prices: [
        {category: "Standard",type: "RoomOnly",price: 100},
        {category: "Standard",type: "BnB",price: 120},
        {category: "Standard",type: "HB",price: 150},
        {category: "Standard",type: "FB",price: 180},
        {category: "Deluxe",type: "RoomOnly",price: 150},
        {category: "Deluxe",type: "BnB",price: 180},
        {category: "Deluxe",type: "HB",price: 210},
        {category: "Deluxe",type: "FB",price: 240},
        {category: "Superior",type: "RoomOnly",price: 200},
        {category: "Superior",type: "BnB",price: 230},
        { category: "Superior",type: "HB",price: 260},
        {category: "Superior",type: "FB",price: 290}
      ],
      rooms: {
        Superior: [
          {
            name: "Ocean View Suite",
            prices: {
              'RoomOnly': 200,
              'HB': 250,
              'FB': 300,
              'BnB': 275
            }
          },
          {
            name: "Executive Suite",
            prices: {
              'RoomOnly': 200,
              'HB': 250,
              'FB': 300,
              'BnB': 275
            }
          }
        ],
        Deluxe: [
          {
            name: "Poolside Villa",
            prices: {
              'RoomOnly': 200,
              'HB': 250,
              'FB': 300,
              'BnB': 275
            }
          },
          {
            name: "Garden View Room",
            prices: {
              'RoomOnly': 200,
              'HB': 250,
              'FB': 300,
              'BnB': 275
            }
          }
        ],
        Standard: [
          {
            name: "City View Room",
            prices: {
              'RoomOnly': 200,
              'HB': 250,
              'FB': 300,
              'BnB': 275
            }
          },
          {
            name: "Courtyard Room",
            prices: {
              'RoomOnly': 200,
              'HB': 250,
              'FB': 300,
              'BnB': 275
            }
          }
        ]
      }
  
  },
  
      // hotel 5
      {
        name: 'Cafe Aroma Inn',
        city: 'Kandy',
        vibe:'scenic',
        images: [
          { src: 'https://i.postimg.cc/L8fL39Q8/35364023.jpg', alt: 'Image 5' },
          { src: 'https://i.postimg.cc/vmtnCPsR/35393134.jpg', alt: 'Image 6' },
          { src: 'https://i.postimg.cc/vB8nyWY4/491578850.jpg', alt: 'Image 7' },
          { src: 'https://i.postimg.cc/DzTsC9Rd/92181667.jpg', alt: 'Image 8' },
        ],
        categories: ['Superior','Deluxe','Standard'],
        type: [
          { name: 'RoomOnly', inStock: true },
          { name: 'BnB', inStock: true },
          { name: 'HB', inStock: true },
          { name: 'FB', inStock: true },
        ],
        description:
          'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
          'Hand cut and sewn locally',
          'Dyed with our proprietary colors',
          'Pre-washed & pre-shrunk',
          'Ultra-soft 100% cotton',
        ],
        details:
          'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    
          prices: [
            {category: "Standard",type: "RoomOnly",price: 100},
            {category: "Standard",type: "BnB",price: 120},
            {category: "Standard",type: "HB",price: 150},
            {category: "Standard",type: "FB",price: 180},
            {category: "Deluxe",type: "RoomOnly",price: 150},
            {category: "Deluxe",type: "BnB",price: 180},
            {category: "Deluxe",type: "HB",price: 210},
            {category: "Deluxe",type: "FB",price: 240},
            {category: "Superior",type: "RoomOnly",price: 200},
            {category: "Superior",type: "BnB",price: 230},
            { category: "Superior",type: "HB",price: 260},
            {category: "Superior",type: "FB",price: 290}
          ],
          rooms: {
            Superior: [
              {
                name: "Ocean View Suite",
                prices: {
                  'RoomOnly': 200,
                  'HB': 250,
                  'FB': 300,
                  'BnB': 275
                }
              },
              {
                name: "Executive Suite",
                prices: {
                  'RoomOnly': 200,
                  'HB': 250,
                  'FB': 300,
                  'BnB': 275
                }
              }
            ],
            Deluxe: [
              {
                name: "Poolside Villa",
                prices: {
                  'RoomOnly': 200,
                  'HB': 250,
                  'FB': 300,
                  'BnB': 275
                }
              },
              {
                name: "Garden View Room",
                prices: {
                  'RoomOnly': 200,
                  'HB': 250,
                  'FB': 300,
                  'BnB': 275
                }
              }
            ],
            Standard: [
              {
                name: "City View Room",
                prices: {
                  'RoomOnly': 200,
                  'HB': 250,
                  'FB': 300,
                  'BnB': 275
                }
              },
              {
                name: "Courtyard Room",
                prices: {
                  'RoomOnly': 200,
                  'HB': 250,
                  'FB': 300,
                  'BnB': 275
                }
              }
            ]
          }
      
      },

            // hotel 6
            {
              name: 'The Radh',
              city: 'Kandy',
              vibe:'scenic',
              images: [
                { src: 'https://i.postimg.cc/NFzzh6Xt/160376305.jpg', alt: 'Image 5' },
                { src: 'https://i.postimg.cc/gcS56WT7/160376670.jpg', alt: 'Image 6' },
                { src: 'https://i.postimg.cc/gkx7V792/160376877.jpg', alt: 'Image 7' },
                { src: 'https://i.postimg.cc/0ymH3Jyg/241117589.jpg', alt: 'Image 8' },
              ],
              categories: ['Superior','Deluxe','Standard'],
              type: [
                { name: 'RoomOnly', inStock: true },
                { name: 'BnB', inStock: true },
                { name: 'HB', inStock: true },
                { name: 'FB', inStock: true },
              ],
              description:
                'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
              highlights: [
                'Hand cut and sewn locally',
                'Dyed with our proprietary colors',
                'Pre-washed & pre-shrunk',
                'Ultra-soft 100% cotton',
              ],
              details:
                'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
          
                prices: [
                  {category: "Standard",type: "RoomOnly",price: 100},
                  {category: "Standard",type: "BnB",price: 120},
                  {category: "Standard",type: "HB",price: 150},
                  {category: "Standard",type: "FB",price: 180},
                  {category: "Deluxe",type: "RoomOnly",price: 150},
                  {category: "Deluxe",type: "BnB",price: 180},
                  {category: "Deluxe",type: "HB",price: 210},
                  {category: "Deluxe",type: "FB",price: 240},
                  {category: "Superior",type: "RoomOnly",price: 200},
                  {category: "Superior",type: "BnB",price: 230},
                  { category: "Superior",type: "HB",price: 260},
                  {category: "Superior",type: "FB",price: 290}
                ],
                rooms: {
                  Superior: [
                    {
                      name: "Ocean View Suite",
                      prices: {
                        'RoomOnly': 200,
                        'HB': 250,
                        'FB': 300,
                        'BnB': 275
                      }
                    },
                    {
                      name: "Executive Suite",
                      prices: {
                        'RoomOnly': 200,
                        'HB': 250,
                        'FB': 300,
                        'BnB': 275
                      }
                    }
                  ],
                  Deluxe: [
                    {
                      name: "Poolside Villa",
                      prices: {
                        'RoomOnly': 200,
                        'HB': 250,
                        'FB': 300,
                        'BnB': 275
                      }
                    },
                    {
                      name: "Garden View Room",
                      prices: {
                        'RoomOnly': 200,
                        'HB': 250,
                        'FB': 300,
                        'BnB': 275
                      }
                    }
                  ],
                  Standard: [
                    {
                      name: "City View Room",
                      prices: {
                        'RoomOnly': 200,
                        'HB': 250,
                        'FB': 300,
                        'BnB': 275
                      }
                    },
                    {
                      name: "Courtyard Room",
                      prices: {
                        'RoomOnly': 200,
                        'HB': 250,
                        'FB': 300,
                        'BnB': 275
                      }
                    }
                  ]
                }
            
            },
   
 
 ];

 export default hotelData