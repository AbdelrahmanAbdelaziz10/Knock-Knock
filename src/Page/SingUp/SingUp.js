import React from 'react'
import '../Login/Login.css'
import logo from '../../images/Logo.png'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
export const SingUp = () => {
    const {t,i18n}=useTranslation()

  return (
    <div class="login singup">
        <div class="container">
            <div class="row login_main mt-4">
                <Col xs={10} lg={5} md={8} sm={10} >
                    <form class="row form g-3  mt-3">
                        <i class="fa-solid fa-x"></i>
                        <div class="form_head text-center mb-3">
                            <img class="" src={logo} alt="" />
                            <h4>{t("singup")}</h4>
                        </div>
                        <div class="col-lg-12 col-md-12 my-lg-2 my-md-2 row media">
                            <div class="col-lg-6 col-md-6 pl1">
                                <input type="text" class="form-control" id="inputEmail" name="firstname" placeholder={t("personal_fname_placeholder")} />
                            </div>
                            <div class="col-lg-6 col-md-6 pl2">
                                <input type="text" class="form-control" id="inputEmail" name="lastname" placeholder={t("personal_lname_placeholder")} />
                            </div>
        
                        </div>

                        <div class="mb-lg-2 mb-md-2 d-flex">
                            <select class="form-select nationality" aria-label="Default select example">
                                <option selected>Egy +20</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                              <input type="number" class="form-control phone" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t("personal_phone_placeholder")} />

                          </div>
                        <div class="col-md-12 mb-2 p-r">
                            <input type="password" class="form-control" id="inputPassword" name="password" placeholder={t("personal_password_placeholder")} />
                        </div>
                        <div class="col-md-12 mb-2 p-r">
                            <input type="password" class="form-control" id="inputPassword" name="password" placeholder={t("personal_Confirmpassword_placeholder")} />
                        </div>

                        <div class="col-12 submit_btn mt-4">
                            <Link to="/login" type="submit" class="btn mb-4 mx-4 sing_in">{t("singup")}</Link>
                            <p>{t("singup_p")}<Link to="/login" className='link_singup'>{t("login")}</Link></p>

                        </div>
                    </form>
                </Col>
            </div>
        </div>



    </div>
  )
}
