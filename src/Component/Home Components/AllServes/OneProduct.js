import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../AllServes/AllServes.css";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  ContextLang,
  NumberProductContext,
  ToggleLoginContext,
} from "../../../App";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useShoppingCart } from "../../../Context/ShopingCardContext";
import { CartCountContext } from "../../../Context/CartCountContext";
import { MdAddShoppingCart } from "react-icons/md";

const OneProduct = ({ image, name_ar, prise, discount, link, name_en, id, productObj }) => {
  const { t } = useTranslation();
  const { selectedLanguage } = useContext(ContextLang);
  const native=useNavigate()
  const { saveToggleLogin } = useContext(ToggleLoginContext);
  const toggleLogin = JSON.parse(localStorage.getItem("toggleLogin"));
  const {
    cartItems,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id)

  const [increase, setIncrease] = useState(0);

  const { count, setCount } = useContext(CartCountContext)

  const navigate = useNavigate();
  const handelLogInPage = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You Must Have account First To use this serves",
      confirmButtonText: "Go to Login",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };
  const increseNumber = () => {
    setIncrease((prevIncrease) => prevIncrease + 1);
  };

  const decreseNumber = () => {
    if (increase > 0) setIncrease((prevIncrease) => prevIncrease - 1);
  };

  const addToCart = () => {
    const oldCartItems = JSON.parse(localStorage.getItem('all-cart-items'));
    let obj = { ...productObj, quantity: 1 }
    if (oldCartItems) {
      let isAddedBefore = oldCartItems?.find((item) => item.id === productObj.id);
      if (isAddedBefore) {
        Swal.fire({
          title: "This Product is already Added to Cart",
        });
        // alert('This Product is already Added to Cart');
        return;
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
      localStorage.setItem('all-cart-items', JSON.stringify([...oldCartItems, obj]))
      setCount(count + 1)
    } else {
      localStorage.setItem('all-cart-items', JSON.stringify([obj]))
      setCount(count + 1)
    }
  }

  return (
    <>
      {toggleLogin === true ? (
        <div className="card one_Product">
          <div className="card_image_product">
            <img src={image} alt="" />
          </div>
          <div className="card_text_product">
            {/* <Link to={link}> */}
              {selectedLanguage === "en" ? <p>{name_en}</p> : <p>{name_ar}</p>}
            {/* </Link> */}
            <h6>
              {prise} {t("price")}
              <span>{discount} %</span>
            </h6>
            {/* <FaCartShopping /> */}

            {/* <Link to={link} className=" btn-deteils">
              {t("all_product_product_btn")}
            </Link> */}
            {/* <button
              // to={link}
              className="btn btn-deteils"
              onClick={() => saveProductNumber(productNumber + 1)}
            >
              {t("all_product_addtocar")}
            </button> */}
            {/* <FaCartShopping
              className="buy_product"
              onClick={() => saveProductNumber(productNumber + 1)}
            /> */}

            {/* <Link to={link} className=" btn-deteils">
            <FaCartShopping />
            </Link> */}

            <div className="row">
              {quantity === 0 ? (
                <>
                <Col xs={10} lg={9} md={7} sm={10}>
                <button
                onClick={()=>native(link)}
                  // to={link}
                  className="btn btn-deteils"
                  // onClick={addToCart}
                >
                
                  {t("all_product_product_btn")}
                </button>
                </Col>
                <Col xs={2} lg={2} md={5} sm={2}>
                <MdAddShoppingCart onClick={addToCart}  className="shopIcon"/>

                </Col>

                </>

              ) : (
                <div className="row justify-content-between">
                  <Col
                    xs={6}
                    lg={3}
                    md={4}
                    sm={6}
                    className=" d-flex col-lg-3 col-md-4"
                  >
                    <button className="btn decincrease" onClick={() => decreaseCartQuantity(id)}>
                      <IoRemoveOutline className="remove" />
                    </button>
                    <span>{quantity}</span>
                    <button className="btn increase" onClick={() => increaseCartQuantity(id)}>
                      <IoAddOutline className="add" />
                    </button>
                  </Col>
                  <Col
                    xs={6}
                    lg={3}
                    md={4}
                    sm={6}
                    className=" col-lg-3 col-md-4"
                  >
                    <MdDelete className="delete" onClick={() => removeFromCart(id)} />
                  </Col>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          className="card log_out_card one_Product"
          onClick={handelLogInPage}
        >
          <div className="card_image_product">
            <img src={image} alt="" />
          </div>
          <div className="card_text_product">
            {selectedLanguage === "en" ? <p>{name_en}</p> : <p>{name_ar}</p>}
            <h6>
              {prise} {t("price")}
              <span>{discount} %</span>
            </h6>
          </div>
        </div>
      )}
    </>
  );
};

export default OneProduct;
