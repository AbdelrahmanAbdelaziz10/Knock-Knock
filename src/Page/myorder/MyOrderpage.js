import React from 'react'
import NavBar from '../../Component/Common Component/NavBar/NavBar'
import Footer from '../../Component/Common Component/Footer/Footer'
import './myorder.css'
import MainOrder from './mainorder/MainOrder'
const MyOrderpage = () => {
  return (
    <div className='myorder'>
    <NavBar />
    <MainOrder />
    <Footer />

    </div>
  )
}

export default MyOrderpage