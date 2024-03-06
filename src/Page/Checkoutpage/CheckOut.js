import React from 'react'
import NavBar from '../../Component/Common Component/NavBar/NavBar'
import Footer from '../../Component/Common Component/Footer/Footer'
import CheckOutMain from './CheckOutMain'

const CheckOut = () => {
  return (
    <div className='book'>
    <NavBar/>
    <CheckOutMain />
    <Footer />
    </div>
  )
}

export default CheckOut