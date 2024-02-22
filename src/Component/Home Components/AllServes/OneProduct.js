import React from 'react'
import { Link } from 'react-router-dom'
import "../AllServes/AllServes.css"
import { Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
const OneProduct = ({img,name,prise,discount,link}) => {
  const {t,i18n}=useTranslation()

  return (
    <div className="card one_Product">
        <div className="card_image_product">
            <img src={img} alt="" />
        </div>
        <div className="card_text_product">
            <p>
            {name}
            </p>
            <h6> {prise}  {t("price")}<span>{discount}</span></h6>
            <Link to={link} className="btn btn-deteils">{t("all_product_product_btn")}</Link>
    </div>
</div>

  )
}

export default OneProduct