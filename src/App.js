import "./App.css";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Homepage from "./Page/Homepage";
import Login from "./Page/Login/Login";
import { createContext, useEffect, useState } from "react";
import ltl from "./style/ltr.css";
import rtl from "./style/rtl.css";
import Verify from "./Page/Verify/Verify";
import AllProduct from "./Page/AllProduct";
import Serves from "./Page/PrivateServes";
import ProductDeteils from "./Page/ProductDeteils";
import { ServesDetiels } from "./Page/ServesDetiels";
import BookPage from "./Page/Booking/BookPage";
import MainBook2 from "./Page/Booking/Main Booking/Booking two/MainBook2";
import PhoneNumber from "./Page/phonenumber/PhoneNumber";
import "./style/mediaquery.css";
import { CheckOutpage } from "./Page/Checkout/CheckOutpage";
import Location from "./Page/Location/Location";
import ProfilePage from "./Page/Profile/ProfilePage";
import AddAddressPage from "./Page/AddAddressPage/AddAddressPage";
import CreditsPage from "./Page/Credits/CreditsPage";
import SendGiftPage from "./Page/Send Gift/SendGiftPage";
import BuyCredit from "./Page/Buy Credit/BuyCreditPage";
import BuyCreditPage from "./Page/Buy Credit/BuyCreditPage";
import PolicyPage from "./Page/Privacy Policy/PolicyPage";
import { ContactUs } from "./Page/ContactUs/ContactUs";
import MyOrderpage from "./Page/myorder/MyOrderpage";
import AddCard from "./Page/Add card/AddCard";
import CreditCardPage from "./Page/CreditCard/CreditCardPage";
import CartPage from "./Page/CartPage/CartPage";
import axios from "axios";
import useFetch from "./hooks/useFetch";
import HomePageLogin from "./Page/HomePageLogin";
import ForgetPassword from "./Page/ForgetPassword/ForgetPassword";
import SingUp from "./Page/SingUp/SingUp";
import ChangePassword from "./Page/RestetPassword/ChangePassword";
import RestPassword from "./Page/Verify/ResetPassword";
import CheckOut from "./Page/Checkoutpage/CheckOut";
import BookingProductPage from './Page/Booking/BookingProductPage';
export const ContextLang = createContext();
export const FormDataContext = createContext();
export const LoginFormDataContext = createContext();
export const LocationContext= createContext();
export const ServesDetailsContext= createContext();
export const OrderDataContext= createContext();
export const ProductOrderDataContext= createContext();
export const ProductDetailsContext= createContext();
export const ToggleContext= createContext();
export const ToggleLoginContext= createContext();

const page=1;

