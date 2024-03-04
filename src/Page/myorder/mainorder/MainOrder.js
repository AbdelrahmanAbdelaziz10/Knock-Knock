import React, { useContext, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import PaginationCom from "../../../Component/Common Component/Pagination/Pagination";
import { OrderDataContext } from "../../../App";

const MainOrder = ({ getPageServes }) => {
  const { t } = useTranslation();
  const { orderData, saveOrderData } = useContext(OrderDataContext);
  const loginFormData = JSON.parse(localStorage.getItem("loginFormData"));
  const [order, setOrder] = useState({
    user_id: loginFormData.id,
    order_status: "",
  });
  const items = [
    { status: 0, label: "order_pending" },
    { status: 1, label: "order_processing" },
    { status: 2, label: "order_cancelled" },
    { status: 3, label: "order_finish" },
  ];
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleOrderPanding = async () => {
    setOrder({ ...order, order_status: "0" });

    try {
          const response = await axios.post(
        "https://dashboard.knock-knock.ae/api/v1/service_orders/my-orders",
        {
          user_id: loginFormData.id,
          order_status: 0,
        }
      );
      saveOrderData(response?.data?.data);
      // console.log(orderData);
    } catch (error) {
      console.error("Error processing order", error);
    }
  };
  const handleOrderprocessing = async () => {
    setOrder({ ...order, order_status: "1" });
    try {
          const response = await axios.post(
        "https://dashboard.knock-knock.ae/api/v1/service_orders/my-orders",
        {
          user_id: loginFormData.id,
          order_status: 1,
        }
      );
      saveOrderData(response?.data?.data);
      console.log(orderData);
    } catch (error) {
      console.error("Error processing order", error);
    }
  };
  const handleOrderCancelled = async () => {
    setOrder({ ...order, order_status: "2" });
    try {
          const response = await axios.post(
        "https://dashboard.knock-knock.ae/api/v1/service_orders/my-orders",
        {
          user_id: loginFormData.id,
          order_status: 2,
        }
      );
      saveOrderData(response?.data?.data);
      console.log(orderData);
    } catch (error) {
      console.error("Error processing order", error);
    }
  };
  const handleOrderFinish = async () => {
    setOrder({ ...order, order_status: "3" });
    try {
      const response = await axios.post(
        "https://dashboard.knock-knock.ae/api/v1/service_orders/my-orders",
        {
          user_id: loginFormData.id,
          order_status: 3,
        }
      );
      saveOrderData(response?.data?.data);
      console.log(orderData);
    } catch (error) {
      console.error("Error processing order", error);
    }
  };
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
                <button
                  className={activeButton === 1 ? "active btn btn_order" : "btn btn_order"}
                  onClick={()=>{handleOrderPanding();handleButtonClick(1)}}
                >
                  {t("order_pending")}
                </button>
              </Col>
              <Col xs={5} lg={2} md={3} sm={5} className="">
                <button
                  className={activeButton === 2 ? "active btn btn_order" : "btn btn_order"}
                  onClick={()=>{handleOrderprocessing();handleButtonClick(2)}}

                >
                  {t("order_processing")}
                </button>
              </Col>
              <Col xs={5} lg={2} md={3} sm={5} className="">
                <button
                  className={activeButton === 3 ? "active btn btn_order" : "btn btn_order"}
                  onClick={()=>{handleOrderCancelled();handleButtonClick(3)}}

                >
                  {t("order_cancelled")}
                </button>
              </Col>
              <Col xs={5} lg={2} md={3} sm={5} className="">
                <button
                  className={activeButton === 4 ? "active btn btn_order" : "btn btn_order"}
                  onClick={()=>{handleOrderFinish();handleButtonClick(4)}}

                >
                  {t("order_finish")}
                </button>
              </Col>
          </Col>
        </Row>
        <Row className="">
          {orderData?.data &&
            orderData?.data.map((order, index) => (
              <Col key={index} xs={12} lg={6} md={6} sm={12} className="">
                <Link to="/booking">
                  <Card className="order_card">
                    <div className="row order_title">
                      <Col xs={9} lg={9} md={8} sm={9} className="">
                        <h4>
                          {t("order_number")}
                          {order.order_number}
                        </h4>
                      </Col>
                      <Col xs={3} lg={3} md={4} sm={3} className="">
                        <p className={`btn btn_pending`}>
                          {t(
                            items.find(
                              (item) => item.status === order.status
                            )?.label || ""
                          )}
                        </p>
                      </Col>
                    </div>
                    <div className="row order_details">
                      <Col xs={8} lg={9} md={7} sm={8} className="">
                        <p className="">
                          {t("order_total")}:{" "}
                          <span>
                            {order.grand_total}
                            {t("price")}
                          </span>
                        </p>
                      </Col>
                      <Col xs={4} lg={3} md={5} sm={4} className="">
                        <p className="">
                          {t("order_amount")}: <span>{order.amount}</span>
                        </p>
                      </Col>
                    </div>
                    <div className="row date justify-content-end">
                      <Col xs={4} lg={3} md={5} sm={4} className="">
                        <p className="">{order.order_date}</p>
                      </Col>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
        {/* <Row>
            <Col>
            <PaginationCom total={servies?.data?.total} getPage={getPageServes} />
            </Col>
                      </Row> */}
      </Container>
    </div>
  );
};

export default MainOrder;
