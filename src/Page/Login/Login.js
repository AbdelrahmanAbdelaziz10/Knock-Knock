import React from 'react'
import logo from '../../images/Logo.png'
import './Login.css'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
const Login = () => {
    const {t,i18n}=useTranslation()

  return (

    <div className="login">

        <div className="container">
            <div className="row login_main">
                <Col xs={10} lg={5} md={8} sm={10} >
                    <form className="row form g-3 mb-5" >
                        <i className="fa-solid fa-x"></i>
                        <div className="form_head text-center mb-2">
                            <img className="" src={logo} alt=""/>
                            <h4> Log In</h4>
                        </div>

                        <div className="col-lg-12 col-md-12 my-3">
                            <input type="email" className="form-control" id="inputEmail" name="Phone" placeholder={t("personal_email_placeholder")} />
                        </div>

                        <div className="col-md-12 p-r">
                            <input type="password" className="form-control" id="inputPassword" name="password" placeholder={t("personal_password_placeholder")}/>
                             {/* <i className="fa fa-eye-slash" onclick="myFunction()"  aria-hidden="true"></i>  */}
                        </div>

                        <div className="row check justify-content-between  mt-4 ">
                            <div className="mb-3 col-6 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">{t("login_check")}</label>
                              </div>
                            <div className="col-6 forget ps-lg-5 ps-md-4">
                                <Link to="" className="forget_password ms-lg-2">
                                {t("login_forget")}
                                </Link>
                            </div>
                        </div>

                        <div className="col-12 submit_btn mt-4">
                            <Link to="/phone" type="submit" className="btn mb-4 mx-4 sing_in">{t("login")}</Link>
                            <p>{t("login_p")} <Link to="/singup" className='link_singup'>{t("singup")}</Link></p>

                        </div>
                    </form>
                </Col>

            </div>
        </div>



    </div>
  )
}

export default Login