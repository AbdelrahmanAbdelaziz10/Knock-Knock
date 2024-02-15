import React, { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import '../Main ProductDeteils  com/MainProductDetails.css';
import BodyDetails from '../Common Component/Deteils Com/BodyDetails';
import ProductHead from './../Main ProductDeteils  com/ProductHead';
import serves from '../../images/Rectangle 195.png';
import { FaCircleExclamation } from 'react-icons/fa6';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Location from '../../Page/Location/Location';

const MainServiesDetails = ({changeTest}) => {

  return (
    <>

      <div className="main_product_details mb-4">
        <Container>
          <div className="row my-3">
            <ProductHead img={serves} page1={'Private Services'} page2={'Insecticide spraying service'} />
          </div>
          <BodyDetails />

          <div className="nots mb-4">
            <FaCircleExclamation className="icon" />
            <p>Free cancellation until 12 hours before the start of your booking</p>
            <span className=" btn-details">Details</span>
          </div>

          <div className="row time_date">
            <div className="col-lg-12 row justify-content-center add_btn ">
              <h5>Number Of Hours</h5>

              <Col xs={6} lg={6} md={6} sm={6} className="col-lg-3 col-md-4">
                <button className="btn decincrease">
                  <IoRemoveOutline className="remove" />
                </button>
                <span>1</span>
                <button className="btn increase">
                  <IoAddOutline className="add" />
                </button>
              </Col>
              <Col xs={6} lg={6} md={6} sm={6} className="col-lg-5 col-md-5 mt-2">
                <button className=" total_price mt-2">Total Price: 200 AED</button>
              </Col>
            </div>

            <div className="col-lg-9 mt-3">
              <button className="btn btn-book" onClick={changeTest}>
                Book Now
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainServiesDetails;
