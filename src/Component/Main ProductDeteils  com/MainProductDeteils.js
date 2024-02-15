import React from 'react'
import './MainProductDetails.css'
import BodyDetails from '../Common Component/Deteils Com/BodyDetails'
import { Container, Row } from 'react-bootstrap'
import  ProductSlider  from './ProductSlider'
import ProductHead from './ProductHead'
import headimg from '../../images/product1.svg'

const MainProductDetails = () => {
  return (
    <div className='main_product_details'>
    <Container>
    <div className='row'>
    <ProductHead img={headimg} page1={"Product"} page2={"Sunny Oil"}/>
    <ProductSlider />
    </div>
    <BodyDetails />


    </Container>
    
    </div>
  )
}

export default MainProductDetails