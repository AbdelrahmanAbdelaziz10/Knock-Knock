import React, { useContext, useState } from "react";
import "../Login/Login.css";
import logo from "../../images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { FormDataContext } from "../../App";

export const SingUp = () => {
  const { t } = useTranslation();
  const { saveFormData } = useContext(FormDataContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "", // Clear error message when input changes
    });
    setResponseMessage(""); // Clear response message when input changes
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.first_name.trim()) {
      errors.first_name = "first Name is required";
    }
    if (!formData.last_name.trim()) {
      errors.last_name = "last name is required";
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
    if (formData.password !== formData.password_confirmation) {
      errors.password_confirmation = "passwords do not match";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setIsSubmitting(true);

        const response = await axios.post(
          "https://dashboard.knock-knock.ae/api/auth/register",
          formData
        );
        console.log(response.data);
        // Handle success response
        setResponseMessage(response.data.error);
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          password: "",
          password_confirmation: "",
        });
        if (response.data.status) {
          saveFormData(response.data.user);
          navigate("/verify");
        }
      } catch (error) {
        // Handle error response
        console.error("Error submitting form", error);
        setResponseMessage(
          "Failed to register. Please check your inputs and try again."
        );
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
              {responseMessage && (
                <div className="error text-center">{responseMessage}</div>
              )}
              <div className="col-lg-12 col-md-12 my-lg-2 my-md-2 row media">
                <div className="col-lg-6 col-md-6 pl1">
                  <input
                    type="text"
                    name="first_name"
                    className="form-control"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder={t("personal_fname_placeholder")}
                  />
                  {errors.first_name && (
                    <div className="error">{errors.first_name}</div>
                  )}
                </div>
                <div className="col-lg-6 col-md-6 pl2">
                  <input
                    type="text"
                    className="form-control"
                    value={formData.last_name}
                    onChange={handleChange}
                    name="last_name"
                    placeholder={t("personal_lname_placeholder")}
                  />
                  {errors.last_name && (
                    <div className="error">{errors.last_name}</div>
                  )}
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
              <div className="mb-lg-2 mb-md-2">
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
                {errors.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>
              <div className="col-md-12 mb-2 p-r">
                <input
                  type="password"
                  className="form-control"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  name="password_confirmation"
                  placeholder={t("personal_Confirmpassword_placeholder")}
                />
                {errors.password_confirmation && (
                  <div className="error">{errors.password_confirmation}</div>
                )}
              </div>

              <div className="col-12 submit_btn mt-4">
                <button
                  type="submit"
                  className="btn mb-4 mx-4 sing_in"
                  disabled={isSubmitting}
                >
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
