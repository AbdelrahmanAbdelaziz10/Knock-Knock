import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Main ProductDeteils  com/MainProductDetails.css";
import BodyDetails from "../Common Component/Deteils Com/BodyDetails";
import ProductHead from "./../Main ProductDeteils  com/ProductHead";
import serves from "../../images/Rectangle 195.png";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import Location from "../../Page/Location/Location";
import { i18n } from "i18next";
import { useTranslation } from "react-i18next";
import useFetch from "../../hooks/useFetch";

const MainServiesDetails = ({ changeTest }) => {
  const { t, i18n } = useTranslation();
  const prams = useParams();
  // console.log(prams.servesId)
  const { data: serve } = useFetch(
    `/api/v1/services/get-service-details?service_id=${prams.servesId}`
  );
  const [increase, setIncrease] = useState(0);

  const increseNumber = () => {
    setIncrease((prevIncrease) => prevIncrease + 1);
  };

  const decreseNumber = () => {
    if (increase > 0) setIncrease((prevIncrease) => prevIncrease - 1);
  };
  console.log(serve?.data);
  return (
    <>
      <div className="main_product_details mb-4">
        <Container>
          <div className="row my-3">
            <ProductHead
              img={`https://dashboard.knock-knock.ae/${serve?.data.image}`}
              page1={t("home_category1")}
              page2_ar={serve?.data?.name_ar}
              page2_en={serve?.data?.name_en}

            />
          </div>
          <BodyDetails serveDetails={serve?.data} />
          <Row>
          <Col xs={12} lg={6} md={6} sm={12}>
          <div className="nots mb-4">
            <FaCircleExclamation className="icon" />
            <p>{t("serves_details_massage")}</p>
            {/* <span className=" btn-details">{t("details_details")}</span> */}
          </div>
          </Col>
          {/* <Col xs={12} lg={6} md={6} sm={12}>
          <div className="nots mb-4">
            <FaCircleExclamation className="icon" />
            <p>{t("serves_details_massage")}</p>
            <span className=" btn-details">{t("details_details")}</span>
          </div>
          </Col> */}
          </Row>


          <div className="row time_date">
            <div className="col-lg-12 row justify-content-center add_btn ">
              <Col
                xs={6}
                lg={5}
                md={5}
                sm={6}
                className="col-lg-5 col-md-5 mt-2"
              >
                <button className=" total_price mt-2">
                <span>
                {t("total_price")}
                </span>
                  {serve?.data?.price}
                  {t("price")}
                </button>
              </Col>
              <Col
                xs={12}
                lg={4}
                md={3}
                sm={12}
                className="col-lg-4 col-md-3 mt-3 "
              >
                <Link to="/cart_shop" className="btn btn-Add next">
                  {t("gift_btn")}
                </Link>
              </Col>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainServiesDetails;
