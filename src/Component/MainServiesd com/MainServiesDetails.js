import React from 'react'
import '../Main ProductDeteils  com/MainProductDetails.css'
import BodyDetails from '../Common Component/Deteils Com/BodyDetails'
import { Container, Row } from 'react-bootstrap'
import ProductSlider from '../Main ProductDeteils  com/ProductSlider'
import ProductHead from './../Main ProductDeteils  com/ProductHead';
import serves from '../../images/Rectangle 195.png'
import { FaCircleExclamation } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";
import { IoRemoveOutline } from "react-icons/io5";
import '../Common Component/Deteils Com/BodyDeteils.css'
import { Link } from 'react-router-dom'
const MainServiesDetails = () => {
  return (
    <div className='main_product_details mb-4'>
    <Container>
    <div className='row my-3'>
    <ProductHead img={serves} page1={"Private Services"} page2={"Insecticide spraying service"}/>
    {/* <ProductSlider /> */}

    </div>
    <BodyDetails />

    <div className='nots mb-4'>
    <FaCircleExclamation className='icon' />
    <p>
    Free cancellation until 12 hours before
 the start of your booking
    </p>
    <span className=' btn-details'>
        Details
    </span>
    </div>

    <div className="row time_date">
    {/* <h5>Number Of Hours</h5>
                <div className="col-lg-9 justify-content-center add_btn">
                    <button className="btn decincrease">
                        <IoRemoveOutline className="remove"/>
                    </button>
                    <span>
                        1
                    </span>
                    <button className="btn increase">
                        <IoAddOutline className="add"/>
                    </button>
                    <button className=" total_price mt-2">
                    Total Price: 200 AED
                    </button>
                </div> */}
                <div className="col-lg-9 mt-3">
                    <Link to="/booking" className="btn btn-book">Book Now</Link>
                </div>
            </div>
        
    </Container>
    
    </div>
  )
}

export default MainServiesDetails