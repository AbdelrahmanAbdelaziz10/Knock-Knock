import React, { useState } from "react";
import "../Login/Login.css";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from "axios";

export const SingUp = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
     setErrors({
      ...errors,
      [e.target.name]: "", // Clear error message when input changes
    }); 
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.fname.trim()) {
      errors.fname = "first Name is required";
    }
    if (!formData.lname.trim()) {
      errors.lname = "last name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "last is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "invalid required";
    }
    if (!formData.phone.trim()) {
      errors.phone = "last is required";
    }
    if (!formData.password.trim()) {
      errors.password = "last is required";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "passwords do not match";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setIsSubmitting(true);
  
        const response = await axios.post("https://dashboard.knock-knock.ae/api/auth/register", formData);
        console.log(response.data);
        // Handle success response
        alert("Registration successful!");
        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        // Handle error response
        console.error("Error submitting form", error);
        alert("Failed to register. Please check your inputs and try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="login singup">
      <div className="container">
        <div className="row login_main mt-4">
          <Col xs={10} lg={5} md={8} sm={10}>
            <form className="row form g-3 mt-3" onSubmit={handelSubmit}>
              <i className="fa-solid fa-x"></i>
              <div className="form_head text-center mb-3">
                <img className="" src={logo} alt="" />
                <h4>{t("singup")}</h4>
              </div>
              <div className="col-lg-12 col-md-12 my-lg-2 my-md-2 row media">
                <div className="col-lg-6 col-md-6 pl1">
                  <input
                    type="text"
                    name="fname"
                    className="form-control"
                    value={formData.fname}
                    onChange={handleChange}
                    placeholder={t("personal_fname_placeholder")}
                  />
                  {errors.fname && <div className="error">{errors.fname}</div>}
                </div>
                <div className="col-lg-6 col-md-6 pl2">
                  <input
                    type="text"
                    className="form-control"
                    value={formData.lname}
                    onChange={handleChange}
                    name="lname"
                    placeholder={t("personal_lname_placeholder")}
                  />
                  {errors.lname && <div className="error">{errors.lname}</div>}
                </div>
              </div>
              <div className="col-md-12 mb-2 p-r">
                <input
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  placeholder={t("personal_email")}
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="mb-lg-2 mb-md-2 d-flex">
                <input
                  type="number"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  name="phone"
                  placeholder={t("personal_phone_placeholder")}
                />
                {errors.phone && <div className="error">{errors.phone}</div>}
              </div>
              <div className="col-md-12 mb-2 p-r">
                <input
                  type="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                  placeholder={t("personal_password_placeholder")}
                />
                {errors.password && <div className="error">{errors.password}</div>}
              </div>
              <div className="col-md-12 mb-2 p-r">
                <input
                  type="password"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  name="confirmPassword"
                  placeholder={t("personal_Confirmpassword_placeholder")}
                />
                {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
              </div>

              <div className="col-12 submit_btn mt-4">
                <button type="submit" className="btn mb-4 mx-4 sing_in" disabled={isSubmitting}>
                  {t("singup")}
                </button>
                <p>
                  {t("singup_p")}
                  <Link to="/login" className="link_singup">
                    {t("login")}
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

export default SingUp;
