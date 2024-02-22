import React, { useState } from 'react'
import './MainProductDetails.css'
import BodyDetails from '../Common Component/Deteils Com/BodyDetails'
import { Col, Container, Row } from 'react-bootstrap'
import  ProductSlider  from './ProductSlider'
import ProductHead from './ProductHead'
import headimg from '../../images/product1.svg'
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Location from '../../Page/Location/Location'
import { i18n } from 'i18next';
import { useTranslation } from 'react-i18next'

const MainProductDetails = () => {
    const {t,i18n}=useTranslation()

  return (
    <>
    <div className='main_product_details py-3'>
    <Container>
    <div className='row'>
    <ProductHead img={headimg} page1={t("all_product_product")} page2={t("all_product_product1_name")}/>
    <ProductSlider />
    </div>
    <BodyDetails />
    <div className="row time_date">
    <div className="col-lg-12 row justify-content-center add_btn ">
    {/* <h5>Number Of Hours</h5> */}

            <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4">
                    <button className="btn decincrease">
                        <IoRemoveOutline className="remove"/>
                    </button>
                    <span>
                        1
                    </span>
                    <button className="btn increase">
                        <IoAddOutline className="add"/>
                    </button>
                    </Col>
                    <Col xs={6} lg={5} md={5} sm={6} className="col-lg-5 col-md-5 mt-2">
                    <button className=" total_price mt-2">
                    {t("total_price")} 200 {t("price")}
                    </button>
                    </Col>
                    <Col xs={12} lg={4} md={3} sm={12} className="col-lg-4 col-md-3 mt-3 ">
                    <Link to="/cart_shop" className="btn btn-Add">Add To Card</Link>
                    </Col>
                </div>

{/* 
                <div className="col-lg-9 mt-3">
                    <Link to="/booking" className="btn btn-book">Book Now</Link>
                </div> */}
            </div>
        

    </Container>
    
    </div>
    </>

  )
}

export default MainProductDetails