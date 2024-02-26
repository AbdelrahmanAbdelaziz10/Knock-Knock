import React, { useState } from "react";
import logo from "../../images/Logo.png";
import "./Login.css";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Login = () => {
  const { t } = useTranslation();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "", // Clear error message when input changes
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!loginData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!loginData.password.trim()) {
      errors.password = "Password is required";
    } else if (loginData.password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("https://dashboard.knock-knock.ae/api/auth/login", loginData);
        console.log(response.data);
        // Handle success response
        alert("Login successful!");
        setLoginData({
          email: "",
          password: "",
        });
      } catch (error) {
        // Handle error response
        console.error("Error submitting form", error);
      }
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row login_main">
          <Col xs={10} lg={5} md={8} sm={10}>
            <form className="row form g-3 mb-5" onSubmit={handelSubmit}>
              <i className="fa-solid fa-x"></i>
              <div className="form_head text-center mb-2">
                <img className="" src={logo} alt="" />
                <h4>{t("login")} </h4>
              </div>

              <div className="col-lg-12 col-md-12 my-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  placeholder={t("personal_email_placeholder")}
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>

              <div className="col-md-12 p-r">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder={t("personal_password_placeholder")}
                />
                {errors.password && <div className="error">{errors.password}</div>}
              </div>

              <div className="row check justify-content-between  mt-4 ">
                <div className="mb-3 col-6 form-check">
                <label className="form-check-label" for="exampleCheck1">
                    {t("login_check")}
                  </label>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />

                </div>
                <div className="col-6 forget ps-lg-5 ps-md-4">
                  <Link to="/forget_password" className="forget_password ms-lg-2">
                    {t("login_forget")}
                  </Link>
                </div>
              </div>

              <div className="col-12 submit_btn mt-4">
                <button type="submit" className="btn mb-4 mx-4 sing_in">
                  {t("login")}
                </button>
                <p>
                  {t("login_p")}{" "}
                  <Link to="/singup" className="link_singup">
                    {t("singup")}
                  </Link>
                </p>
              </div>
            </form>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Login;
