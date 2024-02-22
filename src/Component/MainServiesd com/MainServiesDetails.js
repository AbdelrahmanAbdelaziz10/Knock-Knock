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
import { i18n } from 'i18next';
import { useTranslation } from 'react-i18next';

const MainServiesDetails = ({changeTest}) => {
  const {t,i18n}=useTranslation()

  return (
    <>

      <div className="main_product_details mb-4">
        <Container>
          <div className="row my-3">
            <ProductHead img={serves} page1={t('home_category1')} page2={t("serviess")} />
          </div>
          <BodyDetails />

          <div className="nots mb-4">
            <FaCircleExclamation className="icon" />
            <p>
            {t("serves_details_massage")}
            </p>
            <span className=" btn-details">{t("details_details")}</span>
          </div>

          <div className="row time_date">
            <div className="col-lg-12 row justify-content-center add_btn ">
              <h5>
              {t("serves_details_hours")}
              </h5>

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
                <button className=" total_price mt-2">{t("total_price")}
  200 {t("price")}</button>
              </Col>
            </div>

            <div className="col-lg-9 mt-3">
            <Link to="/cart_shop" className="btn btn-book" >
              {t("serves_details_btn")}
              </Link>
              {/* <button className="btn btn-book" onClick={changeTest}>
                Book Now
              </button> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainServiesDetails;
