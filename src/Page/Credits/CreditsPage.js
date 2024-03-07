import React, { useEffect } from 'react'
import "./credit.css"
import NavBar from '../../Component/Common Component/NavBar/NavBar'
import Footer from '../../Component/Common Component/Footer/Footer'
import { MainCredit } from './main credit/MainCredit'
const CreditsPage = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className='credit'>
    <NavBar />
    <MainCredit />
    <Footer />
    </div>
  )
}

export default CreditsPage