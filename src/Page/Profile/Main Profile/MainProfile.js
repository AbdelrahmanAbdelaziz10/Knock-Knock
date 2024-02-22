import React from 'react'
import '../../Login/Login.css'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import avatar from "../../../images/profile.jpg"
import "../Profile.css"
import { MdDelete } from "react-icons/md";
import { i18n } from 'i18next';
import { useTranslation } from 'react-i18next'

export const MainProfile = () => {
    const {t,i18n}=useTranslation()
  return (
    <div className=''>
    <div class=" singup profile">
        <div class="container">
            <div class="row login_main">
                <Col xs={12} lg={5} md={8} sm={12} >
                    <form class="row form ">
                        <i class="fa-solid fa-x"></i>
                        <div class="form_head text-center">
                        <h4>{t("profile")} </h4>
                            <img class="" src={avatar} alt="" />
                        </div>
                        <div class="col-lg-12 col-md-12 my-lg-2 my-md-2 row media">
                            <div class="col-lg-6 col-md-6 pl1">
                                <input type="text" class="form-control" id="inputEmail" name="firstname" placeholder={t("personal_fname_placeholder")} />
                            </div>
                            <div class="col-lg-6 col-md-6 pl2">
                                <input type="text" class="form-control lastName" id="inputEmail" name="lastname" placeholder={t("personal_lname_placeholder")} />
                            </div>
        
                        </div>
                        <div class="col-md-12 mb-3 p-r">
                            <input type="email" class="form-control" id="inputEmail" name="email" placeholder={t("personal_email_placeholder")} />
                        </div>
                        <div class="col-md-12 mb-3 p-r">
                            <input type="password" class="form-control" id="inputPassword" name="password" placeholder={t("personal_password_placeholder")} />
                        </div>
                        <div class="mb-lg-2 mb-md-3 d-flex">
                            <select class="form-select nationality" aria-label="Default select example">
                                <option selected>Egy +20</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                              <input type="number" class="form-control phone" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t("personal_phone_placeholder")} />

                          </div>
                        <Link class="mb-lg-2 mb-md-3 d-flex mt-4 delete_acc" >
                        <MdDelete className='delete'/> <p className="delete_account">{t("personal_delet")} </p>
                          </Link>
                        <div class="col-12 submit_btn mt-4">
                            <button type="submit" class="btn mb-4 mx-4 sing_in">{t("personal_btn")}</button>
                            {/* <p>Already Have an Account? <Link to="" className='link_singup'>Log In</Link></p> */}

                        </div>
                    </form>
                </Col>
            </div>
        </div>



    </div>
    </div>
  )
}
