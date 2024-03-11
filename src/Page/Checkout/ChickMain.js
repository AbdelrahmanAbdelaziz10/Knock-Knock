import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { FaCircleExclamation } from 'react-icons/fa6'
import Swal from 'sweetalert2';
import { ProductDetailsContext, ServesDetailsContext, ToggleContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const ChickMain = () => {
  const { t } = useTranslation();
  const { servesDetails, saveServesDetails } = useContext(ServesDetailsContext);
  const { toggle, saveToggle } = useContext(ToggleContext);
  const { productDetails, saveProductDetails } = useContext(
    ProductDetailsContext
  );
  const servesOrder = JSON.parse(localStorage.getItem("servesOrder"));
  const ProductOrder = JSON.parse(localStorage.getItem("ProductOrder"));
  const loginFormData = JSON.parse(localStorage.getItem("loginFormData"));

  const navigate = useNavigate();
  const [coupone, setCoupone] = useState({
    coupon_name: "",
    service_id: servesOrder.service_id,
  });
  const [productCoupone, setProductCoupone] = useState({
    coupon_name: "",
    product_ids: ProductOrder.product_ids,
    product_quantities: ProductOrder.product_quantities,
  });
  const [payment, setPayment] = useState("cash");
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");
  const handelChange = (e) => {
    if (toggle) {
      setCoupone({
        ...coupone,
        [e.target.name]: e.target.value,
      });
    } else if (!toggle) {
      setProductCoupone({
        ...productCoupone,
        [e.target.name]: e.target.value,
      });
    }

    setErrors({
      ...errors,
      [e.target.name]: "", // Clear error message when input changes
    });
    setResponseMessage(""); // Clear response message when input changes
  };
  const handelVisaPay= async(response)=>{
    if(payment == "visa"){
      window.open(response?.data?.payment_link); // Open payment link in a new tab
      const res =await axios.get(
        toggle
        ? "https://dashboard.knock-knock.ae/api/v1/service_orders/stripe-success"
        : "https://dashboard.knock-knock.ae/api/v1/product_orders/stripe-success",
    );
          console.log(res.data)
          if(res.data.status){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: res.message,
              showConfirmButton: false,
              timer: 1500
            });    
          const afterPayRes =await axios.post(
            toggle
              ? "https://dashboard.knock-knock.ae/api/v1/service_orders/save-order-after-payment"
              : "https://dashboard.knock-knock.ae/api/v1/product_orders/save-order-after-payment",
            toggle ? servesDetails : productDetails
          );
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: afterPayRes.data.message,
            showConfirmButton: false,
            timer: 1500
          });
            window.location.reload();
          navigate("/credits")

         }
    }

  }
  
  const handelCreditPay= async(response)=>{
    if (payment === "credit "){
      // if(toggle){
        if (response.data.status ){
          Swal.fire({
            text: response.data.message,
            icon: "success",
          });
        } else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      // } 
      // else if(!toggle){
      //   if (response.data.status  ){
      //     Swal.fire({
      //       text: response.data.message,
      //       icon: "success",
      //     });
      //   } else {
      //     Swal.fire({
      //       text: response.data.message,
      //       icon: "error",
      //     });
      //   }
      // }
      window.location.reload();
      navigate("/credits")

    }
  }

  const handelPayMentChange = (payway) => {
    setPayment(payway);
    saveServesDetails({
      ...servesDetails,
      payment_method: payway,
    });
    saveProductDetails({
      ...productDetails,
      payment_method: payway,
    });
  };
  console.log(payment)

  const handelAddCoupone = async (e) => {
    try {
      const response = await axios.post(
        toggle
          ? "https://dashboard.knock-knock.ae/api/v1/service_orders/apply-coupon"
          : "https://dashboard.knock-knock.ae/api/v1/product_orders/apply-coupon",
        toggle ? coupone : productCoupone
      );

      if (toggle) {
        saveServesDetails({
          ...servesDetails,
          service_coupon_id:
            response?.data?.information_after_coupon_applied?.service_coupon_id,
          discount_percentage:
            response?.data?.information_after_coupon_applied
              ?.discount_percentage,
          discount_amount:
            response?.data?.information_after_coupon_applied?.discount_amount,
          price_after_discount:
            response?.data?.information_after_coupon_applied
              ?.price_after_discount,
          grand_total:
            response?.data?.information_after_coupon_applied?.grand_total,
        });
      } else {
        saveProductDetails({
          ...productDetails,
          service_coupon_id:
            response?.data?.information_after_coupon_applied?.service_coupon_id,
          discount_percentage:
            response?.data?.information_after_coupon_applied
              ?.discount_percentage,
          discount_amount:
            response?.data?.information_after_coupon_applied?.discount_amount,
          price_after_discount:
            response?.data?.information_after_coupon_applied
              ?.price_after_discount,
          grand_total:
            response?.data?.information_after_coupon_applied?.grand_total,
        });
      }

      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage("Error applying coupon. Please try again.");
      console.error("Error applying coupon", error);
    }
  };
  const handelCashBay=(response)=>{
    if (response.data.status && payment === "cash") {
      Swal.fire({
        text: response.data.message,
        icon: "success",
      });
      window.location.reload();
      navigate("/");
    } else if(!response.data.status && payment === "cash") {
      Swal.fire({
        text: response.data.message,
        icon: "error",
      });
      window.location.reload();
      navigate(`/serves/${toggle ? servesDetails.service_id : productDetails.productId}`);
    } 
  }


  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        toggle
          ? "https://dashboard.knock-knock.ae/api/v1/service_orders/save"
          : "https://dashboard.knock-knock.ae/api/v1/product_orders/save",
        toggle ? servesDetails : productDetails
      );

      console.log("response.data:",response.data.payment_link)
      handelCashBay(response)
      handelVisaPay(response)
      // handelCreditBay(response)
      handelCreditPay(response)


    //   navigate("/credits")
      // window.location.reload();
    } catch (error) {
      Swal.fire({
        text: "Failed to register. Please check your inputs and try again.",
        icon: "error",
      });
      // window.location.reload();
      // navigate(/serves/${toggle ? servesDetails.service_id : productDetails.productId});
    }
  };

  return (
    <div className="main_book py-lg-3 py-md-2 pb-5">
      <Container className="booking_container">
        <Row className="booking_row_main justify-content-center">
          <Col
            xs={12}
            lg={7}
            md={8}
            sm={12}
            className="border main_col py-3 ps-lg-4"
          >
            <div className="">
              <div className="payment">
                <Row className="justify-content-center mb-4">
                  <h4>{t("check_title")}</h4>

                  <Col xs={4} lg={4} md={4} sm={4}>
                    <button
                      className={`btn btn_payment ${payment === "cash" ? "active" : ""}`}
                      onClick={() => handelPayMentChange("cash")}
                    >
                      {t("cash")}
                    </button>
                  </Col>
                  <Col xs={4} lg={3} md={4} sm={4}>
                    <button
                      className={`btn btn_payment ${payment === "visa" ? "active" : ""}`}
                      onClick={() => handelPayMentChange("visa")}
                    >
                      {t("visa_title")}
                    </button>
                  </Col>
                  <Col xs={4} lg={4} md={4} sm={4}>
                    <button
                      className={`btn btn_payment ${payment === "credit " ? "active" : ""}`}
                      onClick={() => handelPayMentChange("credit ")}
                    >
                      {t("credit_title")}
                    </button>
                  </Col>
                </Row>

                <Row className="mx-3">
                  <h4>{t("check_code_title")}</h4>
                  <Col xs={6} lg={8} md={4} sm={6} className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder={t("check_place_code")}
                      name="coupon_name"
                      value={toggle ? coupone.coupon_name : productCoupone.coupon_name}
                      onChange={handelChange}
                    />
                  </Col>
                  <Col xs={6} lg={4} md={6} sm={6}>
                    <button
                      onClick={handelAddCoupone}
                      className="btn btn_coupon"
                    >
                      Add Code
                    </button>
                  </Col>
                </Row>
                {responseMessage && (
                  <Row className="mt-2">
                    <Col>
                      <Alert variant="danger">{responseMessage}</Alert>
                    </Col>
                  </Row>
                )}
                <Row>
                  <div className="nots my-4">
                    <FaCircleExclamation className="icon" />
                    <p>{t("add_card_massage")}</p>
                  </div>
                </Row>
              </div>
            </div>
            <div className="row">
              <button onClick={handelSubmit} className="btn btn_next">
                Complete
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ChickMain;