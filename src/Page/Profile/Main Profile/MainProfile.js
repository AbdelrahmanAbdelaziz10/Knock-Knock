import React, { useContext, useEffect, useState } from "react";
import "../../Login/Login.css";
import { Alert, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../../../images/profile.jpg";
import "../Profile.css";
import { MdDelete } from "react-icons/md";
import { i18n } from "i18next";
import { useTranslation } from "react-i18next";
import { FormDataContext, LoginFormDataContext } from "../../../App";
import axios from "axios";

export const MainProfile = () => {
  const { t } = useTranslation();
  const loginFormData = JSON.parse(localStorage.getItem("loginFormData"));
  const { saveFormData } = useContext(FormDataContext);

  const [formData, setFormData] = useState({
    user_id: loginFormData.id,
    first_name: loginFormData.first_name,
    last_name: loginFormData.last_name,
    email: loginFormData.email,
    phone: loginFormData.phone,
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState({});
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
  const validationProfileForm = () => {
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
    if (validationProfileForm()) {
      try {
        const response = await axios.post(
          "https://dashboard.knock-knock.ae/api/v1/profiles/update",
          formData
        );
        // Handle success response
        setResponseMessage(response.data.message);
        if (response.data.status) {
          // saveFormData(response.data.user);
          saveFormData(response.data.user);
        }
      } catch (error) {
        // Handle error response
        console.error("Error submitting form", error);
        setResponseMessage(
          "Failed to register. Please check your inputs and try again."
        );
      }
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // console.log(formData);
  return (
    <div className="profile">
      <div className=" singup profile">
        <div className="container">
          <div className="row login_main">
            <Col xs={12} lg={5} md={8} sm={12}>
              <form className="row form " onSubmit={handelSubmit}>
                <i className="fa-solid fa-x"></i>
                <div className="form_head text-center">
                  <h4>{t("profile")} </h4>
                  <img className="" src={`https://dashboard.knock-knock.ae/${loginFormData.avatar}`} alt="" />
                </div>
                <div className="col-lg-12 col-md-12 my-lg-2 my-md-2 row media">
                {responseMessage && (
                <Alert variant="success " className=" text-center">{responseMessage}</Alert>
              )}
                  <div className="col-lg-6 col-md-6 pl1">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      placeholder={loginFormData.first_name}
                    />
                    {errors.first_name && (
                      <Alert variant="danger" className="">{errors.first_name}</Alert>
                    )}
                  </div>
                  <div className="col-lg-6 col-md-6 pl2">
                    <input
                      type="text"
                      className="form-control lastName"
                      id="inputEmail"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      placeholder={loginFormData.last_name}
                    />
                    {errors.last_name && (
                      <Alert variant="danger" className="">{errors.last_name}</Alert>
                    )}
                  </div>
                </div>
                <div className="col-md-12 mb-3 p-r">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={loginFormData.email}
                  />
                  {errors.email && <Alert variant="danger" className="">{errors.email}</Alert>}
                </div>
                <div className="col-md-12 mb-3 p-r">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="*** *** ***"
                  />
                  {errors.password && (
                    <Alert variant="danger" className="">{errors.password}</Alert>
                  )}
                </div>
                <div className="col-md-12 mb-3 p-r">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    placeholder="*** *** ***"
                  />
                  {errors.password_confirmation && (
                    <Alert variant="danger" className="">{errors.password_confirmation}</Alert>
                  )}
                </div>
                <div className="mb-lg-2 mb-md-3 d-flex">
                  <input
                    type="number"
                    className="form-control phone"
                    id="exampleInputEmail1"
                    value={formData.phone}
                    onChange={handleChange}
                    name="phone"
                    placeholder={loginFormData.phone}
                  />
                  {errors.phone && <Alert variant="danger" className="">{errors.phone}</Alert>}
                </div>
                {/* <Link className="mb-lg-2 mb-md-3 d-flex mt-4 delete_acc">
                  <MdDelete className="delete" />{" "}
                  <p className="delete_account">{t("personal_delet")} </p>
                </Link> */}
                <div className="col-12 submit_btn mt-4">
                  <button type="submit" className="btn mb-4 mx-4 sing_in">
                    {t("personal_btn")}
                  </button>
                </div>
              </form>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
};
