import React from 'react'
import Navbar from './Navbar'
import Map from './map'
import ProductFeed from '../Planingdesk/cards'
import Footer from '../Footer'
import Logocloud from '../logocloud'
import Video from './vid'
import G_Footer from '../G_Footer'

const PlaningDesk = () => {
  return (
    <div className='bg-neutral-200'>

        <Navbar/>
      <Map/>
      <Video/>
      <ProductFeed/>
      <Footer/>
      <Logocloud/>
      <G_Footer/>
    
    </div>
  )
}

export default PlaningDesk
