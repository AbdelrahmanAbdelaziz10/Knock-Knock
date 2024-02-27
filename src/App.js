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
export const ContextLang = createContext();
export const FormDataContext = createContext();
export const LoginFormDataContext = createContext();

function App() {
  const [contentProduct, setContentProduct] = useState();
  const [contentServes, setContenServes] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { data: product } = useFetch("/api/v1/products/get-all-products");

  const [formData, setFormData] = useState(null);
  const saveFormData = (data) => {
    setFormData(data);
  };
  const [loginFormData, setLoginFormData] = useState(null);
  const saveLoginFormData = (data) => {
    setLoginFormData(data);
  };
  useEffect(() => {
    if (loginFormData) {
      localStorage.setItem("loginFormData", JSON.stringify(loginFormData));
    }
  }, [loginFormData]);

  const getPageProduct = async (page) => {
    console.log(contentProduct);
    const res = await axios.get(
      `https://dashboard.knock-knock.ae/api/v1/products/get-all-products?page=${page}`
    );
    setContentProduct(res?.data?.data?.data);
  };
  const getPageServes = async (page) => {
    const res = await axios.get(
      `https://dashboard.knock-knock.ae/api/v1/services/get-all?page=${page}`
    );
    setContenServes(res?.data?.data?.data);
    console.log(contentServes);
  };

  return (
    <ContextLang.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      <LoginFormDataContext.Provider
        value={{ loginFormData, saveLoginFormData }}
      >
        <FormDataContext.Provider value={{ formData, saveFormData }}>
          <div className={selectedLanguage === "ar" ? "App rtl" : "App ltr"}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePageLogin />} />
                <Route path="/home" element={<Homepage />} />
                <Route
                  path="/product"
                  element={
                    <AllProduct
                      getPage={getPageProduct}
                      product={product?.data}
                    />
                  }
                />
                <Route path="product/:productId" element={<ProductDeteils />} />
                <Route
                  path="/serves"
                  element={<Serves getPage={getPageServes} />}
                />
                <Route path="/serves/:servesId" element={<ServesDetiels />} />
                {/* <Route path="/location" element={<Location />} /> */}
                {/* <Route path="/booking_step2" element={<MainBook2 />} /> */}
                <Route path="/checkout" element={<CheckOutpage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<SingUp />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/forget_password" element={<ForgetPassword />} />
                <Route path="/change_password" element={<ChangePassword />} />
                <Route path="/reset_password" element={<RestPassword />} />

                <Route path="/phone" element={<PhoneNumber />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/addaddress" element={<AddAddressPage />} />
                <Route path="/credits" element={<CreditsPage />} />
                <Route path="/send_gift" element={<SendGiftPage />} />
                <Route path="/buy-credit" element={<BuyCreditPage />} />
                <Route path="/privacy_policy" element={<PolicyPage />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/your-order" element={<MyOrderpage />} />
                <Route path="/credit_card" element={<CreditCardPage />} />
                <Route path="/add_card" element={<AddCard />} />
                <Route path="/booking" element={<BookPage />} />
                <Route path="/cart_shop" element={<CartPage />} />
              </Routes>
            </BrowserRouter>
          </div>
        </FormDataContext.Provider>
      </LoginFormDataContext.Provider>
    </ContextLang.Provider>
  );
}

export default App;
