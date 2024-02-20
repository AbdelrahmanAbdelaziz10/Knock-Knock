import React from 'react'
import NavBar from '../../Component/Common Component/NavBar/NavBar'
import Footer from '../../Component/Common Component/Footer/Footer'
import MainCreditCard from './Main credit page/MainCreditCard';
import './creditcard.css'
const CreditCardPage = () => {
  return (
    <div className='credit_card'>
    <NavBar />
    <MainCreditCard />
    <Footer />
    </div>
  )
}

export default CreditCardPage