import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { FaPlus } from "react-icons/fa";

export const ServesCard = ({img,title,prag,price}) => {
  return (
    <Card className="book_card ">
    <div className='row add_serves'>
      <Col xs={6} lg={3} md={3} sm={6}>
        <div className='serv_img'>
          <img src={img} alt=''/>
        </div>
        </Col>
        <Col xs={6} lg={9} md={9} sm={6}>
        <div className='serv_text'>
        <h6>{title}</h6>
        <p>{prag}</p>
        <span>AED {price}</span>
        <button className=''>Add <FaPlus /> </button>

        </div>
      </Col>
    </div>


    </Card>
  )
}
