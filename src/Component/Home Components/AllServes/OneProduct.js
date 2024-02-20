import React from 'react'
import { Link } from 'react-router-dom'
import "../AllServes/AllServes.css"
import { Col } from 'react-bootstrap'
const OneProduct = ({img,name,prise,discount,link}) => {
  return (
    <div className="card one_Product">
        <div className="card_image_product">
            <img src={img} alt="" />
        </div>
        <div className="card_text_product">
            <p>
            {name}
            </p>
            <h6>AED {prise} <span>{discount}</span></h6>
            <Link to={link} className="btn btn-deteils">Details</Link>
    </div>
</div>

  )
}

export default OneProduct