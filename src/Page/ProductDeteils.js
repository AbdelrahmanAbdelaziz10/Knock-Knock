import React, { useState } from 'react'
import NavBar from '../Component/Common Component/NavBar/NavBar'
import Footer from '../Component/Common Component/Footer/Footer'
import MainProductDetails from '../Component/Main ProductDeteils  com/MainProductDeteils'

const ProductDeteils = () => {
  return (
    <div className='product_details'>
    <NavBar />
    <MainProductDetails />
    <Footer />
    </div>
  )
}

export default ProductDeteils