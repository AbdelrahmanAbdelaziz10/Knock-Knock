import React, { useContext, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import PaginationCom from "../../../Component/Common Component/Pagination/Pagination";
import { ContextLang, OrderDataContext } from "../../../App";
import Swal from "sweetalert2";

const MainOrder = ({ getPageServes }) => {
  const { t } = useTranslation();
  const { orderData, saveOrderData } = useContext(OrderDataContext);
  const { selectedLanguage } = useContext(ContextLang);
  const loginFormData = JSON.parse(localStorage.getItem("loginFormData"));
  const [order, setOrder] = useState({
    user_id: loginFormData.id,
    order_status: "",
  });
  const items = [
    { status: 0, label: "to_order_cancelled" },
    { status: 1, label: "order_processing" },
    { status: 2, label: "order_cancelled" },
    { status: 3, label: "order_finish" },
  ];
  const [activeButton, setActiveButton] = useState(null);
  const [cancelOrder, setCansellOrder] = useState();
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const CancellOrder = async (id) => {
    Swal.fire({
      title: t("sweetalert_massage"),
      text: t("sweetalert_massage2"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("sweetalert_massage3")
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post(
            "https://dashboard.knock-knock.ae/api/v1/service_orders/cancel-orders",
            {
              order_id: id,
            }
          );
          setCansellOrder(response);
          Swal.fire({
            title: t("sweetalert_massage4"),
            text: t("sweetalert_massage5"),
            icon: "success"
          });
        } catch (error) {
          console.error("Error processing order", error);
        }
      }
    });
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
                className={
                  activeButton === 1 ? "active btn btn_order" : "btn btn_order"
                }
                onClick={() => {
                  handleOrderPanding();
                  handleButtonClick(1);
                }}
              >
                {t("order_pending")}
              </button>
            </Col>
            <Col xs={5} lg={2} md={3} sm={5} className="">
              <button
                className={
                  activeButton === 2 ? "active btn btn_order" : "btn btn_order"
                }
                onClick={() => {
                  handleOrderprocessing();
                  handleButtonClick(2);
                }}
              >
                {t("order_processing")}
              </button>
            </Col>
            <Col xs={5} lg={2} md={3} sm={5} className="">
              <button
                className={
                  activeButton === 3 ? "active btn btn_order" : "btn btn_order"
                }
                onClick={() => {
                  handleOrderCancelled();
                  handleButtonClick(3);
                }}
              >
                {t("order_cancelled")}
              </button>
            </Col>
            <Col xs={5} lg={2} md={3} sm={5} className="">
              <button
                className={
                  activeButton === 4 ? "active btn btn_order" : "btn btn_order"
                }
                onClick={() => {
                  handleOrderFinish();
                  handleButtonClick(4);
                }}
              >
                {t("order_finish")}
              </button>
            </Col>
          </Col>
        </Row>
        <Row className="">
          {orderData?.data &&
            orderData?.data.map((order, index) => (
              <Col key={index} xs={12} lg={6} md={11} sm={12} className="">
                {/* <Link to="/booking"> */}
                <Card className="order_card">
                  <div className="row order_title">
                    <Col xs={9} lg={8} md={8} sm={9} className="">
                      <h4>
                        {t("order_number")}
                        {order.order_number}
                      </h4>
                    </Col>
                    <Col xs={3} lg={4} md={4} sm={3} className="">
                      {order.status === 0 ? (
                        <button
                          onClick={() => CancellOrder(order.id)}
                          className={`btn btn_pending`}
                        >
                          {t("to_order_cancelled")}
                        </button>
                      ) : (
                        <button className={`btn btn_pending`}>
                          {t(
                            items.find((item) => item.status === order.status)
                              ?.label || ""
                          )}
                        </button>
                      )}
                    </Col>
                  </div>
                  <div className="row date justify-content-end">
                    <Col xs={4} lg={3} md={4} sm={4}>
                      <div className="serv_img">
                        <img
                          src={`https://dashboard.knock-knock.ae/${order.service.image}`}
                          alt=""
                        />
                      </div>
                    </Col>
                    <Col xs={8} lg={9} md={8} sm={8}>
                      <div className="serv_text ">
                        {selectedLanguage === "en" ? (
                          <>
                            <h6>{order.service.name_en}</h6>
                            <p dangerouslySetInnerHTML={{__html:order.service.description_en}}/>
                          </>
                        ) : (
                          <>
                            <h6>{order.service.name_ar}</h6>
                            <p dangerouslySetInnerHTML={{__html:order.service.description_ar}}/>
                          </>
                        )}
                        <Row>
                          <Col xs={5} lg={6} md={6} sm={5}>
                            {/* <span>
                  {t("price")} {order.service.price}
                </span> */}
                          </Col>
                          {/* <Col xs={7} lg={6} md={6} sm={7} className="d-flex">
                <button className=" btn btn_decrease">
                  <IoRemoveOutline className="add_icon" />
                </button>
                <span className="">1</span>
                <button className=" btn btn_decrease">
                  <IoAddOutline className="add_icon" />
                </button>
              </Col> */}
                        </Row>
                      </div>
                    </Col>
                  </div>
                  <Row>
                    <Col
                      xs={11}
                      lg={7}
                      md={6}
                      sm={11}
                      className="row pending_address"
                    >
                      <h6 className="col-lg-4 col-md-4 serves_names">
                        {t("booking_address")}
                      </h6>
                      {/* <p className="col-lg-7 col-md-12"> {t("booking_address_add")}</p> */}
                      <p className="col-lg-8 col-md-8 serves_name">
                        {order.address}-{order.country}
                      </p>
                    </Col>

                    <Col
                      xs={11}
                      lg={5}
                      md={6}
                      sm={11}
                      className="row d-flex pending_phone"
                    >
                      <h6 className="col-lg-5 col-md-4 serves_names">{t("booking_phone")}</h6>
                      <p className="serves_name col-lg-7 col-md-8">
                        {loginFormData.phone}
                      </p>
                    </Col>
                  </Row>
                  <div className="row order_details">
                    <Col xs={4} lg={4} md={4} sm={4} className="">
                      <p className="">
                        {t("order_total")}:{" "}
                        <span>
                          {order.grand_total}
                          {t("price")}
                        </span>
                      </p>
                    </Col>
                    <Col xs={4} lg={5} md={4} sm={4} className="">
                      <p className="">
                        {t("order_amount")}: <span>{order.amount}</span>
                      </p>
                    </Col>
                    <Col xs={4} lg={3} md={4} sm={4} className="">
                      <p className="">{order.order_date}</p>
                    </Col>
                  </div>
                </Card>
                {/* </Link> */}
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
