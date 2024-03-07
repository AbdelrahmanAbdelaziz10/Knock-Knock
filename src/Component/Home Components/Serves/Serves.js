import React from 'react'
import './Serves.css'
import clean from '../../../images/cleaning (1).svg'
import technical from '../../../images/technical-person.svg'
import air_condition from '../../../images/air-conditioner.svg'
import barber from '../../../images/barber.svg'
import fitness from '../../../images/fitness.svg'
import pest from '../../../images/pest-control.svg'
import baby from "../../../images/baby-worker.svg"
import t_person from "../../../images/technical-person.svg"
import air from "../../../images/air-conditioner.svg"
import { FaVanShuttle } from "react-icons/fa6";
import { Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { ServesRow } from '../AllServes/ServesRow'

export const Serves = () => {
    const {t,i18n} = useTranslation()

  return (
    <section className="Servies allservice py-5">
        <div className="container">
            <div className="row title mb-4">
                <h4 className=" text-center">
                {t("home_serve_title")}
                </h4>
                <p className="text-center">
                {t("home_serve_p")}
                </p>
            </div>
            <div className="row servies_div">
                <Col xs={4} lg={2} md={3} sm={4} className="servies_card col-lg-2 col-md-3">
                    <div className="card_img ">
                        <img src={clean} alt=""/>
                    </div>
                    <div className="card_head">
                        <p>  
                        {t("home_serve_title1")}
                        </p>
                    </div>
                </Col>
                <Col xs={4} lg={2} md={3} sm={4} className="servies_card col-lg-2 col-md-3">
                    <div className="card_img ">
                        <img src={technical} alt="technical person"/>
                    </div>
                    <div className="card_head">
                        <p> 
                        {t("home_serve_title2")}
                        </p>
                    </div>
                </Col>
                <Col xs={4} lg={2} md={3} sm={4} className="servies_card col-lg-2 col-md-3">
                    <div className="card_img ">
                    <FaVanShuttle className="fa-solid fa-truck"/>
                    </div>
                    <div className="card_head">
                        <p>
                        {t("home_serve_title3")}
                        </p>
                    </div>
                </Col>
                <Col xs={4} lg={2} md={3} sm={4} className="servies_card col-lg-2 col-md-3">
                    <div className="card_img ">
                        <img src={air_condition} alt=""/>
                    </div>
                    <div className="card_head">
                        <p>
                        {t("home_serve_title4")}
                        </p>
                    </div>
                </Col>
                <Col xs={4} lg={2} md={3} sm={4} className="servies_card col-lg-2 col-md-3">
                    <div className="card_img ">
                        <img src={barber} alt=""/>
                    </div>
                    <div className="card_head">
                        <p>
                        {t("home_serve_title5")}
                        </p>
                    </div>
                </Col>
                <Col xs={4} lg={2} md={3} sm={4} className="servies_card col-lg-2 col-md-3">
                    <div className="card_img ">
                        <img src={fitness} alt=""/>
                    </div>
                    <div className="card_head">
                        <p>
                        {t("home_serve_title6")}
                        </p>
                    </div>
                </Col>
                <Col xs={4} lg={2} md={3} sm={4} className="servies_card col-lg-2 col-md-3">
                    <div className="card_img ">
                        <img src={pest} alt=""/>
                    </div>
                    <div className="card_head">
                        <p>
                        {t("home_serve_title7")}
                        </p>
                    </div>
                </Col>
                <Col xs={4} lg={2} md={3} sm={4} className="servies_card col-lg-2 col-md-3">
                    <div className="card_img ">
                        <img src={baby} alt="baby seater"/>
                    </div>
                    <div className="card_head">
                        <p>
                        {t("home_serve_title8")}
                        </p>
                    </div>
                </Col>
                <Col xs={4} lg={2} md={3} sm={4} className="servies_card col-lg-2 col-md-3">
                    <div className="card_img ">
                        <img src={t_person} alt=""/>
                    </div>
                    <div className="card_head">
                        <p>
                        {t("home_serve_title9")}
                        </p>
                    </div>
                </Col>
                <Col xs={4} lg={2} md={3} sm={4} className="servies_card col-lg-2 col-md-3">
                    <div className="card_img ">
                        <img src={air} alt=""/>
                    </div>
                    <div className="card_head">
                        <p>
                        {t("home_serve_title10")}
                        </p>
                    </div>
                </Col>
            </div>
            <ServesRow title={t("home_category3")} link={"/product"} className="productRow " />

        </div>
    </section>  )
}
