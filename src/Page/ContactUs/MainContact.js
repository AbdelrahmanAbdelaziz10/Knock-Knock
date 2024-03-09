import React, { useContext, useEffect, useState } from "react";
import "./contact.css";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { ContextLang } from "../../App";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import axios from "axios";

const MainContact = () => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);
  const loginFormData = JSON.parse(localStorage.getItem("loginFormData"));
  const [massages, setMassage] = useState({
    user_id: loginFormData.id,
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");

  const handelChange = (e) => {
    setMassage({
      ...massages,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "", // Clear error message when input changes
    });
    setResponseMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://dashboard.knock-knock.ae/api/v1/contacts/send",
        massages
      );
      setMassage({
        user_id: loginFormData.id,
        message: "",
      })
      setResponseMessage(response.data.message);
    } catch (error) {
      console.log("error", error);
    }
  };
  

  return (
    <div className="contact_main">
      <Container>
        <Row className="justify-content-center">
          <h2 className="text-center mb-3">{t("contact")}</h2>
          {responseMessage && (
                <Alert variant="success" className="contact_alert text-center">{responseMessage}</Alert>
              )}
          <Col xs={12} lg={6} md={7} sm={12} className="">
            <form className="form_contact border" onSubmit={handleSubmit}>
              {/* <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                {t("contact_email")}
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={t("contact_email_placeholder")}
                />
              </div> */}
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  {t("contact_massage")}
                </label>
                <textarea
                  className="massage"
                  name="message"
                  placeholder={t("contact_email_placeholder")}
                  onChange={handelChange}
                />
              </div>

              <button type="submit" className="btn btn_submit">
                {t("contact_btn")}
              </button>
            </form>
          </Col>
          <Col xs={12} lg={6} md={5} sm={12} className="">
            <Card className="contact_card">
              <p>
                <MdOutlineEmail className="contact_icon" />{" "}
                <span>{t("Contact_email")}</span>
              </p>
              <p>
                {selectedLanguage === "en" ? (
                  <FaPhoneSquareAlt className="contact_icon" />
                ) : (
                  <FaPhoneSquare className="contact_icon" />
                )}{" "}
                <span>{t("Contact_phone")}</span>
              </p>
              <p>
                <FaLocationDot className="contact_icon" />{" "}
                <span>{t("Contact_address")} </span>
              </p>
              <Row className="justify-content-center">
                <Col xs={3} lg={2} md={2} sm={3} className="">
                  <FaFacebook className=" soicalmedia_icon facebook" />
                </Col>
                <Col xs={3} lg={2} md={2} sm={3} className="">
                  <FaSquareXTwitter className=" soicalmedia_icon x" />
                </Col>
                <Col xs={3} lg={2} md={2} sm={3} className="">
                  <FaInstagram className=" soicalmedia_icon instagram" />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainContact;
