import React, { useContext } from "react";
import "../../Login/Login.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../../../images/profile.jpg";
import "../Profile.css";
import { MdDelete } from "react-icons/md";
import { i18n } from "i18next";
import { useTranslation } from "react-i18next";
import { LoginFormDataContext } from "../../../App";

export const MainProfile = () => {
    const { t } = useTranslation();
    const loginFormData = JSON.parse(localStorage.getItem('loginFormData')) ;
  
    return (
      <div className="profile">
        <div class=" singup profile">
          <div class="container">
            <div class="row login_main">
              <Col xs={12} lg={5} md={8} sm={12}>
                <form class="row form ">
                  <i class="fa-solid fa-x"></i>
                  <div class="form_head text-center">
                    <h4>{t("profile")} </h4>
                    <img class="" src={avatar} alt="" />
                  </div>
                  <div class="col-lg-12 col-md-12 my-lg-2 my-md-2 row media">
                    <div class="col-lg-6 col-md-6 pl1">
                      <input
                        type="text"
                        class="form-control"
                        id="inputEmail"
                        name="firstname"
                        placeholder={loginFormData.first_name }
                      />
                    </div>
                    <div class="col-lg-6 col-md-6 pl2">
                      <input
                        type="text"
                        class="form-control lastName"
                        id="inputEmail"
                        name="lastname"
                        placeholder={loginFormData.last_name }
                      />
                    </div>
                  </div>
                  <div class="col-md-12 mb-3 p-r">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail"
                      name="email"
                      placeholder={loginFormData.email }
                    />
                  </div>
                  <div class="col-md-12 mb-3 p-r">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword"
                      name="password"
                      placeholder="*** *** ***"
                    />
                  </div>
                  <div class="mb-lg-2 mb-md-3 d-flex">
                    <input
                      type="number"
                      class="form-control phone"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder={loginFormData.phone }
                    />
                  </div>
                  <Link class="mb-lg-2 mb-md-3 d-flex mt-4 delete_acc">
                    <MdDelete className="delete" />{" "}
                    <p className="delete_account">{t("personal_delet")} </p>
                  </Link>
                  <div class="col-12 submit_btn mt-4">
                    <button type="submit" class="btn mb-4 mx-4 sing_in">
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
  
