import React, { useContext } from "react";
import "./contact.css";
import { Card, Col, Container, Row } from "react-bootstrap";
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

const MainContact = () => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);

  return (
    <div className="contact_main">
      <Container>
        <Row className="justify-content-center">
          <h2 className="text-center mb-5">{t("contact")}</h2>
          <Col xs={12} lg={6} md={7} sm={12} className="">
            <form className="form_contact border">
              <div class="mb-3">
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
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  {t("contact_massage")}
                </label>
                <textarea className="massage" placeholder={t("contact_email_placeholder")} />
              </div>

              <button type="submit" class="btn btn_submit">
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
