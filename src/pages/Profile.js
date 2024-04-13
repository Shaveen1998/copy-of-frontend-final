import React from 'react'
import ProfileHeader from '../Components/Profile_Header'
import Status from '../Components/Status'
import TripStatus from '../Planingdesk/Flyout'
import Footer from '../Components/Footer'
import Logocloud from '../Components/logocloud'
import ProfileNavbar from '../Components/ProfileNavbar'


const Profile = () => {
  return (
    <div>
        <ProfileNavbar/>
        <ProfileHeader/>
        
        <TripStatus/>
        <TripStatus/>
        <TripStatus/>
        <Status/>
        <Logocloud/>
       <Footer />
    </div>
  )
}

export default Profile
