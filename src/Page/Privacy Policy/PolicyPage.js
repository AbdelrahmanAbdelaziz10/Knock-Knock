import React from 'react'
import NavBar from '../../Component/Common Component/NavBar/NavBar'
import Footer from '../../Component/Common Component/Footer/Footer'
import "./policypage.css"
import MainPolicy from './Main Policy/MainPolicy'
const PolicyPage = () => {
  return (
    <div className='policy_page'>
    <NavBar />
    <MainPolicy />
    <Footer />
    </div>
  )
}

export default PolicyPage