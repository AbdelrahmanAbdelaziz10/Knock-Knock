import React from 'react'
import NavBar from '../../Component/Common Component/NavBar/NavBar'
import Footer from '../../Component/Common Component/Footer/Footer'
import './sendgift.css'
import MainGift from './Main gift/MainGift'
const SendGiftPage = () => {
  return (
    <div className='send_gift'>
    <NavBar />
    <MainGift />
    <Footer />

    </div>
  )
}

export default SendGiftPage