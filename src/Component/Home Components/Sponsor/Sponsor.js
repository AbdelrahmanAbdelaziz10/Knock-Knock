import React from 'react'
import './Sponsor.css'
import logo from '../../../images/K.png'
import { Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
const Sponsor = () => {
  const {t,i18n} = useTranslation()

  return (
    <>
    <section class="Justlife_protects py-5">
        <div class="container row justify-content-center">
                <Col xs={9} lg={9} md={9} sm={9}  class="sponsor_text my-4">
                    <h2> {t("home_sponsor_title")} </h2>
                    <p>{t("home_sponsor_p")}</p>
                </Col>

                <Col xs={2} lg={3} md={2} sm={2} class="sponser">
                    <img src={logo} alt=""/>
                </Col>


        </div>
    </section>

    </>
  )
}

export default Sponsor