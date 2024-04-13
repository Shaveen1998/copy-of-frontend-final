import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Register from './Components/Register'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Summary from './pages/Summary'
import VendorSignup from './Vendor/VendorSignup'
import Vendor from './Vendor/Vendor'
import HotelFeed from './Planingdesk/HotelFeed'
import MapAndVibe from './Planingdesk/MapAndVibe'
import FInal_page from './pages/FInal_page'
import VendorDetails from './Vendor/VendorDetails'
import VendorLogin from './Vendor/VendorLogin'
import './App.css'
import RoomDetails from './Vendor/RoomDetails'
import VendorSpecs from './Vendor/VendorSpecs'
import { AuthContext } from './Context/AuthContext'
import { VendorAuthContext } from './Context/VendorAuthContext'

const App = () => {
  const {currentUser} = useContext(AuthContext);
  const {currentVendor} = useContext(VendorAuthContext);

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/Login"/>
  };

  const RequireVendorAuth = ({children}) => {
    return currentVendor ? (children) : <Navigate to="/VendorLogin"/>
  };

  return(
    <div>
  <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/signup' element = {<Signup/>}/>
    <Route path='/register' element ={<RequireAuth><Register/></RequireAuth>}/>
    <Route path='/aboutus' element ={<AboutUs/>}/>
    <Route path="/tripme" element={<RequireAuth><MapAndVibe/></RequireAuth>} />
    <Route path='/login' element = {<Login/>}/>
    <Route path='/profile' element = {<RequireAuth><Profile/></RequireAuth>}/>
    <Route path='/summary' element = {<RequireAuth><Summary/></RequireAuth>}/>
    <Route path='/vendordetails' element = {<RequireVendorAuth><VendorDetails/></RequireVendorAuth>}/>
    <Route path='/vendorsignup' element = {<VendorSignup/>}/>
    <Route path='/vendorlogin' element = {<VendorLogin/>}/>
    <Route path='/vendorhome' element = {<Vendor/>}/>
    <Route path='/hotelfeed' element = {<HotelFeed />} />
    <Route path='/cart' element={<FInal_page/>}/>
    <Route path='/roomDetails' element={<RequireVendorAuth><RoomDetails/></RequireVendorAuth>}/>
    <Route path='/vendorspecs' element={<RequireVendorAuth><VendorSpecs/></RequireVendorAuth>}/>
  </Routes>
  </div>
  )
}

export default App;

