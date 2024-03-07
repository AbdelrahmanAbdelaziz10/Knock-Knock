import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Main ProductDeteils  com/MainProductDetails.css";
import BodyDetails from "../Common Component/Deteils Com/BodyDetails";
import ProductHead from "./../Main ProductDeteils  com/ProductHead";
import serves from "../../images/Rectangle 195.png";
import { FaCircleExclamation } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Location from "../../Page/Location/Location";
import { useTranslation } from "react-i18next";
import useFetch from "../../hooks/useFetch";
import { ContextLang, ServesDetailsContext, ToggleContext } from "../../App";

const MainServiesDetails = ({ changeTest }) => {
  const { t } = useTranslation();
  const prams = useParams();
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);
  const { servesDetails, saveServesDetails } = useContext(ServesDetailsContext);
  const loginFormData = JSON.parse(localStorage.getItem('loginFormData')) ;
  const { toggle, saveToggle } = useContext(ToggleContext);

  const [date, setDate] = useState(new Date());
  const [selectDate, setSelectDate] = useState(null);
  const { data: day } = useFetch("/api/v1/days/get-all");
  const { data: setting } = useFetch("/api/v1/settings/get-all");

  const [selectedDayId, setSelectedDayId] = useState(null);
  const [timeValue, setTimeValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const onChange = (date) => {
    setDate(date);
  };

  const handleDayClick = (dayId) => {
    setSelectedDayId(dayId);
  };

  const handleTimeChange = (e) => {
    setTimeValue(e.target.value);
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const { data: serve } = useFetch(
    `/api/v1/services/get-service-details?service_id=${prams.servesId}`
  );
  const grandTotalWithShipping = (+serve?.data?.price + (+setting?.data?.delivery_cost || 0)).toFixed(2);

  console.log("user_id:",loginFormData.id,", serves id:",prams.servesId,", selectedDayId:",selectedDayId,
  ", timeValue:",timeValue,", textValue:",textValue,"grandTotal",grandTotalWithShipping);

  const addData=()=>{
    saveServesDetails({
    user_id:loginFormData.id,
    service_id:prams.servesId,
    selected_day_id:selectedDayId,
    selected_time:timeValue,
    payment_method:"cash",
    notes:textValue,
    grand_total:grandTotalWithShipping,
  })
    saveToggle(true);
    console.log(toggle);
  }


  console.log(servesDetails);

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

          <div className="body_details my-4">
            <Row>
              <div className="description">
                {selectedLanguage === "en" ? (
                  <>
                    <h4>{serve?.data?.name_en}</h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: serve?.data?.description_en,
                      }}
                    />
                  </>
                ) : (
                  <>
                    <h4>{serve?.data?.name_ar}</h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: serve?.data?.description_ar,
                      }}
                    />
                  </>
                )}
              </div>
              <div className="stock mb-3">
                <h4 className="mb-3">
                  {t("details_avilable")} <span>{serve?.data?.quantity}</span>
                </h4>
                <h4>
                  {t("details_sku")} <span>{serve?.data?.sku}</span>
                </h4>
              </div>
              <div className="price_serves stock mb-2 row">
                <Col xs={6} lg={6} md={6} sm={6}>
                  <h4>
                    {t("details_serves_price")}
                    <span> {serve?.data?.price} $</span>
                  </h4>
                </Col>
                <Col xs={6} lg={6} md={6} sm={6}>
                  <h4>
                    {t("details_serves_delivery")}
                    <span> {setting?.data?.delivery_cost} $</span>
                  </h4>
                </Col>
              </div>
              <div className="time_date">
                <div className="delivery_date row mb-4">
                  <Col xs={11} lg={10} md={12} sm={11} className=" date_day">
                    <h5 className="my-2">{t("details_date")}</h5>
                    {day && (
                      <Row className="d-flex justify-content-between mt-4 ">
                        {day.data.map((day, idx) => {
                          return (
                            <Col
                              xs={3}
                              lg={1}
                              md={1}
                              sm={4}
                              className="d-flex day_booking"
                              key={day.id}
                            >
                              <p
                                className={`btn btn_day action ${
                                  selectedDayId === day.id ? "active" : ""
                                }`}
                                onClick={() => handleDayClick(day.id)}
                              >
                                {selectedLanguage === "en"
                                  ? day.name_en
                                  : day.name_ar}
                              </p>
                            </Col>
                          );
                        })}
                      </Row>
                    )}
                  </Col>
                  <div className="col-lg-12 col-md-6">
                    <h5>{t("details_time")}</h5>
                    <div className="time_input">
                      <input
                        type="time"
                        className="input_time"
                        value={timeValue}
                        onChange={handleTimeChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </div>

          <Row>
            <Col xs={12} lg={6} md={6} sm={12}>
              <div className="nots mb-4">
                <FaCircleExclamation className="icon" />
                <p>{t("serves_details_massage")}</p>
              </div>
            </Col>
            <Col xs={12} lg={6} md={6} sm={12}>
              <div className="nots nots_add mb-4">
                <p>{t("details_nots_p")}</p>
                <input
                  type="text"
                  className=" form-control input_nots"
                  placeholder={t("details_nots_placeholder")}
                  value={textValue}
                  onChange={handleTextChange}
                />
              </div>
            </Col>
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
                  <span>{t("total_price")}</span>
                  {serve?.data?.price}
                  {t("price")}
                </button>
              </Col>
              <Col
                xs={6}
                lg={4}
                md={3}
                sm={6}
                className="col-lg-4 col-md-3 mt-3 "
              >
                <Link onClick={addData} to='/location'  className="btn btn-Add next">
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
