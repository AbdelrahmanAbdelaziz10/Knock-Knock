import React from 'react'
import NavBar from '../Component/Common Component/NavBar/NavBar'
import Footer from '../Component/Common Component/Footer/Footer'
import MainProduct from '../Component/Allproduct Component/MainProduct/MainProduct'
import Head from '../Component/Common Component/Head/Head'
import head from '../images/head.jpg'
const AllProduct = () => {
  return (
    <div className='all_product'>
    <NavBar />
    <Head img={head} page={"product"} title={"Product Serves"} />
    <MainProduct />
    <Footer />
    </div>
  )
}

export default AllProduct