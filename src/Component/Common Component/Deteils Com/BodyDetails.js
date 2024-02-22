import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import CustomInput from "./CustomInput";
import "./BodyDeteils.css";
import { IoAddOutline } from "react-icons/io5";
import { IoRemoveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useTranslation } from "react-i18next";
import { ContextLang } from "../../../App";

const BodyDetails = () => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);
  const [date, setDate] = useState(new Date());
  const [selectDate, setSelectDate] = useState(null);
  const { data: day } = useFetch("/api/v1/days/get-all");
  console.log(day);

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="body_details my-4">
      <Row>
        <div className="description">
          <h4>
            {t("details_head")}
          </h4>
          <p>
          {t("details_p")}
          </p>
        </div>
        <div className="details">
          <h4>
          {t("details_details")}
          </h4>
          <ul>
            <li>
            {t("details_details1")}
            </li>
            <li>
            {t("details_details2")}
            </li>
            <li>
            {t("details_details3")}
            </li>
            <li> 
            {t("details_details4")}
</li>
          </ul>
        </div>
        <div className="stock mb-2">
          <h4>
            {t("details_avilable")} <span>In Stock</span>
          </h4>
          <h4>
            {t("details_sku")} <span>Knock Knock56235</span>
          </h4>
        </div>
        <div className="price_serves stock mb-2">
          <h4>
          {t("details_serves_price")}<span>100$ </span>
          </h4>
        </div>
        <div className="time_date">
          {/* <h5 className="mb-3">Select date and time of delivery</h5> */}
          <div className="delivery_date row mb-4">
            <Col xs={11} lg={10} md={12} sm={11} className=" date_day">
              <h5 className="my-2">{t("details_date")} 
                {/* Chose best Delivery <span>Date</span>{" "} */}
              </h5>
              {/* <label><Datepicker selected={selectDate} onChange={date=>setSelectDate(date)}  customInput={<CustomInput />}/></label>  */}
              {day && (
                <Row className="d-flex justify-content-between mt-4 ">
                  {day.data.map((day, idx) => {
                    return (
                      <Col xs={3} lg={1} md={1} sm={4} className="d-flex day_booking" key={day.id}>
                        {selectedLanguage === "en" ? (
                          <p className="btn btn_day action">{day.name_en}</p>
                        ) : (
                          <p className="btn btn_day action">{day.name_ar}</p>
                        )}
                      </Col>
                    );
                  })}
                </Row>
              )}
            </Col>
            <div className="col-lg-12 col-md-6">
              <h5>
                {t("details_time")}
              </h5>
              <div className="time_input">
                <input type="time" className="input_time" />
              </div>
            </div>
          </div>
          {/* <div className="col-lg-12 row justify-content-center add_btn ">
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
                    Total Price: 200 AED
                    </button>
                    </Col>
                    <Col xs={12} lg={4} md={3} sm={12} className="col-lg-4 col-md-3 mt-3 ">
                    <Link to="" className="btn btn-Add">Add To Card</Link>
                    </Col>
                </div>
 */}
        </div>
      </Row>
    </div>
  );
};

export default BodyDetails;
