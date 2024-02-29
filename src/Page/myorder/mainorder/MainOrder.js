import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { i18n } from 'i18next';
import { useTranslation } from "react-i18next";

const MainOrder = () => {
  const {t,i18n}=useTranslation()
  return (
    <div className="main_order py-4">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col
            xs={12}
            lg={10}
            md={12}
            sm={12}
            className="row justify-content-center"
          >
            <Col xs={5} lg={2} md={3} sm={5} className="">
              <button className="btn btn_order active">{t("order_pending")}</button>
            </Col>
            <Col xs={5} lg={2} md={3} sm={5} className="">
              <button className="btn btn_order">{t("order_processing")}</button>
            </Col>
            <Col xs={5} lg={2} md={3} sm={5} className="">
              <button className="btn btn_order">{t("order_cancelled")}</button>
            </Col>
            <Col xs={4} lg={2} md={3} sm={5} className="">
              <button className="btn btn_order">{t("order_finish")}</button>
            </Col>
          </Col>
        </Row>
        <Row className="">
        <Col xs={12} lg={6} md={6} sm={12} className="">
            <Link to="/booking">
              <Card className="order_card">
                <div className="row order_title">
                  <Col xs={9} lg={9} md={8} sm={9} className="">
                    <h4>{t("order_number")}#hjksdnasf</h4>
                  </Col>
                  <Col xs={3} lg={3} md={4} sm={3} className="">
                    <p className="btn btn_pending"> {t("order_pending")}</p>
                  </Col>
                </div>
                <div className="row order_details">
                  <Col xs={8} lg={9} md={7} sm={8} className="">
                    <p className="">
                      {t("order_total")}: <span>20 {t("price")}</span>
                    </p>
                  </Col>
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className="">
                    {t("order_amount")}: <span>2</span>
                    </p>
                  </Col>
                </div>
                <div className="row date justify-content-end">
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className=""> 20-10-2023</p>
                  </Col>
                </div>
              </Card>
            </Link>
          </Col>
          <Col xs={12} lg={6} md={6} sm={12} className="">
            <Link to="/booking">
              <Card className="order_card">
                <div className="row order_title">
                  <Col xs={9} lg={9} md={8} sm={9} className="">
                    <h4>{t("order_number")}#hjksdnasf</h4>
                  </Col>
                  <Col xs={3} lg={3} md={4} sm={3} className="">
                    <p className="btn btn_pending"> {t("order_pending")}</p>
                  </Col>
                </div>
                <div className="row order_details">
                  <Col xs={8} lg={9} md={7} sm={8} className="">
                    <p className="">
                      {t("order_total")}: <span>20 {t("price")}</span>
                    </p>
                  </Col>
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className="">
                    {t("order_amount")}: <span>2</span>
                    </p>
                  </Col>
                </div>
                <div className="row date justify-content-end">
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className=""> 20-10-2023</p>
                  </Col>
                </div>
              </Card>
            </Link>
          </Col>
          <Col xs={12} lg={6} md={6} sm={12} className="">
            <Link to="/booking">
              <Card className="order_card">
                <div className="row order_title">
                  <Col xs={9} lg={9} md={8} sm={9} className="">
                    <h4>{t("order_number")}#hjksdnasf</h4>
                  </Col>
                  <Col xs={3} lg={3} md={4} sm={3} className="">
                    <p className="btn btn_pending"> {t("order_pending")}</p>
                  </Col>
                </div>
                <div className="row order_details">
                  <Col xs={8} lg={9} md={7} sm={8} className="">
                    <p className="">
                      {t("order_total")}: <span>20 {t("price")}</span>
                    </p>
                  </Col>
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className="">
                    {t("order_amount")}: <span>2</span>
                    </p>
                  </Col>
                </div>
                <div className="row date justify-content-end">
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className=""> 20-10-2023</p>
                  </Col>
                </div>
              </Card>
            </Link>
          </Col>
          <Col xs={12} lg={6} md={6} sm={12} className="">
            <Link to="/booking">
              <Card className="order_card">
                <div className="row order_title">
                  <Col xs={9} lg={9} md={8} sm={9} className="">
                    <h4>{t("order_number")}#hjksdnasf</h4>
                  </Col>
                  <Col xs={3} lg={3} md={4} sm={3} className="">
                    <p className="btn btn_pending"> {t("order_pending")}</p>
                  </Col>
                </div>
                <div className="row order_details">
                  <Col xs={8} lg={9} md={7} sm={8} className="">
                    <p className="">
                      {t("order_total")}: <span>20 {t("price")}</span>
                    </p>
                  </Col>
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className="">
                    {t("order_amount")}: <span>2</span>
                    </p>
                  </Col>
                </div>
                <div className="row date justify-content-end">
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className=""> 20-10-2023</p>
                  </Col>
                </div>
              </Card>
            </Link>
          </Col>
          <Col xs={12} lg={6} md={6} sm={12} className="">
            <Link to="/booking">
              <Card className="order_card">
                <div className="row order_title">
                  <Col xs={9} lg={9} md={8} sm={9} className="">
                    <h4>{t("order_number")}#hjksdnasf</h4>
                  </Col>
                  <Col xs={3} lg={3} md={4} sm={3} className="">
                    <p className="btn btn_pending"> {t("order_pending")}</p>
                  </Col>
                </div>
                <div className="row order_details">
                  <Col xs={8} lg={9} md={7} sm={8} className="">
                    <p className="">
                      {t("order_total")}: <span>20 {t("price")}</span>
                    </p>
                  </Col>
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className="">
                    {t("order_amount")}: <span>2</span>
                    </p>
                  </Col>
                </div>
                <div className="row date justify-content-end">
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className=""> 20-10-2023</p>
                  </Col>
                </div>
              </Card>
            </Link>
          </Col>
          <Col xs={12} lg={6} md={6} sm={12} className="">
            <Link to="/booking">
              <Card className="order_card">
                <div className="row order_title">
                  <Col xs={9} lg={9} md={8} sm={9} className="">
                    <h4>{t("order_number")}#hjksdnasf</h4>
                  </Col>
                  <Col xs={3} lg={3} md={4} sm={3} className="">
                    <p className="btn btn_pending"> {t("order_pending")}</p>
                  </Col>
                </div>
                <div className="row order_details">
                  <Col xs={8} lg={9} md={7} sm={8} className="">
                    <p className="">
                      {t("order_total")}: <span>20 {t("price")}</span>
                    </p>
                  </Col>
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className="">
                    {t("order_amount")}: <span>2</span>
                    </p>
                  </Col>
                </div>
                <div className="row date justify-content-end">
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className=""> 20-10-2023</p>
                  </Col>
                </div>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainOrder;
