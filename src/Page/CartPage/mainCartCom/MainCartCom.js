import React, { useContext, useEffect, useState } from "react";
import "../cart.css";
import { Col, Container, Row } from "react-bootstrap";
import { ServesCard } from "../../Booking/Main Booking/BookingOne/ServesCard";
import BookHead from "../../Booking/Main Booking/Book Head/BookHead";
import ProductImage from "../../../images/product1.svg"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetch from "../../../hooks/useFetch";
import { CartCountContext } from "../../../Context/CartCountContext";
import { use } from "i18next";
export const MainCartCom = () => {
  const { t, i18n } = useTranslation();
  const { data: setting } = useFetch("/api/v1/settings/get-all")
  const [cartData, setCartData] = useState(null)
  const { count, setCount } = useContext(CartCountContext);
  const [totalQuantity, setTotalQuantity] = useState(0)
  const allCartItems = JSON.parse(localStorage.getItem("all-cart-items"));
// console.log(allCartItems.map(item => item.id))
// console.log(allCartItems.map(item => item.quantity))
console.log(count)
  const recalculateTotalPrice = () => {
    let data = JSON.parse(localStorage.getItem('all-cart-items'));
    if (data) {
      let sum = data?.reduce((total, currentItem) => {
        return total + (currentItem.price * currentItem.quantity)
      }, 0)
      setTotalQuantity(sum)
    }
  }

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('all-cart-items'))
    if (data) {
      setCartData([...data])
      let sum = data?.reduce((total, currentItem) => {
        return total + (currentItem.price * currentItem.quantity)
      }, 0)
      setTotalQuantity(sum)
    }
  }, [])
  const removeItem = (id) => {
    if (cartData) {
      
      let newItems = cartData?.filter(item => item.id !== id)
      setCartData([...newItems]);
      localStorage.setItem('all-cart-items', JSON.stringify(newItems))
      setCount(count - 1)
    recalculateTotalPrice()

    }
  }
  return (
    <div className="main_book main_card shopingCard py-lg-3 py-md-2 pb-5">
      <Container className=" booking_container">
        <Row className="booking_row_main ">
          <h2>{t("cart_title")}</h2>
          <Col xs={12} lg={7} md={7} sm={12} className="border main_col py-2">
            <div className="serves_col shopingCard">
              { count !==0 ? (cartData?.map((product) => (
                <>
                <ServesCard
                  id={product.id}
                  key={product.id}
                  img={`https://dashboard.knock-knock.ae/${product.image}`}
                  title_ar={product.name_ar}
                  title_en={product.name_en}
                  description_ar={product.description_ar}
                  description_en={product.description_en}
                  price={product.price}
                  removeItem={removeItem}
                  recalculateTotalPrice={recalculateTotalPrice}
                  initialQuantity={product.quantity}
                />

            </>
              )
              )):(<h2 className="text-center my-5">{t("card_shop_massage")}</h2>)}
              { count !== 0 ? (              <div className="row">
              <Link to="/location" className="btn btn_next">
                {t("cart_btn")}
              </Link>
            </div>):null}

            </div>

          </Col>
          <Col xs={12} lg={5} md={4} sm={12} className="row ">
            {/* <Col
              xs={12}
              lg={12}
              md={12}
              sm={12}
              className="border booking_details"
            >
              <h4>
              {t("booking_title")}
              </h4>
              <div className="row">
                <h6 className="col-lg-5 col-md-12">
                {t("booking_address")}
                </h6>
                <p className="col-lg-7 col-md-12">
                {t("booking_address_add")}

                </p>
              </div>
              <div className="row">
                <h6 className="col-lg-5">
                {t("booking_serves")}
                
                </h6>
                <p className="col-lg-7">
                {t("cart_h")}

                </p>
              </div>
              <div className="row d-flex">
                <h6 className="col-lg-5">
                {t("booking_phone")}
                </h6>
                <p className="serves_name col-lg-7">+20115269845</p>
              </div>
            </Col> */}
            <Col
              xs={12}
              lg={12}
              md={12}
              sm={12}
              className="border booking_details total"
            >
              <h4>
                {t("payment_title")}
              </h4>
              <div className="row">
                <Col xs={7} lg={7} md={6} sm={7}>
                  <h6 className=" ">{t("payment_total")}</h6>
                </Col>
                <Col xs={5} lg={5} md={6} sm={5}>
                  <p className=""> {totalQuantity} {t("price")}</p>
                </Col>
              </div>
              <div className="row">
                <Col xs={7} lg={7} md={6} sm={7}>
                  <h6 className=" ">
                    {t("payment_delivery")}
                  </h6>
                </Col>
                <Col xs={5} lg={5} md={6} sm={5}>
                  <p className="">{setting?.data?.delivery_cost}  {t("price")} </p>
                </Col>
              </div>
              <div className="row">
                <Col xs={7} lg={7} md={6} sm={7}>
                  <h6 className=" ">
                    {t("payment_taps")}
                  </h6>
                </Col>
                <Col xs={5} lg={5} md={6} sm={5}>
                  <p className="">{setting?.data?.shipping_cost} {t("price")}</p>
                </Col>
              </div>
              <div className="row price_total">
                <Col xs={7} lg={7} md={6} sm={7}>
                  <h6 className=" ">{t("order_total")}</h6>
                </Col>
                <Col xs={5} lg={5} md={6} sm={5}>
                  <p className="">{Number(setting?.data?.shipping_cost) + Number(setting?.data?.delivery_cost) + totalQuantity} {t("price")}</p>
                </Col>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};