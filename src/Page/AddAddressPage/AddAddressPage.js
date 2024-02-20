import React from 'react'
import NavBar from '../../Component/Common Component/NavBar/NavBar'
import './addaddress.css'
import Footer from '../../Component/Common Component/Footer/Footer'
import MainAddressPage from './mainaddress/MainAddressPage'
const AddAddressPage = () => {
  return (
    <div className='add_address'>
    <NavBar />
    <MainAddressPage />
    <Footer />
    </div>
  )
}

export default AddAddressPage