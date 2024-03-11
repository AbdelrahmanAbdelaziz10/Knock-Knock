import React, { useEffect } from 'react'
import NavBar from '../../Component/Common Component/NavBar/NavBar'
import Footer from '../../Component/Common Component/Footer/Footer'
import MainProductBook from './Main Booking/MainProductBook'

const BookingProductPage = ({contentOrderProduct,getOrderProduct}) => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    
  return (
    <div className='book'>
    <NavBar />
    <MainProductBook contentOrderProduct={contentOrderProduct} getOrderProduct={getOrderProduct} />
    <Footer />
    </div>
  )
}

export default BookingProductPage