function App() {
  const [contentProduct, setContentProduct] = useState([]);
  const [contentServes, setContenServes] = useState([]);
  const [contentOrderServes, setContenOrderServes] = useState([]);
  const [contentOrderProduct, setContenOrderProduct] = useState([]);

  const [toggle, setToggle] = useState();
  const saveToggle = (data) => {
    setToggle(data);
    localStorage.setItem("toggle", JSON.stringify(data));
  };
  const [toggleLogin, setToggleLogin] = useState(false);
  const saveToggleLogin = (data) => {
    setToggleLogin(data);
    localStorage.setItem("toggleLogin", JSON.stringify(data));
  };
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { data: product } = useFetch("/api/v1/products/get-all-products");
  const [orderData, setOrderData] = useState()
  const saveOrderData = (data) => {
    setOrderData(data);
    localStorage.setItem("servesOrderData", JSON.stringify(data));
  };
  const [productOrderData, setProductOrderData] = useState()
  const saveProductOrderData = (data) => {
    setProductOrderData(data);
    localStorage.setItem("ProductOrderData", JSON.stringify(data));
  };
  const savedServesDetails = localStorage.getItem("servesOrder");
  const [servesDetails, setServesDetails] = useState(
    savedServesDetails ? JSON.parse(savedServesDetails) : {
      user_id:"",
      service_id:"",
      selected_day_id:"",
      selected_time:"",
      payment_method:"",
      notes:"",
      address:"",
      building_number:"",
      flat_number:"",
      city:"",
      country:"",
      longitude:"",
      latitude:"",
      service_coupon_id: "",
      discount_percentage: "",
      discount_amount: "",
      price_after_discount: "",
      grand_total:""
  } );
  const saveServesDetails = (data) => {
    setServesDetails(data);
    localStorage.setItem("servesOrder", JSON.stringify(data));
  };


  const savedProductDetails = localStorage.getItem("ProductOrder");
  const [productDetails, setProductDetails] = useState(
    savedProductDetails ? JSON.parse(savedProductDetails) : {
      user_id:"",
      product_id:"",
      selected_day_id:"",
      selected_time:"",
      payment_method:"",
      notes:"",
      address:"",
      building_number:"",
      flat_number:"",
      city:"",
      country:"",
      longitude:"",
      latitude:"",
      product_ids:"",
      product_quantities:"",
      discount_amount:"",
      price_after_discount:"",
      grand_total:"",
      service_coupon_id:"",
      discount_percentage:"",
    });
  

  const saveProductDetails = (data) => {
    setProductDetails(data);
    localStorage.setItem("ProductOrder", JSON.stringify(data));
  };

  const [formData, setFormData] = useState(null);
  const saveFormData = (data) => {
    setFormData(data);
  };
  const [loginFormData, setLoginFormData] = useState(null);
  const saveLoginFormData = (data) => {
    setLoginFormData(data);
  };
  const [location, setLoactiocation] = useState(null);
  const saveLocation = (data) => {
    setFormData(data);
  };
  useEffect(() => {
    if (loginFormData) {
      localStorage.setItem("loginFormData", JSON.stringify(loginFormData));
    }
  }, [loginFormData]);

  useEffect(() => {
    if (servesDetails) {
      localStorage.setItem("servesOrder", JSON.stringify(servesDetails));
    }
  }, [loginFormData]);
  const getPageProduct = async (page) => {
    // console.log(contentProduct);
    const res = await axios.get(
      `https://dashboard.knock-knock.ae/api/v1/products/get-all-products?page=${page}`
    );
    setContentProduct(res?.data?.data?.data);
    console.log(res?.data?.data?.data)
  };

  const getPageServes = async (page) => {
    const res = await axios.get(
      `https://dashboard.knock-knock.ae/api/v1/services/get-all?page=${page}`
    );
    setContenServes(res?.data?.data?.data);
    console.log(res?.data?.data?.data)
  };
  const getOrderServes = async (page) => {
    const res = await axios.get(
      `https://dashboard.knock-knock.ae/api/v1/service_orders/my-orders?page=${page}`
    );
    setContenOrderServes(res?.data?.data?.data);
    console.log(res?.data?.data?.data)
  };
  const getOrderProduct = async (page) => {
    const res = await axios.post(
      `https://dashboard.knock-knock.ae/api/v1/product_orders/my-orders?page=${page}`
    );
    setContenOrderProduct(res?.data?.data?.data);
    console.log(res?.data?.data?.data)
  };
  return (
    <ContextLang.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      <LoginFormDataContext.Provider
        value={{ loginFormData, saveLoginFormData }}
      >
            <LocationContext.Provider
        value={{ location, saveLocation }}
      >
        <FormDataContext.Provider value={{ formData, saveFormData }}>
        <ServesDetailsContext.Provider value={{servesDetails, saveServesDetails}}>
        <ProductDetailsContext.Provider value={{productDetails, saveProductDetails}}>

        <OrderDataContext.Provider value={{orderData, saveOrderData}}>
        <ProductOrderDataContext.Provider value={{productOrderData, saveProductOrderData}}>
        <ToggleContext.Provider value={{toggle, saveToggle}}>
        <ToggleLoginContext.Provider value={{toggleLogin, saveToggleLogin}}>

        
          <div className={selectedLanguage === "ar" ? "App rtl" : "App ltr"}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePageLogin />} />
                {/* <Route path="/home" element={<Homepage />} /> */}
                <Route
                  path="/product"
                  element={
                    <AllProduct
                      getPage={getPageProduct}
                      contentProduct={contentProduct}
                      // product={product?.data}
                    />
                  }
                />
                
                <Route path="product/:productId" element={<ProductDeteils />} />
                <Route
                  path="/serves"
                  element={<Serves contentServes={contentServes} getPage={getPageServes} />}
                />
                <Route path="/serves/:servesId" element={<ServesDetiels />} />
                <Route path="/location" element={<Location />} />
                {/* <Route path="/booking_step2" element={<MainBook2 />} /> */}
                {/* <Route path="/checkout" element={<CheckOutpage />} /> */}
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<SingUp />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/forget_password" element={<ForgetPassword />} />
                <Route path="/change_password" element={<ChangePassword />} />
                <Route path="/reset_password" element={<RestPassword />} />
                <Route path="/profile" element={<ProfilePage />} />

                {/* <Route path="/phone" element={<PhoneNumber />} /> */}
                <Route path="/addaddress" element={<AddAddressPage />} />
                <Route path="/credits" element={<CreditsPage />} />
                <Route path="/send_gift" element={<SendGiftPage />} />
                <Route path="/buy-credit" element={<BuyCreditPage />} />
                <Route path="/privacy_policy" element={<PolicyPage />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/your-order" element={<MyOrderpage contentOrderServes={contentOrderServes} getPageServes={getOrderServes} />} />
                <Route path="/product_order" element={<BookingProductPage contentOrderProduct={contentOrderProduct} getOrderProduct={getOrderProduct} />} />

                <Route path="/credit_card" element={<CreditCardPage />} />
                <Route path="/add_card" element={<AddCard />} />
                {/* <Route path="/booking" element={<BookPage />} /> */}
                <Route path="/cart_shop" element={<CartPage />} />
              </Routes>
            </BrowserRouter>
          </div>
          </ToggleLoginContext.Provider>
          </ToggleContext.Provider>
          </ProductOrderDataContext.Provider>
          </OrderDataContext.Provider>
          </ProductDetailsContext.Provider>
          </ServesDetailsContext.Provider>
        </FormDataContext.Provider>
        </LocationContext.Provider>
      </LoginFormDataContext.Provider>
    </ContextLang.Provider>
  );
}

export default App;
