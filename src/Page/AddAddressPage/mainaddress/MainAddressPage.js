import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ContextLang } from "../../../App";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MainAddressPage = () => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);

  return (
    <div className="main_address py-4">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={6} md={9} sm={12} className="">
            <Card className="address_card">
              <div className="row d-flex">
                <Col xs={1} lg={1} md={1} sm={1}>
                  <Link to="/">
                    {selectedLanguage === "ar" ? (
                      <FaArrowRight className=" arrow_icon arrow_icon_ar" />
                    ) : (
                      <FaArrowLeft className="arrow_icon arrow_icon_en" />
                    )}
                  </Link>
                </Col>
                <Col xs={10} lg={10} md={10} sm={10} className="">
                  <h4 className="text-center">{t("address_title")}</h4>
                </Col>
              </div>

              <div className="row justify-content-center">
                <div class="col-9 mb-2 p-r">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    name="address"
                    placeholder={t("address_title")}
                  />
                </div>
                <div class="col-8 submit_btn mt-4">
                  <button type="submit" class="btn mb-4 mx-4 sing_in">
                  {t("address_btn")}
                  </button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainAddressPage;
